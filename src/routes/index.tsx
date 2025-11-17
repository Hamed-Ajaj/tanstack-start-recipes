import { Await, createFileRoute, redirect } from "@tanstack/react-router";
import authClient from "~/lib/auth-client";
import { getUserID } from "~/lib/auth-server";
import { getRecipes } from "~/utils/server-actions/recipe";
import RecipeCard from "~/components/recipe-card";
import { Suspense } from "react";
import {
  queryOptions,
  useQuery,
  useSuspenseQuery,
} from "@tanstack/react-query";

const getRecipesQueryOptions = () =>
  queryOptions({
    queryKey: ["recipes"],
    queryFn: getRecipes,
    // staleTime: 5 * 60 * 1000, // 5 minutes
  });

export const Route = createFileRoute("/")({
  component: Home,
  loader: ({ context }) => {
    context.queryClient.prefetchQuery(getRecipesQueryOptions());
  },
});

function Home() {
  const { data: recipes, isLoading } = useQuery(getRecipesQueryOptions());
  if (isLoading) {
    return <div>Loading recipes...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col max-w-7xl mx-auto">
      <main className="flex-1 container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Featured Recipes</h1>
          <p className="text-muted-foreground">
            Discover delicious recipes from our community.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </main>
    </div>
  );
}
