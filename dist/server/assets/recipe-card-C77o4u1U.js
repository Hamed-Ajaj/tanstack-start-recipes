import { jsxs, jsx } from "react/jsx-runtime";
import { Clock } from "lucide-react";
import { C as Card, a as CardHeader, B as Badge, b as CardContent } from "./card-Bazqcl4e.js";
import { Link } from "@tanstack/react-router";
import { b as authClient } from "./router-8Gksb7T5.js";
import { d as difficultyConfig } from "./config-Dy_Bk1RV.js";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
const getIngredientName = (ingredient) => {
  const cleaned = ingredient.replace(/^\d+[\s\w]*\s+/, "").split(",")[0].split("(")[0].trim();
  return cleaned.length > 15 ? cleaned.substring(0, 15) + "..." : cleaned;
};
function RecipeCard({
  recipe
}) {
  const { data: session, isPending } = authClient.useSession();
  const isAuthor = session?.user.id === recipe.authorId;
  return /* @__PURE__ */ jsxs(Card, { className: "group relative overflow-hidden transition-all hover:shadow-xl border-2 border-border/50 hover:border-border bg-card/50 backdrop-blur-sm h-full", children: [
    /* @__PURE__ */ jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex-1 space-y-3", children: [
        /* @__PURE__ */ jsx(Link, { to: `/recipes/${recipe.id}`, className: "block", children: /* @__PURE__ */ jsx("h3", { className: "font-semibold text-lg leading-tight line-clamp-2 hover:text-primary transition-colors", children: recipe.title }) }),
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
export {
  RecipeCard as R
};
