import React from 'react';
import CV from "../assets/abhi.jpeg";

const DownloadCV = () => {
  return (
    <div>
      <img className='hidden' src={CV} alt="CV" />
      <a href={CV} download="CV.jpg">
        <button className="bg-[#FB503B] hover:bg-[#142EB5] text-white p-2 px-4 font-bold rounded-full shadow-1">
          Download CV
        </button>
      </a>
    </div>
  );
}

export default DownloadCV;
