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
  size = 10,
  text,
  weight = "normal",
  ...rest
}: ParagraphProps) => {
  const sizeString = String(size);
  return (
    <p
      {...rest}
      className={`
    text-[${color}] 
    font-${weight}
    text-[${size}px] `}
    >
      {text}
    </p>
  );
};
