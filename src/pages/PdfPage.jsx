import React from 'react';
import TopHeader from '../components/TopHeader'
import Header from '../components/Header';
import NotificationBar from '../components/NotificationBar';
import Footer from '../components/footer';
import MagazineBanner from '../components/MagazineBanner';
import PdfPreview from '../components/PdfPreview';


const LandingPage = () => {
  return (
    <div>
      <TopHeader/>
      <Header />
      <NotificationBar />
      <MagazineBanner/>
      <PdfPreview/>
      <Footer />
    </div>
  );
};

export default LandingPage;
