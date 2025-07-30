import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (credentials?.email === "admin@assetbridge.com" && credentials?.password === "admin123") {
          return { id: "1", email: "admin@assetbridge.com", name: "Admin User" }
        }
        return null
      }
    })
  ]
}) as any

export { handler as GET, handler as POST }