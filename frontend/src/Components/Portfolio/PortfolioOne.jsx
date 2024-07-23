import React, { useEffect } from 'react'
import "../../App.css"
 

const PortfolioOne = () => {
 
  return (
    <div className=''>
      <div    className='flex flex-col  items-center gap-3 px-10 mb-3'>
        <h1 className='text-red-500 font-semibold text-xl'>Portfolio</h1>
        <h2 className='font-bold text-4xl'>My Amazing Works</h2>
        <p className='  text-center'>Welcome to the showcase of my projects! Here, you can explore the diverse range of applications and solutions I've developed using the MERN stack. Each project reflects my dedication to creating efficient, user-friendly, and innovative web applications.</p>
      </div>
        <div className='sm:grid sm:grid-cols-5 relative  '>
          <div className='bg-[#6A97D3] rounded-e-xl h-96 hidden sm:block sm:col-span-1'></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
    </div>
  )
}

export default PortfolioOne
