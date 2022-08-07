import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Form from '../components/Forms';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';
import Link from 'next/link';

export default function UpdadeDoctor() {
  useEffect(() => {
    getData();
  }, []);

  const router = useRouter();
  const { id } = router.query;
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const [formData, setFormData] = useState<any>();

  async function getData() {
    const doctor = await axios.get(`${baseUrl}/api/doctors/${id}`);
    setFormData(doctor.data);
  }

  async function handleChange(name: string, value: string) {
    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(e: any) {
    e.preventDefault();

    try {
      await axios.put(`${baseUrl}/doctors/${id}`, formData);
      Swal.fire({
        icon: 'success',
        text: `${formData.firstName} ${formData.lastName} was successfully updated`,
        background: '#dafde1',
        confirmButtonColor: '#006deb',
        color: '#010118',
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        text: `It didn't work. Try later!`,
        background: '#dafde1',
        confirmButtonColor: '#006deb',
        color: '#010118',
      });
    }
  }
  return (
    <div className="flex flex-col items-center justify-start min-h-screen pt-2 space-y-5 bg-gradient-to-r from-cyan-500 via-sky-200 to-cyan-500">
      <Link href="/">
        <img
          src="../undo.png"
          alt="return"
          className="self-start w-5 h-5 mt-5 ml-10 cursor-pointer"
        />
      </Link>
      {formData && (
        <Form
          title={`${formData.firstName} ${formData.lastName}`}
          formData={formData}
          setFormData={setFormData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
}
