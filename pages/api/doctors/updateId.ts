import { NextApiRequest, NextApiResponse } from 'next';
import { create, update } from '../repositories/doctors';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.query.updateId;
  const updateData = req.body.data;
  await update(Number(id), updateData);
  res.status(201).send('Successfully Updated');
  res.status(200).send('Successfully Deleted');
}
