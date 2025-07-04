import { Container } from "@/components/Container/Container";
import SideBar from "@/UIComponents/SideBar/SideBar";
import type { Metadata } from "next";
import { ReactElement, useCallback, useMemo } from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { privateRoutes } from "@/router/routes";
import {
  SideBarContext,
  SideBarProvider,
} from "@/context/SideBarContext/context";

export const metadata: Metadata = {
  title: "Motivus",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="pt-br">
      <body>
        <section className="flex w-full h-full">
          {session && <SideBar session={session.user} />}
          {children}
        </section>
      </body>
    </html>
  );
}
