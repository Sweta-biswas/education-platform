import React from 'react';
import TopHeader from '../components/TopHeader'
import Header from '../components/Header';
import NotificationBar from '../components/NotificationBar';
import Footer from '../components/footer';
import ExamSlider from '../components/ExamSlider';
import InformationSlider from '../components/Info';
import AllExamSlider from '../components/exam';

const AnanyaSadhanaPage = () => {
  return (
    <div>
      <TopHeader/>
      <Header />
      <NotificationBar />
      <ExamSlider/>
      <InformationSlider/>
      <AllExamSlider/>
      <Footer />
    </div>
  );
};

export default AnanyaSadhanaPage;
