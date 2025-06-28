"use client";
import Button from "@/components/Button/Button";
import { SideNav } from "@/components/SideNav";
import { faAdjust } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function SideBar() {
  const [active, setActive] = useState(true);

  return (
    <SideNav.wrapper active={active}>
      <SideNav.profiler />
      <SideNav.links>
        <Button icon={faAdjust} value={"teste"} />
      </SideNav.links>
    </SideNav.wrapper>
  );
}
