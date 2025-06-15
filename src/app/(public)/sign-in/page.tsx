"use client";
import { Container } from "@/componentes/Container/Container";
import { Form } from "@/componentes/Input";
import LinkRouter from "@/componentes/LinkRouter/LinkRouter";
import { loginInputSchema, LoginTypeSchema } from "@/schemas/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function SingIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginInputSchema),
  });

  function handleLogin(data: LoginTypeSchema) {
    console.log(data);
  }
  console.log(errors);

  return (
    <Container position="center">
      <div className="w-[500px]  p-4">
        <div>
          <h2 className="text-5xl">Motivus</h2>
        </div>
        <Form.content onSubmit={handleSubmit(handleLogin)}>
          <Form.label text="Seu email">
            <Form.input
              error={errors.email?.message}
              type="email"
              placeholder="Digite seu email"
              {...register("email")}
            />
          </Form.label>
          <Form.label text="Sua senha">
            <Form.input
              error={errors.password?.message}
              type="password"
              placeholder="Digite sua senha"
              {...register("password")}
            />
          </Form.label>
          <Form.button value={"Entrar"} />
        </Form.content>
        <LinkRouter path="/recovery-password" rediraction="Recuperar conta" />
      </div>
    </Container>
  );
}
