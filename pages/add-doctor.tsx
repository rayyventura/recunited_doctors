/* eslint-disable @next/next/no-img-element */
import axios from 'axios';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Link from 'next/link';
import Form from '../components/Forms';

export default function AddDoctor() {
  const initial = {
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    areaOfExpertise: '',
    facility: '',
    profileImage: '',
  };
  const [formData, setFormData] = useState({
    ...initial,
  });
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  async function handleSubmit(e: any) {
    e.preventDefault();

    try {
      await axios.post(`${baseUrl}/doctors/create`, formData);
      setFormData({ ...initial });
      Swal.fire({
        icon: 'success',
        text: 'The doctor was added successfully',
        background: '#dafde1',
        confirmButtonColor: '#006deb',
        color: '#010118',
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function handleChange(name: string, value: string) {
    setFormData({ ...formData, [name]: value });
  }
  return (
    <div className="flex flex-col items-center justify-start min-h-screen space-y-5 bg-gradient-to-r from-cyan-500 via-sky-200 to-cyan-500">
      <Link href="/">
        <img
          src="undo.png"
          alt="return"
          className="self-start w-5 h-5 mt-5 ml-10 cursor-pointer"
        />
      </Link>
      <Form
        title="Add a New Doctor"
        formData={formData}
        setFormData={setFormData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
