import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import CoursesPage from './pages/CoursesPage';
import ToppersCornerPage from './pages/ToppersCornerPage';
import ResourcesPage from './pages/ResourcesPage';
import ContactUsPage from './pages/ContactUsPage';
import CourseDetailsPage from './pages/CourseDetailsPage'; 
import NotificationPage from './pages/NotificationPage';
import UpdatePage from './pages/UpdatesPage';
import SuccessStoryPage from './pages/SuccessStoryPage';
import AnanyaSadhanaPage from './pages/AnanyaSadhanaPage';
import PdfPage from './pages/PdfPage';
import BooksStorePage from './pages/BooksStorePage';
import SecurePage from './pages/SecurePage';
import MCQPage from './pages/McqPage';
import QuestionPage from './pages/QuestionPage';
import AnswerKeyPage from './pages/AnsweKeyPage';
import EditorialPage from './pages/EditorialPage';
import EditorialDetails from './pages/EditorialsDetails';
import KPSCPage from './pages/KPSCPage';
import Syllabus from './pages/Syllabus';
import UPSCQuestion from './pages/upscQuestion';
import MainsQuestion from './pages/mainsQuestion';
import Result from './pages/result';
import Gallery from './pages/gallery';
import ClassProgram from './pages/classprogram';
import VideoGallery from './pages/videogallery';
import IPM from './pages/IPM';
import Prelims from './pages/Prelims';
import Mains from './pages/Mains';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/toppers-corner" element={<ToppersCornerPage />} />
        <Route path="/kpsc" element={<KPSCPage />} />
        <Route path="/ananya-sadhana" element={<AnanyaSadhanaPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/courses/details" element={<CourseDetailsPage />} /> 
        <Route path="/notification" element={<NotificationPage />} />
        <Route path="/notification-update" element={<UpdatePage />} />
        <Route path="/topers-corner/success-story" element={<SuccessStoryPage />} />
        <Route path="/pdf-preview" element={<PdfPage />} />
        <Route path="/book-store" element={<BooksStorePage/>} />
        <Route path="/secure" element={<SecurePage/>} />
        <Route path="/mcqpage" element={<MCQPage/>} />
        <Route path="/question" element={<QuestionPage/>} />
        <Route path="/answer-key" element={<AnswerKeyPage/>} />
        <Route path="/editorials" element={<EditorialPage/>} />
        <Route path="/editorial-details" element={<EditorialDetails/>} />
        <Route path="/syllabus" element={<Syllabus />} />
        <Route path="/upsc-question" element={<UPSCQuestion />} />
        <Route path="/mains-question" element={<MainsQuestion />} />
        <Route path="/result" element={<Result />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/class-program" element={<ClassProgram  />} />
        <Route path="/video-gallery" element={<VideoGallery />} />
        <Route path="/ipm" element={<IPM />} />
        <Route path="/prelims" element={<Prelims />} />
        <Route path="/mains" element={<Mains />} />
        
      </Routes>
    </Router>
  );
}

export default App;
