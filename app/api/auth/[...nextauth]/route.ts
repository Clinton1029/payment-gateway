import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma"; // ✅ your Prisma client
import type { NextAuthOptions } from "next-auth";
import bcrypt from "bcryptjs"; // ✅ to hash generated passwords

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async signIn({ user }) {
      // Check if the user already exists in DB
      const existingUser = await prisma.user.findUnique({
        where: { email: user.email! },
      });

      if (!existingUser) {
        // Create a random password since Google doesn't provide one
        const randomPassword = Math.random().toString(36).slice(-8);
        const hashedPassword = await bcrypt.hash(randomPassword, 10);

        // Store the new user in your database
        await prisma.user.create({
          data: {
            name: user.name || "Unnamed User",
            email: user.email!,
            password: hashedPassword, // stored hashed password
          },
        });

        console.log("✅ New user created:", user.email);
      } else {
        console.log("🟢 Existing user signed in:", user.email);
      }

      return true;
    },
    async session({ session, token }) {
      if (token && session.user) {
        (session.user as typeof session.user & { id?: string }).id = token.sub;
      }
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
