import { SideBarContext } from "@/context/SideBarContext/context";
import { workSans } from "@/utils/fonts";
import React, { ReactNode, useContext } from "react";

type SideBarWrapperProps = {
  children: ReactNode;
};

export default function SideBarWrapper({ children }: SideBarWrapperProps) {
  const { collapsed } = useContext(SideBarContext);

  return (
    <section
      className={
        workSans.className +
        ` ${collapsed ? "w-[270px]" : "w-[100px]"} 
        gap-[50px]
        relative
        flex flex-col
        p-2 items-center
        h-full bg-[#181918]
        transition-all
        `
      }
    >
      {children}
    </section>
  );
}
