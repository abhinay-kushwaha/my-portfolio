import React, { useEffect } from 'react';
import '../../App.css'
import HomeOne from './HomeOne';
import HomeTwo from './HomeTwo';
import HomeThree from './HomeThree';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Service from '../Service/Service';
import Contacts from '../Contact/Contacts';
import Blogs from '../Blog/Blogs';
import { useLocation } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css'; 

import homeBg from '../../assets/home-bg.jpg';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    AOS.init();
}, []);
  return (
 <>
    <div style={{ 
      backgroundImage: `url(${homeBg})`,
      backgroundSize: "cover",
       backgroundRepeat: "no-repeat", 
       backgroundPosition: "center",
      }}
      className='relative -top-28'>
      <div data-aos="fade-down" className='flex lg:flex-row flex-col justify-center items-center gap-5 w-full lg:p-44 md:p-32 p-20 pt-28  '>
      <HomeOne/>
      <HomeTwo/>
      </div>
      

      

    </div>
    <div className='lg:px-44 md:px-32 sm:px-20 px-10 p-44 '>
      <HomeThree/>

    </div>

    <div>
      <About/>
      <Portfolio/>
      <Service/>
      <Contacts/>
      <Blogs/>
    </div>
    </>


  
    
  )
}

export default Home
