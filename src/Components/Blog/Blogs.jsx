import React, { useEffect } from 'react'
import BlogsOne from './BlogsOne'
import { useLocation } from 'react-router-dom';

const Blogs = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div>
      <BlogsOne/>
    </div>
  )
}

export default Blogs
