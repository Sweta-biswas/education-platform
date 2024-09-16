import React from 'react';
import TopHeader from '../components/TopHeader'
import Header from '../components/Header';
import NotificationBar from '../components/NotificationBar';
import MainBanner from '../components/MainBanner';
import Footer from '../components/footer';
import Alert from '../components/alert';
import SubscribeNewsletter from '../components/SubscribeNewsLetter';
import Achievements from '../components/achievements';
import AnanyaSadhana from '../components/AnanyaSadhana';
import ResourceSlider from '../components/ResourceSlider';
import Video from '../components/video';
import KnowUs from '../components/KnowAbout';
import Testimonials from '../components/Testimonial';

const LandingPage = () => {
  return (
    <div>
      <TopHeader/>
      <Header />
      <NotificationBar />
      <MainBanner />
      <ResourceSlider/>
      <Alert/>
      <KnowUs/>
      <Testimonials/>
      <AnanyaSadhana/>
      <Achievements/>
      <Video/>
      <SubscribeNewsletter/>
      <Footer />
    </div>
  );
};

export default LandingPage;
