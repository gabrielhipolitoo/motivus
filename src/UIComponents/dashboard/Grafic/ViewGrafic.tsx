import { Grafic } from "@/components/Grafic";
import React from "react";

export default function ViewGrafic() {
  return (
    <Grafic.content>
      <Grafic.length />
      <Grafic.candles />
    </Grafic.content>
  );
}
