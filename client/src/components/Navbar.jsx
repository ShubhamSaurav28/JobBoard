import React, { useEffect, useState, useRef } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo.gif';
import LogoStatic from '../assets/LogoStatic.jpg';
import axios from 'axios';
import baseURL from '../../DB';
import { tokenCheck } from '../HelperToken';

export default function Navbar() {
  const navigate = useNavigate();
  const [isHover, setIsHover] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef();
  const [profilePicUrl, setProfilePicUrl] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null)
  const [logoutMenu, setLogoutMenu] = useState(false);
  useEffect(() => {
      const token = tokenCheck();
      if (token) {
          setLoggedIn(true);
          setUserId(token.id);
      }
  }, [])
  

  const mousehover = () => {
    setIsHover(true);
  };

  const mousenothover = () => {
    setIsHover(false);
  };

  useEffect(() => {
    const fetchProfilePic = async () => {
      if (userId) {
        try {
          const response = await axios.get(`${baseURL}/user/profile-pic/${userId}`);
          const newProfilePicUrl = response.data.profilePicUrl;
          if (profilePicUrl !== newProfilePicUrl) {
            setProfilePicUrl(newProfilePicUrl);
          }
        } catch (error) {
          console.error('Error fetching profile picture:', error);
        }
      }
    };

    fetchProfilePic();  
  }, [userId, profilePicUrl]);

  const handleProfile = (e) => {
    console.log(menuRef.current);
    console.log(e.target);
    console.log('Profile clicked');
    setOpen(false);
    navigate('/profile');
  }

  const handleSettings = () => {
    console.log('Settings clicked');
    setOpen(false);
  }

  
    const handleLogout = () => {
        localStorage.removeItem('jobdekho');
        setLoggedIn(false);
        setLogoutMenu(false);
        navigate('/login')
    }

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    console.log(12)

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div className=''>
      <nav className='flex justify-between shadow-lg py-2 w-full bg-white fixed top-0 z-50'>
        <NavLink to="/">
          <div onMouseEnter={mousehover} onMouseLeave={mousenothover} className='ml-7 flex items-center gap-3'>
            {isHover
              ? <img id='logoimg' src={Logo} alt="JobDekho" className='h-[60px]' />
              : <img id='logoimg' src={LogoStatic} alt="JobDekho" className='h-[60px]' />
            }
            <p className='text-2xl font-semibold'><span className='text-red-400'>Job</span><span className='text-yellow-500'>Dekho</span></p>
          </div>
        </NavLink>
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
              <NavLink to="/employers">
                Employers
              </NavLink>
            </li>
            <li className='hover:text-purple-500 font-semibold'>
              <NavLink to="/contactus">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        {loggedIn ? (
          <div className='relative flex items-center mr-4'>
            <button onClick={() => setOpen(prevOpen => !prevOpen)} className='rounded-full border w-[50px] h-[50px] shadow-lg'>
              {profilePicUrl && <img src={profilePicUrl} alt="Profile" className='rounded-full w-full h-full shadow-lg hover:scale-105 duration-150 hover:duration-150' />}
            </button>
            {open &&
              <div  ref={menuRef} className='shadow-md z-30 rounded-md bg-white absolute top-[3.7rem] -right-[0.5rem] p-2 w-[10rem]'>
                <ul>
                  <li onClick={handleProfile} className='p-2 hover:bg-gray-300 hover:rounded-md cursor-pointer'>Profile</li>
                  <li onClick={handleSettings} className='p-2 hover:bg-gray-300 hover:rounded-md cursor-pointer'>Settings</li>
                  <li onClick={handleLogout} className='p-2 hover:bg-gray-300 hover:rounded-md cursor-pointer border-t-2'>Logout</li>
                </ul>
              </div>
            }
          </div>
        ) : (
          <div className='flex items-center p-2 mr-4 gap-3'>
            <NavLink to="/login">
              <button className='border shadow-md rounded-2xl px-5 py-3 font-semibold hover:bg-black hover:text-white hover:duration-200'>
                Login
              </button>
            </NavLink>
            <Link to="/signup">
              <button className='border shadow-md rounded-2xl px-5 py-3 font-semibold hover:bg-black hover:text-white hover:duration-200'>
                SignUp
              </button>
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}
