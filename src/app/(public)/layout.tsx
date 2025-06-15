import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faça seu login",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}


      </body>
    </html>
  );
}
