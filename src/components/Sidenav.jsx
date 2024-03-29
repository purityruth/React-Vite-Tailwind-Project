import React, { useState } from 'react'
import {AiOutlineHome, AiOutlineInfoCircle, AiOutlineBars, AiOutlineSafety, AiOutlineMail, AiOutlineMenu, AiOutlineProject} from 'react-icons/ai'
import {BsPerson} from 'react-icons/bs'
import {GrProjects} from 'react-icons/gr'

const Sidenav = () => {

    const [nav, setNav] = useState(false);
    const handleNav = ()=> {
        setNav(!nav);
        console.log('state change');
    }
  return (
    <div>
      <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden' size={30} />
      {
        nav ? (
            <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
                <a onClick={handleNav} href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <AiOutlineHome size={20} />
                    <span className='pl-4'>Home</span>
                </a>
                <a onClick={handleNav} href="#about" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <AiOutlineInfoCircle size={20} />
                    <span className='pl-4'>About</span>
                </a>
                <a onClick={handleNav} href="#services" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <AiOutlineSafety size={20} />
                    <span className='pl-4'>Services</span>
                </a>
                <a onClick={handleNav} href="#skills" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <AiOutlineBars size={20} />
                    <span className='pl-4'>Skills</span>
                </a>
                <a onClick={handleNav} href="#projects" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <AiOutlineProject size={20} />
                    <span className='pl-4'>Projects</span>
                </a>
                <a onClick={handleNav} href="#work" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <GrProjects size={20} />
                    <span className='pl-4'>Work</span>
                </a>
                <a onClick={handleNav} href="#contact" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <AiOutlineMail size={20} />
                    <span className='pl-4'>Contact</span>
                </a>
            </div>
        )
        : (
            ''
        )
      }
      <div className='md:block hidden fixed top-[15%] z-10'>
        <div className='flex flex-col'>
            <a href="#main" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineHome size={20}/>
            </a>
            <a href="#about" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineInfoCircle size={20}/>
            </a>
            <a href="#services" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineSafety size={20}/>
            </a>
            <a href="#skills" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineBars size={20}/>
            </a>
            <a href="#projects" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineProject size={20}/>
            </a>
            <a href="#work" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <GrProjects size={20}/>
            </a>
            <a href="#contact" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail size={20}/>
            </a>
        </div>
      </div>

    </div>
  )
}

export default Sidenav
