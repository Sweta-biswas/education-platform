import React from 'react';
import { Link } from 'react-router-dom';
import CourseImg from '../assets/courseImg.png';

const CourseSlider = ({ title }) => {
  return (
    <div className="my-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold text-gray-800">{title}</h2>
        <div className="h-1 w-60 bg-red-500 mx-auto mt-4"></div>
      </div>
      <div className="flex overflow-x-scroll space-x-4">
        {/* Repeat this block for each course */}
        <div className="w-64 flex-shrink-0">
          <img src={CourseImg} alt="Course" className="w-full h-40 object-cover rounded" />
          <div className="p-4 bg-white shadow rounded-b">
            <h3 className="text-red-600 font-bold">Course 1</h3>
            <p className="text-gray-600">Lorem Ipsum is simply dummy text...</p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-red-600 font-bold">₹380</span>
              <Link to="/courses/details">
                <button className="bg-red-600 text-white px-4 py-2 rounded">See Details</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-64 flex-shrink-0">
          <img src={CourseImg} alt="Course" className="w-full h-40 object-cover rounded" />
          <div className="p-4 bg-white shadow rounded-b">
            <h3 className="text-red-600 font-bold">Course 1</h3>
            <p className="text-gray-600">Lorem Ipsum is simply dummy text...</p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-red-600 font-bold">₹380</span>
              <Link to="/courses/details">
                <button className="bg-red-600 text-white px-4 py-2 rounded">See Details</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-64 flex-shrink-0">
          <img src={CourseImg} alt="Course" className="w-full h-40 object-cover rounded" />
          <div className="p-4 bg-white shadow rounded-b">
            <h3 className="text-red-600 font-bold">Course 1</h3>
            <p className="text-gray-600">Lorem Ipsum is simply dummy text...</p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-red-600 font-bold">₹380</span>
              <Link to="/courses/details">
                <button className="bg-red-600 text-white px-4 py-2 rounded">See Details</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-64 flex-shrink-0">
          <img src={CourseImg} alt="Course" className="w-full h-40 object-cover rounded" />
          <div className="p-4 bg-white shadow rounded-b">
            <h3 className="text-red-600 font-bold">Course 1</h3>
            <p className="text-gray-600">Lorem Ipsum is simply dummy text...</p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-red-600 font-bold">₹380</span>
              <Link to="/courses/details">
                <button className="bg-red-600 text-white px-4 py-2 rounded">See Details</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-64 flex-shrink-0">
          <img src={CourseImg} alt="Course" className="w-full h-40 object-cover rounded" />
          <div className="p-4 bg-white shadow rounded-b">
            <h3 className="text-red-600 font-bold">Course 1</h3>
            <p className="text-gray-600">Lorem Ipsum is simply dummy text...</p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-red-600 font-bold">₹380</span>
              <Link to="/courses/details">
                <button className="bg-red-600 text-white px-4 py-2 rounded">See Details</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-64 flex-shrink-0">
          <img src={CourseImg} alt="Course" className="w-full h-40 object-cover rounded" />
          <div className="p-4 bg-white shadow rounded-b">
            <h3 className="text-red-600 font-bold">Course 1</h3>
            <p className="text-gray-600">Lorem Ipsum is simply dummy text...</p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-red-600 font-bold">₹380</span>
              <Link to="/courses/details">
                <button className="bg-red-600 text-white px-4 py-2 rounded">See Details</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-64 flex-shrink-0">
          <img src={CourseImg} alt="Course" className="w-full h-40 object-cover rounded" />
          <div className="p-4 bg-white shadow rounded-b">
            <h3 className="text-red-600 font-bold">Course 1</h3>
            <p className="text-gray-600">Lorem Ipsum is simply dummy text...</p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-red-600 font-bold">₹380</span>
              <Link to="/courses/details">
                <button className="bg-red-600 text-white px-4 py-2 rounded">See Details</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-64 flex-shrink-0">
          <img src={CourseImg} alt="Course" className="w-full h-40 object-cover rounded" />
          <div className="p-4 bg-white shadow rounded-b">
            <h3 className="text-red-600 font-bold">Course 1</h3>
            <p className="text-gray-600">Lorem Ipsum is simply dummy text...</p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-red-600 font-bold">₹380</span>
              <Link to="/courses/details">
                <button className="bg-red-600 text-white px-4 py-2 rounded">See Details</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-64 flex-shrink-0">
          <img src={CourseImg} alt="Course" className="w-full h-40 object-cover rounded" />
          <div className="p-4 bg-white shadow rounded-b">
            <h3 className="text-red-600 font-bold">Course 1</h3>
            <p className="text-gray-600">Lorem Ipsum is simply dummy text...</p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-red-600 font-bold">₹380</span>
              <Link to="/courses/details">
                <button className="bg-red-600 text-white px-4 py-2 rounded">See Details</button>
              </Link>
            </div>
          </div>
        </div>
        {/* Repeat ends */}
      </div>
    </div>
  );
};

export default CourseSlider;
