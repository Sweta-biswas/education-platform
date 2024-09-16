import React from 'react';
import TopHeader from '../components/TopHeader'
import Header from '../components/Header';
import NotificationBar from '../components/NotificationBar';
import Footer from '../components/footer';
import OurBranches from '../components/ourbranches';
import AboutUs from '../components/AboutUs';
import VisionMissionValues from '../components/VisionValue';
import FacultySection from '../components/Faculty';
import ResultsGrid from '../components/Resultsgrid';
import ApproachSection from '../components/Approach';


const AboutUsPage = () => {
  return (
    <div>
      <TopHeader/>
      <Header />
      <NotificationBar />
      <AboutUs/>
      <VisionMissionValues/>
      <ApproachSection/>
      <div className="text-center">
        <h2 className="text-5xl font-semibold text-gray-800">Our Results</h2>
        <h3 className="text-2xl mt-4 text-gray-600">
          We have made tremendous strides since our inception in 2022
        </h3>
        <div className="h-1 w-60 bg-red-500 mt-4 mx-auto"></div>
      </div>
      <ResultsGrid/>
      <FacultySection/>
      <OurBranches/>
      <Footer />
    </div>
  );
};

export default AboutUsPage;
