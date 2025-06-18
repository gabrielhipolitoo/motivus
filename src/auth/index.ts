import NextAuth, { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
export const BASE_PATH = "/api/auth";

const authOptions: NextAuthConfig = {
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Senha", type: "password" },
      },
      async authorize(credentials, req) {
        const response = await fetch("http://localhost:3000/api/auth-mongo", {
          method: "GET",
        });

        if (response.ok) {
          return response.json();
        }
        return { email: "sa" }; //
      },
    }),
  ],

  basePath: BASE_PATH,
  secret: process.env.NEXTAUTH_SECRET,
};

export const { handlers, signIn, signOut, auth } = NextAuth(authOptions);
