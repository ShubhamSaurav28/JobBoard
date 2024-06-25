import React, { useState, useRef, useEffect } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}°C`;
}

export default function LeftJobs() {
  const initialSalaryRange = [0, 1000000];
  const initialSelectedOption = 'Anytime';
  const initialJobType = {
    fullTime: false,
    partTime: false,
    contract: false,
    remote: false,
  };
  const initialOnSiteRemote = {
    onSite: false,
    remote: false,
    hybrid: false,
  };

  const [selectedOption, setSelectedOption] = useState(initialSelectedOption);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [value, setValue] = useState(initialSalaryRange);
  const [jobType, setJobType] = useState(initialJobType);
  const [onSiteRemote, setOnSiteRemote] = useState(initialOnSiteRemote);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleclearall = () => {
    setValue(initialSalaryRange);
    setSelectedOption(initialSelectedOption);
    setJobType(initialJobType);
    setOnSiteRemote(initialOnSiteRemote);
  };

  const options = ['Anytime', 'Week', 'Month', 'Year'];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleJobTypeChange = (type) => {
    const updatedJobType = { ...jobType, [type]: !jobType[type] };
    setJobType(updatedJobType);
  };

  const handleOnSiteRemoteChange = (type) => {
    const updatedOnSiteRemote = { ...onSiteRemote, [type]: !onSiteRemote[type] };
    setOnSiteRemote(updatedOnSiteRemote);
  };

  return (
    <div className='border-2 w-[25%] rounded-lg h-full text-lg'>
      <div className='py-2 px-3 border-b-2'>
        <span className='font-semibold'>Filter</span>
        <button onClick={handleclearall} className='text-red-400 float-right'>
          Clear all
        </button>
      </div>
      <div className='divide-y-2 text-base'>
        <div className='p-4'>
          <p className='mb-2 font-semibold'>Date Post</p>
          <div className='relative' ref={dropdownRef}>
            <button
              className='w-full p-2 border rounded-md bg-gray-50 text-left focus:outline-none focus:ring-1 focus:ring-blue-300'
              onClick={toggleDropdown}
            >
              {selectedOption}
            </button>
            {isOpen && (
              <ul className='absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg'>
                {options.map((option) => (
                  <li
                    key={option}
                    className='p-2 cursor-pointer hover:bg-blue-100'
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className='p-4'>
          <p className='font-semibold'>Job Type</p>
          <ul className='flex flex-wrap gap-[25%] mt-2'>
            <li className=''>
              <label htmlFor='ch1' className='flex items-center space-x-2'>
                <input
                  id='ch1'
                  type='checkbox'
                  className='hidden peer'
                  checked={jobType.fullTime}
                  onChange={() => handleJobTypeChange('fullTime')}
                />
                <div className='w-5 h-5 bg-gray-200 rounded-md peer-checked:bg-green-400 peer-checked:border-transparent peer-focus:ring-2 peer-focus:ring-green-400'></div>
                <span>FullTime</span>
              </label>
            </li>
            <li className=''>
              <label htmlFor='ch2' className='flex items-center space-x-2'>
                <input
                  id='ch2'
                  type='checkbox'
                  className='hidden peer'
                  checked={jobType.partTime}
                  onChange={() => handleJobTypeChange('partTime')}
                />
                <div className='w-5 h-5 bg-gray-200 rounded-md peer-checked:bg-green-400 peer-checked:border-transparent peer-focus:ring-2 peer-focus:ring-green-400'></div>
                <span>PartTime</span>
              </label>
            </li>
            <li className=''>
              <label htmlFor='ch3' className='flex items-center space-x-2'>
                <input
                  id='ch3'
                  type='checkbox'
                  className='hidden peer'
                  checked={jobType.contract}
                  onChange={() => handleJobTypeChange('contract')}
                />
                <div className='w-5 h-5 bg-gray-200 rounded-md peer-checked:bg-green-400 peer-checked:border-transparent peer-focus:ring-2 peer-focus:ring-green-400'></div>
                <span>Contract</span>
              </label>
            </li>
            <li className=''>
              <label htmlFor='ch4' className='flex items-center space-x-2'>
                <input
                  id='ch4'
                  type='checkbox'
                  className='hidden peer'
                  checked={jobType.remote}
                  onChange={() => handleJobTypeChange('remote')}
                />
                <div className='w-5 h-5 bg-gray-200 rounded-md peer-checked:bg-green-400 peer-checked:border-transparent peer-focus:ring-2 peer-focus:ring-green-400'></div>
                <span>Remote</span>
              </label>
            </li>
          </ul>
        </div>
        <div className='p-3 font-semibold'>
          <span>Salary Range</span>
          <Box sx={{ marginLeft: 3,marginRight:3 }}>
            <Slider
              value={value}
              onChange={handleChange}
              valueLabelDisplay='auto'
              getAriaValueText={valuetext}
              min={0}
              max={1000000}
            />
          </Box>
          <div className='flex mt-2'>
            <div className='w-[50%]'>
              <span>Min: </span>
              <span className='text-gray-600'>{value[0]}</span>
            </div>
            <div className='w-[50%]'>
              <span>Max: </span>
              <span className='text-gray-600'>{value[1]}</span>
            </div>
          </div>
        </div>
        <div className='p-4'>
          <p className='font-semibold'>On-Site/Remote</p>
          <ul className='flex flex-wrap gap-[25%] mt-2'>
            <li className=''>
              <label htmlFor='chb1' className='flex items-center space-x-2'>
                <input
                  id='chb1'
                  type='checkbox'
                  className='hidden peer'
                  checked={onSiteRemote.onSite}
                  onChange={() => handleOnSiteRemoteChange('onSite')}
                />
                <div className='w-5 h-5 bg-gray-200 rounded-md peer-checked:bg-green-400 peer-checked:border-transparent peer-focus:ring-2 peer-focus:ring-green-400'></div>
                <span>On-Site</span>
              </label>
            </li>
            <li className=''>
              <label htmlFor='chb2' className='flex items-center space-x-2'>
                <input
                  id='chb2'
                  type='checkbox'
                  className='hidden peer'
                  checked={onSiteRemote.remote}
                  onChange={() => handleOnSiteRemoteChange('remote')}
                />
                <div className='w-5 h-5 bg-gray-200 rounded-md peer-checked:bg-green-400 peer-checked:border-transparent peer-focus:ring-2 peer-focus:ring-green-400'></div>
                <span>Remote</span>
              </label>
            </li>
            <li className=''>
              <label htmlFor='chb3' className='flex items-center space-x-2'>
                <input
                  id='chb3'
                  type='checkbox'
                  className='hidden peer'
                  checked={onSiteRemote.hybrid}
                  onChange={() => handleOnSiteRemoteChange('hybrid')}
                />
                <div className='w-5 h-5 bg-gray-200 rounded-md peer-checked:bg-green-400 peer-checked:border-transparent peer-focus:ring-2 peer-focus:ring-green-400'></div>
                <span>Hybrid</span>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
