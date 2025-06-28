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
      className={` ${
        active ? "w-[100px]" : "w-[300px]"
      }  flex flex-col justify-between p-2  h-full bg-[#181918] overflow-hidden`}
    >
      {children}
    </section>
  );
}
