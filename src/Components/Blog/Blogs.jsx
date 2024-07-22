import React, { useEffect } from 'react'
import BlogsOne from './BlogsOne'
import { useLocation } from 'react-router-dom';

const Blogs = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className='lg:px-36 md:px-24 sm:px-16 px-4 '>
      <BlogsOne/>
    </div>
  )
}

export default Blogs
