'use client'

import React, { FormEvent, useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [images, setImages] = useState<File[]>([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [fund, setFund] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImages = e.target.files;
    
    if (selectedImages) {
      // Convert FileList to array
      const selectedImagesArray = Array.from(selectedImages);
      setImages(selectedImagesArray.slice(0, 5)); // Limit to 5 images
    }
  };

  return (
    <form className='p-11' onSubmit={handleSubmit}>
      <div className='py-3'>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          className='w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400'
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className='py-3'>
      <label className="block text-sm font-semibold mb-1">Images (up to 5):</label>
        <label
          htmlFor="imageInput"
          className="w-full p-4 border border-gray-300 bg-white rounded-lg flex justify-center items-center cursor-pointer hover:border-blue-500 hover:bg-blue-100 transition duration-300"
        >
          <svg
            className="w-6 h-6 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
          <span className="ml-2">Choose Images</span>
          <input
            id="imageInput"
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="hidden"
          />
        </label>
      </div>
      <div className='py-3'>
        <label>Start Date:</label>
        <input
          type="date"
          value={startDate}
          className='w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400'
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>
      <div className='py-3'>
        <label>End Date:</label>
        <input
          type="date"
          value={endDate}
          className='w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400'
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
      <div className='py-3'>
        <label>Funds:</label>
        <input
          type="text"
          value={fund}
          className='w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400'
          onChange={(e) => setFund(e.target.value)}
        />
      </div>
      <div className='py-3'>
        <label>Story:</label>
        <textarea
          value={description}
          className='w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400'
          rows={4}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit" className='bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-600 mt-4'>Create Project</button>
    </form>
  );
};

export default ContactForm;
