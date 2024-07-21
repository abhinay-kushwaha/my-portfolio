import React, { useEffect } from 'react'
import dedi from "../../assets/Dedication.svg"
import smart from "../../assets/development.png"
import inte from "../../assets/Intelligence.png"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const HomeThree = () => {
  useEffect(() => {
    AOS.init();
}, []);
  return (
    <div className=' grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8'>

      <div data-aos="fade-up" className='p-2  rounded-md'>
        <div className='flex justify-between items-center'>
          <div className='text-xl font-semibold'>
            <h1 className=' text-red-500 font-bold'>01</h1>
            <h2>Dedication
            </h2>
          </div>
          <div>
              <img className='w-14' src={dedi} alt="" />
          </div>
        </div>  <br /> <hr className='' /> <br />
        <div>
          <p className='text-justify'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus totam, molestiae assumenda at iusto numquam!
          </p>
        </div>
      </div>

      <div data-aos="fade-down" className='p-2  rounded-md'>
        <div className='flex justify-between items-center'>
          <div className='text-xl font-semibold'>
            <h1 className=' text-red-500 text-sm font-bold'>02</h1>
            <h2>Smart Work
            </h2>
          </div>
          <div>
             <img className='w-14' src={smart} alt="" />
          </div>
        </div>  <br /> <hr className='' /> <br />
        <div>
          <p className='text-justify'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus totam, molestiae assumenda at iusto numquam!
          </p>
        </div>
      </div>

      <div data-aos="fade-up" className='p-2  rounded-md'>
        <div className='flex justify-between items-center'>
          <div className='text-xl font-semibold'>
            <h1 className=' text-red-500 text-sm font-bold'>03</h1>
            <h2>Intelligence
            </h2>
          </div>
          <div>
              <img className='w-14' src={inte} alt="" />
          </div>
        </div>  <br /> <hr className='' /> <br />
        <div>
          <p className='text-justify'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus totam, molestiae assumenda at iusto numquam!
          </p>
        </div>
      </div>

    </div>
  )
}

export default HomeThree
