import React from 'react'
import '../../App.css'
import abhi from "../../assets/abhi.jpeg"
import trophy from "../../assets/trophy.png"
import circle from "../../assets/circle-img.png"

const HomeTwo = () => {
  return (
    <div className=' flex justify-center items-center lg:pr-24'>
       <div className='flex'>

          <div className='hidden sm:block'>
          <div className='flex flex-col gap-72'>
            <div className='shadow-1 bg-white w-fit p-2 flex justify-center items-center gap-2 rounded-sm relative left-10 top-6'>
              <h1 className='text-3xl font-bold text-blue-400'>1</h1>
              <h2 className='text-sm font-semibold leading-4 w-14'>Years of <br />
                Success
              </h2>
            </div>
            <div className='relative left-10 -bottom-12 '>
              <img className='w-24 spin-slow' src={circle} alt="" />
            </div>
          </div>
          </div>

          <img className='w-72  object-cover' src={abhi} alt="myphoto" />

          <div className='hidden sm:block'>
          <div className='flex flex-col gap-72'>
            <div className='bg-white w-fit rounded-sm shadow-1 relative -top-7 right-7'>
              <img className='w-14 p-3  ' src={trophy} alt="" />
            </div>
            <div className='shadow-1 bg-white w-fit p-2 flex justify-center items-center gap-2 rounded-sm relative right-12'>
            <h1 className=' font-bold text-red-500 flex items-start'><h2 className='text-3xl font-bold text-red-500'>2</h2> <span className='text-2xl'>+</span></h1>
              <h2 className='text-sm font-semibold leading-4'>Projects <br />
                Completed
              </h2>
            </div>
          </div>
          </div>

       </div>
      </div>
  )
}

export default HomeTwo
