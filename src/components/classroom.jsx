import React from 'react';

const ClassroomPrograms = () => {
  return (
    <div className="bg-gray-100 py-10 px-5 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-3 space-y-8">
          {/* Section 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">
              Insta KAS KPSC Pre-Cum-Mains Offline/Online
            </h2>
            <p className="mb-2 text-gray-600">Course Duration: 7-8 Months</p>
            <p className="mb-2 text-gray-600">
              Medium of Classes: English (50%) & Kannada (40%)
            </p>
            <p className="mb-2 text-gray-600">Centre: Bangalore | Dharwad</p>

            <div className="mb-4">
              <h3 className="font-semibold">Course Features:</h3>
              <ul className="list-disc ml-5 text-gray-700">
                <li>Integrated Classes for Prelims & Mains</li>
                <li>Comprehensive mains answer writing practice</li>
                <li>Weekly Current Affairs Class</li>
                <li>Study materials and handouts provided</li>
                <li>Free Prelims and Main Test Series</li>
              </ul>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-left">
                <thead className="bg-red-500 text-white">
                  <tr>
                    <th className="px-4 py-2">Centre</th>
                    <th className="px-4 py-2">Mode of Class</th>
                    <th className="px-4 py-2">Fee Structure</th>
                    <th className="px-4 py-2"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-2">Bangalore</td>
                    <td className="px-4 py-2">Offline & Online</td>
                    <td className="px-4 py-2">₹ 60,000 inc GST</td>
                    <td className="px-4 py-2">
                      <button className="bg-red-500 text-white px-4 py-2 rounded-md">Enroll Now</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Dharwad</td>
                    <td className="px-4 py-2">Offline</td>
                    <td className="px-4 py-2">₹ 52,000 inc GST</td>
                    <td className="px-4 py-2">
                      <button className="bg-red-500 text-white px-4 py-2 rounded-md">Enroll Now</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4">
              <h3 className="font-semibold">Major Takeaways:</h3>
              <ul className="list-disc ml-5 text-gray-700">
                <li>Free Aarohan Sardhana - Kannada Monthly Magazine</li>
                <li>Free Prelims and Mains Test Series</li>
              </ul>
            </div>
          </div>

          {/* Section 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Insta KAS KPSC Prelims</h2>
            <p className="mb-2 text-gray-600">Course Duration: 5-6 Months</p>
            <p className="mb-2 text-gray-600">
              Medium of Classes: English (60%) & Kannada (40%)
            </p>
            <p className="mb-2 text-gray-600">Centre: Bangalore | Dharwad</p>

            <div className="mb-4">
              <h3 className="font-semibold">Course Features:</h3>
              <ul className="list-disc ml-5 text-gray-700">
                <li>Complete coverage of Prelims syllabus</li>
                <li>Experienced and dedicated faculty</li>
                <li>Free Prelims Test Series</li>
                <li>Study materials and handouts provided</li>
              </ul>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-left">
                <thead className="bg-red-500 text-white">
                  <tr>
                    <th className="px-4 py-2">Centre</th>
                    <th className="px-4 py-2">Mode of Class</th>
                    <th className="px-4 py-2">Fee Structure</th>
                    <th className="px-4 py-2"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-100">
                    <td className="px-4 py-2">Bangalore</td>
                    <td className="px-4 py-2">Offline & Online</td>
                    <td className="px-4 py-2">₹ 29,000 inc GST</td>
                    <td className="px-4 py-2">
                      <button className="bg-red-500 text-white px-4 py-2 rounded-md">Enroll Now</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Dharwad</td>
                    <td className="px-4 py-2">Offline</td>
                    <td className="px-4 py-2">₹ 22,000 inc GST</td>
                    <td className="px-4 py-2">
                      <button className="bg-red-500 text-white px-4 py-2 rounded-md">Enroll Now</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4">
              <h3 className="font-semibold">Major Takeaways:</h3>
              <ul className="list-disc ml-5 text-gray-700">
                <li>Free Aarohan Sardhana - Kannada Monthly Magazine</li>
                <li>Free Prelims Test Series</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Classroom Program</h3>
            <ul className="space-y-2 text-red-500">
              <li>Insta KAS KPSC Pre-Cum-Mains</li>
              <li>Insta KAS KPSC Prelims 2022</li>
              <li>Insta KAS KPSC Test Series</li>
              <li>Insta KPSC Mains 2022</li>
              <li>Insta KAS Prelims 2022</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Latest News</h3>
            <ul className="space-y-2 text-gray-600">
              <li>KPSC 2023 Daily Current Affairs</li>
              <li>Exam Date for KAS Prelims</li>
              <li>Mock Test Series for Mains</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassroomPrograms;
