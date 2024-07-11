import React from 'react';

export default function ProfileLeft({ userProfile }) {
  return (
    <>
      <div className='border h-full w-[30vw] bg-white p-5 rounded-xl shadow-lg'>
        <div className='mb-[15px]'>
          <div className='flex justify-center'>
            <img className='rounded-full w-[200px] h-[200px] object-cover focus:ring-1' src={userProfile.profilepic} alt="profile photo" />
          </div>
          <div className='flex justify-center mt-4 flex-wrap'>
            <h1 className='font-semibold text-2xl text-blue-600 w-full flex justify-center'>{userProfile.username.charAt(0).toUpperCase()+userProfile.username.substring(1,userProfile.username.length)}</h1>
            <h3 className='mb-2'>{userProfile.designation || "FullStack Developer"}</h3>
            <p className='text-center text-gray-800 mx-[5px]'>
              {userProfile.description}
            </p>
          </div>
        </div>
        <h2 className='font-semibold text-xl py-2'>Skills</h2>
        <div className='flex flex-wrap gap-3'>
          {userProfile.skills && userProfile.skills.map(skill => (
            <span key={skill} className='rounded-full bg-slate-100 text-blue-600 ring-1 cursor-pointer px-3 py-[2px]'>{skill}</span>
          ))}
        </div>
        <h2 className='font-semibold text-xl py-2 mt-2'>Education</h2>
        <ul className='flex flex-col gap-3 divide-y-2'>
          {userProfile.education && userProfile.education.map((edu, index) => (
            <li key={index}>
              <h3 className='text-blue-500 text-lg font-semibold'>{edu.institute}</h3>
              <h4 className='text-orange-500 font-semibold'>{edu.degree}</h4>
              <h4 className='font-bold'>Year: <span className='font-medium text-gray-500'>{edu.year}</span></h4>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
