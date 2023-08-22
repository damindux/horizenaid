'use client'

import React, { useState } from 'react';

const images = [
  '/images/dummy.jpg', 
  '/images/dummy1.jpg',
  '/images/dummy2.jpg',
];

const ImageSlideshow: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="max-w-2xl h-auto"
      />
      <div className="absolute inset-0 flex items-center">
        <button
          className="absolute left-0 px-3 py-1 rounded-full bg-gray-200/20 hover:bg-gray-300"
          onClick={handlePrevClick}
        >
          &lt;
        </button>
        <button
          className="absolute right-0 px-3 py-1 rounded-full bg-gray-200/20 hover:bg-gray-300"
          onClick={handleNextClick}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ImageSlideshow;
