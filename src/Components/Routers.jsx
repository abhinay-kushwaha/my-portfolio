import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Home from './Home/Home'
import About from './About/About';
import Portfolio from './Portfolio/Portfolio';
import Service from './Service/Service';
import Contacts from './Contact/Contacts';
import Blogs from './Blog/Blogs';
import Layout from './Layout';

const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/my-portfolio/" element={<Layout><Home/></Layout>} />
          <Route path="/my-portfolio/home" element={<Layout><Home/></Layout>} />
          <Route path="/my-portfolio/about" element={<Layout><About/></Layout>} />
          <Route path="/my-portfolio/portfolio" element={<Layout><Portfolio/></Layout>} />
          <Route path="/my-portfolio/service" element={<Layout><Service/></Layout>} />
          <Route path="/my-portfolio/contacts" element={<Layout><Contacts/></Layout>} />
          <Route path="/my-portfolio/blog" element={<Layout><Blogs/></Layout>} />
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default Routers
