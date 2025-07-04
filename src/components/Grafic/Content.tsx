import React, { ReactNode } from "react";

export default function Content({ children }: { children: ReactNode }) {
  return (
    <section className="p-2 flex flex-col justify-between w-[600px] h-[370px] border-2 rounded-2xl border-[#CECECE]">
      <p className="font-medium">Gráfico</p>
      {children}
    </section>
  );
}
