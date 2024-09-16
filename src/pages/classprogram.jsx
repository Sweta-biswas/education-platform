import React from 'react';
import TopHeader from '../components/TopHeader'
import Header from '../components/Header';
import NotificationBar from '../components/NotificationBar';
import Footer from '../components/footer';
import ClassroomPrograms from '../components/classroom';

const Syllabus= () => {
  return (
    <div>
      <TopHeader/>
      <Header />
      <NotificationBar />
      <ClassroomPrograms/>
      <Footer />
    </div>
  );
};

export default Syllabus;
