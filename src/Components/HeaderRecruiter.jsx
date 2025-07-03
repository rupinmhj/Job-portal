import React, { useState } from 'react';
// useState
import images from '../assets/images';
import { useNavigate } from 'react-router-dom';
// import profileSmall from "../assets/profileSmall.jpg"
const HeaderRecruiter = ({toggleSidebar,isSideBarOpen}) => {
  const [ham,setHam]=useState(false);
  // const hamburgerclick=()=>{
  //   setHam(prev => !prev);
  // }
  // console.log(ham);
  const navigate=useNavigate();
  const handleSetup=()=>{
      navigate('/companyprofile');
  }
  const handleNotification=()=>{
    navigate('/notificationrecruiter');
  }
 return (
    <div className="w-full fixed top-0 bg-white dark:bg-[#111d39] dark:text-white z-50 border-none">
      <div className='max-w-[1024px] mx-auto pt-[20px] pb-[24px] flex font-urbanist items-center justify-between h-[88px] px-6 z-50 border-none'>
        {/* Left Part */}
        <div onClick={handleSetup} className="cursor-pointer flex gap-[12px] items-center">
          <div>
            <img
              src={images.google}
              className="h-[38.4px] rounded-lg border border-blue-600"
              alt="Google"
            />
          </div>
          <div className='flex flex-col'>
            <span className='text-[12px] font-medium leading-[20px] text-custGrey dark:text-white'>
              Welcome back Google
            </span>
            <span className='inline-flex text-[14px] font-bold leading-[22px] items-center gap-[4px]'>
              Manage your hiring in one place
            </span>
          </div>
        </div>

        {/* Right Part */}
        <div className="flex gap-[10px] items-center">
          {/* Notification Button */}
          <div
            onClick={handleNotification}
            className='h-[40px] w-[40px] p-2 rounded-lg bg-gray-100 dark:bg-[#1f2a44] dark:hover:bg-[#2869FE] cursor-pointer hover:bg-blue-500 transition-all group'
          >
            <svg
              className="text-[#1A1528] dark:text-white group-hover:text-white"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 6.44043V9.77043" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path
                d="M12.0199 2C8.3399 2 5.3599 4.98 5.3599 8.66V10.76C5.3599 11.44 5.0799 12.46 4.7299 13.04L3.4599 15.16C2.6799 16.47 3.2199 17.93 4.6599 18.41C9.4399 20 14.6099 20 19.3899 18.41C20.7399 17.96 21.3199 16.38 20.5899 15.16L19.3199 13.04C18.9699 12.46 18.6899 11.43 18.6899 10.76V8.66C18.6799 5 15.6799 2 12.0199 2Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M15.3299 18.8203C15.3299 20.6503 13.8299 22.1503 11.9999 22.1503C11.0899 22.1503 10.2499 21.7703 9.64992 21.1703C9.04992 20.5703 8.66992 19.7303 8.66992 18.8203"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </div>

          {/* Hamburger / Sidebar Toggle */}
          <div
            onClick={toggleSidebar}
            className='h-[40px] w-[40px] p-2 rounded-lg bg-gray-100 dark:bg-[#1f2a44] dark:hover:bg-[#2869FE] cursor-pointer hover:bg-blue-500 transition-all group'
          >
            <svg
              className="text-[#1A1528] dark:text-white group-hover:text-white"
              width="22"
              height="22"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.5 10H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M2.5 5H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M2.5 15H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderRecruiter