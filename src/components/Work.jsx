import React from 'react'
import WorkItem from './WorkItem'
import data from '../utils/mywork'

const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-8'>
        <h1 className='text-4xl font-bold text-center text-[#472a70] pb-5'>Work Experience</h1>
        {
            data.map((item, idx)=> (
            <WorkItem 
                key={idx} 
                year={item.year}
                title = {item.title}
                duration = {item.duration}
                details = {item.details}
                description = {item.description}
            />
            ))
        }
    </div>
  )
}

export default Work
