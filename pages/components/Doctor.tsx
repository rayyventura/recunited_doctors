/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Doctors } from '..';

export default function Doctor({
  id,
  firstName,
  lastName,
  email,
  city,
  areaOfExpertise,
  facility,
  profileImage,
}: Doctors) {
  return (
    <div className="w-56 h-56 bg-white rounded-md cursor-pointer ">
      <img
        src={profileImage}
        alt="profile"
        className="object-cover w-56 h-56 mb-1 rounded-md hover:opacity-70"
      />
      <p className="font-bold text-dark-blue">
        {firstName} {lastName}, {facility}
      </p>
      <p className=" text-dark-blue">
        {areaOfExpertise}, {city}
      </p>
      <p className="text-sky-900 opacity-80 hover:opacity-100">{email}</p>
    </div>
  );
}
