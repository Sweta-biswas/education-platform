import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

const questionsData = {
  1: [
    {
      question: '1. In which of the following states is Cauvery South Wildlife Sanctuary located?',
      options: ['Karnataka', 'Tamil Nadu', 'Kerala', 'Madhya Pradesh'],
      correct: 0,
    },
    {
      question: '2. Atal Innovation Mission is set up under the?',
      options: ['Department of Science and Technology', 'Ministry of Employment', 'NITI Aayog', 'Ministry of Skill Development and Entrepreneurship'],
      correct: 2,
    },
    {
        question: '3. In which of the following states is XYZ Sanctuary located?',
        options: ['State 1', 'State 2', 'State 3', 'State 4'],
        correct: 0,
      },
      {
        question: '4. Some other question about Science and Technology?',
        options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
        correct: 1,
      },
      {
        question: '5. In which of the following states is XYZ Sanctuary located?',
        options: ['State 1', 'State 2', 'State 3', 'State 4'],
        correct: 0,
      },
      
  ],
  2: [
    {
        question: '6. Some other question about Science and Technology?',
        options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
        correct: 1,
      },
    {
      question: '7. In which of the following states is XYZ Sanctuary located?',
      options: ['State 1', 'State 2', 'State 3', 'State 4'],
      correct: 0,
    },
    {
      question: '8. Some other question about Science and Technology?',
      options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
      correct: 1,
    },
    {
        question: '9. In which of the following states is XYZ Sanctuary located?',
        options: ['State 1', 'State 2', 'State 3', 'State 4'],
        correct: 0,
      },
      {
        question: '10. Some other question about Science and Technology?',
        options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
        correct: 1,
      },
     
  ],
  // Add more question sets for pages
};

const QuestionPage = ({ questions, selectedAnswers, onSelectAnswer }) => {
    return (
      <div className="mb-6">
        {questions.map((question, index) => (
          <div key={index} className="mb-4">
            <p>{question.question}</p>
            {question.options.map((option, i) => (
              <label key={i} className="block">
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={i}
                  checked={selectedAnswers[index] === i}
                  onChange={() => onSelectAnswer(index, i)}
                  className="mr-2"
                />
                {option}
              </label>
            ))}
          </div>
        ))}
      </div>
    );
  };
  
  const ResultModal = ({ score, timeTaken, onClose, onRestart, onAnswerKey }) => (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md shadow-lg">
        <h2 className="text-red-600 text-2xl font-bold mb-4">Result</h2>
        <p>Out of {score.total} correct: {score.correct}</p>
        <p>Time taken: {timeTaken}</p>
        <div className="mt-4 flex space-x-4">
          <button className="bg-red-600 text-white px-4 py-2" onClick={onRestart}>Restart Quiz</button>
          <button className="bg-gray-600 text-white px-4 py-2" onClick={onAnswerKey}>Answer Key</button>
        </div>
        <button className="absolute top-2 right-2 text-gray-600" onClick={onClose}>X</button>
      </div>
    </div>
  );
  
  // AnswerKey component for /answer-key route
  const AnswerKey = () => (
    <div className="bg-gray-100 p-4 mb-6">
      <h2 className="font-semibold">Answer Key</h2>
      <ol className="list-decimal ml-6">
        <li> Question 1: Correct Answer is Option 1</li>
        <li> Question 2: Correct Answer is Option 3</li>
        {/* Add answers to each question */}
      </ol>
    </div>
  );
  
  const QuizApp = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedAnswers, setSelectedAnswers] = useState(
      Object.keys(questionsData).reduce((acc, page) => {
        acc[page] = Array(questionsData[page].length).fill(null);
        return acc;
      }, {})
    );
    const [showModal, setShowModal] = useState(false);
    const [quizTime, setQuizTime] = useState(0);
    const [score, setScore] = useState({ correct: 0, total: 0 });
    
    const navigate = useNavigate(); // Hook to navigate between routes
  
    useEffect(() => {
      let timer = setInterval(() => {
        setQuizTime((prevTime) => prevTime + 1);
      }, 1000);
      return () => clearInterval(timer);
    }, []);
  
    const handlePageChange = (pageNum) => {
      setCurrentPage(pageNum);
    };
  
    const handleSelectAnswer = (questionIndex, optionIndex) => {
      setSelectedAnswers((prevAnswers) => ({
        ...prevAnswers,
        [currentPage]: prevAnswers[currentPage].map((answer, i) =>
          i === questionIndex ? optionIndex : answer
        ),
      }));
    };
  
    const handleSubmit = () => {
      const unanswered = Object.values(selectedAnswers).some((answers) =>
        answers.includes(null)
      );
      if (unanswered) {
        toast.error('Please fill all the answers before submitting!');
        return;
      }
  
      let correct = 0;
      let total = 0;
      Object.keys(questionsData).forEach((page) => {
        questionsData[page].forEach((question, index) => {
          total += 1;
          if (selectedAnswers[page][index] === question.correct) {
            correct += 1;
          }
        });
      });
  
      setScore({ correct, total });
      setShowModal(true);
    };
  
    const handleRestart = () => {
      setSelectedAnswers(
        Object.keys(questionsData).reduce((acc, page) => {
          acc[page] = Array(questionsData[page].length).fill(null);
          return acc;
        }, {})
      );
      setQuizTime(0);
      setShowModal(false);
    };
  
    const handleAnswerKey = () => {
      // Navigate to the answer key route
      navigate('/answer-key');
    };
  
    return (
      <div className="max-w-4xl mx-auto p-6">
        <ToastContainer />
        <div className="bg-white p-4 shadow-md">
          <h1 className="text-xl font-bold mb-4">Title Goes Here...</h1>
          <p className="mb-4">
            The following quiz is based on The Hindu, PIB, and other sources.
          </p>
  
          <div className="bg-gray-100 p-4 mb-6">
            <h2 className="font-semibold">INSTRUCTIONS:</h2>
            <ol className="list-decimal ml-6">
              <li> Solve Questions</li>
              <li>Click on "Finish Quiz" button</li>
              <li>Click on "Answer Key" button</li>
            </ol>
          </div>
  
          <QuestionPage
            questions={questionsData[currentPage]}
            selectedAnswers={selectedAnswers[currentPage]}
            onSelectAnswer={handleSelectAnswer}
          />
  
          <div className="flex justify-center space-x-2 mb-4">
            {Object.keys(questionsData).map((pageNum) => (
              <button
                key={pageNum}
                onClick={() => handlePageChange(parseInt(pageNum))}
                className={`px-4 py-2 border ${
                  currentPage === parseInt(pageNum)
                    ? 'bg-red-600 text-white'
                    : 'bg-white text-black'
                }`}
              >
                {pageNum}
              </button>
            ))}
          </div>
  
          <div className="flex justify-end">
            <button
              onClick={handleSubmit}
              className="bg-red-600 text-white px-4 py-2"
            >
              Finish Quiz
            </button>
          </div>
        </div>
  
        {showModal && (
          <ResultModal
            score={score}
            timeTaken={`00:${Math.floor(quizTime / 60)}:${quizTime % 60}`}
            onClose={() => setShowModal(false)}
            onRestart={handleRestart}
            onAnswerKey={handleAnswerKey}
          />
        )}
      </div>
    );
  };
  
  export default QuizApp;