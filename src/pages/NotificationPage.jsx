import React from 'react';
import TopHeader from '../components/TopHeader'
import Header from '../components/Header';
import NotificationBar from '../components/NotificationBar';
import Footer from '../components/footer';
import CoursesHeader from '../components/CourseBanner';
import QuestionList from '../components/Questionlist';



const NotificationPage= ({ title }) =>{
  return (
    <div>
      <TopHeader/>
      <Header />
      <NotificationBar />
      <CoursesHeader title="Featured Courses"/>
      <QuestionList/>
      <Footer />
    </div>
  );
};

export default NotificationPage;
