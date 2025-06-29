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
  | "/companies"
  | "all";

export type Role = "manager" | "employeeMaster" | "consultant" | "employee";
export type PathNames =
  | "Dashboard"
  | "Produção"
  | "Conformidades"
  | "Rastreabilidade"
  | "Usuários"
  | "Estoque"
  | "Maquinas"
  | "Companhias";

export type PrivateRoutes = {
  role: Role;
  path: Path[];
  pathname: PathNames[];
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
    pathname: [
      "Dashboard",
      "Produção",
      "Estoque",
      "Maquinas",
      "Companhias",
      "Rastreabilidade",
      "Conformidades",
      "Usuários",
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
    pathname: [
      "Dashboard",
      "Conformidades",
      "Rastreabilidade",
      "Estoque",
      "Maquinas",
    ],
  },
  {
    role: "consultant",
    path: ["/non-compliance", "/rastreability", "/companies"],
    pathname: ["Conformidades", "Rastreabilidade", "Companhias"],
  },

  {
    role: "employee",
    path: ["/dashboard", "/production"],
    pathname: ["Dashboard", "Produção"],
  },
];

/* 
havera 3 niveis de permissões, manager, employee e employee master

manager => dashboard, produção, não conformidade, rastreabilidade, robos, estoque,usuários
employee master =>, produção,não conformidade, rastreabilidade, robos, 
employee => produção, estoque
consultor => não conformidade, rastreabilidade


*/
