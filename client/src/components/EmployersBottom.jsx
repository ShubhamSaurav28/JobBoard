import React from 'react';
import emp4 from '../assets/emp4.png';
import contactus from '../assets/contactus.jpg';
import { useNavigate } from 'react-router-dom';

export default function EmployersBottom() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contactus");
  };

  return (
    <div className='flex text-center items-center'>
      <div className='mx-auto p-4 border shadow-xl bg-white text-black rounded-lg relative overflow-hidden'>
        <p className='text-xl font-bold mb-2'>Contact Us</p>
        <div className='group'>
          <img className='rounded-md w-[350px]  mb-4' src={contactus} alt="contact us" />
          <button onClick={handleClick} className='border shadow-xl p-2 rounded-lg bg-red-400 text-white font-semibold transform transition-transform duration-300 ease-in-out hover:scale-105 tracking-widest text-xl'>
            Get in Touch
          </button>
        </div>
      </div>
      <img className='mr-[5rem] w-[38%] drop-shadow-2xl' src={emp4} alt='' />
    </div>
  );
}
