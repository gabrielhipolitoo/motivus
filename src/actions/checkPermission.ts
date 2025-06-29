import { Path, privateRoutes, Role } from "@/router/routes";
import { NextResponse } from "next/server";
import { success } from "zod/v4";

export const CheckPermission = async (
  permission: string | undefined,
  pathname: Path
) => {
  const verify = privateRoutes.filter(
    ({ role, path }) => role === permission && path.includes(pathname)
  );

  console.log(verify);

  if (verify) {
    return {
      success: true,
    };
  } else {
    return { success: true };
  }
};
