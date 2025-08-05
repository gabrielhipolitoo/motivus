import React, { useContext } from "react";
import { Box } from "../Box/Box";
import { Paragraph } from "../Paragraph/Paragraph";
import { SideBarContext } from "@/context/SideBarContext/context";
import { SlOptionsVertical } from "react-icons/sl";

type ProfileProps = {
  name: string;
  company?: string;
  image?: string;
};

export const Profile = ({ company, image, name }: ProfileProps) => {
  const { collapsed } = useContext(SideBarContext);
  return (
    <Box className="flex  w-full items-center justify-center  gap-[5px]">
      <div className="w-[50px] rounded-xl bg-amber-50 h-[50px]"></div>
      {collapsed && (
        <div className="text-white">
          <Paragraph text="empresa_" size={13} />
          <Paragraph text={name} weight={"normal"} size={15} />
          <Paragraph text={"manager"} color="gray" weight={"thin"} size={11} />
        </div>
      )}
      <button className="cursor-pointer">
        <SlOptionsVertical color="gray" />
      </button>
    </Box>
  );
};
