import { SideBarProvider } from "@/context/SideBarContext/context";
import { ReactNode } from "react";
import AuthProvider from "../AuthProvider/AuthProvider";
import { DrawerProvider } from "@/context/DrawerContext";
type ContainerProps = {
  position?: "center";
  children: ReactNode;
};

export const Container = ({ children, position }: ContainerProps) => {
  return (
    <AuthProvider>
      <DrawerProvider>
        <section
          className={` flex flex-col  p-4   w-full h-full bg-[#EDEDED] 
          ${position === "center" ? "justify-center items-center" : ""}
          `}
        >
          {children}
        </section>
      </DrawerProvider>
    </AuthProvider>
  );
};
