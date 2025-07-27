import { SideBarProvider } from "@/context/SideBarContext/context";
import { ReactNode } from "react";
import AuthProvider from "../AuthProvider/AuthProvider";
type ContainerProps = {
  position?: "center";
  children: ReactNode;
};

export const Container = ({ children, position }: ContainerProps) => {
  return (
    <AuthProvider>
      <section
        className={` flex flex-col  p-4   w-full h-full bg-[#EDEDED] 
          ${position === "center" ? "justify-center items-center" : ""}
          `}
      >
        {children}
      </section>
    </AuthProvider>
  );
};
