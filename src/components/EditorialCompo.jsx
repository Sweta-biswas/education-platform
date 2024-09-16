import React from 'react';
import image from '../assets/knowus.png';

const EditorialComponent = () => {
  return (
    <div className="container mx-auto p-6">
    {/* Image */}
    <div className="w-full mt-8 h-80 mb-8 flex justify-center">
      <img
        src={image}
        alt="Editorial"
        className="h-full object-cover"
      />
    </div>
    
    <div className="flex flex-col lg:flex-row">
        {/* Left Column */}
        <div className="w-full lg:w-2/3 pr-6">
        {/* Article Content */}
        <h1 className="text-2xl font-bold mb-4">Dummy Text, Dummy Text Goes Here!</h1>
        <p className="text-gray-700 leading-relaxed mb-4">
          In Publishing And Graphic Design, Lorem Ipsum Is A Placeholder Text Commonly Used To
          Demonstrate The Visual Form Of A Document Or A Typeface Without Relying On Meaningful Content.
          Lorem Ipsum May Be Used As A Placeholder Before Final Copy Is Available.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          In Publishing And Graphic Design, Lorem Ipsum Is A Placeholder Text Commonly Used To
          Demonstrate The Visual Form Of A Document Or A Typeface Without Relying On Meaningful Content.
          Lorem Ipsum May Be Used As A Placeholder Before Final Copy Is Available.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Dummy text goes here...
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          In Publishing And Graphic Design, Lorem Ipsum Is A Placeholder Text Commonly Used To
          Demonstrate The Visual Form Of A Document Or A Typeface Without Relying On Meaningful Content.
          Lorem Ipsum May Be Used As A Placeholder Before Final Copy Is Available.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          In Publishing And Graphic Design, Lorem Ipsum Is A Placeholder Text Commonly Used To
          Demonstrate The Visual Form Of A Document Or A Typeface Without Relying On Meaningful Content.
          Lorem Ipsum May Be Used As A Placeholder Before Final Copy Is Available.
        </p>
      </div>

      {/* Right Column - Other Editorials */}
      <div className="w-full lg:w-1/3">
        <h2 className="text-lg font-bold mb-4">Other Editorials</h2>

        <div className="bg-gray-100 p-4">
          {/* Date Sections */}
          <div className="mb-4">
            <h3 className="font-bold text-red-600">November 2022</h3>
            <ul>
              <li className="flex justify-between items-center">
                <span>31-11-2022</span>
                <span className="text-blue-600">Editorial title goes here...</span>
              </li>
              <li className="flex justify-between items-center">
                <span>30-11-2022</span>
                <span className="text-blue-600">Editorial title goes here...</span>
              </li>
              <li className="flex justify-between items-center">
                <span>29-11-2022</span>
                <span className="text-blue-600">Editorial title goes here...</span>
              </li>
            </ul>
          </div>

          {/* More Date Sections */}
          <div className="mb-4">
            <h3 className="font-bold text-red-600">October 2022</h3>
            <ul>
              <li className="flex justify-between items-center">
                <span>28-10-2022</span>
                <span className="text-blue-600">Editorial title goes here...</span>
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="font-bold text-red-600">September 2022</h3>
          </div>

          <div className="mb-4">
            <h3 className="font-bold text-red-600">August 2022</h3>
          </div>

          <div className="mb-4">
            <h3 className="font-bold text-red-600">July 2022</h3>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default EditorialComponent;
