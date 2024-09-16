import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import ImageOne from '../assets/upsc.png';
import ImageThree from '../assets/Award.png';
import { useNavigate } from 'react-router-dom'; 

const InformationSlider = () => {
  // Slider state
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate(); 

  const slides = [
    {
      id: 1,
      title: 'Gallery',
      subtitle: 'INSTA-KAS',
      image: ImageThree , // Replace with your left image
      button: 'View Images',
      route: '/gallery', 
    },
    {
        id: 2,
        title: 'Classroom Program',
        subtitle: 'INSTA-KAS KPSC Pre-cum Mains & Prelims',
        image: ImageThree , // Replace with your left image
        button: 'View All ClassRoom Program',
        route: '/class-program', 
      },
      {
        id: 3,
        title: 'Video Gallery',
        subtitle: 'Watch All Videos Mains & UPPSC Exam',
        image: ImageThree  , // Replace with your left image
        button: 'View All Videos',
        route: '/video-gallery', 
      },
      
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleSlideClick = (route) => {
    if (route) {
      navigate(route); // Navigate to the route if it exists
    }
  };

  return (
    <div className="flex flex-col bg-yellow-100 mt-10 lg:flex-row items-center justify-between mx-auto max-w-7xl py-10 px-6 lg:px-16">
    {/* Left Side: Slider */}
    <div className="relative bg-white rounded-xl shadow-lg p-6 w-full lg:w-1/2 flex items-center justify-center">
      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-700"
      >
        <FiChevronLeft size={30} />
      </button>

      {/* Content */}
      <div className="text-center">
        <img
          src={slides[currentSlide].image}
          alt={slides[currentSlide].title}
          className="w-32 h-32 object-cover mx-auto mb-4"
        />
        <h3 className="text-xl font-bold">{slides[currentSlide].title}</h3>
        <p className="text-gray-600 mb-4">{slides[currentSlide].subtitle}</p>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-full"
          onClick={() => handleSlideClick(slides[currentSlide].route)} // Handle click here
        >
          {slides[currentSlide].button}
        </button>
      </div>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-700"
      >
        <FiChevronRight size={30} />
      </button>
    </div>


      {/* Right Side: Static Image */}
      <div className="hidden lg:block lg:w-2/3">
        <img
          src= {ImageOne} // Replace with your right-side image
          alt="Exam Graphic"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default InformationSlider;
