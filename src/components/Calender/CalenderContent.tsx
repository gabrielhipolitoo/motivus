import { getDaysInMonth } from "@/utils/date/monthsCurrently";
import React, { ReactNode } from "react";

export default function CalenderContent({ children }: { children: ReactNode }) {
  return (
    <div className="p-2 flex item flex-col w-[400px]  h-[370px] border-2 rounded-2xl border-[#CECECE]">
      {children}
    </div>
  );
}
