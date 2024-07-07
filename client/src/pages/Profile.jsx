import React from 'react'
import ProfileLeft from '../components/ProfileLeft'
import ProfileMiddle from '../components/ProfileMiddle'

export default function Profile() {
  return (
    <>
      <div className='bg-black bg-opacity-10 h-full px-[2rem] py-[1rem] mt-[80px] flex gap-8'>
        <ProfileLeft/>
        <ProfileMiddle/>
      </div>
    </>
  )
}
