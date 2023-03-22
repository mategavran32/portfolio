import React from 'react'
import {HiArrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#344B59]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-white'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Mate Gavran</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Front End Developer</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a front end developer learning to build amazing and good loking websites.
                Currently, I'm focused on finishing college and finding a job as a front end developer.
            </p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-gray-400 hover:border-gray-300'>View Work 
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowRight className='ml-3'/>   
                    </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home