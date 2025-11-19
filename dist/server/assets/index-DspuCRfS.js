import { jsxs, jsx } from "react/jsx-runtime";
import { a as authClient, g as getRecipes } from "./router-J39x_Qz3.js";
import { useState } from "react";
import { Clock } from "lucide-react";
import { C as Card, a as CardHeader, B as Badge, d as difficultyConfig, b as CardContent } from "./config-vGBwZI9q.js";
import { Link } from "@tanstack/react-router";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { useQuery, queryOptions } from "@tanstack/react-query";
import "@tanstack/react-router-devtools";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-dropdown-menu";
import "better-auth/react";
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
import "@tanstack/react-router-ssr-query";
const getIngredientName = (ingredient) => {
  const cleaned = ingredient.replace(/^\d+[\s\w]*\s+/, "").split(",")[0].split("(")[0].trim();
  return cleaned.length > 15 ? cleaned.substring(0, 15) + "..." : cleaned;
};
function RecipeCard({
  recipe,
  onDelete,
  onTogglePrivacy
}) {
  const { data: session, isPending } = authClient.useSession();
  const isAuthor = session?.user.id === recipe.authorId;
  const [isDeleting, setIsDeleting] = useState(false);
  return /* @__PURE__ */ jsxs(Card, { className: "group relative overflow-hidden transition-all hover:shadow-xl border-2 border-border/50 hover:border-border bg-card/50 backdrop-blur-sm h-full", children: [
    /* @__PURE__ */ jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex-1 space-y-3", children: [
        /* @__PURE__ */ jsx(Link, { to: `/recipe/${recipe.id}`, className: "block", children: /* @__PURE__ */ jsx("h3", { className: "font-semibold text-lg leading-tight line-clamp-2 hover:text-primary transition-colors", children: recipe.title }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
          recipe.difficulty && /* @__PURE__ */ jsx(
            Badge,
            {
              variant: "outline",
              className: difficultyConfig[recipe.difficulty].color,
              children: difficultyConfig[recipe.difficulty].label
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsx("span", { children: recipe.cookTime })
          ] })
        ] })
      ] }),
      isAuthor && !isPending && /* @__PURE__ */ jsx("div", { className: "relative h-8 w-8", children: /* @__PURE__ */ jsxs(Avatar, { className: "h-8 w-8", children: [
        /* @__PURE__ */ jsx(
          AvatarImage,
          {
            className: "rounded-full",
            src: session.user.image || "",
            alt: "User"
          }
        ),
        /* @__PURE__ */ jsx(AvatarFallback, { children: session.user.name.charAt(0).toUpperCase() })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxs(CardContent, { children: [
      recipe.ingredients && recipe.ingredients.length > 0 && /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-medium mb-2 text-sm text-muted-foreground", children: "Ingredients" }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap mb-2 gap-1.5", children: [
          recipe.ingredients.slice(0, 2).map((ingredient, index) => /* @__PURE__ */ jsx(
            Badge,
            {
              variant: "secondary",
              className: "text-xs py-1 px-0 bg-muted/50 hover:bg-muted/70 transition-colors",
              children: getIngredientName(ingredient)
            },
            index
          )),
          recipe.ingredients.length > 2 && /* @__PURE__ */ jsxs(
            Badge,
            {
              variant: "outline",
              className: "text-xs px-2.5 py-1 bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20",
              children: [
                "+",
                recipe.ingredients.length - 2,
                " more"
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-medium mb-2 text-sm text-muted-foreground", children: "Overview" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed line-clamp-4", children: recipe.overview }),
        /* @__PURE__ */ jsx(
          Link,
          {
            to: `/recipes/${recipe.id}`,
            className: "inline-block mt-3 text-sm text-primary hover:underline",
            children: "Read more →"
          }
        )
      ] })
    ] })
  ] });
}
const getRecipesQueryOptions = () => queryOptions({
  queryKey: ["recipes"],
  queryFn: getRecipes
  // staleTime: 5 * 60 * 1000, // 5 minutes
});
function Home() {
  const {
    data: recipes,
    isLoading
  } = useQuery(getRecipesQueryOptions());
  if (isLoading) {
    return /* @__PURE__ */ jsx("div", { children: "Loading recipes..." });
  }
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen flex flex-col max-w-7xl mx-auto", children: /* @__PURE__ */ jsxs("main", { className: "flex-1 container py-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold mb-2", children: "Featured Recipes" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Discover delicious recipes from our community." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: recipes?.map((recipe) => /* @__PURE__ */ jsx(RecipeCard, { recipe }, recipe.id)) })
  ] }) });
}
export {
  Home as component
};
