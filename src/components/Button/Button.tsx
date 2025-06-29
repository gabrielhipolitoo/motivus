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
  active?: boolean;
};

export default function Button({
  id,
  icon,
  active,
  value,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className="flex items-center rounded-xl  w-full h-[70px] p-1 cursor-pointer hover:bg-amber-300"
    >
      {icon && <FontAwesomeIcon icon={icon} size={"xl"} color="#fff" />}

      {active && (
        <div className="ml-auto w-[120px]">
          <p className=" text-justify text-white ">{value}</p>
        </div>
      )}
    </button>
  );
}
