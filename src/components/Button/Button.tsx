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
};

export default function Button({ id, icon, value, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className="flex justify-between items-center w-[90%] h-[70px] bg-amber-100"
    >
      {icon && <FontAwesomeIcon icon={icon} color="#fff" />}
      <p>{value}</p>
    </button>
  );
}
