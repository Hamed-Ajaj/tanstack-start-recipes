
import { PrismaClient, difficultyLevel } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create user
  const user = await prisma.user.create({
    data: {
      email: "hamed@example.com",
      name: "Hamed",
      emailVerified: true,
      image: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  // Create 3 recipes
  await prisma.recipe.createMany({
    data: [
      {
        title: "Simple Salad",
        overview: "A quick fresh salad.",
        ingredients: ["Lettuce", "Tomato", "Cucumber", "Salt"],
        steps: ["Wash ingredients", "Cut", "Mix everything"],
        difficulty: difficultyLevel.EASY,
        cookTime: 5,
        authorId: user.id,
      },
      {
        title: "Creamy Pasta",
        overview: "Penne pasta with creamy cheese sauce.",
        ingredients: ["Pasta", "Cream", "Cheese", "Olive oil"],
        steps: ["Boil pasta", "Cook sauce", "Combine"],
        difficulty: difficultyLevel.MEDIUM,
        cookTime: 25,
        authorId: user.id,
      },
      {
        title: "Roasted Chicken",
        overview: "Crispy oven-roasted chicken with spices.",
        ingredients: ["Chicken", "Salt", "Pepper", "Garlic", "Olive oil"],
        steps: ["Season chicken", "Preheat oven", "Roast for 90 minutes"],
        difficulty: difficultyLevel.HARD,
        cookTime: 90,
        authorId: user.id,
      },
    ],
  });

  // Create an account
  await prisma.account.create({
    data: {
      id: "acc_1",
      accountId: "google_123",
      providerId: "google",
      userId: user.id,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  // Create a session
  await prisma.session.create({
    data: {
      id: "sess_1",
      token: "session_token_123",
      userId: user.id,
      createdAt: new Date(),
      updatedAt: new Date(),
      expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24), // +1 day
      ipAddress: "127.0.0.1",
      userAgent: "Mozilla/5.0",
    },
  });

  // Create verification record
  await prisma.verification.create({
    data: {
      id: "verify_1",
      identifier: "email",
      value: "123456",
      expiresAt: new Date(Date.now() + 1000 * 60 * 15), // +15 mins
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  console.log("Database seeded successfully!");
}

main()
  .catch((err) => {
    console.error("Error seeding database:", err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
