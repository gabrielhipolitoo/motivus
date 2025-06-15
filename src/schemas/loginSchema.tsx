import { z } from "zod/v4";

export const loginInputSchema = z.object({
  email: z.email("Digite um e-mail válido"),
  password: z.string().min(1, { message: "Insira sua senha" }),
});

export type LoginTypeSchema = z.infer<typeof loginInputSchema>;

export interface teste {
  email: string;
}
