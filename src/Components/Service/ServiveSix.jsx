import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import test1 from "../../assets/test-1.jpg"
import test2 from "../../assets/test-2.jpg"
import test3 from "../../assets/test-3.jpg"
import test4 from "../../assets/test-4.jpg"
import test5 from "../../assets/test-5.jpg"


// Dummy data for carousel slides
const slideData = [
  { id: 1, title: 'How did you find the overall experience working with Abhinay?', 
    description: 'Working with Abhinay was a fantastic experience. His professionalism, technical expertise, and attention to detail exceeded our expectations. He delivered a high-quality solution that met all our requirements and was always available to address our concerns.', image: test1 },
  { id: 2, title: 'What stood out about the project delivery and execution?', 
    description: 'The project delivery was exceptional. Abhinay managed to deliver the project ahead of schedule while maintaining top-notch quality. His ability to adapt to changes and incorporate feedback quickly was particularly impressive.', image: test2 },
  { id: 3, title: 'How did Abhinay handle communication and project updates?', 
    description: 'Abhinay’s communication throughout the project was clear and timely. He provided regular updates and was proactive in discussing any challenges or changes. His transparent communication helped us stay informed and involved in every stage of the project.', image: test3 },
  { id: 4, title: 'How did the final product meet your expectations?', 
    description:  `The final product not only met but exceeded our expectations. The application was well-designed, highly functional, and addressed all the key requirements we had outlined. Abhinay’s attention to detail ensured that the end result was both aesthetically pleasing and user-friendly.`, image: test4 },
  { id: 5, title: 'Would you recommend Abhinay’s services to others?', description: 'Absolutely! We would highly recommend Abhinay’s services to anyone looking for a skilled and reliable developer. His expertise, dedication, and commitment to delivering outstanding results make him a valuable asset to any project.', image: test5 },
];

const ServiceSix = () => {

  // Carousel settings
  const settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Infinite loop
    speed: 1000, // Transition speed
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Time between slides (in milliseconds)
  };

  return (
    <div className="w-[90%] max-w-4xl mx-auto px-4 py-8">
      <Slider   {...settings}>
        {slideData.map((slide) => (
          <div key={slide.id} className="relative">
            <img src={slide.image} alt={slide.title} className="w-full h-auto object-cover rounded-lg shadow-md" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50 rounded-lg">
              <h3 className="text-lg font-semibold text-center">{slide.title}</h3>
              <p className="text-xs text-center px-5">{slide.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ServiceSix;
