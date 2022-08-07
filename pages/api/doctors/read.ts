import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const searchData = req.body.filter;
    if (searchData === '') {
      const doctors = await prisma.doctor.findMany({ take: 5 });
      return res.status(200).send(doctors);
    }
    const doctors = await prisma.doctor.findMany({
      where: {
        OR: [
          {
            city: {
              contains: searchData,
              mode: 'insensitive',
            },
          },
          { facility: { contains: searchData, mode: 'insensitive' } },
          { areaOfExpertise: { contains: searchData, mode: 'insensitive' } },
        ],
      },
    });

    res.status(200).send(doctors);
  } catch (error) {
    console.log('Failed to get doctors data');
  }
}
