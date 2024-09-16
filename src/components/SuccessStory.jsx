import React from 'react';
import { Play } from 'lucide-react';
import photo1 from '../assets/femaletopper.jpeg';
import photo2 from '../assets/maletopper.jpg';
import photo3 from '../assets/femstudent.jpg';
import photo4 from '../assets/topperstalk.jpg';
import photo5 from '../assets/malestudent.jpg';
import photo6 from '../assets/student.jpeg';

const SuccessStories = () => {
  const images = [
    { src: photo1, width: 'col-span-2 md:col-span-1', height: 'row-span-2 h-64 md:h-80' },
    { src: photo2, width: 'col-span-1', height: 'h-48 md:h-64' },
    { src: photo3, width: 'col-span-1', height: 'h-48 md:h-64' },
    { src: photo4, width: 'col-span-2 md:col-span-2', height: 'row-span-2 h-64 md:h-80' },
    { src: photo5, width: 'col-span-1', height: 'h-48 md:h-64' },
    { src: photo6, width: 'col-span-1', height: 'h-48 md:h-64 md:-mt-16 lg:-mt-44' }, // Shifted upwards on larger screens
  ];

  return (
    <div className="bg-red-800 text-gray-200 mt-12 p-8 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Success Stories</h2>
        <h3 className="text-3xl md:text-4xl font-semibold mb-6 text-center">From Our Students</h3>
        <p className="mb-8 max-w-2xl text-center mx-auto">
          We take pride in having served 6,000+ Selections in the KPSC Results. Producing great results year after year, We are counted among Top KAS coaching institutes in Karnataka.
        </p>
        <div className="text-center">
          <button className="bg-gray-300 text-red-800 px-6 py-2 rounded-md font-semibold hover:bg-gray-400 transition duration-300">
            View Topper's List
          </button>
        </div>

        <div className="mt-12 grid grid-cols-4 md:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <div key={index} className={`${img.width} ${img.height} bg-gray-900 rounded-lg overflow-hidden relative`}>
              <img src={img.src} alt={`Success story ${index + 1}`} className="w-full h-full object-cover" />
              {index === images.length - 1 && (
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-2">
                  <p className="text-sm">Anthony From Australia</p>
                  <button className="mt-1 bg-white bg-opacity-20  rounded-full p-1">
                    <Play size={16} />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
