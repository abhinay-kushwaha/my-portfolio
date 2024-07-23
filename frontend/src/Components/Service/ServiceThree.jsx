import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServiceThree = () => {
  useEffect(() => {
    AOS.init();
}, []);
  return (
    <div   className='mt-5 flex justify-center items-start'>
      <div className='flex flex-col gap-2'>
       <h1 className='font-bold text-red-600'>Working to make difference</h1>
       <h2 className='font-bold text-4xl'>Real Passion to create Amazing Things</h2>
       <p className='text-justify'>In every project and initiative, my goal is to create meaningful impact and drive positive change. I am dedicated to using my skills and expertise to make a difference, whether through innovative solutions, social responsibility, or enhancing the lives of users.</p>
      </div>
    </div>
  )
}

export default ServiceThree
