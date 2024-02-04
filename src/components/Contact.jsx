import React from 'react'
import contactImg from '../assets/contact.jpeg'
import ContactItem from './ContactItem'


const Contact = () => {
  return (
    <div id='contact'>
        <div className='max-w-[1040px] m-auto md:pl-20 p-4 py-8'>
            <h1 className='py-4 text-4xl font-bold text-center text-[#472a70]'>Contact</h1>
            <div className='grid sm:grid-cols-2 gap-12'>
                <form action="https://getform.io/f/e798906b-b556-48c5-970d-34ffb6474ba5" method='POST' encType='multipart/form-data'>
                    <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                        <div className='flex flex-col'>
                            <label className='uppercase text-sm py-2'>Name</label>
                            <input className='border-2 p-2 flex border-gray-300' type="text" name='name' />
                        </div>
                        <div className='flex flex-col'>
                            <label className='uppercase text-sm py-2'>Phone</label>
                            <input className='border-2 p-2 flex border-gray-300' type="text" name='phone' />
                        </div>
                    </div>
                    <div className='flex flex-col py-2'>
                        <label className='uppercase text-sm py-2'>Email</label>
                        <input className='border-2 p-2 flex border-gray-300' type="email" name='email' />
                    </div>
                    <div className='flex flex-col py-2'>
                        <label className='uppercase text-sm py-2'>Subject</label>
                        <input className='border-2 p-2 flex border-gray-300' type="text" name='subject' />
                    </div>
                    <div className='flex flex-col py-2'>
                        <label className='uppercase text-sm py-2'>Message</label>
                        <textarea className='border-2 p-3 flex border-gray-300' name="message" rows="5"></textarea>
                    </div>
                    <button className='bg-[#472a70] text-gray-100 mt-4 w-full p-4 rounded-lg'>
                        Send Message
                    </button>
                </form>

                <ContactItem img={contactImg} email='purityruth09gmail.com' details='+254746862634' address='681-00216 Nairobi, Kenya'/>
            </div>
            
        </div>
        
        <div className='w-full object-cover m-auto bg-gray-300'>
            <p className='text-center py-8 text-gray-600'>
            &copy; {new Date().getFullYear()} PuryTechnologies. All rights reserved.
            </p>
        </div>

    </div>
  )
}

export default Contact
