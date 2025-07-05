import React, { ReactNode } from "react";

export default function CalenderContent({ children }: { children: ReactNode }) {
  return (
    <div className="p-2 flex flex-col justify-between w-[600px] h-[300px] border-2 rounded-2xl border-[#CECECE]">
      {children}
    </div>
  );
}
