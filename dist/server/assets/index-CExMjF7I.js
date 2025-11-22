import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { B as Button } from "./router-8Gksb7T5.js";
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
import "./auth-server-BTQhBpSc.js";
import "../server.js";
import "node:async_hooks";
import "@tanstack/react-router/ssr/server";
import "./auth-middleware-BYLupTBh.js";
import "better-auth";
import "better-auth/react-start";
import "better-auth/adapters/prisma";
import "node:process";
import "node:path";
import "node:url";
import "@prisma/client/runtime/library";
import "@prisma/client";
import "@tanstack/react-query";
import "@tanstack/react-router-ssr-query";
const SplitErrorComponent = ({
  error
}) => /* @__PURE__ */ jsx("div", { className: "min-h-screen flex items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
  /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold mb-4", children: "Error Loading Recipe" }),
  /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: error.message }),
  /* @__PURE__ */ jsx(Button, { className: "mt-6", asChild: true, children: /* @__PURE__ */ jsx(Link, { to: "/", children: "Back to Home" }) })
] }) });
export {
  SplitErrorComponent as errorComponent
};
