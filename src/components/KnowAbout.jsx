import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import KnowImage from '../assets/knowus.png';

const KnowUs = () => {
  const scrollContainerRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const totalImages = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Example array for images

  // Adjust images per page based on screen size
  const imagesPerPage = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1;
  const totalPages = Math.ceil(totalImages.length / imagesPerPage);

  const handleScroll = (direction) => {
    if (direction === 'left' && currentPage > 0) {
      setCurrentPage(currentPage - 1);
    } else if (direction === 'right' && currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="container mt-10 mx-auto px-4 py-8 bg-white w-full">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h3 className="text-gray-600 mb-2">Why Us</h3>
        <h2 className="text-2xl lg:text-3xl font-bold">
          Know About Our Approach of Excellence
        </h2>
        <div className="w-24 lg:w-64 h-1 bg-red-500 mx-auto mt-2"></div>
      </div>

      {/* Scrollable Images Section */}
      <div className="relative">
        {currentPage > 0 && (
          <button
            onClick={() => handleScroll('left')}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 shadow-lg z-10"
          >
            <ChevronLeft className="w-6 h-6 text-red-500" />
          </button>
        )}
        {currentPage < totalPages - 1 && (
          <button
            onClick={() => handleScroll('right')}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 shadow-lg z-10"
          >
            <ChevronRight className="w-6 h-6 text-red-500" />
          </button>
        )}
        <div className="overflow-hidden mx-auto px-4 max-w-7xl">
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
                className="flex flex-nowrap justify-between space-x-4 lg:space-x-6"
                style={{ width: `${100 / totalPages}%` }}
              >
                {totalImages
                  .slice(pageIndex * imagesPerPage, (pageIndex + 1) * imagesPerPage)
                  .map((image, index) => (
                    <div key={index} className="relative inline-block w-full max-w-sm lg:max-w-7xl">
                      <img
                        src={KnowImage}
                        alt={`Image ${image}`}
                        className="w-full h-full object-cover rounded-lg shadow-lg"
                      />
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

export default KnowUs;
