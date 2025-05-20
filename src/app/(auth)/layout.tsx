import React from "react";
// import Login from "./login/page";
// import Signup from "./signup/page";
// import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Toaster } from "@/components/ui/sonner";
import { BackgroundBeams } from "@/components/ui/background-beams";

type Props = { children: React.ReactNode };

const Layout = (props: Props) => {
  return (
    <div className="flex overflow-hidden h-screen">
      <Button className="m-2 p-2 font-bold">
        <Link href={"/"}>Home</Link>{" "}
      </Button>
      <div className="-z-30">
        <BackgroundBeams></BackgroundBeams>
      </div>
      {props.children}
      <Toaster></Toaster>
    </div>
  );
};

export default Layout;
