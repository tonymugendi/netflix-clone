import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";
import { authOptions } from "@/pages/api/auth/[...nextauth]";


const serverAuth = async (req: NextApiRequest, res: NextApiResponse) => {
  const sesssion = await getServerSession(req, res, authOptions);

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
