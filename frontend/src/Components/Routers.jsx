import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Home from './Home/Home'
import About from './About/About';
import Portfolio from './Portfolio/Portfolio';
import Service from './Service/Service';
import Contact from './Contact/Contact';
import Blogs from './Blog/Blogs';
import Layout from './Layout';

const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Layout><Home/></Layout>} /> */}
          <Route path="/home" element={<Layout><Home/></Layout>} />
          <Route path="/about" element={<Layout><About/></Layout>} />
          <Route path="/portfolio" element={<Layout><Portfolio/></Layout>} />
          <Route path="/service" element={<Layout><Service/></Layout>} />
          <Route path="/contact" element={<Layout><Contact/></Layout>} />
          <Route path="/blog" element={<Layout><Blogs/></Layout>} />
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default Routers
