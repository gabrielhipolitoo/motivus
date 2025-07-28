import React from "react";
import { Box } from "../Box/Box";

export type HeadersTableProps = {
  filters?: string[];
  headers: string[];
};

export const HeadersTable = ({ headers }: HeadersTableProps) => {
  return (
    <thead className="h-15">
      <tr className="  text-gray font-light m-2 text-s">
        {headers.map((header) => (
          <th className="w-[10%] text-white text-sm font-normal text-center ">{header}</th>
        ))}
      </tr>
    </thead>
  );
};
