import React from 'react';
import TopHeader from '../components/TopHeader'
import Header from '../components/Header';
import NotificationBar from '../components/NotificationBar';
import Footer from '../components/footer';
import ResourceBanner from '../components/ResourceBanner';
import ImageGrid from '../components/Galleryimages';

const Syllabus= () => {
  return (
    <div>
      <TopHeader/>
      <Header />
      <NotificationBar />
      <ResourceBanner title="Gallery" />
      <ImageGrid/>
      <Footer />
    </div>
  );
};

export default Syllabus;
