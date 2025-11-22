import { betterAuth } from "better-auth";
import { reactStartCookies } from "better-auth/react-start";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "~/lib/prisma";
export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  baseURL: process.env.BASE_URL,
  session: {
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60, // Cache duration in seconds
    },
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
  },
  plugins: [reactStartCookies()],
});
