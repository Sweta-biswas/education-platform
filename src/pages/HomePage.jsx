import React from 'react';
import TopHeader from '../components/TopHeader'
import Header from '../components/Header';
import NotificationBar from '../components/NotificationBar';
import Footer from '../components/footer';
import HomeBanner from '../components/HomeBanner';
import SubscribeNewsletter from '../components/SubscribeNewsLetter';
import Achievements from '../components/achievements';
import QuestionBank from '../components/questionbank';
import SuccessStories from '../components/SuccessStory';
import ResourcesForTheDay from '../components/Resource';
import Testimonials from '../components/Testimonial';
import Learn from '../components/LearnVideo';



const LandingPage = () => {
  return (
    <div>
      <TopHeader/>
      <Header />
      <NotificationBar />
      <HomeBanner />
      <QuestionBank/>
      <ResourcesForTheDay/>
      <SuccessStories/>
      <Testimonials/>
     <Achievements/>
      <Learn/>
      <SubscribeNewsletter/>
      <Footer />
    </div>
  );
};

export default LandingPage;
