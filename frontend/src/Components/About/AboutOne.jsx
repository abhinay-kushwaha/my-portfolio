import React from 'react'
import first from "../../assets/about-1st.jpg"
import second from "../../assets/about-2nd.jpg"

const AboutOne = () => {
  return (
    <div className=' flex justify-center items-center '>
      <div className='sm:pl-28'>
        <div className='flex justify-center'>
          <img className='bg-pink-600 w-16 h-16 rounded-md relative -left-10 hidden sm:block' src="" alt="" />
          <img className='w-[100vw]  rounded-lg' src={first} alt="" />
          <img className='bg-pink-600 w-16 h-16 rounded-md  relative -top-7 -left-9 hidden sm:block' src="" alt="" />
        </div>
       <div className='hidden sm:block'>
       <div className='flex justify-center relative -top-32 -left-52'>
          <img className='bg-pink-600 w-16 h-16 rounded-md  relative top-24 left-8' src="" alt="" />
          <img className='w-72 rounded-lg' src={second} alt="" />
          <img className='bg-pink-600 w-16 h-16 rounded-md  relative top-24 left-20' src="" alt="" />
        </div>
       </div>
      </div>
    </div>
  )
}

export default AboutOne
