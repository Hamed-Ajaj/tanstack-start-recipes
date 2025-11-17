import { createFileRoute } from "@tanstack/react-router";
import { getRecipeById } from "~/utils/server-actions/recipe";

export const Route = createFileRoute("/recipes/$id/")({
  component: RouteComponent,
  loader: async ({ params }) => {
    const { id } = params;
    const recipe = getRecipeById({
      data: id,
    });
    return recipe;
  },
});

function RouteComponent() {
  const { id } = Route.useParams();
  const recipe = Route.useLoaderData();
  console.log("recipe:", recipe);

  return <div>Hello "/recipe/${id}"!</div>;
}
