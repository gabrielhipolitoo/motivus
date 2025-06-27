import { Container } from "@/componentes/Container/Container";

import VerifyRole from "@/componentes/VerifyRole/VerifyRole";

export default async function Dashboard() {
  return (
    <VerifyRole router="/dashboard">
      <Container>
        <p>Dashboard</p>
      </Container>
    </VerifyRole>
  );
}
