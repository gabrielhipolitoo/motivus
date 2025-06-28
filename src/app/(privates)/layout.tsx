import AuthProvider from "@/components/AuthProvider/AuthProvider";
import VerifyRole from "@/components/PermissionProvider/PermissionProvider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Motivus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
