import React, { HTMLAttributes } from "react";

type WeightTypes =
  | "normal"
  | "bold"
  | "thin"
  | "extrabold"
  | "extralight"
  | "semibold";

type ParagraphProps = HTMLAttributes<HTMLParagraphElement> & {
  text: string;
  color?: string;
  size?: number;
  weight?: WeightTypes;
};

export const Paragraph = ({
  color = "#fff",
  size = 16,
  text,
  weight = "bold",
  ...rest
}: ParagraphProps) => {
  return (
    <p
      className={`font-${weight}`}
      style={{ color, fontSize: `${size}px` }}
      {...rest}
    >
      {text}
    </p>
  );
};
