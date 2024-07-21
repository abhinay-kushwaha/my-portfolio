import React, { useEffect, useState } from 'react';
import { LuPlus } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import AOS from 'aos';
import 'aos/dist/aos.css';
 

const ServiveFour = () => {
  useEffect(() => {
    AOS.init();
}, []);
 
  
  const [openIndex, setOpenIndex] = useState(null);

  const toggleMenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); 
    } else {
      setOpenIndex(index); 
    }
  };

  return (
    <div  className='flex justify-center items-center'>
      <div data-aos="flip-up" className='flex flex-col gap-3 w-full'>
       


          <div className='border-b-2 border-gray-200'>
            <h2 
              onClick={() => toggleMenu(0)} 
              className={`hover:bg-[rgba(245,241,241,0.98)] rounded-md p-2 flex justify-between items-center text-lg md:text-xl lg:text-2xl font-bold ${openIndex === 0 ? 'text-red-500' : 'text-black'}`}
            >
              What is The 
              <button>
                {openIndex === 0 ? <IoClose className='text-2xl ml-auto' /> : <LuPlus />}
              </button>
            </h2>
            <div className={`py-4 ${openIndex === 0 ? 'block ' : 'hidden'}`}>
              <p className='text-sm md:text-base lg:text-lg'>
                UX stands for User Experience. It involves analyzing and understanding the user interaction with the features of 
              </p>
            </div>
          </div>

          <div className='border-b-2 border-gray-200'>
            <h2 
              onClick={() => toggleMenu(1)} 
              className={`hover:bg-[rgba(245,241,241,0.98)] rounded-md p-2 flex justify-between items-center text-lg md:text-xl lg:text-2xl font-bold ${openIndex === 1 ? 'text-red-500' : 'text-black'}`}
            >
              What Are The 
              <button>
                {openIndex === 1 ? <IoClose className='text-2xl ml-auto' /> : <LuPlus />}
              </button>
            </h2>
            <div className={`py-4 ${openIndex === 1 ? 'block' : 'hidden'}`}>
              <p className='text-sm md:text-base lg:text-lg'>
                UX Design works on the premise of design thinking and generates a set of deliverables. Through the various 
              </p>
            </div>
          </div>

          <div className='border-b-2 border-gray-200'>
            <h2 
              onClick={() => toggleMenu(2)} 
              className={`hover:bg-[rgba(245,241,241,0.98)] rounded-md p-2 flex justify-between items-center text-lg md:text-xl lg:text-2xl font-bold ${openIndex === 2 ? 'text-red-500' : 'text-black'}`}
            >
              How Important 
              <button>
                {openIndex === 2 ? <IoClose className='text-2xl ml-auto' /> : <LuPlus />}
              </button>
            </h2>
            <div className={`py-4 ${openIndex === 2 ? 'block' : 'hidden'}`}>
              <p className='text-sm md:text-base lg:text-lg'>
                User experience plays a fundamental role in an app’s success. The majority of users prefer simple and minimal 
              </p>
            </div>
          </div>

          <div className='border-b-2 border-gray-200'>
            <h2 
              onClick={() => toggleMenu(3)} 
              className={`hover:bg-[rgba(245,241,241,0.98)] rounded-md p-2 flex justify-between items-center text-lg md:text-xl lg:text-2xl font-bold ${openIndex === 3 ? 'text-red-500' : 'text-black'}`}
            >
              How To Create 
              <button>
                {openIndex === 3 ? <IoClose className='text-2xl ml-auto' /> : <LuPlus />}
              </button>
            </h2>
            <div className={`py-4 ${openIndex === 3 ? 'block' : 'hidden'}`}>
              <p className='text-sm md:text-base lg:text-lg'>
                A comprehensive understanding of Design thinking coupled with UX design process is not enough to create 
              </p>
            </div>
          </div>

         

          
      </div>
    </div>
  );
};

export default ServiveFour;
