import React, { HtmlHTMLAttributes, ReactNode } from "react";

type SideBarWrapperProps = {
  children: ReactNode;
};

export default function SideBarWrapper({ children }: SideBarWrapperProps) {
  return (
    <section className="w-[120px] flex flex-col justify-between items-center p-2  h-full bg-[#181918] overflow-hidden hover:w-[300px]">
      {children}
    </section>
  );
}
