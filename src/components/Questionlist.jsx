import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const QuestionList = () => {
  const [selectedDate, setSelectedDate] = useState("26-02-2023");
  const [currentPage, setCurrentPage] = useState(2);
  const navigate = useNavigate();

  const questions = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: "Weekly Compilation of Practice to Progress (PYQs) for KPSC 21st Feb to 25th Feb",
    link: "#"
  }));

  const pages = Array.from({ length: 10 }, (_, i) => i + 1);

  const handleDateClick = (date) => {
    setSelectedDate(date);
    // Logic to fetch questions based on the selected date can be added here
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
    // Logic to fetch questions based on the selected page can be added here
  };

  const handleViewAllClick = () => {
    navigate("/notification-update");
  };

  return (
    <div className="flex flex-col md:flex-row justify-between w-full p-4 bg-gray-100">
      {/* Question Section */}
      <div className="w-full md:w-3/4 bg-white p-6 shadow-md rounded-md">
        <div className="flex items-center mb-4">
          {["25-02-2023", "26-02-2023", "27-02-2023"].map((date) => (
            <button
              key={date}
              onClick={() => handleDateClick(date)}
              className={`text-sm font-semibold px-3 py-2 rounded-md mr-2 ${
                selectedDate === date
                  ? "text-white bg-red-600"
                  : "text-gray-700 bg-gray-200"
              } hover:bg-red-500 hover:text-white`}
            >
              {date}
            </button>
          ))}
          <button
            onClick={() => handleDateClick("Select Date")}
            className="text-sm font-semibold text-gray-700 bg-gray-200 px-3 py-2 rounded-md hover:bg-red-500 hover:text-white"
          >
            Select Date
          </button>
        </div>
        {questions.map((question) => (
          <div key={question.id} className="flex items-start py-2">
            <div className="flex items-center justify-center w-8 h-8 text-white bg-black rounded-full mr-4">
              {question.id}
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-700">{question.title}</p>
              <a href={question.link} className="text-sm text-red-500 font-semibold">
                Read More
              </a>
            </div>
          </div>
        ))}
        {/* Pagination */}
        <div className="flex justify-center mt-6">
          <button
            className="text-gray-600 hover:text-gray-900 px-2"
            onClick={() => handlePageClick(currentPage > 1 ? currentPage - 1 : 1)}
          >
            &lt;
          </button>
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => handlePageClick(page)}
              className={`${
                currentPage === page
                  ? "bg-red-600 text-white"
                  : "bg-gray-200 text-gray-700"
              } hover:bg-red-500 hover:text-white px-4 py-2 rounded-full mx-1`}
            >
              {page}
            </button>
          ))}
          <button
            className="text-gray-600 hover:text-gray-900 px-2"
            onClick={() =>
              handlePageClick(currentPage < pages.length ? currentPage + 1 : pages.length)
            }
          >
            &gt;
          </button>
        </div>
      </div>

      {/* Important Updates Section */}
      <div className="w-full md:w-1/4 mt-6 md:mt-0 md:ml-6 bg-white p-6 shadow-md rounded-md">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">IMPORTANT UPDATES</h3>
        {questions.slice(0, 4).map((update, index) => (
          <div key={index} className="flex items-start mb-4">
            <div className="text-sm text-gray-700 flex-1">{update.title}</div>
            <a href={update.link} className="text-sm text-red-500 font-semibold">
              Read More
            </a>
          </div>
        ))}
        <button
          onClick={handleViewAllClick}
          className="bg-red-600 text-white font-semibold px-4 py-2 rounded-md w-full mt-4 hover:bg-red-500"
        >
          View All
        </button>
      </div>
    </div>
  );
};

export default QuestionList;
