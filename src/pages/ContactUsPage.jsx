import React from 'react';
import TopHeader from '../components/TopHeader'
import Header from '../components/Header';
import NotificationBar from '../components/NotificationBar';
import ContactForm from '../components/contactus';
import OurBranches from '../components/ourbranches';

const LandingPage = () => {
  return (
    <div>
      <TopHeader/>
      <Header />
      <NotificationBar />
      <ContactForm/>
      <OurBranches/>
      
    </div>
  );
};

export default LandingPage;
