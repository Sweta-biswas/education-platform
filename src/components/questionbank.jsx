import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import arts from '../assets/arts.jpg';
import environment from '../assets/environment.jpg';
import geography from '../assets/geography.jpeg';
import polity from '../assets/polity.jpg';
import history from '../assets/history.jpg';
import science from '../assets/science.jpg';

const ResourceSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Art And Culture',
      subtitle: '(Question Bank)',
      date: 'For Civil Service Preliminary Exam',
      image: arts,
    },
    {
      title: "Environmental Science",
      subtitle: '(Question Bank)',
      date: 'For Civil Service Preliminary Exam',
      image: environment,
    },
    {
      title: 'Geography',
      subtitle: '(Question Bank)',
      date: 'For Civil Service Preliminary Exam',
      image: geography,
    },
    {
      title: 'Indian Polity',
      subtitle: '(Question Bank)',
      date: 'For Civil Service Preliminary Exam',
      image: polity,
    },
    {
        title: 'History',
        subtitle: '(Question Bank)',
        date: 'For Civil Service Preliminary Exam',
        image: history,
      },
      {
        title: 'Science & Technology',
        subtitle: '(Question Bank)',
        date: 'For Civil Service Preliminary Exam',
        image: science,
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

  return (
    <div className="relative w-full max-w-7xl mx-auto mt-24 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8">
        <h3 className="text-3xl sm:text-4xl mt-32 font-bold text-gray-800 ">Our Courses For KAS-KPSC Coaching</h3>
        <h2 className="text-gray-500 mt-6 text-lg mb-2">
          As the Top KAS Coaching in Karnataka, We offer the most popular courses for KPSC-IAS, Civil Services Exam Preparations. Choose a Course to get start your KPSC-KAS, Civil Services Exam Preparation. 
        </h2>
        <div className="w-72 h-1 bg-red-500 mx-auto mt-4"></div>
      </div>

      <div className="overflow-hidden mt-8">
        <div 
          className="flex transition-transform duration-300 ease-in-out" 
          style={{ transform: `translateX(-${(currentSlide / numSlidesPerPage) * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div 
              key={index} 
              className="w-full sm:w-1/2 flex-shrink-0 px-4 sm:px-8 mb-8 sm:mb-0"
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
        className="absolute left-4 sm:-left-10 top-2/3 transform -translate-y-1/2 bg-gray-300 rounded-full p-2 shadow-md"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 sm:-right-10 top-2/3 transform -translate-y-1/2 bg-gray-300 rounded-full p-2 shadow-md"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default ResourceSlider;
