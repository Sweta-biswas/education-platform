import React from 'react';
import TopHeader from '../components/TopHeader'
import Header from '../components/Header';
import NotificationBar from '../components/NotificationBar';
import Footer from '../components/footer';
import TestDropdownComponent from '../components/TestDropdown';
import ResourceBanner from '../components/ResourceBanner';

const AnanyaSadhanaPage = () => {
  return (
    <div>
      <TopHeader/>
      <Header />
      <NotificationBar />
      <ResourceBanner title="Resource Of The Day - MCQ"/> 
      <TestDropdownComponent/>
      <Footer />
    </div>
  );
};

export default AnanyaSadhanaPage;
