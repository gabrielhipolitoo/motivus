import React, { ReactNode } from "react";
import { Box } from "../Box/Box";

export const TableContent = ({ children }: { children: ReactNode }) => {
  return (
    <Box>
      <table className=" w-full  bg-[#2b2b2b] rounded-lg mt-10 border-width-2  border-[#CECECE]">{children}</table>
    </Box>
  );
};
