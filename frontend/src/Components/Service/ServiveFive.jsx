import React from 'react'

const ServiveFive = () => {
  return (
    <div>
      <div className='md:grid grid-cols-5'>
       <div className='bg-[#6A97D3] lg:h-96 md:h-72 rounded-r-xl hidden md:block'></div>
       <div className='col-span-3 flex flex-col justify-center items-center gap-3'>
        <h1 className='font-bold text-red-600'>Testimonial</h1>
        <h2 className='font-bold text-4xl '>What Clients Say</h2>
        <p className='text-center p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptatum, in incidunt quia tenetur odit!</p>
       </div>
       <div className='hidden md:block'></div>
      </div>
    </div>
  )
}

export default ServiveFive
