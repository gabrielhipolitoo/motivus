"use client";
import Button from "@/components/Button/Button";
import { SideNav } from "@/components/SideNav";
import { privateRoutes } from "@/router/routes";
import {
  faBezierCurve,
  faBuilding,
  faClipboard,
  faGear,
  faHome,
  faLayerGroup,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { faSignOut } from "@fortawesome/free-solid-svg-icons/faSignOut";
import { AuthOptions, DefaultUser, NextAuthOptions } from "next-auth";
import { memo, ReactElement, useState } from "react";

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
  console.log(session);

  const mappedRoutes = () => {
    const routes: ReactElement[] = [];
    console.log(routes);
    const verify = privateRoutes.map(({ role, path, pathname }) => {
      if (role === session?.permission) {
        pathname.map((key) => {
          routes.push(<Button key={key} collapsed={collapsed} value={key} />);
          console.log(key);
        });
      }
    });

    return routes.flat() as ReactElement[];
  };

  const verify = privateRoutes.filter(
    ({ role, path }) => role === session?.permission && path
  );
  console.log(verify[0].pathname);
  return (
    <SideNav.wrapper active={collapsed}>
      <SideNav.profiler />
      <SideNav.links>{mappedRoutes()}</SideNav.links>
      <button onClick={() => setCollapsed(!collapsed)}>Press</button>
    </SideNav.wrapper>
  );
}
