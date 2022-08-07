/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import Head from 'next/head';

import Link from 'next/link';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Doctor from './components/Doctor';

export interface Doctors {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  areaOfExpertise: string;
  facility: string;
  profileImage: string;
}
export default function Home() {
  const [doctors, setDoctors] = useState<Doctors[]>();
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  console.log(baseUrl);
  async function handleChange(e: any) {
    const searchData = { filter: e.target.value };
    const doctors = await axios.post(`${baseUrl}/api/doctors/read`, searchData);

    setDoctors(doctors.data);
  }

  return (
    <div className="flex flex-col items-center justify-start w-full min-h-screen space-y-10 bg-gradient-to-r from-cyan-500 via-sky-200 to-cyan-500">
      <div className="flex flex-row items-center justify-center w-screen gap-2 mt-5">
        <label className="relative block w-8/12">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <img src="search.png" alt="search" className="w-5" />
          </span>
          <input
            type="text"
            className="w-full py-2 pr-3 bg-white border rounded-md shadow-sm placeholder:text-slate-400 border-slate-300 pl-9 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Search for a doctor..."
            name="search"
            onChange={(e) => handleChange(e)}
          />
        </label>
        <Link href="add-doctor">
          <img src="add.png" alt="add" className="w-8 h-8 cursor-pointer" />
        </Link>
      </div>
      <div className="flex flex-row flex-wrap items-center justify-center gap-4">
        {doctors &&
          doctors.map((doctor) => (
            <Doctor {...doctor} setDoctors={setDoctors} key={doctor.id} />
          ))}
      </div>
    </div>
  );
}
