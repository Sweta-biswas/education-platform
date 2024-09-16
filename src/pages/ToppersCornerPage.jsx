import React from 'react';
import TopHeader from '../components/TopHeader'
import Header from '../components/Header';
import NotificationBar from '../components/NotificationBar';
import Footer from '../components/footer';
import TopperCorner from '../components/TopperCornar';
import SuccessStories from '../components/SuccessStories';

const ToppersCornerPage = () => {
  return (
    <div>
      <TopHeader/>
      <Header />
      <NotificationBar />
      <TopperCorner/>
      <SuccessStories/>
      <Footer />
    </div>
  );
};

export default ToppersCornerPage;
