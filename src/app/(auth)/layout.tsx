import React from "react";
// import Login from "./login/page";
// import Signup from "./signup/page";
// import { Popover, PopoverTrigger } from "@/components/ui/popover";
// import { BackgroundBeams } from "@/components/ui/background-beams";

type Props = { children: React.ReactNode };

const Layout = (props: Props) => {
  return (
    <div className="flex overflow-hidden h-screen">
      {/* <BackgroundBeams></BackgroundBeams> */}
      {props.children}
    </div>
  );
};

export default Layout;
