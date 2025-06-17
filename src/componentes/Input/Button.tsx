import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  value: string;
};

export const Button = ({ value, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      type="submit"
      className="w-full 
      mt-5
      mb-2
      h-[50px] 
      cursor-pointer bg-[#464646] 
      rounded-sm
      font-medium
    text-white
      transition
    hover:bg-[#201F1F]
  "
    >
      {value}
    </button>
  );
};
