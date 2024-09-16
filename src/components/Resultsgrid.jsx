import React from 'react';
import Award from '../assets/Award.png';

const ResultsGrid = () => {
  const students = Array(12).fill({
    name: "Student Name",
    rank: "RANK 06",
    position: "Deputy Superintendent of Excise",
    imageSrc: Award, // Update this with the actual path
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {students.map((student, index) => (
          <div key={index} className="text-center">
            <img
              src={student.imageSrc}
              alt={student.name}
              className="w-24 h-24 mx-auto rounded-full border-4 border-red-500"
            />
            <h4 className="text-lg font-bold mt-4">{student.name}</h4>
            <p>{student.rank}</p>
            <p className="text-sm">{student.position}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 flex justify-between items-center">
        <span className="text-red-500 text-lg font-semibold">
          Other Successful Students.....
        </span>
        <button className="bg-red-500 text-white py-2 px-6 rounded">
          Download Result
        </button>
      </div>
    </div>
  );
};

export default ResultsGrid;
