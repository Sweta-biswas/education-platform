import React from 'react';
import banner from '../assets/BannerHome.png';
import quoteIcon from '../assets/quote.png';

const MainBanner = () => {
  return (
    <div className="relative">
      {/* Banner Image */}
      <img src={banner} alt="Banner" className="w-full h-auto" />

      {/* Quote Section */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white shadow-md flex flex-col md:flex-row items-center p-2 sm:p-4 md:p-6 space-x-0 md:space-x-4 space-y-2 sm:space-y-4 md:space-y-0 w-10/12 sm:max-w-sm md:max-w-2xl mx-auto">
        <img src={quoteIcon} alt="Quote Icon" className="h-6 sm:h-6 md:h-14" />
        <div className="text-center md:text-left">
          <p className="text-xs sm:text-sm md:text-2xl italic leading-snug">
            “Education is the most powerful weapon which you can use to change the world.”
          </p>
          <p className="text-xs sm:text-sm md:text-xl mt-2 text-right">-NELSON MANDELA</p>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
