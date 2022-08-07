import React from 'react';

export default function Form({ formData, handleSubmit, handleChange }: any) {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center w-full space-y-4"
    >
      <h1 className="font-sans text-4xl font-bold text-dark">
        Add a New Doctor
      </h1>
      <label className="relative block w-8/12">
        <input
          type="text"
          className="block w-full py-2 pr-3 bg-white border rounded-md shadow-sm placeholder:text-slate-400 border-slate-300 pl-9 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={(e) => handleChange(e)}
        />
      </label>
      <label className="relative block w-8/12">
        <input
          type="text"
          className="block w-full py-2 pr-3 bg-white border rounded-md shadow-sm placeholder:text-slate-400 border-slate-300 pl-9 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={(e) => handleChange(e)}
        />
      </label>
      <label className="relative block w-8/12">
        <input
          type="text"
          className="block w-full py-2 pr-3 bg-white border rounded-md shadow-sm placeholder:text-slate-400 border-slate-300 pl-9 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={(e) => handleChange(e)}
        />
      </label>
      <label className="relative block w-8/12">
        <input
          type="text"
          className="block w-full py-2 pr-3 bg-white border rounded-md shadow-sm placeholder:text-slate-400 border-slate-300 pl-9 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="City"
          name="city"
          value={formData.city}
          onChange={(e) => handleChange(e)}
        />
      </label>
      <label className="relative block w-8/12">
        <input
          type="text"
          className="block w-full py-2 pr-3 bg-white border rounded-md shadow-sm placeholder:text-slate-400 border-slate-300 pl-9 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Area Of Expertise "
          name="areaOfExpertise"
          value={formData.areaOfExpertise}
          onChange={(e) => handleChange(e)}
        />
      </label>
      <label className="relative block w-8/12">
        <input
          type="text"
          className="block w-full py-2 pr-3 bg-white border rounded-md shadow-sm placeholder:text-slate-400 border-slate-300 pl-9 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Facility"
          name="facility"
          value={formData.facility}
          onChange={(e) => handleChange(e)}
        />
      </label>
      <label className="relative block w-8/12">
        <input
          type="text"
          className="block w-full py-2 pr-3 bg-white border rounded-md shadow-sm placeholder:text-slate-400 border-slate-300 pl-9 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Profile Image"
          name="profileImage"
          value={formData.profileImage}
          onChange={(e) => handleChange(e)}
        />
      </label>
      <button
        type="submit"
        className="w-1/6 h-10 text-xl font-bold text-white rounded-md bg-clear-blue hover:opacity-80"
      >
        {' '}
        Finish{' '}
      </button>
      <footer></footer>
    </form>
  );
}
