"use client";
import Button from "@/components/Link/Button";
import { SideNav } from "@/components/SideNav";
import { privateRoutes, Role } from "@/router/routes";

import { ReactElement, useContext, useState } from "react";

export default function SideBar({
  session,
}: {
  session: {
    email: string;
    name: string;
    permission: string;
  } | null;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const permission = session?.permission as Role;

  const mappedRoutes = () => {
    const routes: ReactElement[] = [];
    const verify = privateRoutes.map(({ authorized, key, path, icon }) => {
      if (authorized.includes(permission)) {
        routes.push(<Button key={key} value={key} icon={icon} path={path} />);
      }
    });
    return routes.flat() as ReactElement[];
  };

  return (
    <SideNav.wrapper>
      <SideNav.profiler />
      <SideNav.links>
        <SideNav.toggle />
        {mappedRoutes()}
      </SideNav.links>
    </SideNav.wrapper>
  );
}
