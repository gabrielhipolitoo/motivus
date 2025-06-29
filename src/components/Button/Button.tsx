import React, { ButtonHTMLAttributes } from "react";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  id?: string;
  icon?: IconDefinition;
  value: string;
  collapsed?: boolean;
};

export default function Button({
  id,
  icon,
  collapsed,
  value,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className="flex items-center rounded-xl justify-center  w-full h-[50px] p-2 cursor-pointer hover:bg-[#3C3C3C]"
    >
      {icon && <FontAwesomeIcon icon={icon} size={"lg"} color="#fff" />}

      {collapsed && (
        <div className="ml-auto w-[170px]">
          <p className=" text-justify text-[13px] text-white ">{value}</p>
        </div>
      )}
    </button>
  );
}
