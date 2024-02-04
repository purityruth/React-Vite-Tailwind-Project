import React from 'react'

const ServiceItem = ({title, description}) => {
  return (
    <div className='relative items-center justify-center h-auto w-full shadow-xl py-2 shadow-gray-600 transition ease-in-out delay-150 bg-500 hover:-translate-y-1 hover:scale-110 hover:bg-[#deccf4] duration-300'>
        <h3 className='text-xl font-bold text-[#472a70] tracking-wider text-center transition-colors'>
            {title}
        </h3>
        <p className='py-2 text-[#351d56] text-center'>{description}</p>
    </div>
  )
}

export default ServiceItem
