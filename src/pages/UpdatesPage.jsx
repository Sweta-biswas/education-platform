import React from 'react';
import TopHeader from '../components/TopHeader'
import Header from '../components/Header';
import NotificationBar from '../components/NotificationBar';
import Footer from '../components/footer';
import NotificationSection from '../components/NotificationSection';



const NotificationPage= () =>{
  return (
    <div>
      <TopHeader/>
      <Header />
      <NotificationBar />
      <NotificationSection/>
      <Footer />
    </div>
  );
};

export default NotificationPage;
