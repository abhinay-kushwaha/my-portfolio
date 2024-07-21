import React from 'react'
import '../../App.css'
import first from "../../assets/about-1st.jpg"
import second from "../../assets/about-2nd.jpg"
import react from "../../assets/react.jpeg";
import next from "../../assets/nextJs.png";
import java from "../../assets/java.png";
import python from "../../assets/python.jpeg";

const AboutOne = () => {
  return (
    <div className=' flex justify-center items-center '>
      <div className='sm:pl-28'>
        <div className='flex justify-center'>
          <img className='bg-pink-600 w-16 h-16 rounded-md relative -left-10 hidden sm:block bg-cover shadow-1' src={react} alt="" />
          <img className='2xl:max-w-[520px] xl:max-w-[420px] lg:max-w-[400px] rounded-lg' src={first} alt="" />
          <img className='bg-pink-600 w-16 h-16 rounded-md  relative -top-7 -left-9 hidden sm:block bg-cover shadow-1' src={next} alt="" />
        </div>
       <div className='hidden sm:block'>
       <div className='flex justify-center relative -top-32 -left-52'>
          <img className='bg-pink-600 w-16 h-16 rounded-md  relative top-24 left-8 bg-cover shadow-1' src={java} alt="" />
          <img className=' lg:w-56 xl:w-72 md:w-64 sm:w-60 aboutOne-small-img  rounded-lg' src={second} alt="" />
          <img className='bg-pink-600 w-16 h-16 rounded-md  relative top-24 left-20 bg-cover shadow-1' src={python} alt="" />
        </div>
       </div>
      </div>
    </div>
  )
}

export default AboutOne
