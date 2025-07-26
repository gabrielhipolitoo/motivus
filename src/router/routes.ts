import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faBezierCurve,
  faBoxOpen,
  faBuilding,
  faClipboard,
  faHome,
  faLayerGroup,
  faMicrochip,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

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
  key: PathNames;
  path: Path;
  authorized: Role[];
  icon?: IconDefinition;
};

export const privateRoutes: PrivateRoutes[] = [
  {
    key: "Dashboard",
    path: "/dashboard",
    authorized: ["manager", "employee", "employeeMaster", "manager"],
    icon: faHome,
  },
  {
    key: "Produção",
    path: "/production",
    authorized: ["manager", "employee", "employeeMaster", "manager"],
    icon: faLayerGroup,
  },
  {
    key: "Estoque",
    path: "/stock",
    authorized: ["employee", "employeeMaster", "manager"],
    icon:faBoxOpen
  },
  {
    key: "Rastreabilidade",
    path: "/rastreability",
    authorized: ["consultant", "manager"],
    icon: faBezierCurve,
  },
  {
    key: "Conformidades",
    path: "/non-compliance",
    authorized: ["consultant", "manager"],
    icon: faClipboard,
  },
  {
    key: "Maquinas",
    path: "/machines",
    authorized: ["employeeMaster", "manager"],
    icon: faMicrochip,
  },
  {
    key: "Companhias",
    path: "/companies",
    authorized: ["consultant", "manager"],
    icon: faBuilding,
  },
  {
    key: "Usuários",
    path: "/users",
    authorized: ["employeeMaster", "manager"],
    icon: faUserPlus,
  },
];

/* 
havera 3 niveis de permissões, manager, employee e employee master

manager => dashboard, produção, não conformidade, rastreabilidade, robos, estoque,usuários
employee master =>, produção,não conformidade, rastreabilidade, robos, 
employee => produção, estoque
consultor => não conformidade, rastreabilidade


*/
