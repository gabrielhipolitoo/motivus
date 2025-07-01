import { CheckPermission } from "@/actions/checkPermission";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Path, Role } from "@/router/routes";
import { getServerSession } from "next-auth";
import React, { ReactNode } from "react";

export default async function PermissionProvider({
  children,
  router,
}: {
  children: ReactNode;
  router: Path;
}) {
  const session = await getServerSession(authOptions);
  const permission = session?.user.permission as Role;
  const response = await CheckPermission(permission, router);

  if (response.success) {
    return <section className="w-full h-full">{children}</section>;
  }

  return <p>{"não"}</p>;
}
