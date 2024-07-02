import React, { useEffect } from 'react'
import ContactUsLeft from '../components/ContactUsLeft'
import ContactUsRight from '../components/ContactUsRight'

export default function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <div className='mt-[100px] text-center'>
        <h1 className='py-4 font-bold text-6xl drop-shadow-md text-indigo-800'>Contact Us</h1>
    </div>
    <div className='mt-10 flex mb-6 mx-[8rem] gap-5'>
        <ContactUsLeft/>
        <ContactUsRight/>
    </div>
    </>
  )
}
