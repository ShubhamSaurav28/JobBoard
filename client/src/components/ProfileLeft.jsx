import React from 'react'

export default function ProfileLeft() {
  return (
    <>
    <div className='border  h-full w-[30vw] bg-white p-5 rounded-xl shadow-lg '>
        <div className='mb-[15px]'>
            <div className='flex justify-center'>
                <img className='rounded-full w-[200px] h-[200px] object-cover focus:ring-1' src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt="profile photo" srcset="" />
            </div>
            <div className='flex justify-center mt-4 flex-wrap'>
                <h1 className='font-semibold text-2xl text-blue-600 w-full flex justify-center'>User Name</h1>
                <h3 className='mb-2'>FullStack Developer</h3>
                <p className='text-center text-gray-800 mx-[5px]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, animi ullam? Fugiat, officiis dolorem? Soluta explicabo aliquam voluptas exercitationem, aliquid libero? Ratione provident nesciunt autem fuga temporibus amet, saepe veniam?
                </p>
            </div>
        </div>
        <h2 className='font-semibold text-xl py-2'>Skills</h2>
        <div className='flex flex-wrap gap-3'>
            <span className='rounded-full bg-slate-100 text-blue-600 ring-1 cursor-pointer px-3 py-[2px]'>JavaScript</span>
            <span className='rounded-full bg-slate-100 text-blue-600 ring-1 cursor-pointer px-3 py-[2px]'>Python</span>
            <span className='rounded-full bg-slate-100 text-blue-600 ring-1 cursor-pointer px-3 py-[2px]'>C</span>
            <span className='rounded-full bg-slate-100 text-blue-600 ring-1 cursor-pointer px-3 py-[2px]'>React</span>
            <span className='rounded-full bg-slate-100 text-blue-600 ring-1 cursor-pointer px-3 py-[2px]'>HTML</span>
            <span className='rounded-full bg-slate-100 text-blue-600 ring-1 cursor-pointer px-3 py-[2px]'>C++</span>
            <span className='rounded-full bg-slate-100 text-blue-600 ring-1 cursor-pointer px-3 py-[2px]'>CSS</span>
            <span className='rounded-full bg-slate-100 text-blue-600 ring-1 cursor-pointer px-3 py-[2px]'>Node.js</span>
        </div> 
        <div>
            
        </div> 
    </div>
    
    </>
  )
}
