import React from 'react';
import backgroundImage from '../assets/coursebanner.png'; // Replace with your image path

const CoursesHeader= ({ title }) => {
  return (
    <div
      className="relative h-64 flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
    
      <div className="absolute inset-0 bg-white opacity-75"></div>
     <div>
     <h2 className="text-4xl font-semibold text-black text-shadow-md">{title}</h2>
     </div>
    </div>
  );
};

export default CoursesHeader;
