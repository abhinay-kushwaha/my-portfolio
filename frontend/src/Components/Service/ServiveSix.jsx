import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Dummy data for carousel slides
const slideData = [
  { id: 1, title: 'Slide 1', description: 'Content for slide 1', image: 'https://via.placeholder.com/800x400?text=Slide+1' },
  { id: 2, title: 'Slide 2', description: 'Content for slide 2', image: 'https://via.placeholder.com/800x400?text=Slide+2' },
  { id: 3, title: 'Slide 3', description: 'Content for slide 3', image: 'https://via.placeholder.com/800x400?text=Slide+3' },
  { id: 4, title: 'Slide 4', description: 'Content for slide 4', image: 'https://via.placeholder.com/800x400?text=Slide+4' },
  { id: 5, title: 'Slide 5', description: 'Content for slide 5', image: 'https://via.placeholder.com/800x400?text=Slide+5' },
];

const ServiceSix = () => {
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
      <Slider {...settings}>
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
