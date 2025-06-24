import { Container } from "@/componentes/Container/Container";
import Spinner from "@/componentes/Spinner/Spinner";
import { signOut } from "next-auth/react";
import React from "react";

export default function Dashboard() {
  return (
    <Container>
      <Spinner styles={{ width: 50, height: 50 }} />
    </Container>
  );
}
