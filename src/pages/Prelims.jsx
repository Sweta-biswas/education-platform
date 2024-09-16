import React from 'react';
import TopHeader from '../components/TopHeader'
import Header from '../components/Header';
import NotificationBar from '../components/NotificationBar';
import Footer from '../components/footer';
import PrelimsPrograms from '../components/PrelimsPrograms';

const Syllabus= () => {
  return (
    <div>
      <TopHeader/>
      <Header />
      <NotificationBar />
      <PrelimsPrograms/>
      <Footer />
    </div>
  );
};

export default Syllabus;
