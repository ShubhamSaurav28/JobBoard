import React from 'react';
import emp3 from '../assets/emp3.png';
import aboutus from '../assets/aboutus.jpg';



export default function EmployersMiddleBottom() {
  

  return (
    <div className='flex text-center items-center'>
      <img className='ml-[5rem] w-[38%] drop-shadow-2xl' src={emp3} alt='' />
      <div
        className='mx-auto p-4 border shadow-xl bg-white text-black rounded-lg relative overflow-hidden'>
        <p className='text-xl font-bold mb-2'>About Us</p>
        <div className='group'>
          <img className='rounded-md w-[350px] mb-4' src={aboutus} alt="about us" />
          <button className='border shadow-xl p-2 rounded-lg bg-red-400 text-white font-semibold transform transition-transform duration-300 ease-in-out hover:scale-105 tracking-widest text-xl '>
            Discover
          </button>
        </div>
      </div>
    </div>
  );
}
