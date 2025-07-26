import React, { useContext } from "react";
import { Box } from "../Box/Box";
import { Paragraph } from "../Paragraph/Paragraph";
import { SideBarContext } from "@/context/SideBarContext/context";

type ProfileProps = {
  name: string;
  company?: string;
  image?: string;
};

export const Profile = ({ company, image, name }: ProfileProps) => {
  const { collapsed } = useContext(SideBarContext);
  return (
    <Box className="flex  gap-[5px]">
      <div className="w-[50px] rounded-xl bg-amber-50 h-[50px]"></div>
      {collapsed && (
        <div className="">
          <Paragraph text={name} size={15} />
        </div>
      )}
    </Box>
  );
};
