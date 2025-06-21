import NextAuth, { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
export const BASE_PATH = "/api/auth";

const authOptions: NextAuthConfig = {
  providers: [
    Credentials({
      id: "credential",
      name: "credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        const response = await fetch("localhost:3000/api/login", {
          method: "POST",
          body: JSON.stringify(credentials),
        });
        if (response.ok) {
          return await response.json();
        }
        return null; //
      },
    }),
  ],
  pages: {
    error: "/sing-in",
  },
  basePath: BASE_PATH,
  secret: process.env.NEXTAUTH_SECRET,
};

export const { handlers, signIn, signOut, auth } = NextAuth(authOptions);
