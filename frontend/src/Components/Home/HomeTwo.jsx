import React from 'react'
import FlipNumbers from 'react-flip-numbers';
import '../../App.css'
import abhi from "../../assets/abhi.jpeg"
import trophy from "../../assets/trophy.png"
import circle from "../../assets/circle-img.png"
import CircleText from './CircleText';

const HomeTwo = () => {
  return (
    <div className=' flex justify-center items-center lg:pr-24'>
       <div className='flex'>

          <div className='hidden sm:block'>
          <div className='flex flex-col gap-72'>
            <div className='shadow-1 bg-white w-fit p-2 flex justify-center items-center gap-2 rounded-sm relative left-10 top-6'>
            <p className="whitespace-pre-wrap text-3xl font-bold text-blue-400">
                <FlipNumbers
                  height={35}
                  width={20}
                  color="blue" // Adjust as needed
                  background="white"
                  play
                  perspective={3000}
                  numbers="1"
                />
              </p>
              <h2 className='text-sm font-semibold leading-4 w-14'>Years of <br />
                Success
              </h2>
            </div>
           
          <CircleText/>

          </div>
          </div>

          <img className='w-72  object-cover' src={abhi} alt="myphoto" />

          <div className='hidden sm:block'>
          <div className='flex flex-col gap-72'>
            <div className='bg-white w-fit rounded-sm shadow-1 relative -top-7 right-7'>
              <img className='w-14 p-3  ' src={trophy} alt="" />
            </div>
            <div className='shadow-1 bg-white w-fit p-2 flex justify-center items-center gap-2 rounded-sm relative right-12'>
            <h1 className=' font-bold text-red-500 flex items-start'>
            <p className="whitespace-pre-wrap text-3xl font-bold text-blue-400">
                <FlipNumbers
                  height={35}
                  width={20}
                  color="red" // Adjust as needed
                  background="white"
                  play
                  perspective={3000}
                  numbers="6"
                />
              </p> <span className='text-2xl'>+</span></h1>
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
