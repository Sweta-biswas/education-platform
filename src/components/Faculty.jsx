import React from "react";
import shamnanth from "../assets/facone.png"; // Adjust the paths accordingly
import shivanand from "../assets/factwo.png";
import aditya from "../assets/facthree.png";
import jyoti from "../assets/facfour.png";
import karthik from "../assets/facfive.png";
import pradeep from "../assets/facsix.png";

const FacultySection = () => {
  const facultyMembers = [
    {
      name: "SHAMNATH",
      subject: "CSAT",
      image: shamnanth,
    },
    {
      name: "SHIVANAND BENNALLI",
      subject: "Indian Polity",
      image: shivanand,
    },
    {
      name: "ADITYA",
      subject: "Economics",
      image: aditya,
    },
    {
      name: "JYOTI GANESH",
      subject: "Economics",
      image: jyoti,
    },
    {
      name: "KARTHIK",
      subject: "Indian Polity",
      image: karthik,
    },
    {
      name: "PRADEEP",
      subject: "Economics",
      image: pradeep,
    },
  ];

  return (
    <div className="py-12 px-6 bg-white">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-semibold text-gray-800">Our Faculty</h2>
        <p className="text-2xl mt-4 text-gray-600">
          With the right teachers by your side, no dream is daunting
        </p>
        <div className="h-1 w-60 bg-red-500 mx-auto mt-4"></div>
      </div>

      {/* Faculty Members */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {facultyMembers.map((member, index) => (
          <div
            key={index}
            className="text-center p-4 "
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-3/5 h-auto rounded-lg mb-4 mx-auto"
            />
            <h3 className="text-2xl font-bold text-gray-800">{member.name}</h3>
            <p className="text-xl text-gray-600">{member.subject}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacultySection;
