import prisma from "../src";
async function main() {
  // Create dummy users
  const user1 = await prisma.user.create({
    data: {
      id: "ashishtiwari2qwe1212",
      name: 'John Doe',
      imageUrl: 'https://example.com/johndoe.jpg',
      moodLog: {
        create: [
          {
            date: new Date(),
            year: 2024,
            month: 10,
            rating: 5,
          },
          {
            date: new Date(),
            year: 2024,
            month: 10,
            rating: 3,
          },
        ],
      },
    },
  });

  const user2 = await prisma.user.create({
    data: {
      id: "aryan12",
      name: 'Jane Smith',
      imageUrl: 'https://example.com/janesmith.jpg',
      moodLog: {
        create: [
          {
            date: new Date(),
            year: 2024,
            month: 10,
            rating: 4,
          },
          {
            date: new Date(),
            year: 2024,
            month: 10,
            rating: 2,
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
