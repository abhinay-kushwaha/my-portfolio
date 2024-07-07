import React from 'react';
import logo from "../assets/logo.jpg";



const Header = () => {


  return (
    <header className='flex justify-between items-center lg:px-44 md:px-24 sm:px-12 p-4 fixed top-0 z-10 w-full text-white h-18'>
        <div className='flex justify-start items-center gap-2'>
          <img className='w-14 rounded-full ' src={logo} alt="logo" />
          <h1 className='font-bold text-3xl font-sans'>Abhinay</h1>
        </div>

        <div className='flex justify-center items-center gap-3'>
          <ul className='flex justify-center items-center gap-4 '>
            <li> <a href="#"> Home</a> </li>
            <li> <a href="#"> About</a> </li>
            <li> <a href="#"> Portfolio</a> </li>
            <li> <a href="#"> Service</a> </li>
            <li> <a href="#"> Blog</a> </li>
          </ul>
          <button className='font-semibold bg-[#FB503B] hover:bg-[#142EB5] rounded-full p-2 pl-3'><span>Download</span> CV</button>
        </div>
     
    </header>
  )
}

export default Header;