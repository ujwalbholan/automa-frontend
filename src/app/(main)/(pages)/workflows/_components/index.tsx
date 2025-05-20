import React from "react";
import Workflow from "./workflow";
// import { onGetWorkflows } from "../_actions/workflow-connections";
// import MoreCredits from "./more-creadits";

// type Props = object;

const Workflows = async () => {
  //   const workflows = await onGetWorkflows();
  return (
    <div className="relative flex flex-col gap-4">
      <section className="flex flex-col m-2">
        {/* <MoreCredits /> */}
        {/* {workflows?.length ? (
          workflows.map((flow) => <Workflow key={flow.id} {...flow} />)
        ) : (
          <div className="mt-28 flex text-muted-foreground items-center justify-center">
            No Workflows
          </div>
        )} */}
        <Workflow
          description="create a task workflow"
          id="87654"
          name="automate"
          publish={false}
        ></Workflow>
      </section>
    </div>
  );
};

export default Workflows;
