import React, { HtmlHTMLAttributes, ReactNode } from "react";

type BoxProps = HtmlHTMLAttributes<HTMLElement> & {
  direction?: "row" | "column";
  children: ReactNode;
  borderColor?: string;
  bgColor?: string;
};

export const Box = ({
  children,
  direction = "row",
  bgColor,
  borderColor,
  ...rest
}: BoxProps) => {
  return (
    <section
      className={`flex   w-full h-auto ${
        direction === "column" ? "flex-col" : "flex-row justify-between"
      } border-[${borderColor}]
          bg-[#${bgColor}]`}
      {...rest}
    >
      {children}
    </section>
  );
};
