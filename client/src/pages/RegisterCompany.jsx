import React, { useEffect } from 'react'
import building from '../assets/building.png'
import CompanyRegistryForm from '../components/CompanyForm'

export default function RegisterCompany() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <div className='flex justify-around p-6 mt-[70px]  bg-gradient-to-r from-blue-400 via-red-500 to-yellow-400'>
        <CompanyRegistryForm/>
        <img className='w-[50%] h-full' src={building} alt="building"/>
    </div>
    </>
  )
}
