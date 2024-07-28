import React, { useEffect, useState } from 'react'
import ProfileEditBox from '../components/ProfileEditBox'
import { tokenCheck } from '../HelperToken';
import axios from 'axios';
import baseURL from '../../DB';

export default function ProfileEdit() {
    const [userProfile, setUserProfile] = useState(null);
    const [userId, setUserId] = useState(null)
  useEffect(() => {
      const token = tokenCheck();
      if (token) {
          setUserId(token.id);
      }
  }, [])

  useEffect(() => {
    const fetchUserData = async () => {
      if (userId) {
        try {
          const response = await axios.get(`${baseURL}/user/profile/${userId}`);
          console.log(response);
          setUserProfile(response.data.user);
          setCompanyProfile(response.data.company);
          console.log(userProfile);

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
    <>
      <ProfileEditBox userProfile={userProfile}/>
    </>
  )
}
