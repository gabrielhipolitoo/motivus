import React, { ReactNode, Suspense } from "react";
type ContainerProps = {
  position?: "center";
  children: ReactNode;
};

export const Container = ({ children, position }: ContainerProps) => {
  return (
    <section
      className={`flex flex-c w-full h-full bg-[#EDEDED] 
        ${position === "center" ? "justify-center items-center" : ""}
        
        `}
    >
      <Suspense fallback="loading">{children}</Suspense>
    </section>
  );
};
