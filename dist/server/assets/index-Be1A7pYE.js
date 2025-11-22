import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { ChefHat } from "lucide-react";
import { R as RecipeCard } from "./recipe-card-C77o4u1U.js";
import { R as Route, a as getAuthorRecipes } from "./router-8Gksb7T5.js";
import { useSuspenseQuery, queryOptions } from "@tanstack/react-query";
import { Suspense } from "react";
import "./card-Bazqcl4e.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@tanstack/react-router";
import "./config-Dy_Bk1RV.js";
import "@radix-ui/react-avatar";
import "@tanstack/react-router-devtools";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-dropdown-menu";
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
const getAuthorRecipesQueryOptions = (userID) => queryOptions({
  queryKey: ["author-recipes", userID],
  queryFn: () => getAuthorRecipes({
    data: userID
  }),
  staleTime: Infinity
});
function RouteComponent() {
  const userID = Route.useLoaderData();
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen flex flex-col bg-slate-50/50", children: /* @__PURE__ */ jsxs("main", { className: "flex-1 container py-8 max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsx(PageHeader, {}),
    /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx("div", { children: "Loading recipes..." }), children: /* @__PURE__ */ jsx(RecipeContent, { userID }) })
  ] }) });
}
const PageHeader = () => /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
  /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold mb-2", children: "My Recipes" }),
  /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Your personal recipe collection" })
] });
const RecipeContent = ({
  userID
}) => {
  const {
    data: recipes
  } = useSuspenseQuery(getAuthorRecipesQueryOptions(userID));
  if (!recipes || recipes.length === 0) return /* @__PURE__ */ jsx(EmptyState, {});
  const publicRecipes = recipes.filter((r) => r.isPublic).length;
  const privateRecipes = recipes.filter((r) => !r.isPublic).length;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(RecipeStats, { total: recipes.length, publicCount: publicRecipes, privateCount: privateRecipes }),
    /* @__PURE__ */ jsx(RecipeGrid, { recipes })
  ] });
};
const RecipeStats = ({
  total,
  publicCount,
  privateCount
}) => /* @__PURE__ */ jsxs("div", { className: "flex gap-4 mb-6", children: [
  /* @__PURE__ */ jsx(StatCard, { value: total, label: "Total Recipes", color: "text-primary" }),
  /* @__PURE__ */ jsx(StatCard, { value: publicCount, label: "Public", color: "text-green-600" }),
  /* @__PURE__ */ jsx(StatCard, { value: privateCount, label: "Private", color: "text-orange-600" })
] });
const StatCard = ({
  value,
  label,
  color
}) => /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg border p-4 flex-1", children: [
  /* @__PURE__ */ jsx("div", { className: `text-2xl font-bold ${color}`, children: value }),
  /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: label })
] });
const RecipeGrid = ({
  recipes
}) => /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: recipes.map((recipe) => /* @__PURE__ */ jsx(RecipeCard, { recipe }, recipe.id)) });
const EmptyState = () => /* @__PURE__ */ jsxs("div", { className: "text-center py-12", children: [
  /* @__PURE__ */ jsx("div", { className: "mx-auto w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx(ChefHat, { className: "h-12 w-12 text-muted-foreground" }) }),
  /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-2", children: "No recipes yet" }),
  /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-6 max-w-md mx-auto", children: "Start building your recipe collection by creating your first recipe." })
] });
export {
  RouteComponent as component
};
