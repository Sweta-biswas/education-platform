import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from '../assets/videoimg.png';
import YoutubeIcon from '../assets/yo.png';

const GyanaKosha = () => {
  const scrollContainerRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const imagesPerPage = 3;
  const totalImages = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Example array for images

  const totalPages = Math.ceil(totalImages.length / imagesPerPage);

  const handleScroll = (direction) => {
    if (direction === 'left' && currentPage > 0) {
      setCurrentPage(currentPage - 1);
    } else if (direction === 'right' && currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="container mt-20 mx-auto px-4 py-8 bg-gradient-to-br from-red-100 to-white w-full">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h3 className="text-gray-600 mb-2 text-lg sm:text-xl">Gyana Kosha</h3>
        <h2 className="text-2xl sm:text-3xl font-bold">
          A Compendium of Motivational Sessions, Expert Views & Analysis
        </h2>
        <div className="w-32 sm:w-64 h-1 bg-red-500 mx-auto mt-2"></div>
      </div>

      {/* Scrollable Images Section */}
      <div className="relative">
        {currentPage > 0 && (
          <button
            onClick={() => handleScroll('left')}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 shadow-lg z-10"
          >
            <ChevronLeft className="w-4 sm:w-6 h-4 sm:h-6 text-red-500" />
          </button>
        )}
        {currentPage < totalPages - 1 && (
          <button
            onClick={() => handleScroll('right')}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 shadow-lg z-10"
          >
            <ChevronRight className="w-4 sm:w-6 h-4 sm:h-6 text-red-500" />
          </button>
        )}
        <div className="overflow-hidden mx-auto px-2 sm:px-4 max-w-full sm:max-w-7xl">
          <div
            ref={scrollContainerRef}
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              width: `${totalPages * 100}%`,
              transform: `translateX(-${currentPage * (100 / totalPages)}%)`,
            }}
          >
            {Array.from({ length: totalPages }).map((_, pageIndex) => (
              <div
                key={pageIndex}
                className="flex flex-nowrap justify-between space-x-4 sm:space-x-6"
                style={{ width: `${100 / totalPages}%` }}
              >
                {totalImages
                  .slice(pageIndex * imagesPerPage, (pageIndex + 1) * imagesPerPage)
                  .map((image, index) => (
                    <div key={index} className="relative p-2 sm:p-4 w-full max-w-xs sm:max-w-7xl">
                      <img
                        src={Image}
                        alt={`Gyana Kosha - Image ${image}`}
                        className="w-full h-auto object-cover rounded-lg shadow-lg"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <img
                          src={YoutubeIcon}
                          alt="YouTube Icon"
                          className="w-12 sm:w-16 h-auto"
                        />
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GyanaKosha;
