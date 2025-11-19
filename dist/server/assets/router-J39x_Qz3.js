import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useRouter, useMatch, rootRouteId, ErrorComponent, Link, useNavigate, createRootRouteWithContext, HeadContent, Scripts, createFileRoute, lazyRouteComponent, redirect, createRouter } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { XIcon, ChefHat, Pizza } from "lucide-react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { createAuthClient } from "better-auth/react";
import { useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { g as getUserID, c as createSsrRpc } from "./auth-server-CixsgOnm.js";
import { PrismaClient } from "@prisma/client";
import { c as createServerFn } from "../server.js";
import { queryOptions, QueryClient } from "@tanstack/react-query";
import { a as auth } from "./auth-middleware-C8KKF5TR.js";
import { setupRouterSsrQueryIntegration } from "@tanstack/react-router-ssr-query";
function DefaultCatchBoundary({ error }) {
  const router2 = useRouter();
  const isRoot = useMatch({
    strict: false,
    select: (state) => state.id === rootRouteId
  });
  console.error("DefaultCatchBoundary Error:", error);
  return /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1 p-4 flex flex-col items-center justify-center gap-6", children: [
    /* @__PURE__ */ jsx(ErrorComponent, { error }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-2 items-center flex-wrap", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
          },
          className: `px-2 py-1 bg-gray-600 dark:bg-gray-700 rounded-sm text-white uppercase font-extrabold`,
          children: "Try Again"
        }
      ),
      isRoot ? /* @__PURE__ */ jsx(
        Link,
        {
          to: "/",
          className: `px-2 py-1 bg-gray-600 dark:bg-gray-700 rounded-sm text-white uppercase font-extrabold`,
          children: "Home"
        }
      ) : /* @__PURE__ */ jsx(
        Link,
        {
          to: "/",
          className: `px-2 py-1 bg-gray-600 dark:bg-gray-700 rounded-sm text-white uppercase font-extrabold`,
          onClick: (e) => {
            e.preventDefault();
            window.history.back();
          },
          children: "Go Back"
        }
      )
    ] })
  ] });
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}
function DropdownMenu({
  ...props
}) {
  return /* @__PURE__ */ jsx(DropdownMenuPrimitive.Root, { "data-slot": "dropdown-menu", ...props });
}
function DropdownMenuTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx(
    DropdownMenuPrimitive.Trigger,
    {
      "data-slot": "dropdown-menu-trigger",
      ...props
    }
  );
}
function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ jsx(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx(
    DropdownMenuPrimitive.Content,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset,
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        className
      ),
      ...props
    }
  ) });
}
function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx(
    DropdownMenuPrimitive.Item,
    {
      "data-slot": "dropdown-menu-item",
      "data-inset": inset,
      "data-variant": variant,
      className: cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    }
  );
}
function DropdownMenuSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    DropdownMenuPrimitive.Separator,
    {
      "data-slot": "dropdown-menu-separator",
      className: cn("bg-border -mx-1 my-1 h-px", className),
      ...props
    }
  );
}
function Avatar({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    AvatarPrimitive.Root,
    {
      "data-slot": "avatar",
      className: cn(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        className
      ),
      ...props
    }
  );
}
function AvatarImage({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    AvatarPrimitive.Image,
    {
      "data-slot": "avatar-image",
      className: cn("aspect-square size-full", className),
      ...props
    }
  );
}
function AvatarFallback({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    AvatarPrimitive.Fallback,
    {
      "data-slot": "avatar-fallback",
      className: cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className
      ),
      ...props
    }
  );
}
const authClient = createAuthClient({
  baseURL: process.env.BASE_URL
});
function Dialog({
  ...props
}) {
  return /* @__PURE__ */ jsx(DialogPrimitive.Root, { "data-slot": "dialog", ...props });
}
function DialogPortal({
  ...props
}) {
  return /* @__PURE__ */ jsx(DialogPrimitive.Portal, { "data-slot": "dialog-portal", ...props });
}
function DialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    DialogPrimitive.Overlay,
    {
      "data-slot": "dialog-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props
    }
  );
}
function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}) {
  return /* @__PURE__ */ jsxs(DialogPortal, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ jsx(DialogOverlay, {}),
    /* @__PURE__ */ jsxs(
      DialogPrimitive.Content,
      {
        "data-slot": "dialog-content",
        className: cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        ),
        ...props,
        children: [
          children,
          showCloseButton && /* @__PURE__ */ jsxs(
            DialogPrimitive.Close,
            {
              "data-slot": "dialog-close",
              className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              children: [
                /* @__PURE__ */ jsx(XIcon, {}),
                /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function DialogHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "dialog-header",
      className: cn("flex flex-col gap-2 text-center sm:text-left", className),
      ...props
    }
  );
}
function DialogTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    DialogPrimitive.Title,
    {
      "data-slot": "dialog-title",
      className: cn("text-lg leading-none font-semibold", className),
      ...props
    }
  );
}
function DialogDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    DialogPrimitive.Description,
    {
      "data-slot": "dialog-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}
function SignInModal({
  open,
  onOpenChange,
  onSignInSuccess
}) {
  const { data: session, isPending, error } = authClient.useSession();
  const handleGoogleSignIn = async () => {
    try {
      await authClient.signIn.social({ provider: "google" });
      if (session) {
        onSignInSuccess();
      }
    } catch (err) {
      console.error("Sign in failed:", error);
    }
  };
  return /* @__PURE__ */ jsx(Dialog, { open, onOpenChange, children: /* @__PURE__ */ jsxs(DialogContent, { className: "sm:max-w-md", children: [
    /* @__PURE__ */ jsxs(DialogHeader, { children: [
      /* @__PURE__ */ jsx(DialogTitle, { children: "Sign in to create recipes" }),
      /* @__PURE__ */ jsx(DialogDescription, { children: "You need to be signed in to create and manage your recipes. Sign in with your Google account to get started." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4 py-4", children: [
      /* @__PURE__ */ jsx(
        Button,
        {
          onClick: handleGoogleSignIn,
          disabled: isPending,
          className: "w-full",
          size: "lg",
          children: isPending ? "Signing in..." : "Continue with Google"
        }
      ),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground text-center", children: "By signing in, you agree to our Terms of Service and Privacy Policy." })
    ] })
  ] }) });
}
function Header() {
  const { data: session, isPending } = authClient.useSession();
  const navigate = useNavigate();
  const router2 = useRouter();
  const [showSignInModal, setShowSignInModal] = useState(false);
  const handleCreateRecipe = () => {
    if (session && !isPending) {
      navigate({ to: "/add-recipe" });
    } else {
      setShowSignInModal(true);
    }
  };
  const handleSignInSuccess = () => {
    setShowSignInModal(false);
    navigate({ to: "/add-recipe" });
  };
  const handleSignOut = () => {
    authClient.signOut().then(() => {
      router2.invalidate();
    });
  };
  return /* @__PURE__ */ jsx("header", { className: "sticky mx-auto top-0 z-50 max-w-7xl *: border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60", children: /* @__PURE__ */ jsxs("div", { className: "container flex h-16 items-center justify-between", children: [
    /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxs(Link, { to: "/", preload: "intent", className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx(ChefHat, { className: "h-6 w-6" }),
      /* @__PURE__ */ jsx("span", { className: "hidden font-bold sm:inline-block", children: "Reciped" })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
      /* @__PURE__ */ jsx(Button, { onClick: handleCreateRecipe, children: "Add Recipe" }),
      isPending ? /* @__PURE__ */ jsx("span", { children: "loading" }) : /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(DropdownMenu, { children: [
        /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsx(
          Button,
          {
            variant: "ghost",
            className: "relative h-8 w-8 rounded-full",
            children: /* @__PURE__ */ jsxs(Avatar, { className: "h-8 w-8", children: [
              /* @__PURE__ */ jsx(AvatarImage, { src: session?.user.image || "", alt: "User" }),
              /* @__PURE__ */ jsx(AvatarFallback, { children: session?.user.name.charAt(0).toUpperCase() })
            ] })
          }
        ) }),
        /* @__PURE__ */ jsxs(DropdownMenuContent, { align: "end", className: "w-56", children: [
          /* @__PURE__ */ jsx("div", { className: "flex items-center justify-start gap-2 p-2", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-1 leading-none", children: [
            /* @__PURE__ */ jsx("p", { className: "font-medium", children: session?.user.name }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: session?.user.email })
          ] }) }),
          /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
          /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsxs(Link, { to: "/my-recipes", className: "cursor-pointer", children: [
            /* @__PURE__ */ jsx(Pizza, { className: "mr-2 h-4 w-4" }),
            /* @__PURE__ */ jsx("span", { children: "My Recipes" })
          ] }) }),
          /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
          /* @__PURE__ */ jsx(
            DropdownMenuItem,
            {
              className: "cursor-pointer text-destructive focus:text-destructive",
              onClick: handleSignOut,
              children: /* @__PURE__ */ jsx("span", { children: "Sign out" })
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(
        SignInModal,
        {
          open: showSignInModal,
          onOpenChange: setShowSignInModal,
          onSignInSuccess: handleSignInSuccess
        }
      )
    ] })
  ] }) });
}
function NotFound({ children }) {
  return /* @__PURE__ */ jsxs("div", { className: "space-y-2 p-2", children: [
    /* @__PURE__ */ jsx("div", { className: "text-gray-600 dark:text-gray-400", children: children || /* @__PURE__ */ jsx("p", { children: "The page you are looking for does not exist." }) }),
    /* @__PURE__ */ jsxs("p", { className: "flex items-center gap-2 flex-wrap", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => window.history.back(),
          className: "bg-emerald-500 text-white px-2 py-1 rounded-sm uppercase font-black text-sm",
          children: "Go back"
        }
      ),
      /* @__PURE__ */ jsx(
        Link,
        {
          to: "/",
          className: "bg-cyan-600 text-white px-2 py-1 rounded-sm uppercase font-black text-sm",
          children: "Start Over"
        }
      )
    ] })
  ] });
}
const appCss = "/assets/app-iflt2Yrp.css";
const seo = ({
  title,
  description,
  keywords,
  image
}) => {
  const tags = [
    { title },
    { name: "description", content: description },
    { name: "keywords", content: keywords },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:creator", content: "@tannerlinsley" },
    { name: "twitter:site", content: "@tannerlinsley" },
    { name: "og:type", content: "website" },
    { name: "og:title", content: title },
    { name: "og:description", content: description },
    ...image ? [
      { name: "twitter:image", content: image },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "og:image", content: image }
    ] : []
  ];
  return tags;
};
const Route$5 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      {
        charSet: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      ...seo({
        title: "TanStack Start | Type-Safe, Client-First, Full-Stack React Framework",
        description: `TanStack Start is a type-safe, client-first, full-stack React framework. `
      })
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png"
      },
      { rel: "manifest", href: "/site.webmanifest", color: "#fffff" },
      { rel: "icon", href: "/favicon.ico" }
    ],
    scripts: [
      {
        src: "/customScript.js",
        type: "text/javascript"
      }
    ]
  }),
  errorComponent: DefaultCatchBoundary,
  notFoundComponent: () => /* @__PURE__ */ jsx(NotFound, {}),
  shellComponent: RootDocument,
  beforeLoad: async () => {
    const userID = await getUserID();
    return { userID };
  }
});
function RootDocument({ children }) {
  return /* @__PURE__ */ jsxs("html", { children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      /* @__PURE__ */ jsx(Header, {}),
      /* @__PURE__ */ jsx("hr", {}),
      children,
      /* @__PURE__ */ jsx(TanStackRouterDevtools, { position: "bottom-right" }),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const prisma = new PrismaClient();
const getRecipes_createServerFn_handler = createSsrRpc("74faf26fd30e3c269bbe0ae3c5b126080793e05d28a6e57dca4b09bf30d6c5c7");
const getRecipes = createServerFn().handler(getRecipes_createServerFn_handler, async () => {
  const recipes = await prisma.recipe.findMany({
    where: {
      isPublic: true
    }
  });
  if (!recipes) {
    throw new Error("Failed to fetch recipes");
  }
  return recipes;
});
const getRecipeById_createServerFn_handler = createSsrRpc("e4bfad61c10d60f438035f7214d8e206941f90e71fc70c4af8ac4422dca76b76");
const getRecipeById = createServerFn().inputValidator((id) => id).handler(getRecipeById_createServerFn_handler, async ({
  data
}) => {
  const recipe = await prisma.recipe.findUnique({
    where: {
      id: data
    },
    include: {
      author: true
    }
  });
  if (!recipe) {
    throw new Error(`Recipe with ID ${data} not found`);
  }
  return recipe;
});
const getAuthorRecipes_createServerFn_handler = createSsrRpc("593702240603f4780e3a1e2164c3c79a86337f902f701e8d989a3bec40c37670");
createServerFn().inputValidator((authorId) => authorId).handler(getAuthorRecipes_createServerFn_handler, async ({
  data
}) => {
  const recipes = await prisma.recipe.findMany({
    where: {
      authorId: data
    },
    include: {
      author: true
    }
  });
  if (!recipes) {
    throw new Error(`No recipes found for author with ID ${data}`);
  }
  return recipes;
});
const createRecipe_createServerFn_handler = createSsrRpc("4b98f17c19c7990b1829caaf27f96a57b69d0392d17e02b3eb20272965f2459b");
const createRecipe = createServerFn({
  method: "POST"
}).inputValidator((data) => data).handler(createRecipe_createServerFn_handler, async ({
  data
}) => {
  const authorId = await getUserID();
  if (!authorId) {
    throw new Error("Author ID is required to create a recipe");
  }
  try {
    const {
      title,
      overview,
      ingredients,
      steps,
      difficulty,
      cookTime
    } = data;
    const newRecipe = await prisma.recipe.create({
      data: {
        title,
        overview,
        ingredients,
        steps,
        difficulty,
        cookTime,
        authorId
      }
    });
    if (!newRecipe) {
      throw new Error("Failed to create recipe");
    }
  } catch (error) {
    console.error("Error creating recipe:", error);
    throw new Error("Failed to create recipe");
  }
});
const updateRecipe_createServerFn_handler = createSsrRpc("880a00448ed4cc047ab33669ed8cfe63cc32b202f82024042d71c85f6c5b4efb");
createServerFn({
  method: "POST"
}).inputValidator((data) => data).handler(updateRecipe_createServerFn_handler, async ({
  data
}) => {
  try {
    const {
      id,
      title,
      overview,
      ingredients,
      steps,
      difficulty,
      cookTime,
      isPublic
    } = data;
    const updatedRecipe = await prisma.recipe.update({
      where: {
        id
      },
      data: {
        title,
        overview,
        ingredients,
        steps,
        difficulty,
        cookTime,
        isPublic
      }
    });
    if (!updatedRecipe) {
      throw new Error(`Failed to update recipe with ID ${id}`);
    }
    return updatedRecipe;
  } catch (error) {
    console.error("Error updating recipe:", error);
    throw new Error("Failed to update recipe");
  }
});
const $$splitComponentImporter$3 = () => import("./index-DspuCRfS.js");
const getRecipesQueryOptions = () => queryOptions({
  queryKey: ["recipes"],
  queryFn: getRecipes
  // staleTime: 5 * 60 * 1000, // 5 minutes
});
const Route$4 = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component"),
  loader: ({
    context
  }) => {
    context.queryClient.prefetchQuery(getRecipesQueryOptions());
  }
});
const $$splitComponentImporter$2 = () => import("./index-CzWDcaJL.js");
const Route$3 = createFileRoute("/my-recipes/")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./index-mlOoNl2a.js");
const Route$2 = createFileRoute("/add-recipe/")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component"),
  pendingComponent: () => /* @__PURE__ */ jsx("div", { children: "Loading..." }),
  loader: async ({
    context: ctx
  }) => {
    if (!ctx.userID) {
      throw redirect({
        to: "/"
      });
    }
  },
  staleTime: 5 * 60 * 1e3
  // 5 minutes
});
const $$splitComponentImporter = () => import("./index-B2EZCfLR.js");
const Route$1 = createFileRoute("/recipes/$id/")({
  component: lazyRouteComponent($$splitComponentImporter, "component"),
  loader: async ({
    params
  }) => {
    const {
      id
    } = params;
    const recipe = getRecipeById({
      data: id
    });
    return recipe;
  }
});
const Route = createFileRoute("/api/auth/$")({
  server: {
    handlers: {
      GET: ({ request }) => {
        return auth.handler(request);
      },
      POST: ({ request }) => {
        return auth.handler(request);
      }
    }
  }
});
const IndexRoute = Route$4.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$5
});
const MyRecipesIndexRoute = Route$3.update({
  id: "/my-recipes/",
  path: "/my-recipes/",
  getParentRoute: () => Route$5
});
const AddRecipeIndexRoute = Route$2.update({
  id: "/add-recipe/",
  path: "/add-recipe/",
  getParentRoute: () => Route$5
});
const RecipesIdIndexRoute = Route$1.update({
  id: "/recipes/$id/",
  path: "/recipes/$id/",
  getParentRoute: () => Route$5
});
const ApiAuthSplatRoute = Route.update({
  id: "/api/auth/$",
  path: "/api/auth/$",
  getParentRoute: () => Route$5
});
const rootRouteChildren = {
  IndexRoute,
  AddRecipeIndexRoute,
  MyRecipesIndexRoute,
  ApiAuthSplatRoute,
  RecipesIdIndexRoute
};
const routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
function getRouter() {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    defaultPreload: "intent",
    defaultErrorComponent: DefaultCatchBoundary,
    defaultNotFoundComponent: () => /* @__PURE__ */ jsx(NotFound, {}),
    scrollRestoration: true
  });
  setupRouterSsrQueryIntegration({
    router: router2,
    queryClient
  });
  return router2;
}
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Button as B,
  Route$1 as R,
  authClient as a,
  createRecipe as b,
  cn as c,
  getRecipes as g,
  router as r
};
