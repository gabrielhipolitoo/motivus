import Link from "next/link";
import React from "react";

type LinkRouterProps = {
  rediraction: string;
  path: string;
};

export default function LinkRouter({ rediraction, path }: LinkRouterProps) {
  return (
    <Link className="items-center" href={path}>
      {rediraction}
    </Link>
  );
}
