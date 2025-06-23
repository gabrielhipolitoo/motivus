import { LoginTypeSchema } from "@/schemas/loginSchema";
import { signIn } from "next-auth/react";

export const loginAction = async (data: LoginTypeSchema) => {
  try {
    const response = await signIn("credential", {
      email: data.email,
      password: data.password,
    });
    return {
      sucess: true,
    };
  } catch (error: unknown) {
    if (error.type === "CallbackRouteError") {
      return {
        sucess: false,
        message: "Email ou senha incorreto",
      };
    }
    console.log(error);
    return {
      sucess: false,
      message: "Houve algum erro na autenticação",
    };
  }
};
