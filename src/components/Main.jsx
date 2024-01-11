import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import profileImg from '../assets/g4.jpg'
import {FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub} from 'react-icons/fa'

const Main = () => {
  return (
    <div id='main'>
        <img className='w-full h-screen object-cover object-left scale-x-[-1]' src={profileImg} alt="" />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
          <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center'>
            <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Purity Ruth</h1>
            <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>I'm a
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Software Developer',
                2000, // wait 2s
                'Coder',
                2000,
                'Tech Enthusiast',
                2000,
                'UI/UX Designer',
                2000,
                'Graphics Designer',
                1000
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '1em', display: 'inline-block', paddingLeft: '5px'}}
              repeat={Infinity}
            />
            </h2>
            <div className='flex justify-between pt-6 max-w-[200px] w-full'>
            <a href="https://github.com/purityruth" target="_blank" rel="noopener noreferrer">
              <FaGithub className='cursor-pointer' size={20}/> 
            </a>
            <a href="https://github.com/purityruth" target="_blank" rel="noopener noreferrer">
              <FaTwitter className='cursor-pointer' size={20}/>
            </a>
            <a href="https://github.com/purityruth" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className='cursor-pointer' size={20} />
            </a>
            <a href="https://github.com/purityruth" target="_blank" rel="noopener noreferrer">
              <FaInstagram className='cursor-pointer' size={20}/>
            </a>
            <a href="https://www.linkedin.com/in/purity-ruth-3940b9227/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className='cursor-pointer' size={20}/>
            </a>
            </div>
          </div>
          </div>
    </div>
  )
}

export default Main
