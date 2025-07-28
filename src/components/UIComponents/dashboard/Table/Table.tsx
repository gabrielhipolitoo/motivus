import { SoftTable } from "@/components/SoftTable";
import { dataProduction } from "@/mocks/dataProdcutions";
import { headerTables } from "@/utils/headerTables";
import React from "react";

export default function Table() {
  return (
    <SoftTable.content>
      <SoftTable.header headers={headerTables} />
      <SoftTable.cells cells={dataProduction}/>
    </SoftTable.content>
  );
}
