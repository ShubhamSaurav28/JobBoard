import React from 'react'
import LeftJobs from '../components/LeftJobs'
import MiddleJobs from '../components/MiddleJobs'
import JobsSearch from '../components/JobsSearch'

export default function Jobs() {
  return (
    <>
    <div className='mt-[80px] mb-8'>
    <JobsSearch/>
    <div className='flex gap-8 justify-center'>
      <LeftJobs/>
      <MiddleJobs/>
    </div>
    </div>
    </>
  )
}
