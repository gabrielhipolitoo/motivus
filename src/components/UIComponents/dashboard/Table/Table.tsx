import { SoftTable } from "@/components/SoftTable";
import { headerTables } from "@/utils/headerTables";
import React from "react";

export default function Table() {
  return (
    <SoftTable.content>
      <SoftTable.header headers={headerTables} />
    </SoftTable.content>
  );
}
