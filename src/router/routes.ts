export const publicRoutes = [
  { path: "/sign-in", whenAuthenticated: "redirect" },
  { path: "/recovery-password", whenAuthenticated: "redirect" },
] as const;

export const privateRoutes = [{ path: "/" }] as const;
