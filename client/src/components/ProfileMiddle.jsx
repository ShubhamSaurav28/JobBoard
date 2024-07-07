import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

export default function ProfileMiddle() {
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
    const initialBgColors = [generateSomewhatLightColor()];
    setBgColors(initialBgColors);
  }, []);

  const addNewExperience = () => {
    // setBgColors([...bgColors, generateSomewhatLightColor()]);
  };

  return (
    <div className='w-[70vw] flex flex-col gap-5 h-full'>
      <div className='border bg-white w-full rounded-xl shadow-lg'>
        <ul className='flex flex-wrap gap-10 p-5'>
          <li className='w-[30%] px-3'>
            <h4 className='font-semibold text-gray-600 tracking-wide'>D.O.B</h4>

            <h5 className='font-medium'>02-06-2003</h5>
          </li>
          <li className='w-[30%] px-3'>
            <h4 className='font-semibold text-gray-600 tracking-wide'>Experience</h4>
            <h5 className='font-medium'>3 Years</h5>
          </li>
          <li className='w-[30%] px-3'>
            <h4 className='font-semibold text-gray-600 tracking-wide'>Phone No.</h4>
            <h5 className='font-medium'>+91 1234567891</h5>
          </li>
          <li className='w-[30%] px-3'>
            <h4 className='font-semibold text-gray-600 tracking-wide'>Location</h4>
            <h5 className='font-medium'>Mathura</h5>
          </li>
          <li className='w-[30%] px-3'>
            <h4 className='font-semibold text-gray-600 tracking-wide'>Email</h4>
            <h5 className='font-medium'>example@gmail.com</h5>
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
          {bgColors.map((bgColor, index) => (
            <li key={index} className='rounded-md p-2 flex items-center gap-4'>
              <div className='rounded-full w-[80px] h-[80px] flex justify-center items-center' style={{ backgroundColor: bgColor }}>
                <span className='text-white font-semibold text-[30px]'>AI</span>
              </div>
              <div>
                <h4 className='text-blue-600 font-semibold text-lg'>Company Name</h4>
                <h5 className='text-gray-600 text-[17px]'>Designation</h5>
                <h6 className='font-bold'>Year of Exp: <span className='font-medium text-green-600'>3 years</span></h6>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
