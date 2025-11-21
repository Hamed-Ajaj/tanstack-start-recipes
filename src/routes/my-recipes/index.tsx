import { ChefHat } from "lucide-react";
import RecipeCard from "~/components/recipe-card";
import { getAuthorRecipes } from "~/utils/server-actions/recipe";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { getUserID } from "~/lib/auth-server";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { Suspense } from "react";

const getAuthorRecipesQueryOptions = (userID: string) =>
  queryOptions({
    queryKey: ["author-recipes", userID],
    queryFn: () => getAuthorRecipes({ data: userID }),
    staleTime: Infinity,
  });

export const Route = createFileRoute("/my-recipes/")({
  component: RouteComponent,
  preload: true,
  beforeLoad: async () => {
    const userID = await getUserID();
    return { userID };
  },
  loader: async ({ context: ctx }) => {
    if (!ctx.userID) throw redirect({ to: "/" });

    await ctx.queryClient.prefetchQuery(getAuthorRecipesQueryOptions(ctx.userID));
    return ctx.userID;
  },
});

function RouteComponent() {
  const userID = Route.useLoaderData();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50">
      <main className="flex-1 container py-8 max-w-7xl mx-auto">
        <PageHeader />
        <Suspense fallback={<div>Loading recipes...</div>}>
          <RecipeContent userID={userID} />
        </Suspense>
      </main>
    </div>
  );
}

const PageHeader = () => (
  <div className="mb-8">
    <h1 className="text-3xl font-bold mb-2">My Recipes</h1>
    <p className="text-muted-foreground">Your personal recipe collection</p>
  </div>
);

const RecipeContent = ({ userID }: { userID: string }) => {
  const { data: recipes } = useSuspenseQuery(getAuthorRecipesQueryOptions(userID));

  if (!recipes || recipes.length === 0) return <EmptyState />;

  const publicRecipes = recipes.filter(r => r.isPublic).length;
  const privateRecipes = recipes.filter(r => !r.isPublic).length;

  return (
    <>
      <RecipeStats total={recipes.length} publicCount={publicRecipes} privateCount={privateRecipes} />
      <RecipeGrid recipes={recipes} />
    </>
  );
};

const RecipeStats = ({ total, publicCount, privateCount }: { total: number; publicCount: number; privateCount: number }) => (
  <div className="flex gap-4 mb-6">
    <StatCard value={total} label="Total Recipes" color="text-primary" />
    <StatCard value={publicCount} label="Public" color="text-green-600" />
    <StatCard value={privateCount} label="Private" color="text-orange-600" />
  </div>
);

const StatCard = ({ value, label, color }: { value: number; label: string; color: string }) => (
  <div className="bg-white rounded-lg border p-4 flex-1">
    <div className={`text-2xl font-bold ${color}`}>{value}</div>
    <div className="text-sm text-muted-foreground">{label}</div>
  </div>
);

const RecipeGrid = ({ recipes }: { recipes: Array<any> }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {recipes.map(recipe => (
      <RecipeCard key={recipe.id} recipe={recipe} />
    ))}
  </div>
);

const EmptyState = () => (
  <div className="text-center py-12">
    <div className="mx-auto w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-4">
      <ChefHat className="h-12 w-12 text-muted-foreground" />
    </div>
    <h3 className="text-lg font-semibold mb-2">No recipes yet</h3>
    <p className="text-muted-foreground mb-6 max-w-md mx-auto">
      Start building your recipe collection by creating your first recipe.
    </p>
  </div>
);
