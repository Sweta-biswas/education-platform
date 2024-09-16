import React from 'react';
import Lecture from '../assets/lecture.png'
import Books from '../assets/books.png'
const MagazineBanner = () => {
  return (
    <div className="relative w-full h-72">
      {/* Background Image */}
      <img 
        src= {Lecture}
        alt="Classroom Banner" 
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* White Mask */}
      <div className="absolute inset-0 bg-red-100 opacity-75"></div>

      {/* Text Content */}
      <div className="relative z-10 flex justify-between items-center h-full px-8">
        <div>
          <h2 className="text-4xl font-bold text-gray-800">Ananya Sadhana</h2>
          <p className="text-lg text-gray-600">A Monthly Current Affairs Magazine that caters to both KPSC & UPSC Prep.</p>
        </div>

        {/* Books Image */}
        <img 
          src={Books}
          alt="Books" 
          className="h-64 mr-20"
        />
      </div>
    </div>
  );
}

export default MagazineBanner;
