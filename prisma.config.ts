import { defineConfig, env } from "prisma/config";
import "dotenv"

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: 'tsx prisma/seed.ts',
  },
  engine: "classic",
  datasource: {
    url: "postgresql://user:password@localhost:5432/tanstackrecipesdb"
  },
});
