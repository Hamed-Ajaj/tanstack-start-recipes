import { jsx, jsxs } from "react/jsx-runtime";
import { useNavigate, useRouter, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDownIcon, CheckIcon, ChevronUpIcon, ArrowLeft, Plus, X } from "lucide-react";
import { c as cn, B as Button, b as createRecipe } from "./router-J39x_Qz3.js";
import * as LabelPrimitive from "@radix-ui/react-label";
import * as SelectPrimitive from "@radix-ui/react-select";
import { c as difficultyLevel, C as Card, a as CardHeader, e as CardTitle, b as CardContent, B as Badge } from "./config-vGBwZI9q.js";
import "@tanstack/react-router-devtools";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-dropdown-menu";
import "@radix-ui/react-avatar";
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
import "@tanstack/react-query";
import "@tanstack/react-router-ssr-query";
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsx(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      ),
      ...props
    }
  );
}
function Label({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    LabelPrimitive.Root,
    {
      "data-slot": "label",
      className: cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      ),
      ...props
    }
  );
}
function Textarea({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "textarea",
    {
      "data-slot": "textarea",
      className: cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      ),
      ...props
    }
  );
}
function Select({
  ...props
}) {
  return /* @__PURE__ */ jsx(SelectPrimitive.Root, { "data-slot": "select", ...props });
}
function SelectValue({
  ...props
}) {
  return /* @__PURE__ */ jsx(SelectPrimitive.Value, { "data-slot": "select-value", ...props });
}
function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    SelectPrimitive.Trigger,
    {
      "data-slot": "select-trigger",
      "data-size": size,
      className: cn(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsx(ChevronDownIcon, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function SelectContent({
  className,
  children,
  position = "popper",
  align = "center",
  ...props
}) {
  return /* @__PURE__ */ jsx(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs(
    SelectPrimitive.Content,
    {
      "data-slot": "select-content",
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      ),
      position,
      align,
      ...props,
      children: [
        /* @__PURE__ */ jsx(SelectScrollUpButton, {}),
        /* @__PURE__ */ jsx(
          SelectPrimitive.Viewport,
          {
            className: cn(
              "p-1",
              position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children
          }
        ),
        /* @__PURE__ */ jsx(SelectScrollDownButton, {})
      ]
    }
  ) });
}
function SelectItem({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    SelectPrimitive.Item,
    {
      "data-slot": "select-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(CheckIcon, { className: "size-4" }) }) }),
        /* @__PURE__ */ jsx(SelectPrimitive.ItemText, { children })
      ]
    }
  );
}
function SelectScrollUpButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    SelectPrimitive.ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx(ChevronUpIcon, { className: "size-4" })
    }
  );
}
function SelectScrollDownButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    SelectPrimitive.ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx(ChevronDownIcon, { className: "size-4" })
    }
  );
}
function useFormField(setIngredients, setSteps, steps, ingredients) {
  const addIngredient = () => {
    setIngredients([...ingredients, ""]);
  };
  const removeIngredient = (index) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };
  const updateIngredient = (index, value) => {
    const updated = [...ingredients];
    updated[index] = value;
    setIngredients(updated);
  };
  const addStep = () => {
    setSteps([...steps, ""]);
  };
  const removeStep = (index) => {
    setSteps(steps.filter((_, i) => i !== index));
  };
  const updateStep = (index, value) => {
    const updated = [...steps];
    updated[index] = value;
    setSteps(updated);
  };
  return {
    addIngredient,
    removeIngredient,
    updateIngredient,
    addStep,
    removeStep,
    updateStep
  };
}
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
