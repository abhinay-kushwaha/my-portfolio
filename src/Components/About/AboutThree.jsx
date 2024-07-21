import React, { useEffect } from 'react'
import FlipNumbers from 'react-flip-numbers';
import AOS from 'aos';
import 'aos/dist/aos.css';
const AboutThree = () => {
  useEffect(() => {
    AOS.init();
}, []);
  return (
    <div >
      <div data-aos="fade-up" className='grid sm:grid-cols-5 grid-cols-3 gap-5'>
        <div className='hidden sm:block sm:col-span-1 '>  </div>
        <div className='flex justify-center items-center sm:gap-5 gap-1'>
          <h1 className='font-bold text-2xl md:text-4xl flex justify-start text-red-500'>
          <p className="whitespace-pre-wrap text-3xl font-bold text-blue-400">
                <FlipNumbers
                  height={35}
                  width={20}
                  color="red" // Adjust as needed
                  background="white"
                  play
                  perspective={3000}
                  numbers="4"
                />
              </p> <span className='text-xl'>+</span></h1>
          <p className='font-bold leading-4 text-xs sm:text-balance md:text-lg'>Digital <br /> Products</p>
        </div>
        <div className='flex justify-center items-center gap-5'>
            <h1 className='font-bold text-2xl md:text-4xl flex justify-start text-red-500'>
            <p className="whitespace-pre-wrap text-3xl font-bold text-blue-400">
              <FlipNumbers
                height={35}
                width={20}
                color="red" // Adjust as needed
                background="white"
                play
                perspective={3000}
                numbers="10"
              />
            </p> <span className='text-xl'>+</span></h1>
            <p className='font-bold leading-4 text-xs sm:text-balance md:text-lg'>Open Source <br /> Products</p>
        </div>
        <div className='flex justify-center items-center gap-5'>
            <h1 className='font-bold text-2xl md:text-4xl text-red-500'>
            <p className="whitespace-pre-wrap text-3xl font-bold text-red-600 flex ">
              <FlipNumbers
                height={35}
                width={20}
                color="red" // Adjust as needed
                background="white"
                play
                perspective={3000}
                numbers="4"
              /><span>M</span>
            </p>  </h1>
            <p className='font-bold leading-4 text-xs sm:text-balance md:text-lg'>Lines of <br /> Code</p>
        </div>
        <div className='bg-[#142EB5] rounded-s-xl h-60 hidden sm:block sm:col-span-1'>

        </div>
      </div>
    </div>
  )
}

export default AboutThree
