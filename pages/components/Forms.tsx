import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function Form({
  title,
  formData,
  handleSubmit,
  handleChange,
}: any) {
  const areaOfExpertise = [
    'Allergy and Immunology',
    'Anesthesiology',
    'Colon and Rectal Surgery',
    'Dermatology',
    'Emergency Medicine',
  ];
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center w-full space-y-4"
    >
      <h1 className="font-sans text-4xl font-bold text-dark">{title}</h1>
      <label className="relative block w-8/12">
        <input
          type="text"
          className="block w-full py-2 pr-3 bg-white border rounded-md shadow-sm placeholder:text-slate-400 border-slate-300 pl-9 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
      </label>
      <label className="relative block w-8/12">
        <input
          type="text"
          className="block w-full py-2 pr-3 bg-white border rounded-md shadow-sm placeholder:text-slate-400 border-slate-300 pl-9 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
      </label>
      <label className="relative block w-8/12">
        <input
          type="text"
          className="block w-full py-2 pr-3 bg-white border rounded-md shadow-sm placeholder:text-slate-400 border-slate-300 pl-9 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
      </label>
      <label className="relative block w-8/12">
        <input
          type="text"
          className="block w-full py-2 pr-3 bg-white border rounded-md shadow-sm placeholder:text-slate-400 border-slate-300 pl-9 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="City"
          name="city"
          value={formData.city}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
      </label>
      <Autocomplete
        sx={{
          width: '67%',
          backgroundColor: 'white',
          borderRadius: '9px',
        }}
        id="areaOfExpertise"
        value={formData.areaOfExpertise}
        options={areaOfExpertise.map((option: any) => option)}
        autoComplete={true}
        onInputChange={(e, value) => handleChange('areaOfExpertise', value)}
        renderInput={(params) => (
          <TextField
            {...params}
            required
            size="small"
            label="Area of Expertise"
          />
        )}
      />
      <label className="relative block w-8/12">
        <input
          type="text"
          className="block w-full py-2 pr-3 bg-white border rounded-md shadow-sm placeholder:text-slate-400 border-slate-300 pl-9 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Facility"
          name="facility"
          value={formData.facility}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
      </label>
      <label className="relative block w-8/12">
        <input
          type="text"
          className="block w-full py-2 pr-3 bg-white border rounded-md shadow-sm placeholder:text-slate-400 border-slate-300 pl-9 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Profile Image"
          name="profileImage"
          value={formData.profileImage}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
      </label>
      <button
        type="submit"
        className="w-1/6 h-10 text-xl font-bold text-white rounded-md bg-clear-blue hover:opacity-80"
      >
        Finish
      </button>
      <footer></footer>
    </form>
  );
}
