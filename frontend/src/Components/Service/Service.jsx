import React from 'react'
import ServiceOne from './ServiceOne'
import ServiceTwo from './ServiceTwo'

const Service = () => {
  return (
  <>
      <ServiceOne/>
    <div className='lg:px-44 md:px-32 sm:px-20 px-10 '>
      <ServiceTwo/>
    </div>
  </>
  )
}

export default Service
