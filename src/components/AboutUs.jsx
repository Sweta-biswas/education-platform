import React from "react";
import imageSrc from '../assets/classroom.png'; 
import FaPlay from '../assets/play.png';

const AboutUs = () => {
  return (
    <div className="bg-pink-50 py-6 px-6 flex flex-col md:flex-row items-center">
      {/* Left Section */}
      <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <h2 className="text-5xl font-bold text-gray-800">About Us</h2>
        <p className="text-gray-700 text-2xl mt-8">
          INSTA KAS is a wing of INSIGHTSIAS dedicated to provide holistic
          guidance for KPSC (KAS) Exam preparation, under the guidance of messiah of Civil services Exam Vinay sir.
        </p>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 relative">
        <img
          src={imageSrc}
          alt="Classroom"
          className="w-full h-auto rounded-md shadow-md"
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <button className="bg-transparent text-red-500 p-0 rounded-full shadow-lg hover:bg-red-500 hover:text-white transition duration-300">
          <img src={FaPlay} alt="Karnataka Map" className="w-full" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
