"use client";
import Button from "@/components/Button/Button";
import { SideNav } from "@/components/SideNav";
import {
  faBezierCurve,
  faClipboard,
  faGear,
  faHome,
  faLayerGroup,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { faSignOut } from "@fortawesome/free-solid-svg-icons/faSignOut";
import { useState } from "react";

export default function SideBar() {
  const [active, setActive] = useState(true);

  return (
    <SideNav.wrapper active={active}>
      <SideNav.profiler />
      <SideNav.links>
        <Button icon={faHome} active={active} value={"Dashboard"} />
        <Button icon={faLayerGroup} active={active} value={"Desenvolvimento"} />
        <Button icon={faClipboard} active={active} value={"Conformidades"} />
        <Button
          icon={faBezierCurve}
          active={active}
          value={"Rastreabilidade"}
        />
        <Button icon={faUserPlus} active={active} value={"companhias"} />
        <Button icon={faGear} active={active} value={"Configurações"} />
        <Button icon={faSignOut} active={active} value={"Sair"} />
      </SideNav.links>
    </SideNav.wrapper>
  );
}
