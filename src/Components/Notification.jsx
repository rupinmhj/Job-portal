import React from "react";
import { Outlet } from "react-router-dom";
import images from "../assets/images";
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
const Notification = () => {
  const navigate = useNavigate();
  const back = () => {
    navigate("/home");
  };
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3, delay:0.1 }}
  >
    <div className="text-[#121927] lg:px-[232px] xl:px-[274px] px-[24px] pt-[20px] pb-[24px] flex font-urbanist items-center justify-between">
      <div className="fixed top-0 left-0 right-0 bg-white z-10">
        <div className="flex items-center justify-between px-[24px] lg:px-[252px] py-[16px]">
          <div
            onClick={back}
            className="p-[6px] border rounded-lg border-black cursor-pointer"
          >
            <FaAngleLeft className="text-gray-500  size-[14px]" />
          </div>
          <h2 className="text-[20px] font-bold leading-[24px]">Notification</h2>
          <img src={images.searchIcon} className="cursor-pointer" alt="" />
        </div>
      </div>
      <div className="w-full">
        <div className="relative flex p-[16px] pr-[32px] mt-[59.6px] gap-[16px]">
          <div className="flex    justify-center items-start  ">
            <div className="w-[40px] h-[40px] flex justify-center items-center border border-gray-400 rounded-xl">
              <img src={images.notigoogle} className="size-[24px]" alt="" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center">
              <span className="font-semibold text-[15px] leading-[18px]">
                Product Design
              </span>
              <span className="w-[4px] h-[4px] bg-green-600 rounded-full flex leading-[12px] my-[8px] mx-2 "></span>
              <span className="text-google font-medium leading-[12px] text-[10px]">
                Google LLC
              </span>
            </div>

            <p className="font-medium text-[12px] leading-[20px] text-google">
              Congratulations, your application on Google has been accepted{" "}
              <span className="w-[4px] h-[4px] inline-block bg-orange-400 rounded-full mx-[4px] mb-[1px]"></span>
              <span className="text-google font-medium leading-[12px] text-[10px]">
                5 mins ago
              </span>
            </p>
          </div>
          <img
            src={images.threeDot}
            className="absolute right-2 top-5 size-5"
            alt=""
          />
        </div>

        <div className="relative flex p-[16px] pr-[32px] mt-[16px] gap-[16px]">
          <div className="flex    justify-center items-start  ">
            <div className="w-[40px] h-[40px] flex justify-center items-center border border-gray-400 rounded-xl">
              <img src={images.slack} className="size-[24px]" alt="" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center">
              <span className="font-semibold text-[15px] leading-[18px]">
                Apps Design
              </span>
              <span className="w-[4px] h-[4px] bg-green-600 rounded-full flex leading-[12px] my-[8px] mx-2 "></span>
              <span className="text-google font-medium leading-[12px] text-[10px]">
                Slack
              </span>
            </div>

            <p className="font-medium text-[12px] leading-[20px] text-google">
              New job avaolable on Slack, (position - Mobile Apps Designer ){" "}
              <span className="w-[4px] h-[4px] inline-block bg-orange-400 rounded-full mx-[4px] mb-[1px]"></span>
              <span className="text-google font-medium leading-[12px] text-[10px]">
                30 mins ago
              </span>
            </p>
          </div>
          <img
            src={images.threeDot}
            className="absolute right-2 top-5 size-5"
            alt=""
          />
        </div>
        {/* .. */}
        <div className="relative flex p-[16px] pr-[32px] mt-[16px] gap-[16px]">
          <div className="flex    justify-center items-start  ">
            <div className="w-[40px] h-[40px] flex justify-center items-center border border-gray-400 rounded-xl">
              <img src={images.zapier} className="size-[24px]" alt="" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center">
              <span className="font-semibold text-[15px] leading-[18px]">
                UI/UX Design
              </span>
              <span className="w-[4px] h-[4px] bg-green-600 rounded-full flex leading-[12px] my-[8px] mx-2 "></span>
              <span className="text-google font-medium leading-[12px] text-[10px]">
                Zapier
              </span>
            </div>

            <p className="font-medium text-[12px] leading-[20px] text-google">
              New job avaolable on Zapier, (position - Application Designer ){" "}
              <span className="w-[4px] h-[4px] inline-block bg-orange-400 rounded-full mx-[4px] mb-[1px]"></span>
              <span className="text-google font-medium leading-[12px] text-[10px]">
                10 hr ago
              </span>
            </p>
          </div>
          <img
            src={images.threeDot}
            className="absolute right-2 top-5 size-5"
            alt=""
          />
        </div>

        <div className="relative flex p-[16px] pr-[32px] mt-[16px] gap-[16px]">
          <div className="flex    justify-center items-start  ">
            <div className="w-[40px] h-[40px] flex justify-center items-center border border-gray-400 rounded-xl">
              <img src={images.notigoogle} className="size-[24px]" alt="" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center">
              <span className="font-semibold text-[15px] leading-[18px]">
                Product Design
              </span>
              <span className="w-[4px] h-[4px] bg-green-600 rounded-full flex leading-[12px] my-[8px] mx-2 "></span>
              <span className="text-google font-medium leading-[12px] text-[10px]">
                Google LLC
              </span>
            </div>

            <p className="font-medium text-[12px] leading-[20px] text-google">
              A strong interview strategy can boost your chances of success{" "}
              <span className="w-[4px] h-[4px] inline-block bg-orange-400 rounded-full mx-[4px] mb-[1px]"></span>
              <span className="text-google font-medium leading-[12px] text-[10px]">
                18 hrs ago
              </span>
            </p>
          </div>
          <img
            src={images.threeDot}
            className="absolute right-2 top-5 size-5"
            alt=""
          />
        </div>

        <div className="relative flex p-[16px] pr-[32px] mt-[16px] gap-[16px]">
          <div className="flex    justify-center items-start  ">
            <div className="w-[40px] h-[40px] flex justify-center items-center border border-gray-400 rounded-xl">
              <img src={images.treehouse} className="size-[24px]" alt="" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center">
              <span className="font-semibold text-[15px] leading-[18px]">
                UX Researcher
              </span>
              <span className="w-[4px] h-[4px] bg-green-600 rounded-full flex leading-[12px] my-[8px] mx-2 "></span>
              <span className="text-google font-medium leading-[12px] text-[10px]">
                Treehouse
              </span>
            </div>

            <p className="font-medium text-[12px] leading-[20px] text-google">
              Congratulations, your application on Google has been accepted{" "}
              <span className="w-[4px] h-[4px] inline-block bg-orange-400 rounded-full mx-[4px] mb-[1px]"></span>
              <span className="text-google font-medium leading-[12px] text-[10px]">
                5 mins ago
              </span>
            </p>
          </div>
          <img
            src={images.threeDot}
            className="absolute right-2 top-5 size-5"
            alt=""
          />
        </div>

        <div className="relative flex p-[16px] pr-[32px] mt-[16px] gap-[16px]">
          <div className="flex    justify-center items-start  ">
            <div className="w-[40px] h-[40px] flex justify-center items-center border border-gray-400 rounded-xl">
              <img src={images.notimicrosoft} className="size-[24px]" alt="" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center">
              <span className="font-semibold text-[15px] leading-[18px]">
                Product Design
              </span>
              <span className="w-[4px] h-[4px] bg-green-600 rounded-full flex leading-[12px] my-[8px] mx-2 "></span>
              <span className="text-google font-medium leading-[12px] text-[10px]">
                Microsolft
              </span>
            </div>

            <p className="font-medium text-[12px] leading-[20px] text-google">
              Congratulations, your application on Microsoft has been accepted{" "}
              <span className="w-[4px] h-[4px] inline-block bg-orange-400 rounded-full mx-[4px] mb-[1px]"></span>
              <span className="text-google font-medium leading-[12px] text-[10px]">
                5 mins ago
              </span>
            </p>
          </div>
          <img
            src={images.threeDot}
            className="absolute right-2 top-5 size-5"
            alt=""
          />
        </div>
      </div>

      <Outlet />
    </div>
    </motion.div>
  );
};

export default Notification;
