import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const ResourcesForTheDay = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const cards = [
    { title: 'Daily Current Affairs', subject: 'GEOGRAPHY', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...' },
    { title: 'Daily Current Affairs', subject: 'POLITICAL SCIENCE', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...' },
    { title: 'Daily Current Affairs', subject: 'GEOGRAPHY', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...' },
    { title: 'Daily Current Affairs', subject: 'POLITICAL SCIENCE', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...' },
  ];

  return (
    <div className="bg-gray-100 mt-12 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Resources For The Day</h2>
          <p className="text-lg text-gray-600 mt-2">Useful resources to succeed</p>
        </div>

        <div className="text-left mb-12">
          <p className="text-gray-700">
            Helps KAS Aspirants to understand various concepts that are a part of the syllabus. A brief analysis of various topics will be posted from subjects like Art & Culture, History, Economy, Geography, Science and Technology, Environment and Ecology, etc., on a daily basis.
          </p>
        </div>

        <Slider {...sliderSettings}>
          {cards.map((card, index) => (
            <div key={index} className="p-4">
              <div className="bg-white shadow-md rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{card.title}</h3>
                <h4 className="text-md font-medium text-red-700 mb-4">{card.subject}</h4>
                <p className="text-gray-600 mb-6">{card.description}</p>
                <button className="bg-red-600 text-white px-4 py-2 rounded-md">Explore More</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

// Custom Arrow components for Slider
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className} slick-next`}
      style={{ ...style, display: 'block', right: '10px', zIndex: 1 }}
      onClick={onClick}
    >
      <ArrowRight className="text-gray-600" />
    </button>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className} slick-prev`}
      style={{ ...style, display: 'block', left: '10px', zIndex: 1 }}
      onClick={onClick}
    >
      <ArrowLeft className="text-gray-600" />
    </button>
  );
}

export default ResourcesForTheDay;
