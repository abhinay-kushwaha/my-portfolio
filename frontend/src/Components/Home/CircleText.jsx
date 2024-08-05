import React from 'react'

const CircleText = () => {
  return (
    <div className='relative left-12 -bottom-12  '>
    {/* <img className='w-24 spin-slow' src={circle} alt="" /> */}
    <svg   className='w-24 spin-slow' viewBox="0 0 300 300">
        <defs>
            <path id="circlePath" d="M 150, 150 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
        </defs>
        <text className='' fill="#ffffff"  font-size="26" font-family="Arial">
            <textPath href="#circlePath">
                Creative web developer from Rewa MP.
            </textPath>
        </text>
    </svg>
  </div>
  )
}

export default CircleText
