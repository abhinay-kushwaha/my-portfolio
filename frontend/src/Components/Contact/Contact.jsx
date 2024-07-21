import React, { useEffect, useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'; // Make sure to import the icons
import AOS from 'aos';
import 'aos/dist/aos.css';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('Submitting...');

    try {
      const response = await fetch('https://your-api-endpoint.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Form Data:', result);
      setSubmitStatus('Success! Your message has been sent.');
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    AOS.init();
}, []);

  return (
    <div className="flex flex-col md:flex-row gap-8 p-8  items-center justify-center ">
      {/* Contact Form */}
      <div  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="w-full md:w-1/2 lg:w-1/3">
        <form
          onSubmit={handleSubmit}
          className={`bg-white p-6 rounded-lg shadow-lg transition-transform transform ${submitStatus === 'Success! Your message has been sent.' ? 'animate-pulse' : ''} ${submitStatus === 'Something went wrong. Please try again.' ? 'animate-shake' : ''}`}
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
              placeholder="Enter your message"
            />
          </div>
          <button
            type="submit"
            className={`w-full py-3 text-white font-medium rounded-lg transition-all duration-300 ease-in-out ${isSubmitting ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 shadow-lg hover:shadow-xl transform hover:scale-105'}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
          {submitStatus && <p className="mt-4 text-center text-gray-700">{submitStatus}</p>}
        </form>
      </div>

      {/* Contact Information */}
      <div data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500" className="w-full md:w-1/2 lg:w-1/3 bg-white p-6 rounded-lg shadow-lg transition-opacity duration-500 opacity-100 animate-fadeIn">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Contact Us</h2>
        <p className="text-gray-600 mb-2 flex items-center">
          <FaMapMarkerAlt className="text-blue-500 mr-2 animate-bounce" />
          <strong>Address:</strong> 1234 Elm Street, Springfield, IL 62704
        </p>
        <p className="text-gray-600 mb-2 flex items-center">
          <FaEnvelope className="text-red-500 mr-2 animate-bounce" />
          <strong>Email:</strong> contact@example.com
        </p>
        <p className="text-gray-600 flex items-center">
          <FaPhoneAlt className="text-green-500 mr-2 animate-bounce" />
          <strong>Phone:</strong> (123) 456-7890
        </p>
      </div>
    </div>
  );
};

export default Contact;
