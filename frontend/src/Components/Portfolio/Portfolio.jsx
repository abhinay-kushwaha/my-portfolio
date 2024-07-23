import React, { useEffect } from 'react'
import PortfolioOne from './PortfolioOne'
import PortfolioTwo from './PortfolioTwo'
import PortfolioThree from './PortfolioThree'
import Skills from './Skills'
import { useLocation } from 'react-router-dom'

const Portfolio = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
  <>
      <PortfolioOne/>
    <div className='lg:px-36 md:px-24 sm:px-16 px-4 '>
      <PortfolioTwo/>
    </div>
      <PortfolioThree/>
      <Skills/>
  </>
  )
}

export default Portfolio
