import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: "Ov23lid8L8K5OcZbXkob",
      clientSecret: "36a08749261e051ed57fc49f67a4bda51984fd7c",
    }),
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)