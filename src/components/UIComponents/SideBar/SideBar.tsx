"use client";
import Button from "@/components/Link/Button";
import { SideNav } from "@/components/SideNav";
import { privateRoutes, Role } from "@/router/routes";
import { Session } from "next-auth";

import { ReactElement } from "react";
import { User } from "../../../../@types/next-auth";

export default function SideBar({ session }: User) {
  const { user } = session;
  const { role, name } = user;

  const mappedRoutes = () => {
    const routes: ReactElement[] = [];
    privateRoutes.map(({ authorized, key, path, icon }) => {
      if (authorized.includes(role)) {
        routes.push(<Button key={key} value={key} icon={icon} path={path} />);
      }
    });
    return routes.flat() as ReactElement[];
  };

  return (
    <SideNav.root>
      <SideNav.wrapper>
        <SideNav.profiler name={name} />
        <SideNav.links>
          <SideNav.toggle />
          {mappedRoutes()}
        </SideNav.links>
      </SideNav.wrapper>
    </SideNav.root>
  );
}
