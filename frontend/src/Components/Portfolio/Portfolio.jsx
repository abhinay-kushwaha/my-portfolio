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
    <div className='lg:px-44 md:px-32 sm:px-20 px-10 '>
      <PortfolioTwo/>
    </div>
      <PortfolioThree/>
      <Skills/>
  </>
  )
}

export default Portfolio
