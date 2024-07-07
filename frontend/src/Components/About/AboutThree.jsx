import React from 'react'

const AboutThree = () => {
  return (
    <div>
      <div className='grid sm:grid-cols-5 grid-cols-3 gap-5'>
        <div className='hidden sm:block sm:col-span-1 '>  </div>
        <div className='flex justify-center items-center sm:gap-5 gap-1'>
          <h1 className='font-bold text-2xl md:text-4xl flex justify-start text-red-500'>4 <span className='text-xl'>+</span></h1>
          <p className='font-bold leading-4 text-xs sm:text-balance md:text-lg'>Digital <br /> Products</p>
        </div>
        <div className='flex justify-center items-center gap-5'>
            <h1 className='font-bold text-2xl md:text-4xl flex justify-start text-red-500'>10 <span className='text-xl'>+</span></h1>
            <p className='font-bold leading-4 text-xs sm:text-balance md:text-lg'>Open Source <br /> Products</p>
        </div>
        <div className='flex justify-center items-center gap-5'>
            <h1 className='font-bold text-2xl md:text-4xl text-red-500'>4M </h1>
            <p className='font-bold leading-4 text-xs sm:text-balance md:text-lg'>Lines of <br /> Code</p>
        </div>
        <div className='bg-[#142EB5] rounded-s-xl h-60 hidden sm:block sm:col-span-1'>

        </div>
      </div>
    </div>
  )
}

export default AboutThree
