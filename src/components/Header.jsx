import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from '../assets/KAS.png';
import Home from '../assets/Home.png';
import Notification from '../assets/notification.png'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white text-gray-600 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
        <Link to="/">
        <img src={logo} alt="Logo" className="h-12 w-auto" />
        </Link> 
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex text-lg space-x-4 lg:space-x-8">
          <li className="flex items-center space-x-2 list-none hover:text-red-600">
          <Link to="/"> <img src={Home}  alt="Home Icon" className="h-5 w-5" /></Link>
            <Link to="/home">Home</Link> {/* Link to the Home page */}
          </li>
          <li className="list-none hover:text-red-600">
            <Link to="/about-us">About Us</Link> {/* Link to the About Us page */}
          </li>
          <li className="list-none hover:text-red-600">
            <Link to="/kpsc">KPSC</Link> {/* Link to the KPSC page */}
          </li>
          <li className="list-none hover:text-red-600">
            <Link to="/courses">Courses</Link> {/* Link to the Courses page */}
          </li>
          <li className="list-none hover:text-red-600">
            <Link to="/toppers-corner">Topper’s Corner</Link> {/* Link to the Topper’s Corner page */}
          </li>
          <li className="list-none hover:text-red-600">
            <Link to="/resources">Resources</Link> {/* Link to the Resources page */}
          </li>
          <li className="list-none hover:text-red-600">
            <Link to="/ananya-sadhana">Ananya Sadhana</Link> {/* Link to the Ananya Sadhana page */}
          </li>
          <li className="list-none hover:text-red-600">
            <Link to="/contact-us">Contact Us</Link> {/* Link to the Contact Us page */}
          </li>
          <li className="flex items-center space-x-2 list-none hover:text-red-600">
          <Link to="/notification"> <img src={Notification}  alt="Home Icon" className="h-8 w-auto" /></Link>
          </li>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu} 
          className="md:hidden text-xl focus:outline-none"
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden mt-4 px-4">
          <ul className="flex flex-col space-y-2">
            <li className="flex items-center space-x-2">
             <Link to="/"> <img src={Home} alt="Home Icon" className="h-5 w-5" /></Link>
              <Link to="/home">Home</Link>
            </li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/kpsc">KPSC</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/toppers-corner">Topper’s Corner</Link></li>
            <li><Link to="/resources">Resources</Link></li>
            <li><Link to="/ananya-sadhana">Ananya Sadhana</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
            <li>
          <Link to="/notification"> <img src={Notification}  alt="Home Icon" className="h-8 w-auto" /></Link>
          </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
