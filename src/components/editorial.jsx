import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dropdown = ({ title, entries }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // Use navigate hook for programmatic navigation

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleTakeTest = () => {
    navigate('/editorial-details'); // Navigate to the /question route
  };

  return (
    <div className="border-b-2 border-gray-300 mb-2 mt-8">
      <div 
        onClick={toggleDropdown} 
        className="bg-red-600 text-white px-4 py-4 flex justify-between items-center cursor-pointer"
      >
        <span>{title}</span>
        <span>{isOpen ? '▲' : '▼'}</span>
      </div>
      
      {isOpen && (
        <div className="bg-white">
          {entries.map((entry, index) => (
            <div key={index} className="flex justify-between items-center p-4 border-b">
              <div className="bg-red-600 text-white px-3 py-2 rounded-md">{entry.date}</div>
              <div className="flex-1 mx-4">{entry.title}</div>
              <button 
                className="bg-white border border-gray-400 px-4 py-2 text-red-600 hover:bg-gray-100"
                onClick={handleTakeTest} // Handle button click to navigate
              >
                {entry.buttonText}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const EditorialComponent = () => {
  const data = [
    {
      title: 'NOVEMBER - 2022',
      entries: [
        { date: '31-11-2022', title: 'Editorial Title', buttonText: 'Read more' },
        { date: '30-11-2022', title: 'Editorial Title', buttonText: 'Read more' },
        { date: '29-11-2022', title: 'Editorial Title', buttonText: 'Read more' },
        { date: '28-11-2022', title: 'Editorial Title', buttonText: 'Read more' },
        { date: '27-11-2022', title: 'Editorial Title', buttonText: 'Read more' },
      ],
    },
    {
      title: 'OCTOBER - 2022',
      entries: [
        { date: '31-10-2022', title: 'Editorial Title', buttonText: 'Read more' },
        { date: '30-10-2022', title: 'Editorial Title', buttonText: 'Read more' },
        { date: '29-10-2022', title: 'Editorial Title', buttonText: 'Read more' },
        { date: '28-10-2022', title: 'Editorial Titlee', buttonText: 'Read more' },
        { date: '27-10-2022', title: 'Editorial Title', buttonText: 'Read more' },
      ],
    },
    {
      title: 'SEPTEMBER - 2022',
      entries: [
        { date: '31-09-2022', title: 'Editorial Title', buttonText: 'Read more' },
        { date: '30-09-2022', title: 'Editorial Title', buttonText: 'Read more' },
        { date: '29-09-2022', title: 'Editorial Title', buttonText: 'Read more' },
        { date: '28-09-2022', title: 'Editorial Title', buttonText: 'Read more' },
        { date: '27-09-2022', title: 'Editorial Title', buttonText: 'Read more' },
      ],
    },
    {
      title: 'AUGUST - 2022',
      entries: [
        { date: '31-08-2022', title: 'Editorial Title', buttonText: 'Read more' },
        { date: '30-08-2022', title: 'Editorial Title', buttonText: 'Read more' },
        { date: '29-08-2022', title: 'Editorial Title', buttonText: 'Read more' },
        { date: '28-08-2022', title: 'Editorial Title', buttonText: 'Read more' },
        { date: '27-08-2022', title: 'Editorial Title', buttonText: 'Read more' },
      ],
    },
    // Add more months here
  ];

  return (
    <div className="max-w-3xl mx-auto p-4">
      {data.map((dropdown, index) => (
        <Dropdown key={index} title={dropdown.title} entries={dropdown.entries} />
      ))}
    </div>
  );
};

export default EditorialComponent;
