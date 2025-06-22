"use client";

import { signIn, signOut } from "next-auth/react";
import { Container } from "@/componentes/Container/Container";
import { Form } from "@/componentes/Input";
import LinkRouter from "@/componentes/LinkRouter/LinkRouter";
import { loginInputSchema, LoginTypeSchema } from "@/schemas/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function SignIn() {
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginTypeSchema>({
    resolver: zodResolver(loginInputSchema),
  });

  async function handleLogin(data: LoginTypeSchema) {
    const res = await signIn("credential", {
      email: data.email,
      password: data.password,
      redirectTo: "/",
    });

    if (res?.error) {
      console.log(res.error);
      setError("Credenciais inválidas");
    }
  }

  return (
    <Container position="center">
      <div className="w-[500px]  p-4">
        <h2 className="text-5xl">Motivus</h2>

        <Form.content onSubmit={handleSubmit(handleLogin)}>
          <Form.label text="Seu email">
            <Form.input
              type="email"
              placeholder="Digite seu email"
              {...register("email")}
              error={errors.email?.message}
            />
          </Form.label>

          <Form.label text="Sua senha">
            <Form.input
              type="password"
              placeholder="Digite sua senha"
              {...register("password")}
              error={errors.password?.message}
            />
          </Form.label>

          {error && <p className="text-red-500 mt-2">{error}</p>}

          <Form.button value="Entrar" />
        </Form.content>
        <button onClick={() => signOut()}>Sair</button>
        <LinkRouter path="/recovery-password" rediraction="Recuperar conta" />
      </div>
    </Container>
  );
}
