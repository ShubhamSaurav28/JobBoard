import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProfileLeft from '../components/ProfileLeft';
import ProfileMiddle from '../components/ProfileMiddle';
import baseURL from '../../DB';
import { tokenCheck } from '../HelperToken';

export default function Profile() {
  const [userProfile, setUserProfile] = useState(null);
  const [companyProfile, setCompanyProfile] = useState(null);
  const [userId, setUserId] = useState(null)
  useEffect(() => {
      const token = tokenCheck();
      if (token) {
          setUserId(token.id);
      }
  }, [])

  useEffect(()=>{
    window.scrollTo(0,0);
  },[])

  useEffect(() => {
    const fetchUserData = async () => {
      if (userId) {
        try {
          const response = await axios.get(`${baseURL}/user/profile/${userId}`);
          console.log(response);
          setUserProfile(response.data.user);
          setCompanyProfile(response.data.company);

        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };

    fetchUserData();
  }, [userId]);

  if (!userProfile) {
    return <div>Loading...</div>;
  }

  return (
    <div className='bg-black bg-opacity-10 h-full px-[2rem] py-[1rem] mt-[75px] flex gap-8'>
      <ProfileLeft userProfile={userProfile}/>
      <ProfileMiddle userProfile={userProfile} companyProfile={companyProfile}/>
    </div>
  );
}
