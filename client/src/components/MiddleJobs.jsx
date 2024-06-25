import React from 'react'
import { Link } from 'react-router-dom'

export default function MiddleJobs() {
  return (
    <>
    <div className='border border-black w-[65%] rounded-lg'>
        <Link to='/'>
        <div className='border border-black rounded-md p-3 hover:'>
            <div className=''>
                <div className='flex'>
                    <img className='border mr-2' src="" alt="company logo" srcset="" />
                    <h1 className='text-xl font-semibold w-full'>JobName</h1>
                </div>
                <div id='addtag1' className='flex my-2'>
                    <div className='bg-slate-300 px-1 rounded-sm'>
                        <span>Work From Home</span>
                    </div>
                </div>
            </div>
            <div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque ullam maxime exercitationem placeat quibusdam perspiciatis nemo neque tempora cupiditate quasi, ratione facilis sit. Explicabo provident nihil ullam perspiciatis libero at optio nostrum illo hic, quo cumque asperiores, distinctio eaque pariatur deleniti consectetur dicta tempora voluptatum! Tempora suscipit debitis at cum.
                </p>
            </div>
        </div>
        </Link>
    </div>
    </>
  )
}
