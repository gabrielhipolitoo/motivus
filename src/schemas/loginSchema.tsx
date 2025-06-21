import { z } from "zod/v4";

export const loginInputSchema = z.object({
  email: z.email("Digite um e-mail válido"),
  password: z.string().min(1, { message: "Insira sua senha" }),
});

export const createUserInputSchema = z.object({
  email: z.email("Digite um e-mail válido"),
  name: z.email("Insira seu nome completo"),
  password: z.string().min(1, { message: "Insira sua senha" }),
  permission: z.string().min(1, { message: "Insira o tipo de permissão" }),
});

export type LoginTypeSchema = z.infer<typeof loginInputSchema>;
export type createTypeUserInputSchema = z.infer<typeof createUserInputSchema>;
