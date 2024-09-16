import React from "react";
import graduateSrc from '../assets/graduate.png'; 


const TopperCorner = () => {
  return (
    <div className="bg-pink-50 py-6 px-4 flex flex-col md:flex-row items-center">
      {/* Left Section */}
      <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <h2 className="text-5xl font-bold text-gray-800">Topper's Corner</h2>
        <p className="text-gray-700 text-2xl mt-8">
        Every Topper was once an aspirant. Let their Journey & the success story motivate you and be your guiding light
        </p>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 relative">
        <img
          src={graduateSrc}
          alt="Classroom"
          className="w-full h-auto rounded-md "
        />
      </div>
    </div>
  );
};

export default TopperCorner;
