import React from 'react';
import '../../App.css'
import HomeOne from './HomeOne';
import HomeTwo from './HomeTwo';
import HomeThree from './HomeThree';

const Home = () => {
  return (
 <>
    <div style={{ 
      backgroundImage: "url('../src/assets/home-bg.jpg')",
      backgroundSize: "cover",
       backgroundRepeat: "no-repeat", 
       backgroundPosition: "center",
      }}
      className=''>
      <div className='flex lg:flex-row flex-col justify-center items-center gap-5 w-full lg:p-44 md:p-32 p-20 pt-28  '>
      <HomeOne/>
      <HomeTwo/>
      </div>
      

      

    </div>
    <div className='lg:px-44 md:px-32 sm:px-20 px-10 p-44 '>
      <HomeThree/>

    </div>
    </>


  
    
  )
}

export default Home
