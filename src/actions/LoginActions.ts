import { LoginTypeSchema } from "@/schemas/loginSchema";
import { message } from "@/utils/messages";
import { signIn, SignInResponse } from "next-auth/react";
import Router from "next/router";

export const loginAction = async (data: LoginTypeSchema) => {
  try {
    const response = await signIn("credential", {
      redirect: true,
      email: data.email,
      password: data.password,
      redirectTo: "/",
    });
    return { sucess: true };
  } catch (error) {
    if (error.type === "CredentialsSignin")
      return { sucess: false, error: message.CREDENTIALS_INVALID };
  }
  return { success: false, error: error };
};
