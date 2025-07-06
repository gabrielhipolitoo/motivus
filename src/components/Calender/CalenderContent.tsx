import { getDaysInMonth } from "@/utils/date/monthsCurrently";
import React, { ReactNode } from "react";

export default function CalenderContent({ children }: { children: ReactNode }) {
  return (
    <div className="p-2 flex flex-col justify-between w-[550px] h-[450px] border-2 rounded-2xl border-[#CECECE]">
      {children}
    </div>
  );
}
