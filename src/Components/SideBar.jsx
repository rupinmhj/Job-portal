import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import images from "../assets/images"
const SideBar = () => {
    console.log("Sidebar activated");
  return (
    <div className='absolute w-[300px] h-screen    z-50 bg-white font-urbanist'>
       <div className="flex p-[15px] w-full bg-bgLogo " >
          <div className="logo  ">
            <img src={images.jobkoLogo} className="h-[60px]" alt="" />
          </div>
          <div className='flex text-[12px] leading-[20px] font-semibold text-white ml-[16px] justify-start items-center'>
            Jobko-Job Finder Mobile App
          </div>
       </div>
       {/* Goodmorning */}
       <div className="flex flex-col px-[15px] py-[30px]">
       <div className="flex gap-[12px] items-center pb-[20px]">
        <div>
            <img src={images.profileSmall} className="h-[40px] rounded-lg " alt="" />
        </div>
        <div className='flex flex-col '>
          <span className='text-[12px] font-medium leading-[20px] ' >Good morning!</span>
          <span className='inline-flex text-[16px] font-bold leading-[19px] items-center '>Hello! Smith </span>
        </div>
      </div>
      {/* main menu */}
      <div className=" my-[20px]  ">
        <p className='text-[12px] font-bold leading-[20px]  flex  w-[100%]'>MAIN MENU</p>
        <ul className='list-none text-[15px] leading-[22px] font-semibold'>
            <li className='mt-[16px] flex gap-[10px] cursor-pointer'>
              <img src={images.listHome} className='' alt="" />
              <span>Home</span>
            </li>
            <li className='mt-[16px] flex justify-between cursor-pointer'>
              <div className='flex gap-[10px]'>
              <img src={images.listPages} className='' alt="" />
              <span>Pages</span>
              </div>
              <div className=' flex items-center'>
              <MdOutlineKeyboardArrowRight />
              </div>

              
            </li>
            <li className='mt-[16px] flex justify-between cursor-pointer'>
              <div className='flex gap-[10px]'>
              <img src={images.listComponent} className='' alt="" />
              <span>Components</span>
              </div>
              <div className=' flex items-center'>
              <MdOutlineKeyboardArrowRight />
              </div>

              
            </li>
            
            <li className='mt-[16px] flex gap-[10px] cursor-pointer'>
              <img src={images.listProfile} className='' alt="" />
              <span>Profile</span>
            </li>
            <li className='mt-[16px] flex gap-[10px] cursor-pointer'>
              <img src={images.listLogout} className='' alt="" />
              <span>Logout</span>
            </li>
            
        </ul>
        
      </div>
        {/* setting */}
        <div className='py-[20px]'>
        <p className='text-[12px] font-bold leading-[20px]  flex  w-[100%]'>SETTING</p>
         <div className='flex full justify-between'>
            <h2 className='text-[16px] font-medium mt-[16px]'>Dark Mode</h2>

         </div>
        </div>
    

       </div>

    </div>
  )
}

export default SideBar
