"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";

type ContainerProps = {
  position?: "center";
  children: ReactNode;
};

export const Container = ({ children, position }: ContainerProps) => {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>carregando</p>;
  }

  return (
    <section
      className={`flex flex-c w-full h-full bg-[#EDEDED] 
        ${position === "center" ? "justify-center items-center" : ""}
        
        `}
    >
      {children}
    </section>
  );
};
