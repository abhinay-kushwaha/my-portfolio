import React, { useEffect } from 'react'
import ServiceOne from './ServiceOne'
import ServiceTwo from './ServiceTwo'
import ServiceThree from './ServiceThree'
import ServiveFour from './ServiveFour'
import ServiveFive from './ServiveFive'
import ServiveSix from './ServiveSix'
import ServiveSeven from './ServiveSeven'
import ServiveEight from './ServiveEight'
import { useLocation } from 'react-router-dom'

const Service = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
  <>
      <ServiceOne/>
    <div className='lg:px-44 md:px-32 sm:px-20 px-10 '>
      <ServiceTwo/>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-3'>
      <ServiceThree/>
      <ServiveFour/>
      </div>
    </div>

    <div className="mt-6">
      <ServiveFive  />
    </div>
      <ServiveSix/>

      <div className=''>
      <ServiveSeven/>
      </div>
    <div  className='lg:px-44 md:px-32 sm:px-20 px-10 '>
      <ServiveEight/>
    </div>
  </>
  )
}

export default Service
