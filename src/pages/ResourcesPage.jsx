import React from 'react';
import TopHeader from '../components/TopHeader'
import Header from '../components/Header';
import NotificationBar from '../components/NotificationBar';
import Footer from '../components/footer';
import ResourceSlider from '../components/ResourceSlider';
import MainResource from './MainResourcePage';
const ResourcesPage = () => {
  return (
    <div>
      <TopHeader/>
      <Header />
      <NotificationBar />
      <MainResource/>
      <ResourceSlider/>
      <Footer />
    </div>
  );
};

export default ResourcesPage;
