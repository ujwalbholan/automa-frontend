import React from "react";
import WorkflowButton from "./_components/WorkflowButton";
import Workflows from "./_components/index";

const Workflow = () => {
  return (
    <div className="flex flex-col gap-4 relative">
      <h1
        className="text-4xl sticky top-0 z-[10] p-6 bg-background/50 backdrop-blur-lg 
      flex justify-between items-center border-b"
      >
        Workflow
        <WorkflowButton />
      </h1>
      <Workflows></Workflows>
      <Workflows></Workflows>
      <Workflows></Workflows>
      <Workflows></Workflows>
      <Workflows></Workflows>
    </div>
  );
};

export default Workflow;
