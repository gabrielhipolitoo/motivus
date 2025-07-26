import { HtmlHTMLAttributes } from "react";

type MainTitleProps = {
  title: string;
  size?: number;
};

export default function MainTitle({
  title,
  size = 25,
  ...rest
}: MainTitleProps) {
  return (
    <h1 {...rest} className={`text-[${size}px] mb-[20px] `}>
      {title}
    </h1>
  );
}
