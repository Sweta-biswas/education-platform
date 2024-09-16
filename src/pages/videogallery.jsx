import React from 'react';
import TopHeader from '../components/TopHeader'
import Header from '../components/Header';
import NotificationBar from '../components/NotificationBar';
import Footer from '../components/footer';
import Learn from '../components/LearnVideo';

const Syllabus= () => {
  return (
    <div>
      <TopHeader/>
      <Header />
      <NotificationBar />
      <Learn/>
      <Footer />
    </div>
  );
};

export default Syllabus;
