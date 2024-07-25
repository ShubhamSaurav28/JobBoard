import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { format } from 'date-fns';


export default function ProfileMiddle({ userProfile }) {
  const [bgColors, setBgColors] = useState([]);

  function generateSomewhatLightColor() {
    const baseColors = [
      [255, 102, 102], // Red
      [255, 178, 102], // Orange
      [230, 230, 100], // Yellow
      [178, 255, 102], // Green
      [102, 178, 255], // Blue
      [102, 102, 255], // Indigo
      [178, 102, 255], // Violet
    ];

    const baseColor = baseColors[Math.floor(Math.random() * baseColors.length)];
    const [x, y, z] = baseColor.map(component => Math.min(component + Math.floor(Math.random() * 50), 255));

    return `rgb(${x}, ${y}, ${z})`;
  }

  useEffect(() => {
    const initialBgColors = userProfile.experience ? userProfile.experience.map(() => generateSomewhatLightColor()) : [];
    setBgColors(initialBgColors);
  }, [userProfile.experience]);

  const addNewExperience = () => {
    setBgColors([...bgColors, generateSomewhatLightColor()]);
  };

  const formatDate = (dateString) => {
    return dateString ? format(new Date(dateString), 'MMMM dd, yyyy') : 'N/A';
  };

  return (
    <div className='w-[70vw] flex flex-col gap-5 h-full'>
      <div className='border bg-white w-full rounded-xl shadow-lg'>
        <ul className='flex flex-wrap gap-10 p-5'>
          <li className='w-[30%] px-3'>
            <h4 className='font-semibold text-gray-600 tracking-wide'>D.O.B</h4>
            <h5 className='font-medium'>{formatDate(userProfile.dob)}</h5>
          </li>
          <li className='w-[30%] px-3'>
            <h4 className='font-semibold text-gray-600 tracking-wide'>Total Experience</h4>
            <h5 className='font-medium'>{userProfile.totalexp ? `${userProfile.totalexp} Years` : "N/A"}</h5>
          </li>
          <li className='w-[30%] px-3'>
            <h4 className='font-semibold text-gray-600 tracking-wide'>Phone No.</h4>
            <h5 className='font-medium'>{userProfile.phone || "N/A"}</h5>
          </li>
          <li className='w-[30%] px-3'>
            <h4 className='font-semibold text-gray-600 tracking-wide'>Location</h4>
            <h5 className='font-medium'>{userProfile.location || "N/A"}</h5>
          </li>
          <li className='w-[30%] px-3'>
            <h4 className='font-semibold text-gray-600 tracking-wide'>Email</h4>
            <h5 className='font-medium'>{userProfile.email}</h5>
          </li>
          <li className='w-[30%] px-3'>
            <h4 className='font-semibold text-gray-600 tracking-wide'>Email</h4>
            <h5 className='font-medium'>{userProfile.company.companyName}</h5>
          </li>
        </ul>
        <div className='flex items-center mx-6 mb-6 mt-2 justify-between'>
          <div>
            <input className='hidden' type="file" id="resumeUpload" />
            <label htmlFor="resumeUpload" className='border py-2 px-4 rounded-md bg-blue-500 text-white hover:bg-blue-600 cursor-pointer'>
              <FontAwesomeIcon className="mr-2" icon={faUpload} /><span>Upload Resume</span>
            </label>
          </div>
          <button className='border py-2 px-4 rounded-md bg-blue-500 text-white hover:bg-blue-600 cursor-pointer'>Edit</button>
        </div>
      </div>
      <div className='border bg-white w-full rounded-xl shadow-lg p-5'>
        <div className='flex justify-between'>
          <h3 className='font-semibold text-2xl'>Experience</h3>
          <button onClick={addNewExperience} className='py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md'>
            Add Experience
          </button>
        </div>
        <ul className='divide-y-2'>
          {userProfile.experience && userProfile.experience.map((exp, index) => (
            <li key={index} className='rounded-md p-2 flex items-center gap-4'>
              <div className='rounded-full w-[80px] h-[80px] flex justify-center items-center' style={{ backgroundColor: bgColors[index] }}>
                <span className='text-white font-semibold text-[30px]'>{exp.company ? exp.company.charAt(0).toUpperCase()+exp.company.charAt(1).toUpperCase() : "?"}</span>
              </div>
              <div>
                <h4 className='text-blue-600 font-semibold text-lg'>{exp.company || "Company Name"}</h4>
                <h5 className='text-gray-600 text-[17px]'>{exp.designation || "Designation"}</h5>
                <h6 className='font-bold'>Year of Exp: <span className='font-medium text-green-600'>{exp.yearofexp ? `${exp.yearofexp} years` : "N/A"}</span></h6>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
