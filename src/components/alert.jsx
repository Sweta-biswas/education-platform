import React from 'react';
import Alert from '../assets/comingsoon.png';
import Notification from '../assets/notification.png';

const ComingSoon = () => {
    return (
        <div className="rounded-3xl p-6 sm:p-8 md:p-10 relative mx-4 md:mx-auto max-w-full md:max-w-4xl lg:max-w-7xl min-h-[200px] sm:min-h-[300px]">
            <div className="text-center mb-4 sm:mb-6 md:mb-8">
                <h3 className="text-gray-600 text-sm sm:text-base md:text-lg mb-1 sm:mb-2">Our Courses</h3>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                    New Tailor-Made for You
                </h2>
            </div>
            <div className="w-32 sm:w-48 md:w-64 h-1 bg-red-500 mx-auto mt-2"></div>
            
            {/* Container for the image and overlay */}
            <div className="relative mt-4 sm:mt-6">
                <img src={Alert} alt="Coming Soon" className="w-full h-auto" />
                
                {/* Overlay for notification logo and text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <img src={Notification} alt="notification" className="bg-white rounded-full h-10 sm:h-12 md:h-14 mb-2 sm:mb-3 md:mb-4" />
                    <h2 className="text-xl sm:text-2xl md:text-3xl text-white font-bold">Coming Soon....</h2>
                </div>
            </div>
        </div>
    );
};

export default ComingSoon;
