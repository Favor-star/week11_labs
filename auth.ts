import NextAuth, { NextAuthConfig } from "next-auth";
import authConfig from "./auth.config";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: { strategy: "jwt" },
  ...authConfig,
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        console.log(user);
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
    session: async ({ token, session }) => {
      if (session.user) {
        session.user.name = token.name;
        session.user.email = String(token.email ?? "");
        session.user.id = String(token.id ?? "");
      }
      return session;
    },
  },
});
