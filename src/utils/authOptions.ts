import { apiUrl } from "@/services/api";
import axios from "axios";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
          const result = await axios
            .post(`${apiUrl}/api/users/login`, credentials)
            
          return {
            id: result.data.user.id,
            name: result.data.user.username,
            accessToken: result.data.token,
          }
        }
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      return {
        ...token,
        ...user,
      };
    },
    async session({ session, token, user }) {
      if (session) {
        session.user = token as any;
      }
      return session;
    },
  },
};
