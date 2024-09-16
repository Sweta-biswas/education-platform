import React from 'react';
import Image1 from '../assets/felicitation.jpeg';
import Image2 from '../assets/mains.jpeg';
import Image3 from '../assets/precummains.jpg';
import YoutubeIcon from '../assets/yo.png';

const Learn = () => {
  const totalImages = [Image1, Image2, Image3]; // Array of the three images

  return (
    <div className="container mt-20 mx-auto px-4 py-8 bg-gradient-to-br from-red-100 to-white w-full">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h3 className="text-2xl sm:text-3xl mb-2  font-bold">Learn Through Videos</h3>
        <h2 className="text-gray-600 text-lg sm:text-xl">
          Watch Important Strategies, Guidelines, Best Practice, Expert Views and Analysis.
        </h2>
        <div className="w-32 sm:w-64 h-1 bg-red-500 mx-auto mt-2"></div>
      </div>

      {/* Images Section */}
      <div className="flex justify-center space-x-4 sm:space-x-6">
        {totalImages.map((image, index) => (
          <div key={index} className="relative p-2 sm:p-4 w-full max-w-xs sm:max-w-sm">
            <img
              src={image}
              alt={`Gyana Kosha - Image ${index + 1}`}
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
    </div>
  );
};

export default Learn;
