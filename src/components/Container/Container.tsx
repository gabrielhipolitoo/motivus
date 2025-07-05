import { SideBarProvider } from "@/context/SideBarContext/context";
import React, { ReactNode, Suspense } from "react";
type ContainerProps = {
  position?: "center";
  children: ReactNode;
};

export const Container = ({ children, position }: ContainerProps) => {
  return (
    <SideBarProvider>
      <section
        className={`grid grid-cols-2 grid-rows-4 w-full h-full bg-[#EDEDED] 
        ${position === "center" ? "justify-center items-center" : ""}
        `}
      >
        <Suspense fallback="loading">{children}</Suspense>
      </section>
    </SideBarProvider>
  );
};
