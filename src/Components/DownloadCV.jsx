import React from 'react';
import AbhinayCV from "../assets/girl-laptop.jpg";

const DownloadCV = () => {
  return (
    <div>
      <img className='hidden' src={AbhinayCV} alt="AbhinayCV" />
      <a href={AbhinayCV} download="AbhinayCV.jpg">
        <button className="bg-[#FB503B] hover:bg-[#142EB5] text-white p-2 px-4 font-bold rounded-full shadow-1">
          Download CV
        </button>
      </a>
    </div>
  );
}

export default DownloadCV;
