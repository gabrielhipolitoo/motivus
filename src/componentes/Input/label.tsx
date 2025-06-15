import { LabelHTMLAttributes, ReactNode } from "react";

type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  children: ReactNode;
  text?: string;
};

export const Label = ({ children, text, ...rest }: LabelProps) => {
  return (
    <label {...rest} className="flex flex-col text-md text-gray font-medium">
      {text}
      {children}
    </label>
  );
};
