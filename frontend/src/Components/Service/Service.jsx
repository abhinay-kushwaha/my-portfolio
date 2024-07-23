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
    <div className='lg:px-36 md:px-24 sm:px-16 px-4 '>
      <ServiceTwo/>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-3 -mt-36'>
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
    <div  className='lg:px-36 md:px-24 sm:px-16 px-4 '>
      <ServiveEight/>
    </div>
  </>
  )
}

export default Service
