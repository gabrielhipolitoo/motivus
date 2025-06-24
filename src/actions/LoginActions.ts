import { LoginTypeSchema } from "@/schemas/loginSchema";
import { signIn } from "next-auth/react";

export const loginAction = async (data: LoginTypeSchema) => {
  const response = await signIn("credential", {
    email: data.email,
    password: data.password,
    redirect: false,
  });

  const res = await response;
  if (res?.error === "CredentialsSignin") {
    return { success: false, message: "email ou senha" };
  }

  if (res?.error) {
    console.log(res);
    return { success: false, message: "houve algum erro" };
  }
  return {
    success: true,
  };
};
