import React, { useEffect } from 'react'
import "../../App.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

const PortfolioTwo = () => {
  useEffect(() => {
    AOS.init();
}, []);
  return (
    <div className='relative -top-44'>
      <div className='flex flex-col md:gap-24 sm:gap-16 gap-6'>

       <div data-aos="flip-left" className='md:p-32 sm:p-20 p-14  rounded-xl hover:scale-105 ease-in duration-300'
       style={{ 
      backgroundImage: "url('../src/assets/portfolio-bg-1.jpg')",
      backgroundSize: "cover",
       backgroundRepeat: "no-repeat", 
       backgroundPosition: "center",
      }}>
          <div className=' w-96 flex flex-col gap-3 md:gap-6'>
              <h1 className='text-red-500 font-semibold text-lg md:text-xl'>YouTube</h1>
              <h2 className='font-bold text-2xl md:text-4xl text-white'>Web Application for Desiverse</h2>
              <a className='font-semibold flex justify-start items-center text-white' href="#">VIEW PROJECT <span>👉</span></a>
            </div>
       </div>

       <div data-aos="flip-right" className='md:p-32 sm:p-20 p-14  rounded-xl hover:scale-105 ease-in-out duration-300 flex justify-end '
       style={{ 
      backgroundImage: "url('../src/assets/portfolio-bg-2.jpg')",
      backgroundSize: "cover",
       backgroundRepeat: "no-repeat", 
       backgroundPosition: "center",
      }}>
          <div className=' w-96 flex flex-col   gap-3 md:gap-6'>
              <h1 className='text-red-500 font-semibold text-lg md:text-xl'>Vimeo</h1>
              <h2 className='font-bold text-2xl md:text-4xl text-white'>Web Application for Desiverse</h2>
              <a className='font-semibold flex justify-start items-center text-white' href="#">VIEW PROJECT <span>👉</span></a>
            </div>
       </div>

       <div data-aos="flip-up" className='md:p-32 sm:p-20 p-14  rounded-xl hover:scale-105 ease-in-out duration-300'
       style={{ 
      backgroundImage: "url('../src/assets/portfolio-bg-3.jpg')",
      backgroundSize: "cover",
       backgroundRepeat: "no-repeat", 
       backgroundPosition: "center",
      }}>
          <div className=' w-96 flex flex-col gap-3 md:gap-6'>
              <h1 className='text-red-500 font-semibold text-lg md:text-xl'>SoundCloud</h1>
              <h2 className='font-bold text-2xl md:text-4xl text-white'>Web Application for Desiverse</h2>
              <a className='font-semibold flex justify-start items-center text-white' href="#">VIEW PROJECT <span>👉</span></a>
            </div>
       </div>

       <div data-aos="flip-down" className='md:p-32 sm:p-20 p-14  rounded-xl hover:scale-105 ease-in-out duration-300  flex justify-end'
       style={{ 
      backgroundImage: "url('../src/assets/portfolio-bg-4.jpg')",
      backgroundSize: "cover",
       backgroundRepeat: "no-repeat", 
       backgroundPosition: "center",
      }}>
          <div className=' w-96 flex flex-col gap-3 md:gap-6'>
              <h1 className='text-red-500 font-semibold text-lg md:text-xl'>Details</h1>
              <h2 className='font-bold text-2xl md:text-4xl text-white'>Web Application for Desiverse</h2>
              <a className='font-semibold flex justify-start items-center text-white' href="#">VIEW PROJECT <span>👉</span></a>
            </div>
       </div>

      </div>
    </div>
  )
}

export default PortfolioTwo
