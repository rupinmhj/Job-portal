import React from 'react'
import images from '../assets/images'
const Category = () => {
  return (
    <div className='lg:mx-[232px] px-[24px] mt-[24px] flex font-urbanist items-center mt-'>
      <div className='w-full'>
        <h1 className='font-bold text-[18px] leading-[22px] mb-[24px] '>Browse By Category</h1>
        <div className="flex w-[100%] flex-wrap ">
          <div className="flex justify-center flex-1 flex-col items-center gap-[8px] w-1/4 ">
            <img src={images.company} className="  size-[65.6px] border-2 border-gray-200 p-[9px] rounded-lg" alt="" />
            <h2 className='text-[12px] font-medium'>Company</h2>
          </div>
          <div className="flex justify-center flex-1 flex-col items-center gap-[8px] w-1/4 ">
            <img src={images.fullTime} className="  size-[65.6px] border-2 border-gray-200 p-[9px] rounded-lg" alt="" />
            <h2 className='text-[12px] font-medium'>Full Time</h2>
          </div>
          <div className="flex justify-center flex-1 flex-col items-center gap-[8px] w-1/4 ">
            <img src={images.partTime} className="  size-[65.6px] border-2 border-gray-200 p-[9px] rounded-lg" alt="" />
            <h2 className='text-[12px] font-medium'>Part Time</h2>
          </div>
          <div className="flex justify-center flex-1 flex-col items-center gap-[8px] w-1/4 ">
            <img src={images.freelancer} className="  size-[65.6px] border-2 border-gray-200 p-[9px] rounded-lg" alt="" />
            <h2 className='text-[12px] font-medium'>Freelance</h2>
          </div>
          
          
        </div>
      </div>
    </div>
  )
}

export default Category
