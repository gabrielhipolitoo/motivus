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
        try {
          const response = await fetch(
            `${process.env.NEXTAUTH_URL}/api/login`,
            {
              method: "POST",
              body: JSON.stringify(credentials),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          const { user } = await response.json();

          if (!user) {
            throw new Error("credentials");

          }

          if (!response.ok) {
            throw new Error("credentials");
          }

          return {
            id: user._id.toString(),
            name: user.name,
            email: user.email,
            permission: user.permission,
          };
        } catch (err: any) {
          throw new Error("Ops, houve algum erro");
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/sign-in",
  },
  basePath: BASE_PATH,
  secret: process.env.NEXTAUTH_SECRET,
};

export const { handlers, signIn, signOut, auth } = NextAuth(authOptions);
