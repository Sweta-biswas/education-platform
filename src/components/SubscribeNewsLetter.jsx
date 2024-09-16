import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const SubscribeNewsletter = () => {
  return (
    <div className="bg-red-600 text-white rounded-3xl mt-8 p-10 relative mx-4 md:mx-auto max-w-4xl min-h-[300px]">
      {/* Plane Icon */}
      <div className="absolute top-4 right-4">
        <FontAwesomeIcon icon={faPaperPlane} className="text-white text-3xl" />
      </div>
      {/* Content */}
      <div className="text-center">
        <h2 className="text-3xl font-bold">Subscribe to our Newsletter</h2>
        <p className="mt-2 text-2xl mb-8">
          Be a part of the InstaKAS Fraternity & get a step closer to your dreams!
        </p>
        {/* Form */}
        <form className="flex justify-center items-center">
          <div className="relative">
            <input
              type="email"
              placeholder="Your email"
              className="p-4 rounded-full shadow-md text-black focus:outline-none w-full md:w-64"
            />
          </div>
          <button
            type="submit"
            className="bg-white text-red-600 rounded-full shadow-md px-6 py-3 ml-4 font-bold hover:bg-gray-200 transition duration-200"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubscribeNewsletter;
