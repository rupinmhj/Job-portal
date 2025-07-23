import React, { useContext, useState } from 'react';
import AuthContext from '../Context/authContext';
import images from '../assets/images';
import { useNavigate } from 'react-router-dom';

const Header = ({ toggleSidebar, isSideBarOpen }) => {
  const [ham, setHam] = useState(false);
  const {seekerDetails}=useContext(AuthContext);
  const navigate = useNavigate();
  const handleSetup = () => {
    navigate('/setup');
  }
  const handleNotification = () => {
    navigate('/notification');
  }
  return (

    <div className=' fixed top-0 right-0 left-0 z-50 '>
      <div className="max-w-[1024px] dark:bg-[#111d39] dark:text-white  px-[24px] mx-auto  pt-[20px] pb-[24px] flex font-urbanist items-center justify-between h-[88px] bg-white z-50 border-none">
        <div onClick={handleSetup} className="cursor-pointer flex gap-[12px] items-center">
          <div>
            <img src={seekerDetails?.profile_pic} className="h-[38.4px] w-[38.4px] rounded-lg border border-blue-600" alt="" />
          </div>
          <div className='flex flex-col gap-[2px]'>
            <span className='text-[12px] font-medium leading-[20px] text-custGrey dark:text-white  ' >Welcome!</span>
            <span className='inline-flex text-[18px] font-bold leading-[22px] items-center gap-[4px]'>{seekerDetails.full_name} <img className="size-[16px]" src={images.hello} alt="" /></span>
          </div>
        </div>

        {/* right part */}
        <div
          className="flex gap-[10px] items-center">
          <div onClick={handleNotification} className='h-[40px] w-[40px] p-2 rounded-lg bg-gray-100 dark:hover:bg-[#2869FE] dark:bg-[#1f2a44] cursor-pointer hover:bg-blue-500 transition-all group'>
            <svg className="text-[#1A1528] dark:text-white group-hover:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 6.44043V9.77043" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"></path>
              <path d="M12.0199 2C8.3399 2 5.3599 4.98 5.3599 8.66V10.76C5.3599 11.44 5.0799 12.46 4.7299 13.04L3.4599 15.16C2.6799 16.47 3.2199 17.93 4.6599 18.41C9.4399 20 14.6099 20 19.3899 18.41C20.7399 17.96 21.3199 16.38 20.5899 15.16L19.3199 13.04C18.9699 12.46 18.6899 11.43 18.6899 10.76V8.66C18.6799 5 15.6799 2 12.0199 2Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"></path>
              <path d="M15.3299 18.8203C15.3299 20.6503 13.8299 22.1503 11.9999 22.1503C11.0899 22.1503 10.2499 21.7703 9.64992 21.1703C9.04992 20.5703 8.66992 19.7303 8.66992 18.8203" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"></path>
            </svg>
          </div>

          <div onClick={toggleSidebar} className='h-[40px] w-[40px] p-2 rounded-lg bg-gray-100 dark:hover:bg-[#2869FE] dark:bg-[#1f2a44] cursor-pointer hover:bg-blue-500 transition-all group'>
            <svg className="text-[#1A1528] dark:text-white group-hover:text-white"
              width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="1">
                <path d="M2.5 10H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M2.5 5H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M2.5 15H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              </g>
            </svg>
          </div>
        </div>
      </div>
      {/* left part */}

      {/* {ham && (
          <SideBar/>
      )
      } */}
    </div>
  )
}

export default Header