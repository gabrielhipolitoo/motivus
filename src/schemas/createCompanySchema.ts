import { z } from "zod/v4";

export const CompanySchema = z.object({
  companyId: z.string("Digite o nome da companhia/empresa"),
  cnpj: z.string().min(1, { message: "Digite o cnpj da companhia/empresa" }),
  email: z.email("Digite um e-mail válido"),
  contact: z.string("Digite número de contato"),
  authorizedUsers: z.array(z.string()).min(1),
});

export type createCompany = z.infer<typeof CompanySchema>;
