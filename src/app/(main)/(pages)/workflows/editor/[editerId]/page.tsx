import EditorProvider from "@/components/providers/editor-Provider";
import { ConnectionsProvider } from "@/components/providers/connections-provider";
import React from "react";
import EditorCanvas from "./_components/editor-canvas";

const page = () => {
  return (
    <div className="h-full">
      <EditorProvider>
        <ConnectionsProvider>
          <EditorCanvas></EditorCanvas>
        </ConnectionsProvider>
      </EditorProvider>
    </div>
  );
};

export default page;
