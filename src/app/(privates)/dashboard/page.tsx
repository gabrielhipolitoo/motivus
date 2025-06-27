import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Container } from "@/componentes/Container/Container";
import Spinner from "@/componentes/Spinner/Spinner";
import { getServerSession } from "next-auth";
import { signOut, useSession } from "next-auth/react";
import React from "react";
import { User } from "../../../../@types/next-auth";
import { CheckPermission } from "@/actions/checkPermission";
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
