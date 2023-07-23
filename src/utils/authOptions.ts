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
        // if (
        //   credentials?.username === "gabeFrank" &&
        //   credentials?.password === "777777"
        // ) {
        //   console.log(api.get("/users"));
        //   return {
        //     id: "d79acfa3-43f4-4e35-ae65-3cec49ad2e13",
        //     name: "gabeFrank",
        //     accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6ImdhYmVGcmFuayIsImlhdCI6MTUxNjIzOTAyMn0.N6NHO394tjL74NqDyWBjFOxbdKhNc8vVNwsEIqhE-cw"
        //   };
        // }

        const user = await axios
          .post("http://localhost:5003/users/login", credentials)
          .then((res) => {
            if (res.status === 200) {
              // console.log(res.data)
              return res.data;
            }
          });
        if (user) {
          console.log('got it!')
          console.log(user)
          return {
            id: user.id,
            name: user.username,
            accessToken: user.token,
          };
        } else {
          console.log('nulllll')
          return null;
        }
      },
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
      console.log(session)
      if (session) {
        session.user = token as any;
        // session.user!.name = user.name!
      }
      return session;
    },
    async signIn({ account }) {
      console.log(api);
      return true;
    },
  },
};
