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
import Footer from "../Components/Footer";

const Message = () => {
  const navigate = useNavigate();
  const back = () => {
    navigate("/");
  };
  return (
    <>
      <div className=" text-[#121927] lg:px-[232px] xl:px-[274px] px-[24px]  pb-[88px]  flex font-urbanist items-center justify-between relative">
        <div className="fixed top-0 left-0 right-0 bg-white z-10  ">
          <div className="flex items-center justify-between lg:px-[232px] xl:px-[274px] px-[24px] pt-[16px] pb-[24px]">
            <div
              onClick={back}
              className="p-[6px] border rounded-lg border-black cursor-pointer"
            >
              <FaAngleLeft className="text-gray-500  size-[14px]" />
            </div>
            <h2 className="text-[20px] font-bold leading-[24px] ml-6">
              Message
            </h2>
            <div className="flex  gap-[12px]">
              <img src={images.searchIcon} className="cursor-pointer" alt="" />
              <img src={images.threeDot} className="cursor-pointer" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="text-[#121927] bg-opacity-70 rounded-xl lg:px-[232px] xl:px-[274px] px-[24px] flex-col mb-[100px] flex font-urbanist">
       <div className=" bg-bgColor bg-opacity-60">
        <div className="flex justify-between w-full p-[16px] mb-[16px]  bg-white rounded-xl gap-[12px]">
          <img
            src={images.messenger1}
            className="border h-[44px] w-[44px] flex-shrink-0  border-green-800 rounded-full"
            alt=""
          />
          <div className="flex flex-col flex-grow gap-[6px] ">
            <h1 className="text-[15px] leading-[18px] font-bold">
              Floyd Miles
            </h1>
            <h1 className="text-[12px] text-google">
              Great I will have a look the{" "}
            </h1>
          </div>
          <div className="flex flex-col text-google flex-shrink-0 gap-[8px]">
            <h1 className="text-[11px] ">Just Now</h1>
            <span className="flex justify-end text-white ">
              <span className="text-[10px] h-4 w-4 pl-1.5  rounded-full bg-purple-600">
                2
              </span>
            </span>
          </div>
        </div>

        {/* 1 */}
<div className="flex w-full p-[16px] mb-[16px] bg-white rounded-xl gap-[12px] items-center">
  <img src={images.messenger2} className="border h-[44px] w-[44px] flex-shrink-0 border-green-800 rounded-full" alt="" />
  <div className="flex flex-col flex-grow gap-[6px]">
    <h1 className="text-[15px] leading-[18px] font-bold">Jane Cooper</h1>
    <h1 className="text-[12px] text-google">I'll send you the files tonight.</h1>
  </div>
  <div className="flex flex-col text-google flex-shrink-0 gap-[8px] items-end">
    <h1 className="text-[11px]">5 mins ago</h1>
    <svg className="w-4 h-4 text-green-600  " fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  </div>
</div>

{/* 2 */}
<div className="flex w-full p-[16px] mb-[16px] bg-white rounded-xl gap-[12px] items-center">
  <img src={images.messenger3} className="border h-[44px] w-[44px] flex-shrink-0 border-green-800 rounded-full" alt="" />
  <div className="flex flex-col flex-grow gap-[6px]">
    <h1 className="text-[15px] leading-[18px] font-bold">Ronald Richards</h1>
    <h1 className="text-[12px] text-google">Can we reschedule our meeting?</h1>
  </div>
  <div className="flex flex-col text-google flex-shrink-0 gap-[8px] items-end">
    <h1 className="text-[11px]">10 mins ago</h1>
    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  </div>
</div>

{/* 3 */}
<div className="flex w-full p-[16px] mb-[16px] bg-white rounded-xl gap-[12px] items-center">
  <img src={images.messenger4} className="border h-[44px] w-[44px] flex-shrink-0 border-green-800 rounded-full" alt="" />
  <div className="flex flex-col flex-grow gap-[6px]">
    <h1 className="text-[15px] leading-[18px] font-bold">Esther Howard</h1>
    <h1 className="text-[12px] text-google">Let's catch up this weekend.</h1>
  </div>
  <div className="flex flex-col text-google flex-shrink-0 gap-[8px] items-end">
    <h1 className="text-[11px]">30 mins ago</h1>
    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  </div>
</div>

{/* 4 */}
<div className="flex w-full p-[16px] mb-[16px] bg-white rounded-xl gap-[12px] items-center">
  <img src={images.messenger7} className="border h-[44px] w-[44px] flex-shrink-0 border-green-800 rounded-full" alt="" />
  <div className="flex flex-col flex-grow gap-[6px]">
    <h1 className="text-[15px] leading-[18px] font-bold">Wade Warren</h1>
    <h1 className="text-[12px] text-google">Thanks! That was really helpful.</h1>
  </div>
  <div className="flex flex-col text-google flex-shrink-0 gap-[8px] items-end">
    <h1 className="text-[11px]">1 hour ago</h1>
    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  </div>
</div>

{/* 5 */}
<div className="flex w-full p-[16px] mb-[16px] bg-white rounded-xl gap-[12px] items-center">
  <img src={images.messenger6} className="border h-[44px] w-[44px] flex-shrink-0 border-green-800 rounded-full" alt="" />
  <div className="flex flex-col flex-grow gap-[6px]">
    <h1 className="text-[15px] leading-[18px] font-bold">Courtney Henry</h1>
    <h1 className="text-[12px] text-google">Check your inbox please.</h1>
  </div>
  <div className="flex flex-col text-google flex-shrink-0 gap-[8px] items-end">
    <h1 className="text-[11px]">2 hours ago</h1>
    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  </div>
</div>
<div className="flex w-full p-[16px] mb-[16px] bg-white rounded-xl gap-[12px] items-center">
  <img src={images.messenger5} className="border h-[44px] w-[44px] flex-shrink-0 border-green-800 rounded-full" alt="" />
  <div className="flex flex-col flex-grow gap-[6px]">
    <h1 className="text-[15px] leading-[18px] font-bold">Courtney Henry</h1>
    <h1 className="text-[12px] text-google">Check your inbox please.</h1>
  </div>
  <div className="flex flex-col text-google flex-shrink-0 gap-[8px] items-end">
    <h1 className="text-[11px]">2 hours ago</h1>
    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  </div>
</div>
</div>
      </div>

      <Footer />
    </>
  );
};

export default Message;
