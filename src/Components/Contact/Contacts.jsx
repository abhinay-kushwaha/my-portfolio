import React, { useEffect } from 'react'
import Contact from './Contact'
import { useLocation } from 'react-router-dom';

const Contacts = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className='lg:px-36 md:px-24 sm:px-16 px-4  '>
      <Contact/>
    </div>
  )
}

export default Contacts
