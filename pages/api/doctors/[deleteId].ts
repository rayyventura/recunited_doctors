import { NextApiRequest, NextApiResponse } from 'next';
import { create, deleteDoctor } from '../repositories/doctors';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'DELETE') {
    console.log(req.method);
    const id = req.query.deleteId;
    console.log(id);
    await deleteDoctor(Number(id));
    res.status(200).send('Successfully Deleted');
  } else {
    console.log(req.method);
    res.status(200);
  }
}
