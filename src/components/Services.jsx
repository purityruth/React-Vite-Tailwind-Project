import React from 'react'
import ServiceItem from './ServiceItem'
import data from '../utils/myservice'


const Services = () => {
  return (
    <div id='services' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#472a70] pb-5'>Services</h1>
        <div className='grid sm:grid-cols-2 gap-12'>
        {
            data.map((item, idx)=> (
            <ServiceItem 
                key={idx}
                title = {item.title}
                description = {item.description}
            />
            ))
        }
        </div>
    </div>
  )
}

export default Services
