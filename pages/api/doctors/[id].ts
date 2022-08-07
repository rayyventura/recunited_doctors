import { NextApiRequest, NextApiResponse } from 'next';
import {
  create,
  deleteDoctor,
  findUnique,
  update,
} from '../repositories/doctors';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.query.id;
  if (req.method === 'DELETE') {
    await deleteDoctor(Number(id));
    res.status(200).send('Successfully Deleted');
  } else if (req.method === 'PUT') {
    const updateData = req.body;
    await update(Number(id), updateData);
    res.status(201).send('Successfully Updated');
  } else if (req.method === 'GET') {
    const uniqueDoctor = await findUnique(Number(id));
    console.log(uniqueDoctor);
    res.status(200).send(uniqueDoctor);
  }
}
