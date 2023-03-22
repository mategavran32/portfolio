import React from 'react'

import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import Node from '../assets/node.png'
import Tailwind from '../assets/tailwind.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full bg-[#344B59]  text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 py-40 flex-col justify-center w-full '>
            <div>
                <p className='text-4xl font-bold inline border-b-4 '>
                Skills
                </p>
                <p className='py-4'>
                These are the technologies I've worked with
                </p>
            </div>

            <div className='w-full grid sm:grid-cols-3 grid-cols-2 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="html icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="css icon" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="js icon" />
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="react icon" />
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Node} alt="node icon" />
                    <p className='my-4'>Node</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Tailwind} alt="tailwind icon" />
                    <p className='my-4'>Taildwind</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills