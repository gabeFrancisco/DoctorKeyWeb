import api from "@/app/services/api";
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
        try{
          const result = await axios
            .post("http://localhost:5003/users/login", credentials)
            .then((res) => {
              if (res.status === 200) {
                return res.data;
              }
            });
  
          return {
            id: result.user.id,
            name: result.user.username,
            accessToken: result.token,
          };
        }
        catch{
          return null
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 3600,
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
    async signIn({ account }) {
      return true;
    },
  },
};
