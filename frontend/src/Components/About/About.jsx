import React from 'react'
import AboutOne from './AboutOne'
import AboutTwo from './AboutTwo'
import AboutThree from './AboutThree'

const About = () => {
  return (
    <>
    <div className='grid xl:grid-cols-2 grid-cols-1 lg:gap-24 gap-10 w-full lg:px-44 md:px-32 sm:px-20 p-10 '>
      <AboutOne/>
      <AboutTwo/>
    </div>

    <div>
      <AboutThree/>

    </div>
    </>
  )
}

export default About
