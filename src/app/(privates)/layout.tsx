import SideBar from "@/components/UIComponents/SideBar/SideBar";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

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
          {session && <SideBar session={session} />}
          {children}
        </section>
      </body>
    </html>
  );
}
