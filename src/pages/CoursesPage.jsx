import React from 'react';
import TopHeader from '../components/TopHeader'
import Header from '../components/Header';
import NotificationBar from '../components/NotificationBar';
import Footer from '../components/footer';
import CourseSlider from '../components/CourseSlider';
import CoursesHeader from '../components/CourseBanner';
import CoursesCategories from '../components/Categories';


const LandingPage = () => {
  return (
    <div>
      <TopHeader/>
      <Header />
      <NotificationBar />
      <CoursesHeader title="Our courses"/>
      <CoursesCategories/>
      <CourseSlider title="Featured Courses"/>
      <CourseSlider title="Category 1" />
      <CourseSlider title="Category 2" />
      <Footer />
    </div>
  );
};

export default LandingPage;
