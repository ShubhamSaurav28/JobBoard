import React from 'react';
import emp1 from '../assets/emp1.png';
import PostJobs from '../assets/PostJobs.jpg';
import { Link } from 'react-router-dom';

export default function EmployersTop() {


  return (
    <>
      <div className='flex text-center items-center mt-[80px]'>
        <img className='ml-[5rem] w-[38%] drop-shadow-2xl' src={emp1} alt='' />
        <div
          className='mx-auto p-4 border shadow-xl bg-white text-black rounded-lg relative overflow-hidden'>
          <p className='text-xl font-bold mb-2'>Post a Job</p>
          <div className='group'>
            <img className='rounded-md w-[350px] mb-4' src={PostJobs} alt="post jobs" />
            <Link to="#">
            <button className='border shadow-xl p-2 rounded-lg bg-red-400 text-white font-semibold transform transition-transform duration-300 ease-in-out hover:scale-105 tracking-widest text-xl '>
              Post Job
            </button>
            </Link>
          </div>
        </div>
      </div>
      </>
  );
}
