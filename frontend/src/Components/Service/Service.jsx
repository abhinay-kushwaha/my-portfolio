import React from 'react'
import ServiceOne from './ServiceOne'
import ServiceTwo from './ServiceTwo'
import ServiceThree from './ServiceThree'
import ServiveFour from './ServiveFour'
import ServiveFive from './ServiveFive'
import ServiveSix from './ServiveSix'
import ServiveSeven from './ServiveSeven'
import ServiveEight from './ServiveEight'

const Service = () => {
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
      <ServiveFive/>
      <ServiveSix/>
      <ServiveSeven/>
    <div  className='lg:px-44 md:px-32 sm:px-20 px-10 '>
      <ServiveEight/>
    </div>
  </>
  )
}

export default Service
