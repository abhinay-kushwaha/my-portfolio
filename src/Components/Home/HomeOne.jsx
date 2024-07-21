import React from 'react'
import '../../App.css'

const HomeOne = () => {
  return (
    <div className='   flex justify-center items-center xl:pl-16'>
     <div className='flex flex-col gap-4 font-bold text-[#f6f3f3]'>
     <h1 className='text-3xl'>Hello I'm</h1>
      <h2 className='text-5xl '>Abhinay Kushwaha</h2>
      <h3 className='text-2xl'>MERN Developer</h3>
        <p className='font-normal'>
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, aliquam dicta quod minima esse dolorum. Similique fugiat id saepe est.
        </p>
      <div className='text-xl flex gap-7 font-semibold'>
        <button className='bg-[#142EB5] hover:bg-[#FB503B] p-2 px-4 rounded-full shadow-1'>Get a Quote</button>
        <button>About Me</button>
      </div>
     </div>
  </div>
  )
}

export default HomeOne
