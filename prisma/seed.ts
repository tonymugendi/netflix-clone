import { PrismaClient } from "@prisma/client";
import { moviesData } from "./moviesData";

const prisma = new PrismaClient();

const main = async () => {
  try {
    await Promise.all(
      moviesData.map((movie) => {
        return prisma.movie.create({
          data: {
            title: movie.title,
            description: movie.description,
            videoUrl: movie.videoUrl,
            thumbnail: movie.thumbnailUrl,
            genre: movie.genre,
            duration: movie.duration,
          },
        });
      })
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

main();
