import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServiceThree = () => {
  useEffect(() => {
    AOS.init();
}, []);
  return (
    <div className='flex justify-center items-start'>
      <div data-aos="flip-down" className='flex flex-col gap-2'>
       <h1 className='font-bold text-red-600'>Working to make difference</h1>
       <h2 className='font-bold text-4xl'>Real Passion to create Amazing Things</h2>
       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe cumque, maxime repellendus ut hic dignissimos alias eaque ex in doloribus!</p>
      </div>
    </div>
  )
}

export default ServiceThree
