import React, { forwardRef, InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, ...rest }, ref) => {
    return (
      <>
        <input
          {...rest}
          ref={ref}
          className="
        p-2
        mt-1
        bg-[#FAFAFA]  
        border-[#878787]
        border-[1px]
        outline-0
        placeholder:font-normal 
        text-sm 
        h-[50px] 
        rounded-md 
        text-[#201F1F]"
        />
        {error && <p className="text-sm font-light text-red-800">{error}</p>}
      </>
    );
  }
);
