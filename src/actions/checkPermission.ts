import { Path, privateRoutes, Role } from "@/router/routes";
import { success } from "zod/v4";

export const CheckPermission = async (permission: Role, pathname: Path) => {
  const verify = privateRoutes.filter(
    ({ authorized, path }) =>
      path === pathname && authorized.includes(permission)
  );
  console.log(verify);
  if (verify.length > 0) return { success: true };

  return { success: false };
};
