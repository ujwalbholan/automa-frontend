import React from "react";

type Props = { children: React.ReactNode };

const Layout = ({ children }: Props) => {
  return (
    <div
      className="border-l-[1px] border-t-[1px] pb-20 h-screen rounded-l
    border-muted-foreground/20 overflow-scroll no-scrollbar "
    >
      {children}
    </div>
  );
};

export default Layout;
