import React, { useEffect } from 'react'
import HomeBanner from '../components/HomeBanner'
import HomeContent from '../components/HomeContent'


export default function Home() {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  
  return (
    <>
      <HomeBanner/>
      <HomeContent/>
    </>
  )
}
