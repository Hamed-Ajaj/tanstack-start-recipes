import { jsx, jsxs } from "react/jsx-runtime";
import { useNavigate, useRouter, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, Plus, X } from "lucide-react";
import { B as Button, c as createRecipe } from "./router-8Gksb7T5.js";
import { L as Label, I as Input, S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem, T as Textarea, u as useFormField } from "./useFormField-DqkIMsx-.js";
import { C as Card, a as CardHeader, c as CardTitle, b as CardContent, B as Badge } from "./card-Bazqcl4e.js";
import { a as difficultyLevel } from "./config-Dy_Bk1RV.js";
import { useQueryClient } from "@tanstack/react-query";
import "@tanstack/react-router-devtools";
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
import "@radix-ui/react-label";
import "@radix-ui/react-select";
function RouteComponent() {
  const navigate = useNavigate();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    difficulty: difficultyLevel.EASY,
    cookTime: "",
    overview: ""
  });
  const [ingredients, setIngredients] = useState([""]);
  const [steps, setSteps] = useState([""]);
  const {
    addIngredient,
    removeIngredient,
    updateIngredient,
    addStep,
    removeStep,
    updateStep
  } = useFormField(setIngredients, setSteps, steps, ingredients);
  const queryClient = useQueryClient();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await createRecipe({
        data: {
          ...formData,
          cookTime: formData.cookTime ? Number(formData.cookTime) : null,
          ingredients: ingredients.filter((i) => i.trim()),
          steps: steps.filter((s) => s.trim())
        }
      });
      router.invalidate();
      queryClient.invalidateQueries({
        queryKey: ["recipes"]
      });
      navigate({
        to: "/"
      });
    } catch (error) {
      console.error("Failed to add recipe:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  const isFormValid = formData.title && formData.difficulty && formData.cookTime && ingredients.some((i) => i.trim()) && steps.some((s) => s.trim());
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen flex flex-col", children: /* @__PURE__ */ jsx("main", { className: "flex-1 container py-8", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsx("div", { className: "flex items-center gap-4 mb-6", children: /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "sm", asChild: true, children: /* @__PURE__ */ jsxs(Link, { to: "/", children: [
      /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4 mr-2" }),
      "Back to Recipes"
    ] }) }) }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold mb-2", children: "Add New Recipe" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Share your delicious recipe with the community." })
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-8", children: [
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Basic Information" }) }),
        /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "title", children: "Recipe Title" }),
            /* @__PURE__ */ jsx(Input, { id: "title", placeholder: "Enter recipe title...", value: formData.title ?? "", onChange: (e) => setFormData({
              ...formData,
              title: e.target.value
            }), required: true })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx(Label, { htmlFor: "difficulty", children: "Difficulty" }),
              /* @__PURE__ */ jsxs(Select, { value: formData.difficulty ?? "", onValueChange: (value) => setFormData({
                ...formData,
                difficulty: value
              }), required: true, children: [
                /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select difficulty" }) }),
                /* @__PURE__ */ jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsx(SelectItem, { value: "EASY", children: "Easy" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "MEDIUM", children: "Medium" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "HARD", children: "Hard" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx(Label, { htmlFor: "cookTime", children: "Cook Time" }),
              /* @__PURE__ */ jsx(Input, { id: "cookTime", placeholder: "e.g., 30 min", value: formData.cookTime ?? "", onChange: (e) => setFormData({
                ...formData,
                cookTime: e.target.value
              }), required: true })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "overview", children: "Quick overview" }),
            /* @__PURE__ */ jsx(Textarea, { id: "overview", placeholder: "Brief overview of the recipe...", value: formData.overview ?? "", onChange: (e) => setFormData({
              ...formData,
              overview: e.target.value
            }), rows: 3 })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsx(CardTitle, { children: "Ingredients" }),
          /* @__PURE__ */ jsxs(Button, { type: "button", variant: "outline", size: "sm", onClick: addIngredient, children: [
            /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4 mr-2" }),
            "Add Ingredient"
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { className: "space-y-3", children: ingredients.map((ingredient, index) => /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsx(Input, { placeholder: `Ingredient ${index + 1}...`, value: ingredient, onChange: (e) => updateIngredient(index, e.target.value), className: "flex-1" }),
          ingredients.length > 1 && /* @__PURE__ */ jsx(Button, { type: "button", variant: "ghost", size: "sm", onClick: () => removeIngredient(index), children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }) })
        ] }, index)) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsx(CardTitle, { children: "Steps" }),
          /* @__PURE__ */ jsxs(Button, { type: "button", variant: "outline", size: "sm", onClick: addStep, children: [
            /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4 mr-2" }),
            "Add Step"
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { className: "space-y-3", children: steps.map((step, index) => /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "mt-2 shrink-0", children: index + 1 }),
          /* @__PURE__ */ jsx(Textarea, { placeholder: `Step ${index + 1}...`, value: step, onChange: (e) => updateStep(index, e.target.value), className: "flex-1", rows: 2 }),
          steps.length > 1 && /* @__PURE__ */ jsx(Button, { type: "button", variant: "ghost", size: "sm", onClick: () => removeStep(index), className: "mt-2", children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }) })
        ] }, index)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
        /* @__PURE__ */ jsx(Button, { type: "submit", disabled: !isFormValid || isSubmitting, className: "flex-1 md:flex-none", children: isSubmitting ? "Adding Recipe..." : "Add Recipe" }),
        /* @__PURE__ */ jsx(Button, { type: "button", variant: "outline", asChild: true, children: /* @__PURE__ */ jsx(Link, { to: "/", children: "Cancel" }) })
      ] })
    ] })
  ] }) }) });
}
export {
  RouteComponent as component
};
