import { Path, privateRoutes, Role } from "@/router/routes";

export const CheckPermission = async (permission: Role, pathname: Path) => {
  const verify = privateRoutes.filter(
    ({ authorized, path }) =>
      path === pathname && authorized.includes(permission)
  );

  if (verify) {
    return {
      success: true,
    };
  } else {
    return { success: true };
  }
};
