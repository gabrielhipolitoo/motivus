import React, { ReactNode } from "react";

type SideBarGroup = {
  children: ReactNode;
};

export default function SideBarGroup({ children }: SideBarGroup) {
  return <section className="w-full">{children}</section>;
}
