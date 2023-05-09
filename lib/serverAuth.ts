import { NextApiRequest } from "next";
import { getSession } from "next-auth/react";
import prisma from "@/lib/prisma";

const serverAuth = async (req: NextApiRequest) => {
  const sesssion = await getSession({ req });

  if (!sesssion?.user?.email) {
    throw new Error("Not signed in");
  }

  const currentUser = await prisma.user.findUnique({
    where: {
      email: sesssion.user.email,
    },
  });

  if (!currentUser) {
    throw new Error("Not signed in");
  }

  return { currentUser };

};

export default serverAuth;
