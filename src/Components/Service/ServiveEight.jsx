import React, { useEffect } from 'react'
import i1 from "../../assets/1.png"
import i2 from "../../assets/2.png"
import i3 from "../../assets/3.png"
import i4 from "../../assets/4.png"
import i5 from "../../assets/5.png"
import i6 from "../../assets/6.png"
import i7 from "../../assets/7.png"
import i8 from "../../assets/8.png"
 

const ServiveEight = () => {
 
  return (
    <div   className='my-10 '>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2'>
         <div className='flex justify-center items-center h-40 sm:h-56 border'><img className='w-16 ' src={i1} /></div>
         <div className='flex justify-center items-center h-40 sm:h-56 border'><img className='w-16 ' src={i2} /></div>
         <div className='flex justify-center items-center h-40 sm:h-56 border'><img className='w-16 ' src={i3} /></div>
         <div className='flex justify-center items-center h-40 sm:h-56 border'><img className='w-16 ' src={i4} /></div>
         <div className='flex justify-center items-center h-40 sm:h-56 border'><img className='w-16 ' src={i5} /></div>
         <div className='flex justify-center items-center h-40 sm:h-56 border'><img className='w-16 ' src={i6} /></div>
         <div className='flex justify-center items-center h-40 sm:h-56 border'><img className='w-16 ' src={i7} /></div>
         <div className='flex justify-center items-center h-40 sm:h-56 border'><img className='w-16 ' src={i8} /></div>
      </div>
    </div>
  )
}

export default ServiveEight
