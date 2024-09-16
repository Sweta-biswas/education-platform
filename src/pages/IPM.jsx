import React from 'react';
import TopHeader from '../components/TopHeader'
import Header from '../components/Header';
import NotificationBar from '../components/NotificationBar';
import Footer from '../components/footer';
import KPSCPrograms from '../components/KPSCPrograms';

const Syllabus= () => {
  return (
    <div>
      <TopHeader/>
      <Header />
      <NotificationBar />
      <KPSCPrograms/>
      <Footer />
    </div>
  );
};

export default Syllabus;
