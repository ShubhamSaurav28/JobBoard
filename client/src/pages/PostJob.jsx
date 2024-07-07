import React from 'react'
import PostJobForm from '../components/PostJobForm'
import jobpost from '../assets/jobpost.png'

export default function PostJob() {
  return (
    <>
    <div className='flex justify-end p-6 mt-[80px]  bg-gradient-to-r from-blue-400 via-red-500 to-yellow-400'>
        <img className='w-[50%] h-full' src={jobpost} alt="" srcset="" />
        <PostJobForm/>
    </div>
    </>
  )
}
