import React from 'react';
import MaleReview from '../assets/male.png';
import FemaleReview from '../assets/female.png';

const Testimonial = ({ image, name, title, quote }) => (
  <div className="flex flex-col items-center bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
    <img src={image} alt={name} className="w-32 h-32 object-cover rounded-full mb-6 shadow-md" />
    <blockquote className="text-center mb-6">
      <p className="text-gray-600 italic">{quote}</p>
    </blockquote>
    <div className="bg-red-600 text-white py-3 px-6 rounded-full text-center">
      <p className="font-bold text-lg">{name}</p>
      <p className="text-sm">{title}</p>
    </div>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      image: MaleReview,
      name: "Dr. Chikkappa Nayak",
      title: "State 2nd Rank, Tahsildar",
      quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      image: FemaleReview,
      name: "Divya K Shetty",
      title: "Deputy Superintendent of Excise 20th Batch Topper",
      quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    }
  ];

  return (
    <div className="container mx-auto px-6 py-16">
      <h2 className="text-center text-3xl font-bold mb-4 text-gray-800">Testimonials</h2>
      <h3 className="text-center text-4xl font-bold mb-12 text-gray-700">Of our resolve to your triumph</h3>
      <div className="h-1 w-64 bg-red-600 mx-auto mb-16"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </div>
      
      <div className="flex justify-center mt-12">
        <div className="h-1 w-16 bg-red-600"></div>
        <div className="h-1 w-16 bg-gray-300"></div>
      </div>
    </div>
  );
};

export default Testimonials;
