import React from 'react';


const NotificationBar = () => {
  return (
    <div className="bg-gray-600 text-white text-center py-3 px-4 md:px-6">
      <p className="display: inline-block; white-space: nowrap; overflow: hidden; box-sizing: border-box;animation: 0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  } 10s linear infinite; text-sm md:text-lg">
        Latest updates or notifications go here in a scrolling format... Latest updates or notifications go here...
      </p>
    </div>
  );
};

export default NotificationBar;
