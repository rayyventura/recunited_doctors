import { NextApiRequest, NextApiResponse } from 'next';
import { create } from '../repositories/doctors';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const createData = req.body;
  await create(createData);
  res.status(200).send('Successfully Deleted');
}
