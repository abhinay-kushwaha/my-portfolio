import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import logo from "../assets/logo.jpg";
import '../App.css'
import DownloadCV from './DownloadCV';


const Header = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  // for remove menubar when we click on window
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target) && isMenuOpen) {
      setIsMenuOpen(false);
    }
  };



  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  // for active button based on location
  useEffect(() => {
    const pathMap = {
      "/home": "Home",
      "/about": "About",
      "/portfolio": "Portfolio",
      "/service": "Service",
      "/contacts": "Contact",
      "/blog": "Blog",
    };
    setActiveButton(pathMap[location.pathname] || null);
  }, [location.pathname]);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Auto-close the menu when screen is large
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // change color of navbar when scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      
      {/* Main Header */}
      <header className={`w-full p-2 md:p-4 h-20 flex justify-between items-center fixed top-0 z-20 shadow-2xl transition-colors duration-300 ${navbar ? 'bg-blue-300 md:text-white' : 'bg-transparent'}`}>
        <div className='flex justify-center items-center gap-2'>
          <img className='h-16 p-1 md:w-auto rounded-full' src={logo} alt="logo" />
        </div>
        
        {/* Menu Button for Small screen */}
        <div className="flex  items-center gap-3 md:hidden">
          <button className='text-3xl' onClick={toggleMenu}>
            {isMenuOpen ? <IoClose className='text-[#333] absolute right-3 top-4 hover:text-[#5f4fee] transition transform hover:rotate-90 text-4xl font-bold' /> : <IoMenu className='text-[#333] hover:text-[#EE4F50] transition' />}
          </button>
        </div>
        
        {/* Navigation Links */}
        <div ref={menuRef} className={`md:flex bg-white md:bg-transparent items-center gap-6 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <ul className={`flex flex-col md:flex-row font-semibold gap-6 items-center ${isMenuOpen ? 'absolute top-16 right-0 w-full bg-blue-300 shadow-md rounded-md py-2 px-2 md:relative md:top-0 md:bg-transparent md:shadow-none md:rounded-none' : 'hidden md:flex'}`}>
            <Link to="/home" onClick={closeMenu}><li
              className={`text-nowrap ${activeButton === "Home" ? "underline decoration-[#EE4F50] underline-offset-4 text-[#501c1c]" : ""}`}
              onClick={() => handleButtonClick("Home")}>Home</li></Link>

            <Link to="/about" onClick={closeMenu}><li className={`text-nowrap ${activeButton === "About" ? "underline decoration-[#EE4F50] underline-offset-4 text-[#501c1c]" : ""}`}
              onClick={() => handleButtonClick("About")}>About</li></Link>

            <Link to="/portfolio" onClick={closeMenu}><li className={`text-nowrap ${activeButton === "Portfolio" ? "underline decoration-[#EE4F50] underline-offset-4 text-[#501c1c]" : ""}`}
              onClick={() => handleButtonClick("Portfolio")}>Portfolio</li></Link>

            <Link to="/service" onClick={closeMenu}><li className={`text-nowrap ${activeButton === "Service" ? "underline decoration-[#EE4F50] underline-offset-4 text-[#501c1c]" : ""}`}
              onClick={() => handleButtonClick("Service")}>Service</li></Link>

            <Link to="/contacts" onClick={closeMenu}><li className={`text-nowrap ${activeButton === "Contact" ? "underline decoration-[#EE4F50] underline-offset-4 text-[#501c1c]" : ""}`}
              onClick={() => handleButtonClick("Contact")}>Contact</li></Link>

            <Link to="/blog" onClick={closeMenu}><li className={`text-nowrap ${activeButton === "Blog" ? "underline decoration-[#EE4F50] underline-offset-4 text-[#501c1c]" : ""}`}
              onClick={() => handleButtonClick("Blog")}>Blog</li></Link>
          < DownloadCV/>
          </ul>
        </div>
      </header>
     
    </>
  )
}

export default Header;
