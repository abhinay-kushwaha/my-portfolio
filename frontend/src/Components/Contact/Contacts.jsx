import React, { useEffect } from 'react'
import Contact from './Contact'
import { useLocation } from 'react-router-dom';

const Contacts = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className=' '>
      <Contact/>
    </div>
  )
}

export default Contacts
