import { useEditor } from "@/components/providers/editor-Provider";
import { Handle, HandleProps } from "@xyflow/react";
import React, { CSSProperties, use } from "react";

type Props = HandleProps & { style?: CSSProperties };

const selector = (s: any) => ({
  nodeInternals: s.nodeInternals,
  edges: s.edges,
});

const CustomHandle = (props: Props) => {
  const { state } = useEditor();

  return (
    <Handle
      {...props}
      isValidConnection={(e) => {
        const sourcesFromHandleInState = state.editor.edges.filter(
          (edge) => edge.source === e.source
        ).length;
        const sourceNode = state.editor.elements.find(
          (node) => node.id === e.source
        );
        //target
        const targetFromHandleInState = state.editor.edges.filter(
          (edge) => edge.target === e.target
        ).length;

        if (targetFromHandleInState === 1) return false;
        if (sourceNode?.type === "Condition") return true;
        if (sourcesFromHandleInState < 1) return true;
        return false;
      }}
      className="!-bottom-2 !h-2 !w-2 dark:bg-neutral-800"
    />
  );
};

export default CustomHandle;
