import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Container } from "@/componentes/Container/Container";
import Spinner from "@/componentes/Spinner/Spinner";
import { getServerSession } from "next-auth";
import { signOut, useSession } from "next-auth/react";
import React from "react";
import { User } from "../../../../@types/next-auth";

export default async function Dashboard() {
  const session = await getServerSession(authOptions) as User;
  console.log(session)
  return (
    <Container>
      <p>Dashboard</p>
    </Container>
  );
}
