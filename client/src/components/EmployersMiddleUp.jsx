import React from 'react';
import emp2 from '../assets/emp2.png';
import company from '../assets/company.jpg';
import { Link } from 'react-router-dom';


export default function EmployersMiddleUp() {
  

  return (
    <div className='flex text-center items-center'>
      <div
        className='mx-auto p-4 border shadow-xl bg-white text-black rounded-lg relative overflow-hidden'>
        <p className='text-xl font-bold mb-2'>Register Company</p>
        <div className='group'>
          <img className='rounded-md w-[350px] mb-4' src={company} alt="company" />
          <Link to='/registercompany'>
          <button className='border shadow-xl p-2 rounded-lg bg-red-400 text-white font-semibold transform transition-transform duration-300 ease-in-out hover:scale-105 tracking-widest text-xl '>
            Register
          </button>
          </Link>
        </div>
      </div>
      <img className='mr-[5rem] w-[38%] drop-shadow-2xl' src={emp2} alt='' />
    </div>
  );
}
