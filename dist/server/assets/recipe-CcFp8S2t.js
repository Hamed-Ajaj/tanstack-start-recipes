import { a as createServerRpc, c as createServerFn } from "../server.js";
import { PrismaClient } from "@prisma/client";
import { g as getUserID } from "./auth-server-BTQhBpSc.js";
import "node:async_hooks";
import "react/jsx-runtime";
import "@tanstack/react-router/ssr/server";
import "@tanstack/react-router";
import "./auth-middleware-BYLupTBh.js";
import "better-auth";
import "better-auth/react-start";
import "better-auth/adapters/prisma";
import "node:process";
import "node:path";
import "node:url";
import "@prisma/client/runtime/library";
const prisma = new PrismaClient();
const getRecipes_createServerFn_handler = createServerRpc("74faf26fd30e3c269bbe0ae3c5b126080793e05d28a6e57dca4b09bf30d6c5c7", (opts, signal) => {
  return getRecipes.__executeServer(opts, signal);
});
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
const getRecipeById_createServerFn_handler = createServerRpc("e4bfad61c10d60f438035f7214d8e206941f90e71fc70c4af8ac4422dca76b76", (opts, signal) => {
  return getRecipeById.__executeServer(opts, signal);
});
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
const getAuthorRecipes_createServerFn_handler = createServerRpc("593702240603f4780e3a1e2164c3c79a86337f902f701e8d989a3bec40c37670", (opts, signal) => {
  return getAuthorRecipes.__executeServer(opts, signal);
});
const getAuthorRecipes = createServerFn().inputValidator((authorId) => authorId).handler(getAuthorRecipes_createServerFn_handler, async ({
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
const createRecipe_createServerFn_handler = createServerRpc("4b98f17c19c7990b1829caaf27f96a57b69d0392d17e02b3eb20272965f2459b", (opts, signal) => {
  return createRecipe.__executeServer(opts, signal);
});
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
const updateRecipe_createServerFn_handler = createServerRpc("880a00448ed4cc047ab33669ed8cfe63cc32b202f82024042d71c85f6c5b4efb", (opts, signal) => {
  return updateRecipe.__executeServer(opts, signal);
});
const updateRecipe = createServerFn({
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
const toggleRecipeVisibility_createServerFn_handler = createServerRpc("7d0040cf4946a80c9f79c63d09f5e51717f18a6962c1646a46e2ff0c8de6e966", (opts, signal) => {
  return toggleRecipeVisibility.__executeServer(opts, signal);
});
const toggleRecipeVisibility = createServerFn({
  method: "POST"
}).inputValidator((data) => data).handler(toggleRecipeVisibility_createServerFn_handler, async ({
  data
}) => {
  try {
    const updatedRecipe = await prisma.recipe.update({
      where: {
        id: data.id
      },
      data: {
        isPublic: !data.isPublic
      }
    });
    if (!updatedRecipe) {
      throw new Error(`Failed to update visibility for recipe with ID ${data.id}`);
    }
    return updatedRecipe;
  } catch (error) {
    console.error("Error toggling recipe visibility:", error);
    throw new Error("Failed to toggle recipe visibility");
  }
});
const deleteRecipe_createServerFn_handler = createServerRpc("2af54a2501ad862b75d32b935b021263103cba8b6a1e2565b7aaac8e6ae007f7", (opts, signal) => {
  return deleteRecipe.__executeServer(opts, signal);
});
const deleteRecipe = createServerFn({
  method: "POST"
}).inputValidator((id) => id).handler(deleteRecipe_createServerFn_handler, async ({
  data
}) => {
  try {
    const deletedRecipe = await prisma.recipe.delete({
      where: {
        id: data
      }
    });
    if (!deletedRecipe) {
      throw new Error(`Failed to delete recipe with ID ${data}`);
    }
    return {
      message: "Recipe deleted successfully"
    };
  } catch (error) {
    console.error("Error deleting recipe:", error);
    throw new Error("Failed to delete recipe");
  }
});
export {
  createRecipe_createServerFn_handler,
  deleteRecipe_createServerFn_handler,
  getAuthorRecipes_createServerFn_handler,
  getRecipeById_createServerFn_handler,
  getRecipes_createServerFn_handler,
  toggleRecipeVisibility_createServerFn_handler,
  updateRecipe_createServerFn_handler
};
