import React from 'react';
import TopHeader from '../components/TopHeader'
import Header from '../components/Header';
import NotificationBar from '../components/NotificationBar';
import Footer from '../components/footer';
import ResultsGrid from '../components/Resultsgrid';
import ResultBanner from '../components/ResultsBanner';

const SuccessStoryPage = () => {
  return (
    <div>
      <TopHeader/>
      <Header />
      <NotificationBar />
      <ResultBanner/>
      <h3 className='text-xl mt-8 text-center'>Insta KAS has earned the TRUST of innumerous students across the state. We believe in our VALUES, APPROACHABILITY & QUALTIY because of which Insta KAS has become the ultimate platform for every student looking to succeed with the right DIRECTION, KNOWLEDGE & ATTITUDE towards State Civil Services Examination.
      </h3>
      <h3 className="text-3xl mt-8 font-semibold text-red-600 underline">Successful Students from InstaKAS - 2022</h3>
      <ResultsGrid/>
      <h3 className="text-3xl mt-8 font-semibold text-red-600 underline">Successful Students from InstaKAS - 2021</h3>
      <ResultsGrid/>
      <h3 className="text-3xl mt-8 font-semibold text-red-600 underline">Successful Students from InstaKAS - 2020</h3>
      <ResultsGrid/>
      <Footer />
    </div>
  );
};

export default SuccessStoryPage;
