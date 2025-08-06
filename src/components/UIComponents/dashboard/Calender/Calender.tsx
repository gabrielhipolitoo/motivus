'use client'
import { Calender } from "@/components/Calender";
import { useDrawer } from "@/context/DrawerContext";
import { listDays } from "@/utils/date/day";
import React from "react";

export default function UiCalender() {
  const { openDrawer } = useDrawer();
  return (
    <Calender.content>
      <button onClick={() => openDrawer("inital-production")}>
        Abrir modal
      </button>
      <Calender.header />
      <Calender.days days={listDays} />
    </Calender.content>
  );
}
