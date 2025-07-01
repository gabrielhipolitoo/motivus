import { SideBarContext } from "@/context/SideBarContext/context";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faCircleArrowRight,
  faCircleChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ButtonHTMLAttributes, useContext } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: IconDefinition;
};

export default function Button() {
  const { collapsed, setCollapsed } = useContext(SideBarContext);

  return (
    <button
      onClick={() => setCollapsed(!collapsed)}
      className={`
    flex 
    justify-end
    cursor-pointer `}
    >
      <FontAwesomeIcon
        className={`${collapsed ? "transition transform -rotate-z-180" : ""}`}
        color="#fff"
        size="xl"
        icon={faCircleChevronLeft}
      />
    </button>
  );
}
