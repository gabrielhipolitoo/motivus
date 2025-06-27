import { CheckPermission } from "@/actions/checkPermission";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Path } from "@/router/routes";
import { getServerSession } from "next-auth";
import React, { ReactNode } from "react";

export default async function VerifyRole({
  children,
  router,
}: {
  children: ReactNode;
  router: Path;
}) {
  const session = await getServerSession(authOptions);
  CheckPermission(session?.user?.permission, router);

  if (session?.user.permission === "manager") {
    return <p>Funcionou</p>;
  }
  return <section className="">{children}</section>;
}
