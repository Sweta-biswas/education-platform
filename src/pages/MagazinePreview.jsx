import React from 'react';
import { useNavigate } from 'react-router-dom';

const MagazinePreview = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Top Section */}
      <div className="flex justify-between items-center mb-4">
        <div className="text-lg font-bold">
          Edition - JANUARY 2023
        </div>
        <div className="flex space-x-2">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={() => navigate('/pdf-preview')}
          >
            Preview
          </button>
          <button
            className="bg-red-600 text-white px-4 py-2 rounded"
            onClick={() => navigate('/book-store')}
          >
            Buy Now
          </button>
        </div>
      </div>

      {/* Filter Section */}
      <div className="flex justify-end items-center mb-4 space-x-2">
        <label className="text-sm text-gray-600">Filter By:</label>
        <select className="border border-gray-300 rounded px-2 py-1 text-sm">
          <option>Select Year</option>
        </select>
        <select className="border border-gray-300 rounded px-2 py-1 text-sm">
          <option>Select Stream</option>
        </select>
      </div>

      {/* Image Preview Section */}
      <div className="bg-gray-300 w-full h-96 flex items-center justify-center mb-4">
        <span className="text-gray-700">Image Preview</span>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center space-x-2 mb-4">
        <button className="bg-red-500 text-white p-2 rounded-full">
          <span>&larr;</span>
        </button>
        <button className="bg-red-500 text-white p-2 rounded-full">
          <span>&rarr;</span>
        </button>
      </div>

      {/* Thumbnails Section */}
      <div className="flex justify-center space-x-4">
        {[1, 2, 3, 4, 5].map((item) => (
          <div key={item} className="bg-gray-300 w-20 h-28"></div>
        ))}
      </div>
    </div>
  );
};

export default MagazinePreview;
