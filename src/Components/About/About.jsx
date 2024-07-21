import React, { useEffect } from 'react'
import AboutOne from './AboutOne'
import AboutTwo from './AboutTwo'
import AboutThree from './AboutThree'
import { useLocation } from 'react-router-dom'

import AOS from 'aos';
import 'aos/dist/aos.css';
const About = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    AOS.init();
}, []);
  return (
    <>
    <div data-aos="fade-down" className='grid xl:grid-cols-2 grid-cols-1 lg:gap-24 gap-10 w-full lg:px-44 md:px-32 sm:px-20 p-10 '>
      <AboutOne/>
      <AboutTwo/>
    </div>

    <div>
      <AboutThree  />

    </div>
    </>
  )
}

export default About
