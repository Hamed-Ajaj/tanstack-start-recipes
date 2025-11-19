import { a as createServerRpc, c as createServerFn } from "../server.js";
import { b as authMiddleware } from "./auth-middleware-C8KKF5TR.js";
import "node:async_hooks";
import "rou3";
import "react/jsx-runtime";
import "@tanstack/react-router/ssr/server";
import "@tanstack/react-router";
import "better-auth";
import "better-auth/react-start";
import "@prisma/client";
import "better-auth/adapters/prisma";
const getUserID_createServerFn_handler = createServerRpc("1b7fd1f3c31ca466fb0a1353e7f38ad6d9683d3b32c0469025d4e6612b1c3b61", (opts, signal) => {
  return getUserID.__executeServer(opts, signal);
});
const getUserID = createServerFn({
  method: "GET"
}).middleware([authMiddleware]).handler(getUserID_createServerFn_handler, async ({
  context
}) => {
  return context?.user?.id;
});
export {
  getUserID_createServerFn_handler
};
