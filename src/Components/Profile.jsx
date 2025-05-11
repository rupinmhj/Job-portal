import React from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import images from "../assets/images";
import { FaAngleLeft } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoBagHandleOutline } from "react-icons/io5";
import { LiaAwardSolid } from "react-icons/lia";
import { IoLogOutOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import Footer from "../Components/Footer"
import {motion} from  'framer-motion'
const Profile = () => {
  const navigate = useNavigate();
  const back = () => {
    navigate("/");
  };
  const boarding=()=>navigate("/boarding")
 
  return (
    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
      transition={{duration:0.3,delay:0.15}}
      className="h-screen overflow-y-scroll scroll-container"
      >
          <div className=" text-[#121927]  pt-[20px]   font-urbanist items-center justify-between  ">
      <div className="fixed top-0 left-0 right-0 bg-white z-10  ">
        <div className="flex items-center justify-between lg:px-[232px] xl:px-[274px] px-[24px] pt-[16px] pb-[24px]">
          <div
            onClick={back}
            className="p-[6px] border rounded-lg border-black cursor-pointer"
          >
            <FaAngleLeft className="text-gray-500  size-[14px]" />
          </div>
          <h2 className="text-[20px] font-bold leading-[24px] ml-6">Profile</h2>
          <div className="flex  gap-[12px]">
            <img src={images.searchIcon} className="cursor-pointer" alt="" />
            <img src={images.threeDot} className="cursor-pointer" alt="" />
          </div>
        </div>
      </div>
      <div className="flex lg:px-[232px] xl:px-[274px] px-[24px] flex-col pt-[49.6px] w-full items-center justify-center">
        <img
          src={images.profileSmall}
          className="size-[80.4px] mb-[12px] border border-blue-500 rounded-xl"
          alt=""
        />
       
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-[18px] font-bold leading-[22px] mb-[8px]">
            Jonathan Smith
          </h2>
          <h2 className="text-[12px] text-[#121927]/60 leading-[20px]">
            jonathansmith@gmail.com
          </h2>
          <h2 className="text-[#7C66FF] leading-[24px] font-semibold text-[14px] ">
            Active Looking
          </h2>
        </div>
        <div className="flex mt-[22px] justify-around w-full ">
          <div className="flex-col flex gap-[6px] justify-center items-center">
            <div className="py-[13px] px-[32px] rounded-xl bg-[#F6EFFF]">
              <h2 className="text-[#a55fff] text-[28px] font-bold ">36</h2>
            </div>
            <h2>Applied</h2>
          </div>

          <div className="flex-col flex gap-[6px] justify-center items-center">
            <div className="py-[13px] px-[32px] rounded-xl bg-[#FFEFF8]">
              <h2 className="text-[#FF5FBF] text-[28px] font-bold ">20</h2>
            </div>
            <h2>Reviewed</h2>
          </div>

          <div className="flex-col flex gap-[6px] justify-center items-center">
            <div className="py-[13px] px-[32px] rounded-xl bg-[#E5FAF5]">
              <h2 className="text-[#00CC9A] text-[28px] font-bold ">36</h2>
            </div>
            <h2>Contacted</h2>
          </div>
        </div>
      </div>

      <div className=" rounded-t-3xl  bg-[#7D67FF] text-white text-[16px] font-urbanist  leading-[19px] mt-[24px] pt-[32px] h-full ">
        <div className="px-[24px] pb-[20px]">
        <li className=" mt-[0px] flex justify-between cursor-pointer items-center pb-[16px] border-b border-gray-200 border-opacity-35 mb-[16px]">
          <div className="flex gap-[16px]">
            <div className="p-2 bg-gray-300 bg-opacity-60 rounded-xl">
              
              <CgProfile  className="h-[24px] w-[24px]"/>
            </div>
            <span className="flex items-center text-[16px] font-bold">Personal Information</span>
          </div>
          <div className=" flex items-center">
            <MdOutlineKeyboardArrowRight />
          </div>
        </li>

        <li className=" mt-[16px] flex justify-between cursor-pointer items-center pb-[16px] border-b-2  border-gray-200 border-opacity-35 mb-[16px]">
          <div className="flex gap-[16px]">
            <div className="p-2 bg-gray-300 bg-opacity-60 rounded-xl">
              <img src={images.education} className="" alt="" />
            </div>
            <span className="flex items-center text-[16px] font-bold">Skill</span>
          </div>
          <div className=" flex items-center">
            <MdOutlineKeyboardArrowRight />
          </div>
        </li>

        <li className=" mt-[16px] flex justify-between cursor-pointer items-center pb-[16px] border-b-2 border-gray-200 border-opacity-35 mb-[16px]">
          <div className="flex gap-[16px]">
            <div className="p-2 bg-gray-300 bg-opacity-60 rounded-xl">
              {/* <img src={images.education} className="" alt="" /> */}
              <IoBagHandleOutline  className="size-[24px] fill-white"/>
            </div>
            <span className="flex items-center text-[16px] font-bold">Work Experience</span>
          </div>
          <div className=" flex items-center">
            <MdOutlineKeyboardArrowRight />
          </div>
        </li>

        <li className=" mt-[16px] flex justify-between cursor-pointer items-center pb-[16px] border-b-2  border-gray-200 border-opacity-35 mb-[16px]">
          <div className="flex gap-[16px]">
            <div className="p-2 bg-gray-300 bg-opacity-60 rounded-xl">
              <img src={images.education} className="" alt="" />
            </div>
            <span className="flex items-center text-[16px] font-bold">Education</span>
          </div>
          <div className=" flex items-center">
            <MdOutlineKeyboardArrowRight />
          </div>
        </li>

        <li className=" mt-[16px] flex justify-between cursor-pointer items-center pb-[16px] border-b-2 border-gray-200 border-opacity-35 mb-[16px]">
          <div className="flex gap-[16px]">
            <div className="p-2 bg-gray-300 bg-opacity-60 rounded-xl">
            <LiaAwardSolid   className="size-[24px] fill-white"/>
            </div>
            <span className="flex items-center text-[16px] font-bold">Skill</span>
          </div>
          <div className=" flex items-center">
            <MdOutlineKeyboardArrowRight />
          </div>
        </li>

        <li className=" mt-[16px] pb-[116px] flex justify-between cursor-pointer items-center   mb-[16px]">
          <div onClick={boarding} className="flex gap-[16px]">
            <div className="p-2 bg-gray-300 bg-opacity-60 rounded-xl">
            <IoLogOutOutline    className="size-[24px] fill-white"/>
            </div>
            <span className="flex items-center text-[16px] font-bold">Logout</span>
          </div>
          <div className=" flex items-center">
            <MdOutlineKeyboardArrowRight />
          </div>
        </li>
        </div>
        
        <div className="">

       <Footer className="mx-[10px]"/>
        </div>
      </div>

      <Outlet />
    </div>
      </motion.div>
    
  );
};

export default Profile;
