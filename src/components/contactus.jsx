import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email: '',
    message: '',
    receiveNotifications: false,
    acceptTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left side - Contact Information */}
      <div className="bg-red-600 text-white p-8 md:w-1/3 flex flex-col justify-center">
        <div className="mb-8">
          <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center mb-4">
            <Send className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-bold mb-2">Contact us</h2>
          <p className="text-xl">Start a new success story</p>
        </div>
        <div>
          <p className="mb-2"><strong>Call Us:</strong> +91 12345 67890</p>
          <p><strong>Write to Us:</strong> mail@xyz.com</p>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="bg-white p-8 md:w-2/3 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Let Us Reach You</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name*"
              className="border-b border-gray-300 pb-2 focus:outline-none focus:border-red-600"
              required
              onChange={handleChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="border-b border-gray-300 pb-2 focus:outline-none focus:border-red-600"
              onChange={handleChange}
            />
            <input
              type="tel"
              name="mobileNumber"
              placeholder="Mobile Number*"
              className="border-b border-gray-300 pb-2 focus:outline-none focus:border-red-600"
              required
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email Id*"
              className="border-b border-gray-300 pb-2 focus:outline-none focus:border-red-600"
              required
              onChange={handleChange}
            />
          </div>
          <textarea
            name="message"
            placeholder="Your message"
            className="w-full border-b border-gray-300 pb-2 mb-4 focus:outline-none focus:border-red-600"
            rows="4"
            onChange={handleChange}
          ></textarea>
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="receiveNotifications"
                className="mr-2"
                onChange={handleChange}
              />
              <span className="text-sm text-gray-600">I wish to receive email notifications</span>
            </label>
          </div>
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="acceptTerms"
                className="mr-2"
                required
                onChange={handleChange}
              />
              <span className="text-sm text-gray-600">
                I accept the <a href="#" className="text-red-600">terms and conditions</a>
              </span>
            </label>
          </div>
          <div className="mb-4">
            {/* Placeholder for reCAPTCHA */}
            <div className="border border-gray-300 p-2 w-64">
              <p className="text-xs text-gray-500">I'm not a robot reCAPTCHA</p>
            </div>
          </div>
          <button
            type="submit"
            className="bg-white text-red-600 border border-red-600 px-8 py-2 hover:bg-red-600 hover:text-white transition duration-300"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;