import { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { loginSchema } from "./schema";
import { createClient } from "./lib/supabase/server";
import { CredentialsSignin } from "next-auth";

// class InvalidEmailError extends CredentialsSignin {
//   code = "Email doesn't exist";
// }
class InvalidDataError extends CredentialsSignin {
  code = "Invalid Credentials";
}

export default {
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const parsedCredentials = loginSchema.safeParse(credentials);
        if (!parsedCredentials.success) return null;
        const { email, password } = parsedCredentials.data;

        const supabase = await createClient();
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw new InvalidDataError();
        return {
          id: data.user.id,
          email: data.user.email,
          name: data.user.user_metadata.name,
        };
      },
    }),
  ],
  pages: {
    signIn: "/login",
    error: "/login",
  },
} satisfies NextAuthConfig;

//   session: {
//     strategy: "jwt",
//   },
//   secret: process.env.AUTH_SECRET!,
//   callbacks: {
//     async jwt({ token, user, account }) {
//       if (user) {
//         token.id = user.id;
//         token.email = user.email;
//         token.name = user.name;
//         token.role = user.email?.includes("@gmail.com") ? "user" : "admin";

//         // // Handle GitHub provider specifically
//         // if (account?.provider === "github") {
//         //   token.githubId = user.id;
//         //   token.avatar_url = (user as any).avatar_url;
//         //   token.login = (user as any).login;
//         // }
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       if (session.user) {
//         session.user.name = token.name;
//         session.user.email = String(token.email);
//         session.user.id = String(token.id ?? "");
//         session.user.role = String(token.role ?? "");

//         // // Add GitHub-specific data to session
//         // if (token.avatar_url) {        //   session.user.image = String(token.avatar_url);
//         // }
//         // if (token.login) {
//         //   session.user.login = String(token.login);
//         // }
//       }
//       return session;
//     },
//     async redirect({ url, baseUrl }) {
//       // Handle relative URLs
//       if (url.startsWith("/")) return `${baseUrl}${url}`;
//       // Handle absolute URLs that start with baseUrl
//       if (url.startsWith(baseUrl)) return url;

//       // Default redirect - middleware will handle role-based routing
//       return `${baseUrl}/dashboard`;
//     },
//   },
