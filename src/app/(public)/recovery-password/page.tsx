import { Container } from "@/components/Container/Container";
import BoxAccount from "@/components/ContainerLogin/BoxAccount";
import { Form } from "@/components/Input";
import Logo from "@/components/Logo/Logo";

export default function recoverpassword() {
  return (
    <Container position="center">
      <BoxAccount>
        <Logo />
        <p className="text-[17px] mt-2">
          Informe seu email cadastrados, para enviarmos o link de recuperação
        </p>
        <Form.content action={loginAction}>
          <Form.input className="w-full" placeholder="Seu email" />
          <Form.button value={"Enviar e-mail"} />
        </Form.content>
      </BoxAccount>
    </Container>
  );
}
