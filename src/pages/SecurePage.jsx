import React from 'react';
import TopHeader from '../components/TopHeader'
import Header from '../components/Header';
import NotificationBar from '../components/NotificationBar';
import Footer from '../components/footer';
import DropDown from '../components/dropdown';
import ResourceBanner from '../components/ResourceBanner';

const AnanyaSadhanaPage = () => {
  return (
    <div>
      <TopHeader/>
      <Header />
      <NotificationBar />
      <ResourceBanner title="Resource Of The Day - Secure"/> 
      <DropDown/>
      <Footer />
    </div>
  );
};

export default AnanyaSadhanaPage;
