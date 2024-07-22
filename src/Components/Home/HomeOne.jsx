import React from 'react'
import '../../App.css'
import { Link } from 'react-router-dom'
import Name from './Name'


const HomeOne = () => {
  return (
    <div className='   flex justify-center items-center xl:pl-16'>
     <div className='flex flex-col gap-4 font-bold text-[#f6f3f3]'>
     <h1 className='text-3xl'>Hello I'm</h1>
     <Name/>
      {/* <h2 className='text-5xl '>Abhinay Kushwaha ,</h2> */}
      {/* <h3 className='text-2xl'>MERN Developer</h3> */}
        <p className='font-normal'>
        a passionate MERN stack developer with a knack for creating dynamic and responsive web applications. Welcome to my  portfolio, where I showcase my skills, projects, and journey in the world of web development.
        </p>
      <div className='text-xl flex gap-7 font-semibold'>
        <button className='bg-[#142EB5] hover:bg-[#FB503B] p-2 px-4 rounded-full shadow-1'> <Link to="/contacts">Get a Quote</Link></button>
        <button><Link to="/about">About Me</Link></button>
      </div>
     </div>
  </div>
  )
}

export default HomeOne
