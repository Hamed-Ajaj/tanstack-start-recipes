import { jsxs } from "react/jsx-runtime";
import { R as Route } from "./router-J39x_Qz3.js";
import "@tanstack/react-router";
import "@tanstack/react-router-devtools";
import "lucide-react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-dropdown-menu";
import "@radix-ui/react-avatar";
import "better-auth/react";
import "react";
import "@radix-ui/react-dialog";
import "./auth-server-CixsgOnm.js";
import "../server.js";
import "node:async_hooks";
import "rou3";
import "@tanstack/react-router/ssr/server";
import "./auth-middleware-C8KKF5TR.js";
import "better-auth";
import "better-auth/react-start";
import "@prisma/client";
import "better-auth/adapters/prisma";
import "@tanstack/react-query";
import "@tanstack/react-router-ssr-query";
function RouteComponent() {
  const { id } = Route.useParams();
  const recipe = Route.useLoaderData();
  return /* @__PURE__ */ jsxs("div", {
    children: ['Hello "/recipe/$', id, '"!'],
  });
}
export { RouteComponent as component };
