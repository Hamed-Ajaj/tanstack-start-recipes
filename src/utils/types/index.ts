import { difficultyLevel } from "../config";
export type Recipe = {
  id: string;
  title: string | null;
  createdAt: Date;
  overview: string | null;
  ingredients: string[];
  steps: string[];
  difficulty: difficultyLevel | null;
  cookTime: number | null;
  isPublic: boolean;
  authorId: string;
};

export type RecipeInput = Omit<
  Recipe,
  "id" | "authorId" | "createdAt" | "updatedAt" | "isPublic"
>;
