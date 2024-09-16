import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; 
import firstresource from '../assets/resource1.png';
import secondresource from '../assets/resource2.png';
import thirdresource from '../assets/thirdresource.png';
import fourthresource from '../assets/fourthresource.png';

const ResourceSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const slides = [
    {
      title: 'SECURE',
      subtitle: 'For Mains',
      date: '22-04-2023',
      image: firstresource,
      route: '/secure', // Add route for SECURE slide
    },
    {
      title: "MCQ's",
      subtitle: 'For Prelims',
      date: '22-04-2023',
      image: secondresource,
      route: '/mcqpage',
    },
    {
      title: 'EDITORIALS',
      subtitle: 'For Mains and Prilims',
      date: '22-04-2023',
      image: thirdresource,
      route: '/editorials',
    },
    {
      title: 'ANSWER KEY',
      subtitle: 'For Mains and Prilims',
      date: '22-04-2023',
      image: fourthresource,
      route: '/answer-key',
    },
    // Add more slides as needed
  ];

  const numSlidesPerPage = 2;
  const numPages = Math.ceil(slides.length / numSlidesPerPage);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + numSlidesPerPage) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - numSlidesPerPage + slides.length) % slides.length);
  };

  const handleSlideClick = (route) => {
    if (route) {
      navigate(route); // Navigate to the route if it exists
    }
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto mt-20 px-4 sm:px-6 lg:px-8">
      
      <div className="overflow-hidden mt-8">
        <div 
          className="flex transition-transform duration-300 ease-in-out" 
          style={{ transform: `translateX(-${(currentSlide / numSlidesPerPage) * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div 
              key={index} 
              className="w-full sm:w-1/2 flex-shrink-0 px-4 sm:px-8 mb-8 sm:mb-0"
              onClick={() => handleSlideClick(slide.route)} // Handle slide click to navigate
              style={{ cursor: slide.route ? 'pointer' : 'default' }} // Change cursor if slide has a route
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col sm:flex-row h-full">
                <div className="p-4 sm:p-6 flex flex-col justify-between w-full">
                  <div>
                    <h2 className="text-2xl sm:text-4xl font-bold text-red-600">{slide.title}</h2>
                    <p className="text-lg sm:text-xl text-red-600 mt-2">{slide.subtitle}</p>
                    <p className="text-gray-600 mt-2">{slide.date}</p>
                  </div>
                </div>
                <div className="w-full sm:w-1/2">
                  <img 
                    src={slide.image} 
                    alt={slide.title} 
                    className="w-full h-48 sm:h-full object-cover" 
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 sm:-left-10 top-1/2 transform -translate-y-1/2 bg-gray-300 rounded-full p-2 shadow-md"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 sm:-right-10 top-1/2 transform -translate-y-1/2 bg-gray-300 rounded-full p-2 shadow-md"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2 mb-2 sm:mb-0">
        {Array.from({ length: numPages }, (_, index) => (
          <div
            key={index}
            className={`h-1 w-8 rounded-full ${index * numSlidesPerPage === currentSlide ? 'bg-red-600' : 'bg-gray-300'}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ResourceSlider;
