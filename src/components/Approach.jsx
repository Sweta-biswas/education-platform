import React from 'react';
import ApproachImg from '../assets/whyus.png'; // Update the path to the correct one

const ApproachSection = () => {
  return (
    <section className="bg-white mt-16 sm:mt-10 lg:mt-10 py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-semibold text-gray-800">Why Us?</h2>
          <p className="text-2xl mt-4 text-gray-600">
            Know About our Approach of Excellence
          </p>
          <div className="h-1 w-60 bg-red-500 mx-auto mt-4"></div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src={ApproachImg}
            alt="Achievements"
            className="w-full sm:w-3/4 lg:w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
