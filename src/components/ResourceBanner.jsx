import React from 'react';
import Lecture from '../assets/lecture.png'

const MagazineBanner = ({title}) => {
  return (
    <div className="relative w-full h-72">
      {/* Background Image */}
      <img
        src={Lecture}
        alt="Classroom Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* White Mask */}
      <div className="absolute inset-0 bg-red-100 opacity-75"></div>

      {/* Text Content */}
      <div className="relative z-10 flex justify-center items-center h-full px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-600">{title}</h2>
        </div>
      </div>
    </div>
  );
}

export default MagazineBanner;
