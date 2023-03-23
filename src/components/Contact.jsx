import React from 'react'
import { useState } from 'react'

const Contact = () => {

  const [canSendName,setCanSendName] = useState(false);
  const [canSendEmail,setCanSendEmail] = useState(false);
  const [canSendMsg,setCanSendMsg] = useState(false);
  const handleChangeName = e => {
    e.target.value.length > 3 ? setCanSendName(true) : setCanSendName(false)
  }
  const handleChangeEmail = e => {
    e.target.value.length > 10 ? setCanSendEmail(true) : setCanSendEmail(false)
  }
  const handleChangeMsg = e => {
    e.target.value.length > 4 ? setCanSendMsg(true) : setCanSendMsg(false)
  }
  

  return (
    <div name="contact" className='w-full h-screen bg-[#344B59] flex justify-center items-center p-4' >
        <form method='POST' action="https://getform.io/f/d143e40a-c62f-4271-9242-a6bcc7968422" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - mategavran32@gmail.com</p>
            </div>
            <input onChange={handleChangeName} className="p-2 bg-[#ccd6f6]" type="text" placeholder='Name' name='name' />
            <input onChange={handleChangeEmail} className="my-4 p-2 bg-[#ccd6f6]" type="email" placeholder='Email' name='email' />
            <textarea onChange={handleChangeMsg} className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            {canSendName & canSendEmail & canSendMsg ? <button className='text-white border-2 hover:bg-gray-400 hover:border-gray-300 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button> : <button disabled className='text-white border-2 hover:bg-red-400 hover:border-gray-300 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>}
        </form>
    </div>
  )
}

export default Contact