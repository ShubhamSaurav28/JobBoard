import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin,faFacebook,faXTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <div className='border w-full flex justify-around pb-5 pt-5 bg-slate-50'>
      <div className='w-[30%]'>
        <ul className='flex gap-4 justify-center p-2'>
          <li className='hover:scale-[1.1] cursor-pointer hover:duration-200 duration-200'><FontAwesomeIcon icon={faLinkedin} size='2xl'/></li>
          <li className='hover:scale-[1.1] cursor-pointer hover:duration-200 duration-200'><FontAwesomeIcon icon={faFacebook} size='2xl'/></li>
          <li className='hover:scale-[1.1] cursor-pointer hover:duration-200 duration-200'><FontAwesomeIcon icon={faXTwitter} size='2xl'/></li>
          <li className='hover:scale-[1.1] cursor-pointer hover:duration-200 duration-200'><FontAwesomeIcon icon={faInstagram} size='2xl'/></li>
        </ul>
        <p className='flex justify-center'>
          This website has copyright of&nbsp;<strong>Shubham Saurav</strong>
        </p>
      </div>
    </div>
  );
}
