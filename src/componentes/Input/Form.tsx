import React, { FormHTMLAttributes, ReactNode } from "react";

type FormProps = FormHTMLAttributes<HTMLFormElement> & {
  children: ReactNode;
  onSubmit: () => void;
};

const FormRoot = ({ children, onSubmit }: FormProps) => {
  return (
    <form className="flex flex-col h-[300] justify-around" onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export { FormRoot };
