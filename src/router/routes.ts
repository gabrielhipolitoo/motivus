export const publicRoutes = [
  { path: "/sign-in", whenAuthenticated: "redirect" },
  { path: "/recovery-password", whenAuthenticated: "redirect" },
] as const;

export type Path =
  | "/dashboard"
  | "/production"
  | "/rastreability"
  | "/non-compliance"
  | "/users"
  | "/stock"
  | "/machines"
  | "/companies";

export type Role = "manager" | "employeeMaster" | "consultant" | "employee";

export type PrivateRoutes = {
  role: Role;
  path: Path[];
};

export const privateRoutes: PrivateRoutes[] = [
  {
    role: "manager",
    path: [
      "/dashboard",
      "/production",
      "/rastreability",
      "/non-compliance",
      "/stock",
      "/users",
      "/machines",
    ],
  },
  {
    role: "employeeMaster",
    path: [
      "/dashboard",
      "/non-compliance",
      "/rastreability",
      "/stock",
      "/machines",
    ],
  },
  {
    role: "consultant",
    path: ["/non-compliance", "/rastreability", "/machines"],
  },
  {
    role: "employee",
    path: ["/dashboard", "/production"],
  },
];

/* 
havera 3 niveis de permissões, manager, employee e employee master

manager => dashboard, produção, não conformidade, rastreabilidade, robos, estoque,usuários
employee master =>, produção,não conformidade, rastreabilidade, robos, 
employee => produção, estoque
consultor => não conformidade, rastreabilidade


*/
