import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import ImageOne from '../assets/ias.png';
import ImageThree from '../assets/maptwo.png';
import { useNavigate } from 'react-router-dom'; 

const ExamSlider = () => {
  // Slider state
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate(); 

  const slides = [
    {
      id: 1,
      title: 'Exam Syllabus',
      subtitle: 'UPPSC Exams',
      image: ImageThree, // Replace with your left image
      button: 'View Syllabus',
      route: '/syllabus', 
    },
    {
      id: 2,
      title: 'UPPSC Question Paper',
      subtitle: 'UPPSC Exams',
      image: ImageThree, // Replace with your left image
      button: 'View Question Paper',
      route: '/upsc-question', 
    },
    {
      id: 3,
      title: 'Mains Question Paper',
      subtitle: 'Mains Exam',
      image: ImageThree, // Replace with your left image
      button: 'View Question Paper',
      route: '/mains-question', 
    },
    {
      id: 4,
      title: 'Results',
      subtitle: 'UPPSC & MAINS Exams',
      image: ImageThree, // Replace with your left image
      button: 'View Results',
      route: '/result', 
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
    <div className="flex flex-col bg-white mt-10 lg:flex-row items-center justify-between mx-auto max-w-7xl py-10 px-6 lg:px-16">
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
          src={ImageOne} // Replace with your right-side image
          alt="Exam Graphic"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default ExamSlider;
