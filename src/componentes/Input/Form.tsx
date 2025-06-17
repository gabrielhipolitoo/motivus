import React, { FormHTMLAttributes, ReactNode } from "react";

type FormProps = {
  children: ReactNode;
  action?: (formData: FormData) => void;
  onSubmit?: () => void;
};

const FormRoot = ({ children, action, onSubmit }: FormProps) => {
  return (
    <form
      action={action}
      onSubmit={onSubmit}
      className="flex flex-col h-[300] mt-5"
    >
      {children}
    </form>
  );
};

export { FormRoot };
