import React from 'react'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#344B59]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300'>Work</p>
                <p className='py-6'>Chek out some of my work</p>
            </div>
            <div className='grid sm:grid-cols-1 mf:grid-cols-3 gap-4'>
                <div style={{backgroundImage: `url(https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/A-Alamy-BXWK5E_vvmkuf.jpg)` }}
                 className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        
                        <span className='text-2xl font-bold text-white traking-wider'>
                            Blidinje

                        </span>
                        <div>
                            <a href='https://blidinje.netlify.app/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/mategavran32/blidinje'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Work