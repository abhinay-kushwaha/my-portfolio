import React, { useEffect } from 'react'
 
import { IoDesktopSharp } from "react-icons/io5";
import { CiMobile3 } from "react-icons/ci";
import { CgWebsite } from "react-icons/cg";
import { SiProbot } from "react-icons/si";




const ServiceTwo = () => {
 
  return (
    <div className='sm:relative -top-56'>
      <div className='grid lg:grid-cols-2  grid-cols-1'>
        <div   className='flex flex-col p-5 md:p-16 lg:p-22 bg-gray-400 hover:bg-red-400 lg:rounded-ss-xl rounded-t-xl lg:rounded-t-none'>
          <div  className='flex flex-col gap-2'>
            <h1 className='text-xl sm:text-3xl'><IoDesktopSharp/></h1>
            <h2 className='md:text-3xl text-xl-3xl font-bold'>Desktop Application</h2>
            <p className='text-justify'>In addition to web development, I offer robust and high-performance desktop application development services. My goal is to deliver user-friendly and efficient desktop solutions tailored to meet the specific needs of businesses and individuals.</p>
          </div>
        </div>

        <div   className='flex flex-col p-5 md:p-16 lg:p-22 bg-pink-400 hover:bg-red-400 lg:rounded-tr-xl'>
          <div  className='flex flex-col gap-2'>
            <h1 className='text-xl sm:text-3xl'><CiMobile3/></h1>
            <h2 className='md:text-3xl text-xl-3xl font-bold'>Mobile Application</h2>
            <p className='text-justify'>I offer comprehensive mobile application development services to help you reach and engage your audience on their smartphones and tablets. My focus is on creating innovative, high-performance mobile apps that deliver exceptional user experiences across various devices.</p>
          </div>
        </div>

        <div   className='flex flex-col p-5 md:p-16 lg:p-22 bg-orange-500 hover:bg-red-400 lg:rounded-bl-xl'>
          <div  className='flex flex-col gap-2'>
            <h1 className='text-xl sm:text-3xl'><CgWebsite/></h1>
            <h2 className='md:text-3xl text-xl-3xl font-bold'>Website Application</h2>
            <p className='text-justify'>I offer expert website application development services designed to create dynamic, interactive, and high-performing web applications. Whether you need a complex web-based solution or a simple interactive site, I’m dedicated to delivering exceptional results tailored to your needs.</p>
          </div>
        </div>

        <div  className='flex flex-col p-5 md:p-16 lg:p-22 bg-gray-600 hover:bg-red-400 lg:rounded-br-xl rounded-b-xl lg:rounded-b-none'>
          <div  className='flex flex-col gap-2'>
            <h1 className='text-xl sm:text-3xl'><SiProbot/></h1>
            <h2 className='md:text-3xl text-xl-3xl font-bold'>AI/ML Application</h2>
            <p className='text-justify'>I provide advanced AI and machine learning (ML) application development services to help you harness the power of cutting-edge technology. From predictive analytics to intelligent automation, my solutions are designed to drive innovation and efficiency in your business processes.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceTwo
