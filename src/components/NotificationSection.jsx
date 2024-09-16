import React from 'react';
import notification from '../assets/notificationbg.png';

const NotificationSection = () => {
  return (
    <div className="bg-white p-8 relative">
      {/* Image Section */}
      <div className="flex justify-center mb-6">
        <img src={notification} alt="notification" className="h-auto w-full max-w-4xl" />
      </div>
      
      {/* Top section with the message */}
      <div className="text-gray-700">
        <p className="mb-4">Dear Student,</p>
        <p className="mb-4">
          There are just 91 days left for May 28th!<br />
          What is the first emotion that you feel when you think of UPSC PRELIMS? FEAR or excitement? We hope that it is the latter, however, the majority of the aspirants are gripped by FEAR as the final countdown to Prelims begins.
        </p>
        <p className="mb-4">
          Embarking on the UPSC Prep journey is a bold and an equally risky decision. Why? Because out of lakhs of aspirants, only a few hundreds clear it each year. It is an arduous journey that is filled with uncertainty at each stage. We encounter several fears in this marathon: fear of advancing age, fear of not being good enough, fear of societal judgment, fear of being left behind in life...but the biggest fear that each aspirant is faced with is the FEAR OF FAILURE! If it is your last attempt in 2023, we completely empathize and understand your mindset and fears.
        </p>
        <p className="mb-4">
          Being cognizant of this inner battle that each of us face at some point in our lives, we sat down with Vinay Sir to understand his perspective on Fear. Watch the episode of our podcast: A Little More Light tomorrow and listen to Sir share his wisdom and insightful thoughts on how one must face fear in life and conquer them!
        </p>
        <p className="mb-4 italic text-gray-600">
          “Don't give in to your fears. If you do, you won't be able to talk to your heart.”– Paulo Coelho<br />
          Stay tuned...
        </p>
        <p className="mb-4">
          Write to us with your feedback at alittlemorelightpodcast@insightsias.com
        </p>
      </div>

      {/* Bottom section with notifications and updates */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="bg-red-100 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-bold text-red-600 mb-4">Notifications</h3>
          <ul className="space-y-2">
            <li>• Weekly Compilation of Practice to Progress (PYQs) for KPSC 21st Feb to 25th Feb... <a href="#" className="text-red-600">Read More</a></li>
            <li>• Weekly Compilation of Practice to Progress (PYQs) for KPSC 21st Feb to 25th Feb... <a href="#" className="text-red-600">Read More</a></li>
            <li>• Weekly Compilation of Practice to Progress (PYQs) for KPSC 21st Feb to 25th Feb... <a href="#" className="text-red-600">Read More</a></li>
          </ul>
          <button className="mt-4 text-red-600 font-bold">View All</button>
        </div>

        <div className="bg-red-100 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-bold text-red-600 mb-4">Important Updates</h3>
          <ul className="space-y-2">
            <li>• Weekly Compilation of Practice to Progress (PYQs) for KPSC 21st Feb to 25th Feb... <a href="#" className="text-red-600">Read More</a></li>
            <li>• Weekly Compilation of Practice to Progress (PYQs) for KPSC 21st Feb to 25th Feb... <a href="#" className="text-red-600">Read More</a></li>
            <li>• Weekly Compilation of Practice to Progress (PYQs) for KPSC 21st Feb to 25th Feb... <a href="#" className="text-red-600">Read More</a></li>
          </ul>
          <button className="mt-4 text-red-600 font-bold">View All</button>
        </div>
      </div>
    </div>
  );
};

export default NotificationSection;
