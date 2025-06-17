"use server";

type LoginInput = {
  email: string;
  password: string;
};

export async function mockLogin({ email, password }: LoginInput) {
  await new Promise((res) => setTimeout(res, 1000)); 

  if (email === "teste" && password === "teste") {
    return {
      success: true,
      user: { id: 1, name: "Admin", email },
    };
  }

  return {
    success: false,
    message: "Email ou senha inválidos.",
  };
}
