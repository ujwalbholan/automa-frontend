"use client";

import React, { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useNodeConnections } from "../../../../../../../components/providers/connections-provider";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  onCreateNodesEdges,
  onFlowPublish,
} from "../../../_actions/workflow-connections";

type Props = {
  children: React.ReactNode;
  edges: { target: string }[]; // Add more properties as needed
  nodes: { id: string; type: string }[]; // Add more properties as needed
};

const FlowInstance = ({ children, edges, nodes }: Props) => {
  const pathname = usePathname();
  const [isFlow, setIsFlow] = useState<string[]>([]);
  const nodeConnection = useNodeConnections(); 

  const onAutomateFlow = useCallback(() => {
    const targetIds = new Set(edges.map((edge) => edge.target));
    const flows = nodes
      .filter((node) => targetIds.has(node.id))
      .map((node) => node.type);

    setIsFlow(flows);
  }, [edges, nodes]);

  const onFlowAutomation = useCallback(async () => {
    const workflowId = pathname.split("/").pop();
    if (!workflowId) return;

    const flow = await onCreateNodesEdges(
      workflowId,
      JSON.stringify(nodes),
      JSON.stringify(edges),
      JSON.stringify(isFlow)
    );

    if (flow) {
      toast.message("Flow saved successfully!");
    }
  }, [nodeConnection]);

  const onPublishWorkflow = useCallback(async () => {
    const workflowId = pathname.split("/").pop();
    if (!workflowId) return;

    const response = await onFlowPublish(workflowId, true);
    if (response) {
      toast.message(response);
    }
  }, [pathname]);

  useEffect(() => {
    onAutomateFlow();
  }, [edges, nodes, onAutomateFlow]);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-3 p-4">
        <Button onClick={onFlowAutomation} disabled={isFlow.length < 1}>
          Save
        </Button>
        <Button onClick={onPublishWorkflow} disabled={isFlow.length < 1}>
          Publish
        </Button>
      </div>
      {children}
    </div>
  );
};

export default FlowInstance;
