import React from 'react'
import images from '../assets/images'
import { useNavigate } from 'react-router-dom'
const CategoryRecruiter = () => {
  const navigate = useNavigate();
  const allJob = () => {
    navigate("/alljob")
  }
  return (
    <div className='max-w-[1024px] dark:bg-[#111d39] mx-auto px-[24px] mt-[14px] flex font-urbanist items-center pb-12  '>
      <div className='w-full'>
        <h1 className='font-bold text-[18px] leading-[22px] mb-[24px] '>Manage Your Workspace	</h1>
        <div className="flex w-[100%] flex-wrap bg-bgColor dark:bg-[#111d39]  pt-4 rounded-xl pb-20 ">
          <div onClick={() => navigate('/companyprofile')} className=" flex justify-center flex-1 flex-col items-center gap-[8px] w-1/4 ">
            <img src={images.company} className=" cursor-pointer hover:border-blue-500 border  dark:border-gray-700 dark:hover:border-blue-500  border-2 transition-all duration-300 hover:shadow-sm size-[65.6px]  border-gray-200 p-[9px] rounded-lg" alt="" />
            <h2 className='text-[12px] font-medium'>Company Profile</h2>
          </div>
          <div onClick={() => navigate('/createjob')} className=" flex justify-center flex-1 flex-col items-center gap-[8px] w-1/4 ">
            <img src={images.createjob} className="cursor-pointer hover:border-blue-500  dark:border-gray-700 dark:hover:border-blue-500  transition-all duration-300 hover:shadow-sm  size-[65.6px] border-2 border-gray-200 p-[9px] rounded-lg" alt="" />
            <h2 className='text-[12px] font-medium'>Create Job</h2>
          </div>
          <div onClick={() => navigate('/managejob')} className=" flex justify-center flex-1 flex-col items-center gap-[8px] w-1/4 ">
            <img src={images.managejob} className="cursor-pointer hover:border-blue-500 dark:border-gray-700  transition-all duration-300 dark:hover:border-blue-500  hover:shadow-sm  size-[65.6px] border-2 border-gray-200 p-[9px] rounded-lg" alt="" />
            <h2 className='text-[12px] font-medium'>Manage Jobs</h2>
          </div>
          {/* <div onClick={()=>navigate('/application')} className=" flex justify-center flex-1 flex-col items-center gap-[8px] w-1/4 ">
            <img src={images.application} className=" cursor-pointer hover:border-blue-500   transition-all duration-300 hover:shadow-sm size-[65.6px] border-2 border-gray-200 p-[9px] rounded-lg" alt="" />
            <h2 className='text-[12px] font-medium'>Application</h2>
          </div> */}


        </div>
      </div>
    </div>
  )
}

export default CategoryRecruiter
