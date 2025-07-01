'use client'
import { SideBarContextType } from "@/types/SideBarContext";
import { createContext, ReactNode, useState } from "react";

const SideBarContext = createContext({} as SideBarContextType);

const SideBarProvider = ({ children }: { children: ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <SideBarContext.Provider  value={{ collapsed, setCollapsed }}>
      {children}
    </SideBarContext.Provider>
  );
};

export { SideBarProvider, SideBarContext };
