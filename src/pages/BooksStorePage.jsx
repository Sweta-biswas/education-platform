import React from 'react';
import TopHeader from '../components/TopHeader'
import Header from '../components/Header';
import NotificationBar from '../components/NotificationBar';
import Footer from '../components/footer';
import MagazineBanner from '../components/MagazineBanner';
import StoreLocator from '../components/StoreLocator';


const LandingPage = () => {
  return (
    <div>
      <TopHeader/>
      <Header />
      <NotificationBar />
      <MagazineBanner/>
      <StoreLocator/>
      <Footer />
    </div>
  );
};

export default LandingPage;
