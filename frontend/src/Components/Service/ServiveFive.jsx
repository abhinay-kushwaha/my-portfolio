import React from 'react'

const ServiveFive = () => {
  return (
    <div>
      <div className='md:grid grid-cols-5'>
       <div className='bg-[#6A97D3] h-96 rounded-r-xl'></div>
       <div className='col-span-3 flex flex-col justify-center items-center gap-3'>
        <h1 className='font-bold text-red-600'>Testimonial</h1>
        <h2 className='font-bold text-4xl'>What Clients Say</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptatum, in incidunt quia tenetur odit!</p>
       </div>
       <div></div>
      </div>
    </div>
  )
}

export default ServiveFive
