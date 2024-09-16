import React, { useState } from 'react';
import phone from '../assets/phoneicon.png';
import message from '../assets/msgicon.png';

const TopHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-red-600 to-red-400 text-white py-2 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Contact Info */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <img src={phone} alt="phone" className="h-6 md:h-8" />
            <span className="text-sm md:text-base">+91 88995 56633</span>
          </div>
          <div className="flex items-center space-x-2">
            <img src={message} alt="message" className="h-6 md:h-8" />
            <span className="text-sm md:text-base">contact@instakas.com</span>
          </div>
        </div>

        {/* Search, Login, Signup for larger screens */}
        <div className="hidden md:flex items-center space-x-6">
          <button className="px-4 py-2 rounded-full bg-white text-gray-600 flex items-center shadow-md hover:bg-gray-100 transition duration-300">
            <span className="text-sm md:text-base">Search Here...</span>
          </button>
          <div className="flex items-center space-x-2 text-sm md:text-base">
            <h1 className="cursor-pointer hover:text-gray-200 transition duration-300">Login</h1>
            <span>|</span>
            <h1 className="cursor-pointer hover:text-gray-200 transition duration-300">Sign Up</h1>
          </div>
        </div>

        {/* Hamburger Menu for mobile screens */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl focus:outline-none"
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden mt-4 px-4">
          <ul className="flex flex-col space-y-4 bg-red-500 p-4 rounded-lg shadow-md">
            <li>
              <button className="w-full text-left px-4 py-2 rounded-full bg-white text-gray-600 flex items-center shadow-md hover:bg-gray-100 transition duration-300">
                Search Here...
              </button>
            </li>
            <li className="flex justify-between items-center">
              <h1 className="cursor-pointer hover:text-gray-200 transition duration-300">Login</h1>
              <span>|</span>
              <h1 className="cursor-pointer hover:text-gray-200 transition duration-300">Sign Up</h1>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default TopHeader;
