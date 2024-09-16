import React, { useState } from 'react';

const Dropdown = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 mt-8">
      <button
        className="w-full bg-red-600 text-white px-4 py-4 flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span>{isOpen ? '▲' : '▼'}</span>
      </button>
      {isOpen && (
        <div className="bg-white shadow-md p-4">
          {content.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-gray-100 p-2 mb-2 rounded"
            >
              <div className="flex-1">
                <p className="font-semibold text-red-600">{item.date}</p>
                <p>{item.title}</p>
                <a href={item.downloadLink} className="text-red-500">
                  Download
                </a>
              </div>
              <div className="flex-1 text-right">
                <p>{item.synopsis}</p>
                <a href={item.synopsisLink} className="text-red-500">
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const App = () => {
  // Sample content for each dropdown
  const dropdownContent = [
    {
      date: '31-11-2022',
      title: 'Title Of Question Paper',
      synopsis: 'Synopsis',
      downloadLink: '#',
      synopsisLink: '#',
    },
    {
      date: '30-11-2022',
      title: 'Title Of Question Paper',
      synopsis: 'Synopsis',
      downloadLink: '#',
      synopsisLink: '#',
    },
    // Add more as needed
  ];

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Dropdown title="November - 2022" content={dropdownContent} />
      <Dropdown title="October - 2022" content={dropdownContent} />
      <Dropdown title="September - 2022" content={dropdownContent} />
      <Dropdown title="August - 2022" content={dropdownContent} />
      <Dropdown title="July - 2022" content={dropdownContent} />
    </div>
  );
};

export default App;
