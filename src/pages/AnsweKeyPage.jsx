import React from 'react';
import TopHeader from '../components/TopHeader'
import Header from '../components/Header';
import NotificationBar from '../components/NotificationBar';
import Footer from '../components/footer';
import QuizComponent from '../components/QuizComponent';
import ResourceBanner from '../components/ResourceBanner';

const AnanyaSadhanaPage = () => {
  return (
    <div>
      <TopHeader/>
      <Header />
      <NotificationBar />
      <ResourceBanner title="Resource Of The Day - Answer Key"/> 
      <QuizComponent/>
      <Footer />
    </div>
  );
};

export default AnanyaSadhanaPage;
