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
  active?: string;
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
      className="flex justify-between items-center w-[90%] after:[teste] h-[70px] bg-amber-100"
    >
      {icon && <FontAwesomeIcon icon={icon} color="#000" />}

      {active && <p className="">{value}</p>}
    </button>
  );
}
