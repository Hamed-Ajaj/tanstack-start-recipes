import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { B as Badge, C as Card, a as CardHeader, c as CardTitle, b as CardContent } from "./card-Bazqcl4e.js";
import { d as Route, B as Button, b as authClient, D as DropdownMenu, e as DropdownMenuTrigger, f as DropdownMenuContent, h as DropdownMenuItem, i as DropdownMenuSeparator, j as getRecipeById, t as toggleRecipeVisibility, k as deleteRecipe } from "./router-8Gksb7T5.js";
import { Link, useRouter } from "@tanstack/react-router";
import { ArrowLeft, Clock, Lock, Edit, MoreVertical, Trash2 } from "lucide-react";
import { d as difficultyConfig } from "./config-Dy_Bk1RV.js";
import { Suspense } from "react";
import { useSuspenseQuery, queryOptions } from "@tanstack/react-query";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@tanstack/react-router-devtools";
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
const getRecipeQueryOptions = (id) => queryOptions({
  queryKey: ["recipe", id],
  queryFn: () => getRecipeById({
    data: id
  }),
  staleTime: Infinity
});
function RouteComponent() {
  const {
    id
  } = Route.useLoaderData();
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen flex flex-col", children: /* @__PURE__ */ jsx("main", { className: "flex-1 container py-8", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsx("div", { className: "flex items-center gap-4 mb-6", children: /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "sm", asChild: true, children: /* @__PURE__ */ jsxs(Link, { to: "/", children: [
      /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4 mr-2" }),
      "Back to Recipes"
    ] }) }) }),
    /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx("div", { children: "Loading recipe details..." }), children: /* @__PURE__ */ jsx(RecipeDetails, { id }) })
  ] }) }) });
}
const RecipeDetails = ({
  id
}) => {
  const router = useRouter();
  const {
    data: recipe
  } = useSuspenseQuery(getRecipeQueryOptions(id));
  const {
    data: session
  } = authClient.useSession();
  const isAuthor = session?.user.id === recipe.authorId;
  const handleDelete = async () => {
    const response = await deleteRecipe({
      data: id
    });
    if (response) window.location.href = "/";
  };
  const handleTogglePrivacy = async () => {
    await toggleRecipeVisibility({
      data: {
        id,
        isPublic: recipe.isPublic
      }
    });
    router.invalidate();
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-4 mb-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold mb-4", children: recipe.title }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 flex-wrap", children: [
          /* @__PURE__ */ jsx(Badge, { variant: "outline", className: recipe.difficulty ? difficultyConfig[recipe.difficulty].color : "", children: recipe.difficulty ? difficultyConfig[recipe.difficulty].label : "" }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 text-muted-foreground", children: [
            /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsx("span", { children: recipe.cookTime })
          ] }),
          isAuthor && !recipe.isPublic && /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "bg-gray-100 text-gray-600", children: [
            /* @__PURE__ */ jsx(Lock, { className: "mr-1 h-3 w-3" }),
            "Private"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground mt-2", children: [
          "Created by ",
          recipe.author.name,
          " on",
          " ",
          new Date(recipe.createdAt).toLocaleDateString()
        ] })
      ] }),
      isAuthor && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(Button, { asChild: true, children: /* @__PURE__ */ jsxs(Link, { to: "/recipes/$id/edit-recipe", params: {
          id: recipe.id
        }, children: [
          /* @__PURE__ */ jsx(Edit, { className: "h-4 w-4 mr-2" }),
          "Edit Recipe"
        ] }) }),
        /* @__PURE__ */ jsxs(DropdownMenu, { children: [
          /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "outline", size: "sm", children: /* @__PURE__ */ jsx(MoreVertical, { className: "h-4 w-4" }) }) }),
          /* @__PURE__ */ jsxs(DropdownMenuContent, { align: "end", className: "w-48", children: [
            /* @__PURE__ */ jsxs(DropdownMenuItem, { className: "cursor-pointer", onClick: () => handleTogglePrivacy(), children: [
              /* @__PURE__ */ jsx(Lock, { className: "mr-2 h-4 w-4" }),
              recipe.isPublic ? "Make Private" : "Make Public"
            ] }),
            /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
            /* @__PURE__ */ jsxs(DropdownMenuItem, { onClick: () => handleDelete(), className: "cursor-pointer text-destructive focus:text-destructive", children: [
              /* @__PURE__ */ jsx(Trash2, { className: "mr-2 h-4 w-4" }),
              "Delete Recipe"
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-1", children: /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Ingredients" }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: recipe.ingredients?.map((ingredient, index) => /* @__PURE__ */ jsxs("li", { className: "text-sm flex items-start gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "w-2 h-2 bg-primary rounded-full mt-2 shrink-0" }),
          ingredient
        ] }, index)) }) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-2", children: /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Instructions" }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("ol", { className: "space-y-4", children: recipe.steps?.map((step, index) => /* @__PURE__ */ jsxs("li", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsx("span", { className: "shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium", children: index + 1 }),
          /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed pt-0.5", children: step })
        ] }, index)) }) })
      ] }) })
    ] })
  ] });
};
export {
  RouteComponent as component
};
