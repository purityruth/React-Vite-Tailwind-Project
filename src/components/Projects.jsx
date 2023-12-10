import React from 'react'
import ProjectItem from './ProjectItem'
import ecabinetImg from '../assets/dash2.png'
import cskImg from '../assets/dash.png'
import tunyceImg from '../assets/dash3.png'
import parlourImg from '../assets/dash4.png'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className='text-center py-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi suscipit voluptatibus, repellat tenetur labore, amet, a architecto id necessitatibus iusto beatae quia natus ex nulla nisi veniam! Voluptate, sit quia.</p>
        
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={ecabinetImg} title='ECabinet System' description='Django & Angular'/>
            <ProjectItem img={cskImg} title='EBoard Software' description='Django & Angular'/>
            <ProjectItem img={tunyceImg} title='Entertainment App' description='Reactjs & Django'/>
            <ProjectItem img={parlourImg} title='Management System' description='Laravel & Reactjs'/>
        </div>
    </div>
  )
}

export default Projects
