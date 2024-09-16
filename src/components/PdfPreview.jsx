import React from 'react';
import { useNavigate } from 'react-router-dom';

const PdfPreview = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Top Section */}
      <div className="flex justify-between items-center mb-4">
        <div className="text-lg font-bold">
          Edition - JANUARY 2023
        </div>
        <button
          className="bg-red-600 text-white px-4 py-2 rounded"
          onClick={() => navigate('/book-store')}
        >
          Buy Now
        </button>
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

      {/* PDF Preview Section */}
      <div className="bg-gray-300 w-full h-[600px] flex flex-col justify-between items-center mb-4">
        <div className="w-full flex justify-between p-2 text-sm text-gray-600">
          <span>1 of 3</span>
          <span>...</span>
        </div>
        <div className="text-center text-gray-700">
          PDF Preview
        </div>
        <div className="w-full flex justify-between p-2">
          {/* Placeholder for any bottom controls if needed */}
        </div>
      </div>
    </div>
  );
};

export default PdfPreview;
