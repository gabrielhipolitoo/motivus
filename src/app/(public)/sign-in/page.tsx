"use client";

import { signIn, signOut } from "next-auth/react";
import { Container } from "@/componentes/Container/Container";
import { Form } from "@/componentes/Input";
import LinkRouter from "@/componentes/LinkRouter/LinkRouter";
import { loginInputSchema, LoginTypeSchema } from "@/schemas/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginAction } from "@/actions/LoginActions";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import Spinner from "@/componentes/Spinner/Spinner";
export default function SignIn() {
  const [error, setError] = useState("");
  const [messageApi, setMessageApi] = useState<any>("");
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginTypeSchema>({
    resolver: zodResolver(loginInputSchema),
  });
  const router = useRouter();

  async function handleLogin(data: LoginTypeSchema) {
    setLoading(true);
    const response = await loginAction(data);
    console.log(response);
    if (response.success === true) {
      router.push("/");
      setLoading(false);
    }
    if (response.message) {
      setMessageApi(response.message);
      setLoading(false);
    }
  }

  function ButtonLoader() {
    if (loading) {
      return (
        <Form.button
          disabled
          loader={<Spinner styles={{ width: 50, height: 50 }} />}
        />
      );
    }

    return <Form.button value="Entrar" />;
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

          {ButtonLoader()}
        </Form.content>
        <button onClick={() => signOut()}>Sair</button>
        <LinkRouter path="/recovery-password" rediraction="Recuperar conta" />
        {messageApi && <p>{messageApi}</p>}
      </div>
      <Link href={"/dashboard"}>oloa</Link>
    </Container>
  );
}
