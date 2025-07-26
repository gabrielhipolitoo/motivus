import { LoginTypeSchema } from "@/schemas/loginSchema";
import { message } from "@/utils/messages";
import { signIn } from "next-auth/react";

export const loginAction = async (data: LoginTypeSchema) => {
  const response = await signIn("credential", {
    email: data.email,
    password: data.password,
    redirect: false,
  });
  console.log(response);
  const res = await response;
  if (res?.error === "CredentialsSignin") {
    return { success: false, message: message.CREDENTIALS_INVALID };
  }

  if (res?.error) {
    return { success: false, message: "" };
  }
  return {
    success: true,
  };
};
