'use client'

import React, { FormEvent, useState } from 'react';
import ApiService from './ApiService';

const ContactForm = () => {
  const [title, setTitle] = useState('');
  const [images, setImages] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [fundingGoal, setFundingGoal] = useState('');
  const [description, setDescription] = useState('');
  const [projectId, setProjectId] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const projectData = {
      title,
      startDate,
      endDate,
      fundingGoal,
      description,
    };

    try {
      const responseProjectData = await ApiService.createProjectAndGetId(projectData);
      const id = responseProjectData;
      setProjectId(id);

      if (projectId) {
        await ApiService.createProjectImage(images, projectId);
      }

      // Handle success or navigate to another page
    } catch (error) {
      console.error('Error creating project:', error);
    }
  };

  const handleImageChange = (e) => {
    const selectedImages = e.target.files;

    if (selectedImages) {
      const selectedImagesArray = Array.from(selectedImages).slice(0, 5);
      setImages(selectedImagesArray);
    }
  };

  return (
          <form className='p-11' onSubmit={handleSubmit}>
          <div className='py-3'>
          <label>Name:</label>
          <input
          type="text"
          value={title}
          className='w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400'
          onChange={(e) => setTitle(e.target.value)}
          />
          </div>

          <div className='py-3'>
          <label>Images(up to 5):</label>
          <label
          htmlFor="imageInput"
          className="w-full p-4 border border-gray-300 bg-white rounded-lg flex flex-col justify-center items-center cursor-pointer hover:border-blue-500 hover:bg-blue-100 transition duration-300"
          >
          <svg
          className={`w-6 h-6 text-gray-400 ${images.length > 0 ? 'hidden' : 'block'}`}
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
              <span className={`mt-2 ${images.length > 0 ? 'hidden' : 'block'}`}>
              Choose Images
              </span>
              <input
              id="imageInput"
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageChange}
          className="hidden"
              />
              {images.length > 0 && (
                      <div className="mt-2">
                      <p className="text-sm font-medium text-gray-600">
                      Selected Images:
                      </p>
                      <ul className="list-disc pl-5">
                      {images.map((image, index) => (
                                  <li key={index} className="mt-1 text-gray-600">
                                  {image.name}
                                  </li>
                                  ))}
                      </ul>
                      </div>
                      )}
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
              value={fundingGoal}
          className='w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400'
              onChange={(e) => setFundingGoal(e.target.value)}
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
