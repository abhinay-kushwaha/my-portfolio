import React from 'react'

const AboutTwo = () => {
  return (
    <div className='flex justify-start items-start '>
      <div className='flex flex-col justify-start gap-5'>
        <h1 className='font-semibold text-2xl text-red-400'>I'm a Developer</h1>
        <h2 className='font-semibold text-4xl'>I Develop Application that Help People</h2>
        <p className='text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati inventore maxime ipsa laboriosam commodi, est adipisci sunt, suscipit perferendis voluptatibus repellat molestias porro voluptas. Sequi!</p>
        <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, adipisci culpa provident quisquam inventore id.</p>
        <button className='bg-[#142EB5] hover:bg-[#FB503B] p-2 px-4 rounded-full text-white font-semibold w-fit'>View Portfolio</button>
      </div>
    </div>
  )
}

export default AboutTwo
