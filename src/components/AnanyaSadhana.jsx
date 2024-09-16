import React from 'react';
import firstbook from '../assets/book1.png';
import secondbook from '../assets/book2.png';
import thirdbook from '../assets/book3.png';
import fourthbook from '../assets/book4.png';
import fifthbook from '../assets/book5.png';
import sixthbook from '../assets/book6.png';

const AnanyaSadhana = () => {
  return (
    <section className="bg-white py-10 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left side content */}
          <div className="lg:w-1/3 mb-8 lg:mb-0 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-600 mb-4">Ananya Sadhana</h2>
            <p className="text-base sm:text-lg lg:text-xl mb-6">
              A Monthly Current Affairs Magazine that caters to both KPSC & UPSC Prep.
            </p>
            <button className="bg-red-600 text-white font-bold py-2 px-4 sm:px-6 rounded hover:bg-red-700 transition duration-300">
              Subscribe Here
            </button>
          </div>

          {/* Right side magazine covers */}
          <div className="lg:w-2/3 relative">
            <div className="grid grid-cols-3 gap-4 justify-center">
              {/* First Column */}
              <div className="col-span-1 flex justify-center lg:justify-start">
                <img src={firstbook} alt="Ananya Sadhana Magazine" className="w-24 sm:w-40 lg:w-72 sm:h-20 lg:h-80 shadow-lg rounded-lg mt-10 lg:mt-28 mb-4 transform hover:scale-105 transition duration-300" />
              </div>
              
              {/* Second Column (Middle Large Image) */}
              <div className="col-span-1 flex flex-col items-center">
                <img src={secondbook} alt="Ananya Sadhana Issue 1" className="w-24 sm:w-40 lg:w-56 h-auto shadow-lg rounded-lg mt-8 mb-4 transform hover:scale-105 transition duration-300" />
                <img src={thirdbook} alt="Ananya Sadhana Issue 2" className="w-24 sm:w-40 lg:w-56 h-auto shadow-lg rounded-lg mt-4 mb-4 transform hover:scale-105 transition duration-300" />
              </div>
              
              {/* Third Column */}
              <div className="col-span-1 flex flex-col items-center lg:items-end">
                <img src={fourthbook} alt="Ananya Sadhana Issue 3" className="w-20 sm:w-32 lg:w-40 h-auto shadow-lg rounded-lg mt-4 mb-4 transform hover:scale-105 transition duration-300" />
                <img src={fifthbook} alt="Ananya Sadhana Issue 4" className="w-20 sm:w-32 lg:w-40 h-auto shadow-lg rounded-lg mt-4 mb-4 transform hover:scale-105 transition duration-300" />
                <img src={sixthbook} alt="Ananya Sadhana Issue 5" className="w-20 sm:w-32 lg:w-40 h-auto shadow-lg rounded-lg mt-4 mb-4 transform hover:scale-105 transition duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnanyaSadhana;
