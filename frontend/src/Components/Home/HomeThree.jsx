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

      <div  className='p-2  rounded-md'>
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
          "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight." - Proverbs 3:5-6

          </p>
        </div>
      </div>

      <div   className='p-2  rounded-md'>
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
          "Let your light shine before others, so that they may see your good works and glorify your Father in heaven." - Matthew 5:16 
          </p>
        </div>
      </div>

      <div   className='p-2  rounded-md'>
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
          "If any of you lacks wisdom, you should ask God, who gives generously to all without finding fault, and it will be given to you." - James 1:5

          </p>
        </div>
      </div>

    </div>
  )
}

export default HomeThree
