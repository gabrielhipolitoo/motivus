import React from "react";
import { Box } from "../Box/Box";

export type HeadersTableProps = {
  filters?: string[];
  headers: string[];
};

export const HeadersTable = ({ headers }: HeadersTableProps) => {
  return (
    <Box bgColor="#000">
      {headers.map((header) => (
        <p className="text-sm">{header}</p>
      ))}
    </Box>
  );
};
