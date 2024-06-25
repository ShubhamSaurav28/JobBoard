import React from 'react'
import LeftJobs from '../components/LeftJobs'
import MiddleJobs from '../components/MiddleJobs'

export default function Jobs() {
  return (
    <div className='flex gap-8 justify-center mt-[100px] mb-8'>
      <LeftJobs/>
      <MiddleJobs/>
    </div>
  )
}
