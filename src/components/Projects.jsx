import React from 'react'
import ProjectItem from './ProjectItem'
import ecabinetImg from '../assets/dash2.png'
import cskImg from '../assets/dash.png'
import tunyceImg from '../assets/dash3.png'
import parlourImg from '../assets/dash4.png'
import realestateImg from '../assets/realestate.png'
import postersImg from '../assets/posters.png'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className='text-center py-8'>I am a passionate and results-driven software developer with a knack for turning innovative ideas into robust, user-friendly applications. Over the years, I've had the privilege of working on a diverse range of projects, honing my skills in the ever-evolving landscape of software development. <br /> Here are a few projects that showcase my capabilities:</p>
        
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={ecabinetImg} title='ECabinet System' description='Django & Angular'/>
            <ProjectItem img={cskImg} title='EBoard Software' description='Django & Angular'/>
            <ProjectItem img={tunyceImg} title='Entertainment App' description='Reactjs & Django'/>
            <ProjectItem img={parlourImg} title='Management System' description='Laravel & Reactjs'/>
            <ProjectItem img={realestateImg} title='Real Estate Site' description='Reactjs, Tailwind & Vite'/>
            <ProjectItem img={postersImg} title='Graphics Designs' description='All Graphics work'/>
        </div>
    </div>
  )
}

export default Projects
