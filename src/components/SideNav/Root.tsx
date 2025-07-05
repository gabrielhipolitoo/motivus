import { SideBarProvider } from "@/context/SideBarContext/context";
import React, { ReactNode } from "react";

export default function Root({ children }: { children: ReactNode }) {
  return <SideBarProvider>{children}</SideBarProvider>;
}
