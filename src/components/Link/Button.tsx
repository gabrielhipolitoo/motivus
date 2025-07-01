import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  useContext,
} from "react";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";
import { SideBarContext } from "@/context/SideBarContext/context";
type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  id?: string;
  icon?: IconDefinition;
  value: string;
  path: string;
};

export default function Button({
  id,
  icon,
  path,
  value,
  ...rest
}: ButtonProps) {
  const { collapsed } = useContext(SideBarContext);
  return (
    <Link
      href={path}
      className="flex items-center rounded-[5px] justify-center w-full h-[50px] p-2 cursor-pointer hover:bg-[#3C3C3C]"
    >
      {icon && <FontAwesomeIcon icon={icon} width={20} color="#fff" />}

      {collapsed && (
        <div className="ml-auto w-[130px]">
          <p className=" text-justify text-[13px] text-white ">{value}</p>
        </div>
      )}
    </Link>
  );
}
