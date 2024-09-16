import React from 'react';
import TopHeader from '../components/TopHeader'
import Header from '../components/Header';
import NotificationBar from '../components/NotificationBar';
import Footer from '../components/footer';
import PreviousYearPapers from '../components/PreviousPapers';
import ResourceBanner from '../components/ResourceBanner';


const Syllabus= () => {
  return (
    <div>
      <TopHeader/>
      <Header />
      <NotificationBar />
      <ResourceBanner title=" KPSC Mains Previous Year Question Papers"/> 
      <PreviousYearPapers/>
      <Footer />
    </div>
  );
};

export default Syllabus;
