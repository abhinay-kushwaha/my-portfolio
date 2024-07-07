import React from 'react'

const PortfolioTwo = () => {
  return (
    <div className='relative -top-56'>
      <div className='flex flex-col gap-24'>

       <div  className='p-32  rounded-xl hover:scale-105 ease-in duration-300'
       style={{ 
      backgroundImage: "url('../src/assets/portfolio-bg-1.jpg')",
      backgroundSize: "cover",
       backgroundRepeat: "no-repeat", 
       backgroundPosition: "center",
      }}>
          <div className=' w-96 flex flex-col gap-6'>
              <h1 className='text-red-500 font-semibold text-xl'>YouTube</h1>
              <h2 className='font-bold text-4xl text-white'>Web Application for Desiverse</h2>
              <a className='font-semibold flex justify-start items-center text-white' href="#">VIEW PROJECT <span>👉</span></a>
            </div>
       </div>

       <div  className='p-32  rounded-xl hover:scale-105 ease-in-out duration-300 flex justify-end '
       style={{ 
      backgroundImage: "url('../src/assets/portfolio-bg-2.jpg')",
      backgroundSize: "cover",
       backgroundRepeat: "no-repeat", 
       backgroundPosition: "center",
      }}>
          <div className=' w-96 flex flex-col   gap-6'>
              <h1 className='text-red-500 font-semibold text-xl'>Vimeo</h1>
              <h2 className='font-bold text-4xl text-white'>Web Application for Desiverse</h2>
              <a className='font-semibold flex justify-start items-center text-white' href="#">VIEW PROJECT <span>👉</span></a>
            </div>
       </div>

       <div  className='p-32  rounded-xl hover:scale-105 ease-in-out duration-300'
       style={{ 
      backgroundImage: "url('../src/assets/portfolio-bg-3.jpg')",
      backgroundSize: "cover",
       backgroundRepeat: "no-repeat", 
       backgroundPosition: "center",
      }}>
          <div className=' w-96 flex flex-col gap-6'>
              <h1 className='text-red-500 font-semibold text-xl'>SoundCloud</h1>
              <h2 className='font-bold text-4xl text-white'>Web Application for Desiverse</h2>
              <a className='font-semibold flex justify-start items-center text-white' href="#">VIEW PROJECT <span>👉</span></a>
            </div>
       </div>

       <div  className='p-32  rounded-xl hover:scale-105 ease-in-out duration-300  flex justify-end'
       style={{ 
      backgroundImage: "url('../src/assets/portfolio-bg-4.jpg')",
      backgroundSize: "cover",
       backgroundRepeat: "no-repeat", 
       backgroundPosition: "center",
      }}>
          <div className=' w-96 flex flex-col gap-6'>
              <h1 className='text-red-500 font-semibold text-xl'>Details</h1>
              <h2 className='font-bold text-4xl text-white'>Web Application for Desiverse</h2>
              <a className='font-semibold flex justify-start items-center text-white' href="#">VIEW PROJECT <span>👉</span></a>
            </div>
       </div>

      </div>
    </div>
  )
}

export default PortfolioTwo
