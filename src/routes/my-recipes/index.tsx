import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/my-recipes/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/my-recipes/"!</div>;
}
