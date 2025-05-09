import React from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import images from "../assets/images";

import { motion } from 'framer-motion';

const ApplyJob = () => {
  const navigate = useNavigate();
  const back = () => {
    navigate("/");
  };

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
    className="h-screen overflow-y-scroll scroll-container"
  >
    <div className=" bg-white lg:px-[232px] xl:px-[274px]  text-[#121927] font-urbanist  w-full ">
      <div className="fixed top-0 left-0 right-0 bg-white z-10">
        <div className="flex items-center justify-between px-[24px] lg:px-[252px] xl:px-[294px] py-[16px]">
          <div className="p-[6px] border rounded-lg border-black cursor-pointer">
            <FaAngleLeft
              onClick={back}
              className="text-gray-500  size-[14px]"
            />
          </div>
          <h2 className="text-[20px] font-bold leading-[24px]">
            Apply Job
          </h2>
          <h2
            className="w-[28px]"
          >
            
          </h2>
        </div>
      </div>

      <div className="px-[24px] mt-[74px] ">
        <form>
          <label
            className="pl-[12px] text-[15px] leading-[18px] font-semibold "
            htmlFor=""
          >
            Full Name
            <span className="text-red-500">*</span>
          </label>
          <div className="relative mb-[20px]">
            
            <input
              type="text"
              required
              className=" focus:outline-none text-[14px] border shadow-sm rounded-xl mt-[12px] pl-[16px] py-[14px] pr-[20px] w-full"
              placeholder="Type your full name"
            />
          </div>
          <label
            className="pl-[12px]  text-[15px] leading-[18px] font-semibold "
            htmlFor=""
          >
            Website, Blog, or Portfolio
            <span className="text-red-500">*</span>
          </label>
          <div className="relative mb-[20px]">
           
            <input
              type="text"
              required
              className=" focus:outline-none border shadow-sm rounded-xl mt-[12px] text-[14px] pl-[16px] py-[14px] pr-[20px] w-full"
              placeholder="Type your portfolio address"
            />
          </div>

          <label
            className="pl-[12px]  text-[15px] leading-[18px] font-semibold "
            htmlFor=""
          >
            Upload CV
            <span className="text-red-500">*</span>
          </label>

          <div className="mt-4 mb-4 flex border border-gray-200 py-6 rounded-xl justify-center items-center flex-col cursor-pointer relative">
  <input
    type="file"
    className="absolute inset-0 opacity-0 cursor-pointer"
    onChange={(e) => console.log(e.target.files)}
  />
  <img src={images.gallery} alt="Upload icon" />
  <p className="text-gray-600 mt-[16px] text-[12px] font-medium">Format DOC, PDF, JPG</p>
  <p className="text-[#2869FE] font-semibold text-[14px] mt-[2px]">Browse Files</p>
</div>

<label
            className="pl-[12px]  text-[15px] leading-[18px] font-semibold "
            htmlFor=""
          >
            Motivational letter
          </label>
         <textarea className="w-full rounded-[16px] mb-[100px] outline-none mt-4 px-[20px] font-urbanist py-[14px] text-[14px] font-semibold text-gray-700 h-[135px] border border-gray-200" placeholder="Write something..."></textarea>
          <div className="fixed bottom-0 left-0 right-0 bg-white py-4 z-10">
            <div className="px-[24px] lg:px-[252px]">
              <button className="w-full bg-[#2869FE] p-[16px] text-white font-medium rounded-xl">
                Continue
              </button>
            </div>
          </div> 
        </form>
      </div>
     
    </div>
    </motion.div>
  );
};

export default ApplyJob;
