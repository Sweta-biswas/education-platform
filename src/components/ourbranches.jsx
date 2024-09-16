import React from 'react';
import { Phone, Mail } from 'lucide-react';
import Map from '../assets/map.png';
import QRCode from '../assets/qrcode.png';

const OurBranches = () => {
  return (
    <div className="bg-gradient-to-r from-red-50 to-red-100 p-4 md:p-8 min-h-screen">
      <div className=" p-8 md:p-12">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-2 md:mb-4">Our Branches</h1>
          <h2 className="text-lg md:text-2xl text-gray-700 mb-8 md:mb-12">Now at your Reach</h2>
        </div>
      </div>

      <div className="max-w-6xl mt-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="md:w-1/3 lg:w-1/4 mb-4 md:mb-0 text-center md:text-left">
            <img src={QRCode} alt="QR Code" className="w-24 h-24 md:w-32 md:h-32 mx-auto md:mx-0" />
            <h3 className="font-bold mt-2 text-lg">DHARWAD BRANCH</h3>
            <p className="text-sm mt-2">
              #12, 1st Floor, Loukya complex building,<br />
              Saptapur last bus stop,<br />
              Beside Sarvamangala Hospital<br />
              Dharwad 580001
            </p>
            <div className="flex items-center mt-2 justify-center md:justify-start">
              <Phone size={16} className="mr-2" />
              <Mail size={16} />
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-2/4 mb-4 md:mb-0">
            <img src={Map} alt="Karnataka Map" className="w-full" />
          </div>

          <div className="md:w-1/3 lg:w-1/4 mb-4 md:mb-0 text-center md:text-right">
            <img src={QRCode} alt="QR Code" className="w-24 h-24 md:w-32 md:h-32 mx-auto md:mx-0" />
            <h3 className="font-bold mt-2 text-lg">BENGALURU BRANCH</h3>
            <p className="text-sm mt-2">
              # 113/1, 2nd Floor, Beside Sharavathi<br />
              Hospital, Service Road, Opposite to<br />
              Attiguppo Metro Station, RPC Layout,<br />
              Vijayanagar, Bengaluru, Karnataka-560040
            </p>
            <div className="flex items-center justify-center md:justify-end mt-2">
              <Phone size={16} className="mr-2" />
              <Mail size={16} />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t pt-4">
          <p className="text-xs md:text-sm text-gray-600 mb-2 md:mb-0">© 2022 INSTA KAS. All Rights Reserved.</p>
          <div className="text-xs md:text-sm text-gray-600">
            <a href="#" className="mr-2 md:mr-4">Disclaimer</a>
            <a href="#" className="mr-2 md:mr-4">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBranches;
