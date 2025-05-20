"use client";

import CustomModal from "@/components/[global]/custom-modal";
import Workflowform from "@/components/from/workflow-form";
import { Button } from "@/components/ui/button";
// import { useBilling } from '@/providers/billing-provider'
import { useModal } from "@/components/providers/model-provider";
import { Plus } from "lucide-react";
import React from "react";

// type Props = object;

const WorkflowButton = () => {
  const { setOpen } = useModal();
  // const { credits } = useBilling();

  const handleClick = () => {
    setOpen(
      <CustomModal
        title="Create a Workflow Automation"
        subheading="Workflows are a powerfull that help you automate tasks."
      >
        <Workflowform />
      </CustomModal>
    );
  };

  return (
    <Button
      size={"icon"}
      onClick={handleClick}
      // {...(credits !== "0"
      //   ? {
      //       onClick: handleClick,
      //     }
      //   : {
      //       disabled: true,
      //     })}
    >
      <Plus />
    </Button>
  );
};

export default WorkflowButton;
