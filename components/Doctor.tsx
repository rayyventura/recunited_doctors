/* eslint-disable @next/next/no-img-element */
import axios from 'axios';
import Link from 'next/link';
import React from 'react';
import Swal from 'sweetalert2';

export default function Doctor({
  id,
  firstName,
  lastName,
  email,
  city,
  areaOfExpertise,
  facility,
  profileImage,
  setDoctors,
}: any) {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  async function handleDelete() {
    Swal.fire({
      icon: 'question',
      text: 'Do you want to delete the doctor?',
      background: '#dafde1',
      color: '#010118',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `Quit`,
      confirmButtonColor: '#006deb',
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: 'Successfully',
          confirmButtonColor: '#006deb',
        });
        await axios.delete(`${baseUrl}/doctors/${id}`);
        setDoctors([]);
      } else if (result.isDenied) {
        Swal.fire({
          icon: 'info',
          title: 'Changes were not saved',
          confirmButtonColor: '#006deb',
        });
      }
    });
  }

  return (
    <div className="w-56 h-56 mb-40 bg-white rounded-md cursor-pointer">
      <img
        src={profileImage}
        alt="profile"
        className="object-cover w-56 h-56 mb-1 rounded-md hover:opacity-70"
      />
      <p className="font-bold text-dark-blue">
        {firstName} {lastName}, {city}
      </p>
      <p className=" text-dark-blue">
        {areaOfExpertise}, {facility}
      </p>
      <p className="text-sky-900 opacity-80 hover:opacity-100">{email}</p>
      <div className="flex flex-row">
        <img
          src="trash.png"
          alt="trash"
          className="w-8 h-8 "
          onClick={() => handleDelete()}
        />

        <Link href={`/doctors/${id}`}>
          <img src="update.png" alt="trash" className="w-8 h-8 " />
        </Link>
      </div>
    </div>
  );
}
