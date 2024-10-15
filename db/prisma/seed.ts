import prisma from "../src";
async function main() {
  // Create dummy users
  const user1 = await prisma.user.create({
    data: {
      id: "aman",
      name: 'John Doe',
      imageUrl: 'https://example.com/johndoe.jpg',
      moodLog: {
        create: [
          {
            fullDate: new Date(),
            date:13,
            year:2024,
            month: 10,
            rating: 2,
          },
          {
            fullDate: new Date(),
            date:12,
            year:2024,
            month: 10,
            rating: 4,
          },
        ],
      },
    },
  });

  const user2 = await prisma.user.create({
    data: {
      id: "aryan",
      name: 'Jane Smith',
      imageUrl: 'https://example.com/janesmith.jpg',
      moodLog: {
        create: [
          {
            fullDate: new Date(),
            date:15,
            year:2024,
            month: 10,
            rating: 7,
          },
          {
            fullDate: new Date(),
            date:15,
            year:2024,
            month: 10,
            rating: 7,
          },
        ],
      },
    },
  });
  console.log({ user1, user2 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
});
