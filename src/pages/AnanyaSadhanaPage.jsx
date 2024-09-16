import React from 'react';
import TopHeader from '../components/TopHeader'
import Header from '../components/Header';
import NotificationBar from '../components/NotificationBar';
import Footer from '../components/footer';
import MagazineBanner from '../components/MagazineBanner';
import MagazinePreview from './MagazinePreview';

const AnanyaSadhanaPage = () => {
  return (
    <div>
      <TopHeader/>
      <Header />
      <NotificationBar />
      <MagazineBanner/>
      <MagazinePreview/>
      <Footer />
    </div>
  );
};

export default AnanyaSadhanaPage;
