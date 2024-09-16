import React from 'react';
import KAS from '../assets/KAS.png';
import Map from '../assets/map.png';
import QRCode from '../assets/qrcode.png';

const Footer = () => {
  return (
    <footer className="bg-white mt-12 text-black py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1">
            <img src={KAS} alt="Insta KAS Logo" className="mb-4 w-32 h-auto sm:w-48" />
            <p className="text-sm sm:text-base lg:text-xl">
              We have revolutionized, redefined and simplified the KPSC (KAS) Exam Preparation.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-600 hover:text-black">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          
          {/* Home Section */}
          <div className="col-span-1">
            <h3 className="font-bold text-lg sm:text-xl lg:text-2xl mb-4">Home</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">KAS Exam</a></li>
              <li><a href="#" className="hover:underline">Courses</a></li>
              <li><a href="#" className="hover:underline">Topper Corners</a></li>
              <li><a href="#" className="hover:underline">Ananya Sadhana Magazine</a></li>
              <li><a href="#" className="hover:underline">Resources</a></li>
            </ul>
          </div>

          {/* Contact Us & Form */}
          <div className="col-span-1">
            <h3 className="font-bold text-lg sm:text-xl lg:text-2xl mb-4">CONTACT US</h3>
            <p className="mb-2 text-sm sm:text-base lg:text-lg">Call Us: +91 8899556633</p>
            <p className="text-sm sm:text-base lg:text-lg">Write to Us: info@instakas.com</p>
            <h3 className="font-bold text-lg sm:text-xl lg:text-2xl mt-4 mb-4">LET US REACH YOU</h3>
            <form>
              <input type="text" placeholder="First Name*" className="w-full mb-2 p-2 border rounded text-sm sm:text-base" />
              <input type="text" placeholder="Last Name" className="w-full mb-2 p-2 border rounded text-sm sm:text-base" />
              <input type="tel" placeholder="Mobile Number*" className="w-full mb-2 p-2 border rounded text-sm sm:text-base" />
              <input type="email" placeholder="Email Id*" className="w-full mb-2 p-2 border rounded text-sm sm:text-base" />
              <textarea placeholder="Your message" className="w-full mb-2 p-2 border rounded text-sm sm:text-base" rows="3"></textarea>
            </form>
          </div>

          {/* Visit Us Section */}
          <div className="col-span-1">
            <h3 className="font-bold text-lg sm:text-xl lg:text-2xl mb-4">VISIT US</h3>
            <img src={QRCode} alt="QR Code" className="w-20 h-auto sm:w-24 lg:w-32 mt-4" />
            <h4 className="font-bold mt-4 mb-2 text-sm sm:text-base lg:text-lg">BENGALURU BRANCH</h4>
            <p className="text-xs sm:text-sm lg:text-base">
              # 1134/1, 2nd Floor, Beside Shanmukha Institute, Service Road, Opposite to Attiguppe Metro Station, RPC Layout, Vijayanagar, Bengaluru, Karnataka-560040
            </p>
            <img src={Map} alt="Map" className="w-48 h-auto mt-4 mb-4" />
            <h4 className="font-bold mt-4 mb-2 text-sm sm:text-base lg:text-lg">DHARWAD BRANCH</h4>
            <p className="text-xs sm:text-sm lg:text-base">
              #12, 1st Floor, Loukya complex building, Saptapur last bus stop, Beside Swayamangala Hospital, Dharwad-580001
            </p>
            <img src={QRCode} alt="QR Code" className="w-20 h-auto sm:w-24 lg:w-32 mt-4" />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs sm:text-sm lg:text-base">&copy; 2022 INSTA KAS. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-xs sm:text-sm lg:text-base hover:underline">Disclaimer</a>
            <a href="#" className="text-xs sm:text-sm lg:text-base hover:underline">Privacy Policy</a>
            <a href="#" className="text-xs sm:text-sm lg:text-base hover:underline">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
