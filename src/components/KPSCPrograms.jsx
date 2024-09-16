import React from 'react';

const KPSCPrograms = () => {
  return (
    <div className="bg-gray-50 py-10 px-4 lg:px-20">
      <div className="container mx-auto grid lg:grid-cols-12 gap-10">
        {/* Main Content */}
        <div className="lg:col-span-8 bg-white p-6 rounded-lg shadow-md">
          

          <h2 className="text-2xl font-semibold mb-4">
            Integrated Prelims and Mains test series (IPM) for all KPSC aspirants
          </h2>
          
          <div className="text-gray-700 mb-6">
            <p><strong>Starts From:</strong> 20-11-2022</p>
            <p><strong>Total tests:</strong> Prelims - 20, Mains - 22</p>
          </div>

          <h3 className="text-lg font-semibold mb-2">Terms & Conditions:</h3>
          <ul className="list-disc ml-6 text-gray-600 mb-6">
            <li>Fees once paid is non-refundable and non-transferable.</li>
            <li>InsightIAS reserves all the rights to make any changes to the test series like schedule.</li>
            <li>Subscription won’t carry forward to next series even if the subscriber doesn’t write a single test.</li>
            <li>Course is valid till MAINS Exam.</li>
          </ul>

          <div className="bg-red-600 p-4 flex justify-between items-center rounded-lg">
            <p className="text-xl font-semibold text-white">Rs 18000 incl of taxes</p>
            <button className="bg-red-50 font-semibold text-black py-2 px-4 rounded-md">
              Enrol Now
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4">
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-lg font-semibold text-red-600 mb-4">CLASSROOM PROGRAM</h3>
            <ul className="text-gray-700 space-y-2">
              <li className="font-semibold">Insta KAS KPSC Pre-Cum-Mains Offline/Online</li>
              <li className="text-red-600">Insta KAS KPSC Prelims</li>
              <li>Insta KAS KPSC IPM (Integrated Prelims & Mains) Test Series 2022</li>
              <li>Insta KAS KPSC Prelims Test Series 2022 2.0</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-red-600 mb-4">Latest News</h3>
            <ul className="text-gray-700 space-y-2">
              <li>KPSC 2022 Daily Current Affairs</li>
              <li>Daily Current Affairs</li>
              <li>Inspiro UPSC KPSC App</li>
              <li>Karnataka Administrative Services</li>
              <li>KAS 2023 Mains Test Series</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KPSCPrograms;
