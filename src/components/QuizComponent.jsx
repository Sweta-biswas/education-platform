import React from 'react';

const QuizComponent = () => {
  return (
    <div className="max-w-2xl mx-auto my-10 p-5 space-y-8">
      {/* Question 1 */}
      <div className="border border-gray-300 rounded-lg p-4">
        <h3 className="font-semibold text-lg mb-2">
          1. In which of the following states is Cauvery South Wildlife Sanctuary located?
        </h3>
        <div className="space-y-2">
          <div className="flex items-center">
            <span className="mr-2">(a)</span>
            <span>Karnataka</span>
          </div>
          <div className="flex items-center bg-red-500 text-white rounded-md p-2">
            <span className="mr-2">(b)</span>
            <span>Tamil Nadu</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2">(c)</span>
            <span>Kerala</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2">(d)</span>
            <span>Madhya Pradesh</span>
          </div>
        </div>
        <div className="mt-4 text-gray-700">
          <h4 className="font-semibold">Explanation:</h4>
          <p className="text-sm">
            TN government has notified Cauvery South Wildlife Sanctuary as the 17th wildlife sanctuary under the Wild Life
            (Protection) Act, 1972, thus connecting Cauvery North, Cauvery South (both TN) with the Cauvery Wildlife Sanctuary (Karnataka).
          </p>
          <p className="text-sm mt-2">
            It will help in the movement of elephants through elephant corridors.
          </p>
          <p className="text-sm mt-2">
            <a href="https://www.insightsonindia.com/2022/11/15/mission-2023-insights-daily-current-affairs-pib-summary-15-november-2022/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
              Refer: Facts for Prelims
            </a>
          </p>
        </div>
      </div>

      {/* Question 2 */}
      <div className="border border-gray-300 rounded-lg p-4">
        <h3 className="font-semibold text-lg mb-2">
          2. Atal Innovation Mission is set up under the
        </h3>
        <div className="space-y-2">
          <div className="flex items-center">
            <span className="mr-2">(a)</span>
            <span>Department of Science and Technology</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2">(b)</span>
            <span>Ministry of Employment</span>
          </div>
          <div className="flex items-center bg-red-500 text-white rounded-md p-2">
            <span className="mr-2">(c)</span>
            <span>NITI Aayog</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2">(d)</span>
            <span>Ministry of Skill Development and Entrepreneurship</span>
          </div>
        </div>
        <div className="mt-4 text-gray-700">
          <h4 className="font-semibold">Explanation:</h4>
          <p className="text-sm">
            AIM (by NITI Aayog) is mandated to create an umbrella structure to oversee the innovation ecosystem of the country
            and revolutionize the innovation eco-system – touching upon the entire innovation life cycle through various programs.
          </p>
          <p className="text-sm mt-2">
            <a href="https://www.insightsonindia.com/2022/11/15/mission-2023-insights-daily-current-affairs-pib-summary-15-november-2022/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
              Refer: Facts for Prelims
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuizComponent;
