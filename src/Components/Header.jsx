import React from 'react';
import images from '../assets/images';
// import profileSmall from "../assets/profileSmall.jpg"
const Header = () => {
  return (
    <div className='lg:mx-[232px] px-[24px] pt-[20px] pb-[24px] flex font-urbanist items-center justify-between h-[88px] w-full fixed top-0 bg-bgColor z-50'>
        {/* left part */}
      <div className="flex gap-[12px] items-center">
        <div>
            <img src={images.profileSmall} className="h-[38.4px] rounded-lg border border-blue-600" alt="" />
        </div>
        <div className='flex flex-col gap-[2px]'>
          <span className='text-[12px] font-medium leading-[20px] text-custGrey' >Welcome back!</span>
          <span className='inline-flex text-[18px] font-bold leading-[22px] items-center gap-[4px]'>Hello! Smith <img className="size-[16px]" src={images.hello} alt="" /></span>
        </div>
      </div>

      {/* right part */}
      <div className="flex gap-[10px] items-center">
        <div className='h-[40px] w-[40px] p-2 rounded-lg bg-gray-100 cursor-pointer hover:bg-blue-500 transition-all group'>
          <svg className="text-[#1A1528] group-hover:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 6.44043V9.77043" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"></path>
              <path d="M12.0199 2C8.3399 2 5.3599 4.98 5.3599 8.66V10.76C5.3599 11.44 5.0799 12.46 4.7299 13.04L3.4599 15.16C2.6799 16.47 3.2199 17.93 4.6599 18.41C9.4399 20 14.6099 20 19.3899 18.41C20.7399 17.96 21.3199 16.38 20.5899 15.16L19.3199 13.04C18.9699 12.46 18.6899 11.43 18.6899 10.76V8.66C18.6799 5 15.6799 2 12.0199 2Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"></path>
              <path d="M15.3299 18.8203C15.3299 20.6503 13.8299 22.1503 11.9999 22.1503C11.0899 22.1503 10.2499 21.7703 9.64992 21.1703C9.04992 20.5703 8.66992 19.7303 8.66992 18.8203" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"></path>
          </svg>
        </div>

        <div className='h-[40px] w-[40px] p-2 rounded-lg bg-gray-100 cursor-pointer hover:bg-blue-500 transition-all group'>
          <svg className="text-[#1A1528] group-hover:text-white"
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
  )
}

export default Header