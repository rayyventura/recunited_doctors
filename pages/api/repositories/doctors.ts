import { Doctor } from '@prisma/client';
import { prisma } from '../../../lib/prisma';

interface Doctors {
  firstName?: string;
  lastName?: string;
  email?: string;
  city?: string;
  areaOfExpertise?: string;
  facility?: string;
  profileImage?: string;
}

async function update(id: number, data: Doctors) {
  await prisma.doctor.update({
    where: {
      id: id,
    },
    data: {
      ...data,
    },
  });
}

async function findUnique(id: number) {
  const doctor = await prisma.doctor.findUnique({
    where: {
      id: id,
    },
  });
  return doctor;
}

async function deleteDoctor(id: number) {
  await prisma.doctor.delete({
    where: {
      id: id,
    },
  });
}

async function create(data: Omit<Doctor, 'id'>) {
  await prisma.doctor.create({
    data: {
      ...data,
    },
  });
}

export { update, create, deleteDoctor, findUnique };
