import React from 'react';
import card from '../assets/Card.png';
import card1 from '../assets/Card1.png';
import card2 from '../assets/Card2.png';
import card3 from '../assets/Card3.png';
import card4 from '../assets/Card4.png';
import card5 from '../assets/Card5.png';
import card6 from '../assets/Card6.png';
import card7 from '../assets/Card7.png';
import card8 from '../assets/Card8.png';
import card9 from '../assets/Card9.png';


const ImageGrid = () => {
  // You can add more images in the array as needed
  const images = [
    { src: card, alt: 'Card Image 1' },
    { src: card1, alt: 'Card Image 2' },
    { src: card2, alt: 'Card Image 3' },
    { src: card3, alt: 'Card Image 4' },
    { src: card4, alt: 'Card Image 5' },
    { src: card5, alt: 'Card Image 6' },
    { src: card6, alt: 'Card Image 7' },
    { src: card7, alt: 'Card Image 8' },
    { src: card8, alt: 'Card Image 9' },
    { src: card9, alt: 'Card Image 10' },
  ];

  return (
    <div className="bg-gray-100 py-10 px-5 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-10">
          Our Campus
        </h1>

        {/* Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 bg-gray-900 bg-opacity-50 w-full p-2 text-white text-sm">
                INSIGHTIAS- Simplyfying IAS Exam Preparation
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
