import React from 'react';
import TopHeader from '../components/TopHeader'
import Header from '../components/Header';
import NotificationBar from '../components/NotificationBar';
import Footer from '../components/footer';
import ExamSyllabus from '../components/ExamSyllabus';

const Syllabus= () => {
  return (
    <div>
      <TopHeader/>
      <Header />
      <NotificationBar />
      <ExamSyllabus/>
      <Footer />
    </div>
  );
};

export default Syllabus;
