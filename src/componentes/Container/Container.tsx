"use client";
import { useSession } from "next-auth/react";
import React, { ReactNode } from "react";
import Spinner from "../Spinner/Spinner";

type ContainerProps = {
  position?: "center";
  children: ReactNode;
};

export const Container = ({ children, position }: ContainerProps) => {
  const { data: session, status } = useSession();
  console.log(session);
  return (
    <section
      className={`flex flex-c w-full h-full bg-[#EDEDED] 
        ${position === "center" ? "justify-center items-center" : ""}
        
        `}
    >
      {status === "loading" ? (
        <Spinner styles={{ width: 40, height: 40 }} />
      ) : (
        children
      )}
    </section>
  );
};
