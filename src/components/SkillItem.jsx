import React from 'react'

const SkillItem = ({img, description}) => {
  return (
    <div className='relative flex justify-around border-2 p-2 border-[#472a70] text-center bg-slate-50'>
        <img src={img} alt="/" className='w-11 max-h-8 p-0 '/>
        <p className='text-[#472a70] text-lg text-center'>{description}</p>
    </div>
  )
}

export default SkillItem
