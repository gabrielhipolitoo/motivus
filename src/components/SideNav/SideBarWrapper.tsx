import { workSans } from "@/utils/fonts";
import React, { HtmlHTMLAttributes, ReactNode } from "react";

type SideBarWrapperProps = {
  children: ReactNode;
  active: boolean;
};

export default function SideBarWrapper({
  active,
  children,
}: SideBarWrapperProps) {
  return (
    <section
      className={
        workSans.className +
        ` ${active ? "w-[250px]" : "w-[100px]"} 
        gap-[30px]
        flex flex-col
        p-2 items-center
        h-full bg-[#181918]
        transition-all
      overflow-hidden`
      }
    >
      {children}
    </section>
  );
}
