import { Calender } from "@/components/Calender";
import { listDays } from "@/utils/date/day";
import React from "react";

export default function UiCalender() {
  return (
    <Calender.content>
      <Calender.header />
      <Calender.days days={listDays} />
    </Calender.content>
  );
}
