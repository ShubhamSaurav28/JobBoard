import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot,faSackDollar } from '@fortawesome/free-solid-svg-icons';

export default function MiddleJobs() {
    let text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque ullam maxime exercitationem placeat quibusdam perspiciatis nemo neque tempora cupiditate quasi, ratione facilis sit. Explicabo provident nihil ullam perspiciatis libero at optio nostrum illo hic, quo cumque asperiores, distinctio eaque pariatur deleniti consectetur dicta tempora voluptatum! Tempora suscipit debitis at cum."
    const truncateText = (text, wordLimit) => {
        return text.split(" ").slice(0, wordLimit).join(" ") + "...";
    }
    
    return (
        <>
            <div className='w-[65%] gap-6 flex flex-wrap rounded-lg'>
                <Link to='/'>
                    <div className='border-slate-300 border rounded-md p-3 group  hover:shadow-lg'>
                        <div>
                            <div className='flex'>
                                <img className='border mr-3 w-[54px] h-[50px] rounded-full' src="https://plus.unsplash.com/premium_photo-1673326679548-962d2fe77423?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29tcGFueSUyMGxvZ298ZW58MHx8MHx8fDA%3D" alt="company logo" />
                                <h1 className='text-xl font-semibold w-full my-auto group-hover:text-blue-500 group-hover:underline'>CompanyName</h1>
                            </div>
                            <div id='addtag1' className='flex my-2'>
                                <div className='bg-slate-300 px-1 rounded-[4px]'>
                                    <span>Work From Home</span>
                                </div>
                            </div>
                            <div className='flex my-2'>
                                <div className='flex items-center space-x-1'>
                                    <FontAwesomeIcon icon={faLocationDot} />
                                    <span className='text-sm'>Gurgaon</span>
                                </div>
                                <div className='flex items-center space-x-1 ml-4'>
                                    <FontAwesomeIcon icon={faSackDollar} />
                                    <span className='text-sm'>10Lpa-21Lpa</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>
                                {truncateText(text, 40)}
                            </p>
                        </div>
                    </div>
                </Link>        
            </div>
        </>
    )
}
