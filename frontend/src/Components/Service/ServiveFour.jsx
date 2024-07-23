import React, { useEffect, useState } from 'react';
import { LuPlus } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
 
 

const ServiveFour = () => {
  
 
  
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
      <div  className='flex flex-col gap-3 w-full'>
       


          <div className='border-b-2 border-gray-200'>
            <h2 
              onClick={() => toggleMenu(0)} 
              className={`hover:bg-[rgba(245,241,241,0.98)] rounded-md p-2 flex justify-between items-center text-md md:text-lg lg:text-xl font-bold ${openIndex === 0 ? 'text-red-500' : 'text-black'}`}
            >
              What technologies do you specialize in?
              <button>
                {openIndex === 0 ? <IoClose className='text-2xl ml-auto' /> : <LuPlus />}
              </button>
            </h2>
            <div className={`py-4 ${openIndex === 0 ? 'block ' : 'hidden'}`}>
              <p className='text-sm md:text-base lg:text-lg'>
              I specialize in the MERN stack, which includes MongoDB, Express.js, React, and Node.js. Additionally, I have experience with various front-end and back-end technologies, including Tailwind CSS, Material-UI, react-quill, and react-fast-marquee. I also work with AI/ML technologies to develop intelligent solutions.
              </p>
            </div>
          </div>

          <div className='border-b-2 border-gray-200'>
            <h2 
              onClick={() => toggleMenu(1)} 
              className={`hover:bg-[rgba(245,241,241,0.98)] rounded-md p-2 flex justify-between items-center text-md md:text-lg lg:text-xl font-bold ${openIndex === 1 ? 'text-red-500' : 'text-black'}`}
            >
             What is your approach to web development projects?
              <button>
                {openIndex === 1 ? <IoClose className='text-2xl ml-auto' /> : <LuPlus />}
              </button>
            </h2>
            <div className={`py-4 ${openIndex === 1 ? 'block' : 'hidden'}`}>
              <p className='text-sm md:text-base lg:text-lg'>
              My approach involves understanding the client's requirements and objectives to tailor a solution that meets their needs. I focus on creating user-friendly, high-performance, and scalable applications. I follow best practices in coding, testing, and deployment, and ensure regular communication with clients throughout the development process.
              </p>
            </div>
          </div>

          <div className='border-b-2 border-gray-200'>
            <h2 
              onClick={() => toggleMenu(2)} 
              className={`hover:bg-[rgba(245,241,241,0.98)] rounded-md p-2 flex justify-between items-center text-md md:text-lg lg:text-xl font-bold ${openIndex === 2 ? 'text-red-500' : 'text-black'}`}
            >
            Do you offer support and maintenance for projects?
              <button>
                {openIndex === 2 ? <IoClose className='text-2xl ml-auto' /> : <LuPlus />}
              </button>
            </h2>
            <div className={`py-4 ${openIndex === 2 ? 'block' : 'hidden'}`}>
              <p className='text-sm md:text-base lg:text-lg'>
              Yes, I offer ongoing support and maintenance for all projects. This includes regular updates, bug fixes, performance enhancements, and addressing any issues that may arise. My goal is to ensure that your application remains up-to-date and continues to perform optimally.
              </p>
            </div>
          </div>

          <div className='border-b-2 border-gray-200'>
            <h2 
              onClick={() => toggleMenu(3)} 
              className={`hover:bg-[rgba(245,241,241,0.98)] rounded-md p-2 flex justify-between items-center text-md md:text-lg lg:text-xl font-bold ${openIndex === 3 ? 'text-red-500' : 'text-black'}`}
            >
             How do you ensure the security of web applications?
              <button>
                {openIndex === 3 ? <IoClose className='text-2xl ml-auto' /> : <LuPlus />}
              </button>
            </h2>
            <div className={`py-4 ${openIndex === 3 ? 'block' : 'hidden'}`}>
              <p className='text-sm md:text-base lg:text-lg'>
              I implement robust security measures, including data encryption, secure authentication, and regular security audits, to protect web applications from vulnerabilities and data breaches. I also follow industry best practices and compliance requirements to ensure the safety and privacy of user data.
              </p>
            </div>
          </div>

         

          
      </div>
    </div>
  );
};

export default ServiveFour;
