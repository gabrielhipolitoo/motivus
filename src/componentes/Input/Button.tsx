import { ButtonHTMLAttributes, FC, JSX, ReactElement, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  value?: string;
  loader?: ReactNode;
};

export const Button: FC<ButtonProps> = ({
  value,
  loader,
  ...rest
}: ButtonProps) => {
  return (
    <button
      {...rest}
      type="submit"
      className="w-full 
      mt-5
      mb-2
      m-auto
      h-[50px] 
      cursor-pointer bg-[#464646] 
      rounded-sm
      font-medium
    text-white
      transition
    hover:bg-[#201F1F]
  "
    >
      {loader}
      {value}
    </button>
  );
};
