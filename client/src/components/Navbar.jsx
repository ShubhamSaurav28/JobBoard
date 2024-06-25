import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../assets/Logo.gif'
import LogoStatic from '../assets/LogoStatic.jpg'

export default function Navbar() {
  const [isHover,setisHover] = useState(false);
  const mousehover = () =>{
    setisHover(true);
  }
  const mousenothover = () =>{
    setisHover(false);
  }
  return (
    <div className=''>
      <nav className=' flex justify-between shadow-lg py-2 w-full bg-white fixed top-0 z-50'>
        <div onMouseEnter={mousehover} onMouseLeave={mousenothover} className='ml-7 flex items-center gap-3'>
            {isHover?<img id='logoimg' src={Logo} alt="JobDekho" className='h-[60px]'/>:<img id='logoimg' src={LogoStatic} alt="JobDekho" className='h-[60px]'/>}
            
            <p  className='text-2xl font-semibold'><span className='text-red-400'>Job</span><span className='text-yellow-500'>Dekho</span></p>
           
        </div>
        <div className='flex w-[50%] justify-center'>
            <ul className='flex items-center gap-7'>
            <li className='hover:text-purple-500 font-semibold'>
                    <NavLink to="/">
                        Home
                    </NavLink>
                </li>
                <li className='hover:text-purple-500 font-semibold'>
                    <NavLink to="/jobs">
                        Jobs
                    </NavLink>
                </li>
                <li className='hover:text-purple-500 font-semibold'>
                    <NavLink to="/employ">
                        Employers
                    </NavLink>
                </li>
                <li className='hover:text-purple-500 font-semibold'>
                    <NavLink to="/community">
                        Community
                    </NavLink>
                </li>
                <li className='hover:text-purple-500 font-semibold'>
                    <NavLink to="/contactus">
                        Contact Us
                    </NavLink>
                </li>
            </ul>
        </div>
        <div className='flex items-center p-2 mr-4 gap-3'>
            <Link to="/login">
            <button className='border shadow-md rounded-2xl px-5 py-3 font-semibold hover:bg-black hover:text-white hover:duration-200'>
                Login
            </button>
            </Link>
            <Link to="/signup">
            <button className='border shadow-md rounded-2xl px-5 py-3 font-semibold hover:bg-black hover:text-white hover:duration-200'>
                SignUp
            </button>
            </Link>
        </div>
      </nav>
    </div>
  )
}
