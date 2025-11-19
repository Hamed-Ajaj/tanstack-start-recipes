import { betterAuth } from "better-auth";
import { reactStartCookies } from "better-auth/react-start";
import { PrismaClient } from "@prisma/client";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { b as getRequest } from "../server.js";
const createMiddleware = (options, __opts) => {
  const resolvedOptions = {
    type: "request",
    ...__opts || options
  };
  return {
    options: resolvedOptions,
    middleware: (middleware) => {
      return createMiddleware(
        {},
        Object.assign(resolvedOptions, { middleware })
      );
    },
    inputValidator: (inputValidator) => {
      return createMiddleware(
        {},
        Object.assign(resolvedOptions, { inputValidator })
      );
    },
    client: (client) => {
      return createMiddleware(
        {},
        Object.assign(resolvedOptions, { client })
      );
    },
    server: (server) => {
      return createMiddleware(
        {},
        Object.assign(resolvedOptions, { server })
      );
    }
  };
};
const prisma = new PrismaClient();
const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql"
  }),
  baseURL: process.env.BASE_URL,
  session: {
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60
      // Cache duration in seconds
    }
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }
  },
  plugins: [reactStartCookies()]
});
const authMiddleware = createMiddleware({
  type: "function"
}).server(async ({
  next
}) => {
  const request = getRequest();
  const userSession = await auth.api.getSession({
    headers: request.headers
  });
  return await next({
    context: {
      user: {
        id: userSession?.user?.id,
        name: userSession?.user?.name,
        image: userSession?.user?.image
      }
    }
  });
});
export {
  auth as a,
  authMiddleware as b
};
