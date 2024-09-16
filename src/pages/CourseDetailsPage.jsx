import React from 'react';
import PdfIcon from '../assets/pdficon.png';
import CourseBackground from '../assets/coursebg.png';
import CourseImg from '../assets/courseImg.png'
import TopHeader from '../components/TopHeader'
import Header from '../components/Header';
import CourseSlider from '../components/CourseSlider';
import NotificationBar from '../components/NotificationBar';
import Footer from '../components/footer';
import { Play } from 'lucide-react';

const CourseDetails = () => {
  return (
    <div>
     <TopHeader/>
      <Header />
      <NotificationBar />
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-2/3">
          <div className="relative">
          <img src={CourseImg} alt="Course video thumbnail" className="w-full" />
          </div>
          <h2 className="text-4xl font-bold mt-10 text-red-600 mb-2">Insta KAS KPSC Mains Test Series 2023</h2>
          <p className="text-gray-700 text-xl mt-6 mb-4">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
            the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
            of type and scrambled it to make a type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
          <div className="relative">
            <img src={CourseBackground} alt="Course video thumbnail" className="w-full" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <Play className="text-white w-16 h-16" />
            </div>
          </div>
          <div className="flex justify-between items-center mt-4 bg-red-600 text-white p-4">
            <p className="font-bold">Rs 5000 incl of taxes</p>
            <button className="bg-white text-red-600 px-4 py-2 rounded">Enrol Now</button>
          </div>
        </div>
        <div className="md:w-1/3">
          <div className="bg-red-600 text-white p-4 mb-4">
            <p className="font-bold">Rs 5000 incl of taxes</p>
            <p>To get this Course</p>
            <button className="bg-white text-red-600 px-4 py-2 mt-2 w-full">ENROL NOW</button>
          </div>
          <div className="border border-gray-300 p-4">
            <div className="flex items-center mb-2">
              <div className="w-4 h-4 bg-red-600 rounded-full mr-2"></div>
              <p>Time Table</p>
              <img src={PdfIcon} alt="PDF icon" className="ml-auto" />
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-red-600 rounded-full mr-2"></div>
              <p>Brochure</p>
              <img src={PdfIcon} alt="PDF icon" className="ml-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <CourseSlider title="Featured Courses"/>
    <Footer/>
    </div>
  );
};

export default CourseDetails;