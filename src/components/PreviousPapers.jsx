import React from 'react';

const PreviousYearPapers = () => {
  // Data for the question papers
  const papers = [
    {
      year: '2022',
      papers: [
        'Qualifying Paper - Kannada',
        'Qualifying Paper - English',
      ],
      subjects: [
        'Essay',
        'General Studies I (GS1)',
        'General Studies II (GS2)',
        'General Studies III (GS3)',
        'General Studies IV (GS4)',
        'Optional Subject I',
        'Optional Subject II',
      ],
    },
    {
      year: '2021',
      papers: [
        'Qualifying Paper - Kannada',
        'Qualifying Paper - English',
      ],
      subjects: [
        'Essay',
        'General Studies I (GS1)',
        'General Studies II (GS2)',
        'General Studies III (GS3)',
        'General Studies IV (GS4)',
        'Optional Subject I',
        'Optional Subject II',
      ],
    },
    {
      year: '2020',
      papers: [
        'Qualifying Paper - Kannada',
        'Qualifying Paper - English',
      ],
      subjects: [
        'Essay',
        'General Studies I (GS1)',
        'General Studies II (GS2)',
        'General Studies III (GS3)',
        'General Studies IV (GS4)',
        'Optional Subject I',
        'Optional Subject II',
      ],
    },
    {
      year: '2019',
      papers: [
        'Qualifying Paper - Kannada',
        'Qualifying Paper - English',
      ],
      subjects: [
        'Essay',
        'General Studies I (GS1)',
        'General Studies II (GS2)',
        'General Studies III (GS3)',
        'General Studies IV (GS4)',
        'Optional Subject I',
        'Optional Subject II',
      ],
    },
    {
      year: '2018',
      papers: [
        'Qualifying Paper - Kannada',
        'Qualifying Paper - English',
      ],
      subjects: [
        'Essay',
        'General Studies I (GS1)',
        'General Studies II (GS2)',
        'General Studies III (GS3)',
        'General Studies IV (GS4)',
        'Optional Subject I',
        'Optional Subject II',
      ],
    },
  ];

  return (
    <div className="bg-gray-50 py-10 px-5 lg:px-20">
      <div className="max-w-5xl mx-auto">
        
        {/* Papers List */}
        <div className="space-y-8">
          {papers.map((paper, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex justify-between items-center"
            >
              {/* Left Section - Year and Qualifying Papers */}
              <div className="flex-1">
                <h2 className="bg-red-500 text-white text-lg font-bold py-2 px-4 rounded mb-4">
                  Year {paper.year}
                </h2>
                <div className="space-y-2">
                  {paper.papers.map((p, i) => (
                    <p key={i} className="text-gray-600">
                      {p}
                    </p>
                  ))}
                </div>
              </div>

              {/* Right Section - Subjects */}
              <div className="flex-1">
                <div className="bg-gray-100 p-4 rounded-lg">
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {paper.subjects.map((subject, i) => (
                      <li key={i}>{subject}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreviousYearPapers;
