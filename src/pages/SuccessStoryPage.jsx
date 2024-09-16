import React from 'react';
import TopHeader from '../components/TopHeader'
import Header from '../components/Header';
import NotificationBar from '../components/NotificationBar';
import Footer from '../components/footer';
import BreifStoryPage from '../components/briefStory';

const SuccessStoryPage = () => {
  return (
    <div>
      <TopHeader/>
      <Header />
      <NotificationBar />
     <BreifStoryPage/>
      <Footer />
    </div>
  );
};

export default SuccessStoryPage;
