import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: 'text' },
        password: { label: "Password", type: 'password' },
      },
      async authorize(credentials, req) {
        console.log(credentials);
        if(credentials?.username === 'gabeFrank' && credentials?.password === '777777')
          return {
            id: "d79acfa3-43f4-4e35-ae65-3cec49ad2e13",
            username: "gabeFrank",
          };
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    // signIn: "/login",
  },
};
