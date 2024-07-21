import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import test1 from "../../assets/test-1.jpg"
import test2 from "../../assets/test-2.jpg"
import test3 from "../../assets/test-3.jpg"
import test4 from "../../assets/test-4.jpg"
import test5 from "../../assets/test-5.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';

// Dummy data for carousel slides
const slideData = [
  { id: 1, title: 'Slide 1', description: 'Content for slide 1', image: test1 },
  { id: 2, title: 'Slide 2', description: 'Content for slide 2', image: test2 },
  { id: 3, title: 'Slide 3', description: 'Content for slide 3', image: test3 },
  { id: 4, title: 'Slide 4', description: 'Content for slide 4', image: test4 },
  { id: 5, title: 'Slide 5', description: 'Content for slide 5', image: test5 },
];

const ServiceSix = () => {
  useEffect(() => {
    AOS.init();
}, []);
  // Carousel settings
  const settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Time between slides (in milliseconds)
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <Slider   {...settings}>
        {slideData.map((slide) => (
          <div key={slide.id} className="relative">
            <img src={slide.image} alt={slide.title} className="w-full h-auto object-cover rounded-lg shadow-md" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50 rounded-lg">
              <h3 className="text-xl font-semibold">{slide.title}</h3>
              <p className="text-sm">{slide.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ServiceSix;
