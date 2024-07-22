import React, { useEffect } from 'react'
import AboutOne from './AboutOne'
import AboutTwo from './AboutTwo'
import AboutThree from './AboutThree'
import { useLocation } from 'react-router-dom'

 
const About = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
 
  return (
    <>
    <div   className='grid xl:grid-cols-2 grid-cols-1 lg:gap-24 gap-10 w-full lg:px-44 md:px-32 sm:px-20 px-10'>
      <AboutOne/>
      <AboutTwo/>
    </div>

    <div className='mt-5'>
      <AboutThree  />

    </div>
    </>
  )
}

export default About
