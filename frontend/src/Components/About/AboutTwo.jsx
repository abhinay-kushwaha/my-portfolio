import React from 'react'
import '../../App.css'
import { Link } from 'react-router-dom'

const AboutTwo = () => {
  return (
    <div className='flex justify-start items-start '>
      <div className='flex flex-col justify-start gap-5'>
        <h1 className='font-semibold text-2xl text-red-400'>I'm a Developer</h1>
        <h2 className='font-semibold text-4xl'>I Develop Application that Help People</h2>
        <p className='text-justify'>I specialize in developing applications using the MERN stack (MongoDB, Express.js, React, and Node.js). With a strong foundation in frontend and backend technologies, I aim to build robust and user-friendly applications. My development journey is fueled by a constant drive to learn and improve.</p>

        <p className='text-justify'>I completed an internship at Shanti Infosoft LLP in Indore, where I gained valuable industry experience and honed my development skills. This internship was a significant milestone in my career, providing practical insights and hands-on experience.</p>
        <button className='bg-[#142EB5] hover:bg-[#FB503B] p-2 px-4 rounded-full text-white font-semibold w-fit shadow-1'><Link to="/portfolio">View Portfolio</Link></button>
      </div>
    </div>
  )
}

export default AboutTwo
