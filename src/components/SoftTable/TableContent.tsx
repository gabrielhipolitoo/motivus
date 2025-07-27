import React, { ReactNode } from "react";
import { Box } from "../Box/Box";

export const TableContent = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      className=" p-2 mb-[30px] border-2 rounded-2xl mt-5 border-[#CECECE]"
      direction="column"
    >
      {children}
    </Box>
  );
};
