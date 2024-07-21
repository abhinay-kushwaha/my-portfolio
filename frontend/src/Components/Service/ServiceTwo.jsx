import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServiceTwo = () => {
  useEffect(() => {
    AOS.init();
}, []);
  return (
    <div className='sm:relative -top-56'>
      <div className='grid lg:grid-cols-2  grid-cols-1'>
        <div data-aos="zoom-in-up" className='flex flex-col p-5 md:p-16 lg:p-22 bg-gray-400 hover:bg-red-400 lg:rounded-ss-xl rounded-t-xl lg:rounded-t-none'>
          <div  className='flex flex-col gap-2'>
            <h1>logo</h1>
            <h2 className='md:text-3xl text-xl-3xl font-bold'>Desktop Application</h2>
            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eaque, alias obcaecati sapiente distinctio dolores porro praesentium laborum totam asperiores!</p>
          </div>
        </div>

        <div data-aos="zoom-in-down" className='flex flex-col p-5 md:p-16 lg:p-22 bg-pink-400 hover:bg-red-400 lg:rounded-tr-xl'>
          <div  className='flex flex-col gap-2'>
            <h1>logo</h1>
            <h2 className='md:text-3xl text-xl-3xl font-bold'>Mobile Application</h2>
            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eaque, alias obcaecati sapiente distinctio dolores porro praesentium laborum totam asperiores!</p>
          </div>
        </div>

        <div data-aos="zoom-in-left" className='flex flex-col p-5 md:p-16 lg:p-22 bg-orange-500 hover:bg-red-400 lg:rounded-bl-xl'>
          <div  className='flex flex-col gap-2'>
            <h1>logo</h1>
            <h2 className='md:text-3xl text-xl-3xl font-bold'>Website Application</h2>
            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eaque, alias obcaecati sapiente distinctio dolores porro praesentium laborum totam asperiores!</p>
          </div>
        </div>

        <div data-aos="zoom-in-right" className='flex flex-col p-5 md:p-16 lg:p-22 bg-gray-600 hover:bg-red-400 lg:rounded-br-xl rounded-b-xl lg:rounded-b-none'>
          <div  className='flex flex-col gap-2'>
            <h1>logo</h1>
            <h2 className='md:text-3xl text-xl-3xl font-bold'>AI/ML Application</h2>
            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eaque, alias obcaecati sapiente distinctio dolores porro praesentium laborum totam asperiores!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceTwo
