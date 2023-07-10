import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: {label: "Username"},
        password: {label: "Password"}
      },
      authorize(credentials, req){
        if(credentials?.username === 'gabeFrank' && credentials.password === '777777'){
          return{
            id: 'd79acfa3-43f4-4e35-ae65-3cec49ad2e13',
            username: 'gabeFrank'
          }
        }
        return null;
      }
    })
  ]
}