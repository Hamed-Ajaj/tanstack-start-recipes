import { getRequest } from "@tanstack/react-start/server";
import { createMiddleware } from "@tanstack/react-start";
import { auth } from "./auth";

export const authMiddleware = createMiddleware({ type: "function" }).server(
  async ({ next }) => {
    const request = getRequest();

    const userSession = await auth.api.getSession({
      headers: request.headers,
    });

    return await next({
      context: {
        user: {
          id: userSession?.user?.id,
          name: userSession?.user?.name,
          image: userSession?.user?.image,
        },
      },
    });
  },
);
