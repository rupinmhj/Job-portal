import React from 'react'
import images from '../assets/images'
import { useNavigate } from 'react-router-dom'
const Category = () => {
  const navigate=useNavigate();
  const allJob=()=>{
    navigate("/alljob")
  }
  return (
    <div className='max-w-[1024px] dark:text-white mx-auto px-[24px] mt-[24px] flex font-urbanist items-center mt-'>
      <div className='w-full'>
        <h1 className='font-bold text-[18px] leading-[22px] mb-[24px] '>Browse By Category</h1>
        <div className="flex w-[100%] flex-wrap ">
          <div onClick={allJob} className="  flex justify-center flex-1 flex-col items-center gap-[8px] w-1/4 ">
            <img src={images.company} className=" cursor-pointer hover:border-blue-500  dark:border-gray-700  border-2 transition-all dark:hover:border-blue-500  duration-300 hover:shadow-sm size-[65.6px]  border-gray-200 p-[9px] rounded-lg" alt="" />
            <h2 className='text-[12px] font-medium'>On-site</h2>
          </div>
          <div onClick={allJob} className=" flex justify-center flex-1 flex-col items-center gap-[8px] w-1/4 ">
            <img src={images.fullTime} className="cursor-pointer hover:border-blue-500  dark:border-gray-700   transition-all dark:hover:border-blue-500  duration-300 hover:shadow-sm  size-[65.6px] border-2 border-gray-200 p-[9px] rounded-lg" alt="" />
            <h2 className='text-[12px] font-medium'>Full Time</h2>
          </div>
          <div onClick={allJob} className=" flex justify-center flex-1 flex-col items-center gap-[8px] w-1/4 ">
            <img src={images.partTime} className="cursor-pointer hover:border-blue-500  dark:border-gray-700   transition-all dark:hover:border-blue-500  duration-300 hover:shadow-sm  size-[65.6px] border-2 border-gray-200 p-[9px] rounded-lg" alt="" />
            <h2 className='text-[12px] font-medium'>Part Time</h2>
          </div>
          <div onClick={allJob} className=" flex justify-center flex-1 flex-col items-center gap-[8px] w-1/4 ">
            <img src={images.freelancer} className=" cursor-pointer hover:border-blue-500  dark:border-gray-700 dark:hover:border-blue-500   transition-all duration-300 hover:shadow-sm size-[65.6px] border-2 border-gray-200 p-[9px] rounded-lg" alt="" />
            <h2 className='text-[12px] font-medium'>Freelance</h2>
          </div>
          
          
        </div>
      </div>
    </div>
  )
}

export default Category
