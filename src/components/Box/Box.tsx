import React, { HtmlHTMLAttributes, ReactNode } from "react";

type BoxProps = HtmlHTMLAttributes<HTMLElement> & {
  direction?: "row" | "column";
  children: ReactNode;
};

export const Box = ({ children, direction = "row", ...rest }: BoxProps) => {
  return (
    <section
      className={`flex  w-full h-auto ${
        direction === "column" ? "flex-col" : "flex-row justify-between"
      }`}
      {...rest}
    >
      {children}
    </section>
  );
};
