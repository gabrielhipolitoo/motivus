import NextAuth, { DefaultSession, NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { email } from "zod/v4";
export const BASE_PATH = "/api/auth";

export const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      id: "credential",
      name: "credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        const response = await fetch(
          `${process.env.NEXTAUTH_URL}/auth/signin`,
          {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const { user, error } = await response.json();
        console.log(error);
        if (!user || error) {
          return null;
        }

        return user;
      },
    }),
  ],
  pages: { signIn: "/sign-in" },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        return {
          ...token,
          role: user.role,
        };
      }
      return token;
    },

    session: async ({ session, token, user }) => {
      return {
        ...session,
        user: {
          ...session.user,
          role: token.role,
        },
      };
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
