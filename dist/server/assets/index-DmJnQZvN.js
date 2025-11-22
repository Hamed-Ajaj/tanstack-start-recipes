import { jsx, jsxs } from "react/jsx-runtime";
import { g as getRecipes } from "./router-8Gksb7T5.js";
import { R as RecipeCard } from "./recipe-card-C77o4u1U.js";
import { Suspense } from "react";
import { useSuspenseQuery, queryOptions } from "@tanstack/react-query";
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
import "@tanstack/react-router-ssr-query";
import "./card-Bazqcl4e.js";
import "./config-Dy_Bk1RV.js";
const getRecipesQueryOptions = () => queryOptions({
  queryKey: ["recipes"],
  queryFn: getRecipes
  // make sure this returns a Promise
});
function Home() {
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen flex flex-col max-w-7xl mx-auto", children: /* @__PURE__ */ jsxs("main", { className: "flex-1 container py-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold mb-2", children: "Featured Recipes" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Discover delicious recipes from our community." })
    ] }),
    /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx("div", { children: "Loading recipes..." }), children: /* @__PURE__ */ jsx(RecipeList, {}) })
  ] }) });
}
const RecipeList = () => {
  const {
    data: recipes
  } = useSuspenseQuery(getRecipesQueryOptions());
  return /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: recipes?.map((recipe) => /* @__PURE__ */ jsx(RecipeCard, { recipe }, recipe.id)) });
};
export {
  Home as component
};
