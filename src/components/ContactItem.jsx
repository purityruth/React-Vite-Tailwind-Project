import React from 'react'
import {AiFillMail, AiFillPhone, AiFillEnvironment} from 'react-icons/ai'

const ContactItem = ({img, email, details, address}) => {
  return (
    <div className='relative items-center justify-center h-auto w-full'>
        <img src={img} alt="/" className='rounded-xl w-35 h-1/2 py-5 ml-10 items-right'/>
        <p className='text-[#472a70] relative flex justify-center p-5 text-lg text-left'><AiFillMail size={30}/> MAIL: {email}</p>
        <p className='text-[#472a70] relative flex justify-center p-5 text-lg text-left'><AiFillPhone size={30}/>PHONE: {details}</p>
        <p className='text-[#472a70] relative flex justify-center p-5 text-lg text-left'><AiFillEnvironment size={30}/>ADDRESS: {address}</p>

    </div>
  )
}

export default ContactItem
