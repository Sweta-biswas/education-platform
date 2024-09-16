import React from 'react';
import TopHeader from '../components/TopHeader'
import Header from '../components/Header';
import NotificationBar from '../components/NotificationBar';
import Footer from '../components/footer';
import Questions from '../components/Question';
import ResourceBanner from '../components/ResourceBanner';

const AnanyaSadhanaPage = () => {
  return (
    <div>
      <TopHeader/>
      <Header />
      <NotificationBar />
      <ResourceBanner title="Resource Of The Day - MCQ Questions"/> 
      <Questions/>
      <Footer />
    </div>
  );
};

export default AnanyaSadhanaPage;
