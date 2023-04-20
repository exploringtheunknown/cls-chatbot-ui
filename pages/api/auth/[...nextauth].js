import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const username = process.env.USERNAME;
const password = process.env.PASSWORD;

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials, req) {
        return credentials.username === username && credentials.password === password;
      }
    })
  ]
}

export default NextAuth(authOptions);
