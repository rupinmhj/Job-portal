import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import images from "../assets/images";
import { IoLocationSharp } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
// import { Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import JobDescription from "./JobDescription";
import CompanyDetail from "./CompanyDetail";
import Review from "./Review";
const Details = () => {
  const navigate = useNavigate();
  const back = () => {
    navigate("/home");
  };

  const [showOptions, setShowOptions] = useState("description");

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3,delay:0.1 }}
    className="h-screen overflow-y-scroll scroll-container"
  >
    <div className=" bg-white lg:px-[232px] xl:px-[274px] px-[24px] text-[#121927] font-urbanist text-[rgb(18, 25, 39)] w-full ">
      <div className="fixed top-0 left-0 right-0 bg-white z-10">
        <div className="flex items-center justify-between px-[24px] lg:px-[232px] xl:px-[274px] py-[16px]">
          <div onClick={back} className="p-[6px] border rounded-lg border-black cursor-pointer">
            <FaAngleLeft
              
              className="text-gray-500  size-[14px]"
            />
          </div>
          <h2 className="text-[20px] font-bold leading-[24px]">Details</h2>
          <div className="p-[6px] border rounded-lg border-black cursor-pointer">
            <img src={images.bookmark} alt="" />
          </div>
        </div>
      </div>

      <div className="bg-sliderBlue relative text-white overflow-hidden rounded-[18px]  p-[24px] mt-20">
        <div className="w-full justify-start flex">
          <div className="flex gap-[12px]">
            <img src={images.google} className="h-[60px]" alt="" />
            <div className="flex flex-col  gap-[8px] pt-[3px]">
              <h1 className="font-bold text-[18px] leading-[22px]">
                Senior UX Designer
              </h1>
              <h1 className="text-softWhite text-[14px] font-medium leading-[24px] flex text-center">
                <span className="inline-block h-[16.4px] w-[15.6px] pt-[5px] mr-[2px] text-white">
                  <IoLocationSharp />
                </span>{" "}
                Berlin, Germany
              </h1>
            </div>
          </div>
        </div>

        <div className="flex gap-[10px] mt-[24px] ml-[10px]">
          {["Design", "Full Time", "In House"].map((item, idx) => (
            <span
              key={idx}
              className="rounded-[10px] bg-opacity-10 bg-white text-[14px] font-medium py-[6px] px-[12px] leading-[24px]"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="absolute top-[-30px] right-[-30px] ">
          <div className="rounded-full h-[92px] w-[92px] border-opacity-45 border-8 border-gray-400"></div>
        </div>
        <div className="absolute top-[-10px] right-[-10px] ">
          <div className="rounded-full h-[56px] w-[56px] border-opacity-45 border-8 border-gray-400"></div>
        </div>
      </div>

      <div className="flex bg-[#EEF3FF] mt-[24px] p-[8px] rounded-[18px] gap-[12px] items-center">
  <button
    className={`px-[14px] py-[8px] rounded-[12px] font-semibold leading-[24px] ${
      showOptions === "description"
        ? "bg-[#2869FE] text-white"
        : "bg-white text-[#2869FEE6]"
    }`}
    onClick={() => setShowOptions("description")}
  >
    Job Description
  </button>

  <button
    className={`px-[14px] py-[8px] rounded-[12px] font-semibold leading-[24px] ${
      showOptions === "company"
        ? "bg-[#2869FE] text-white"
        : "bg-white text-[#2869FEE6]"
    }`}
    onClick={() => setShowOptions("company")}
  >
    Company
  </button>

  <button
    className={`px-[14px] py-[8px] rounded-[12px] font-semibold leading-[24px] ${
      showOptions === "review"
        ? "bg-[#2869FE] text-white"
        : "bg-white text-[#2869FEE6]"
    }`}
    onClick={() => setShowOptions("review")}
  >
    Review
  </button>
</div>

<div className="mt-[16px] mb-[100px]">
  <AnimatePresence mode="wait">
    {showOptions === "description" && (
      <motion.div
        key="description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <JobDescription />
      </motion.div>
    )}
    {showOptions === "company" && (
      <motion.div
        key="company"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <CompanyDetail />
      </motion.div>
    )}
    {showOptions === "review" && (
      <motion.div
        key="review"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <Review />
      </motion.div>
    )}
  </AnimatePresence>
</div>

      <div className="fixed bottom-0 left-0 right-0 bg-white py-4 z-10">
        <div className="px-[24px] lg:px-[232px] xl:px-[274px]">
          <button className="w-full bg-[#2869FE] p-[16px] text-white font-medium rounded-xl" onClick={()=>navigate('/applyjob')}>
            Apply this job
          </button>
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default Details;
