import { ReactNode } from "react";

export default function BoxAccount({ children }: { children: ReactNode }) {
  return <div className="w-[500px]  p-4">{children}</div>;
}
