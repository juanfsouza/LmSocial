import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@prisma/client';
import { getAuth } from '@clerk/nextjs/server';

const prismaClient = new prisma.PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { userId, desc } = req.body;

  if (!userId || !desc) {
    return res.status(400).json({ message: 'Missing userId or description' });
  }

  try {
    const post = await prismaClient.post.create({
      data: {
        userId,
        desc,
      },
    });

    return res.status(201).json(post);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Failed to create post' });
  }
}
