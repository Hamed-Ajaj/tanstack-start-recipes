import { createFileRoute } from "@tanstack/react-router";
import { getRecipes } from "~/utils/server-actions/recipe";
import RecipeCard from "~/components/recipe-card";
import { Suspense } from "react";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";

// Create query options as a function
const getRecipesQueryOptions = () =>
  queryOptions({
    queryKey: ["recipes"],
    queryFn: getRecipes, // make sure this returns a Promise
  });

// Create the route
export const Route = createFileRoute("/")({
  component: Home,
  preload: true,
  loader: async ({ context: { queryClient } }) => {
    queryClient.prefetchQuery(getRecipesQueryOptions());
  },
});

function Home() {
  return (
    <div className="min-h-screen flex flex-col max-w-7xl mx-auto">
      <main className="flex-1 container py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Featured Recipes</h1>
          <p className="text-muted-foreground">
            Discover delicious recipes from our community.
          </p>
        </div>

        {/* Recipe list */}
        <Suspense fallback={<div>Loading recipes...</div>}>
          <RecipeList />
        </Suspense>
      </main>
    </div>
  );
}

// Recipe list component
const RecipeList = () => {
  const { data: recipes } = useSuspenseQuery(getRecipesQueryOptions());

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes?.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};
