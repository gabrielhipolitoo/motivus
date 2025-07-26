"use client";
import useControllerCalender from "@/hook/useControllerCalender";
import React from "react";

export default function CalenderDays() {
  const { renderCalender } = useControllerCalender();

  return (
    <div className=" h-full l grid grid-cols-7 gap-4 text-center text-gray-400">
      {renderCalender()}
    </div>
  );
}
