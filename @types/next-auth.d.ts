export type User = {
  permission: string;
} & DefaultSession["user"];

declare module "next-auth" {
  interface Session {
    user: User;
  }

  interface User {
    permission: string;
  }

  interface AdapterUser extends User {}
}

declare module "next-auth/jwt" {
  interface JWT {
    permission: string;
  }
}
