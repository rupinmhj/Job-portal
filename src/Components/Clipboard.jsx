import React from "react";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import images from "../assets/images";
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import {motion} from "framer-motion"
const Clipboard = () => {
  const navigate = useNavigate();
  const back = () => {
    navigate("/");
  };
  const noti = () => {
    navigate("/notification");
  };
  return (
    <>
     <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3, delay:0.15 }}
    className="h-screen overflow-y-scroll scroll-container"
  >
      <div className=" text-[#121927] lg:px-[232px] xl:px-[274px] px-[24px] pt-[20px] pb-[40px] flex font-urbanist items-center justify-between relative ">
        <div className="fixed top-0 left-0 right-0 bg-white z-10">
          <div className="flex items-center justify-between px-[24px] xl:px-[274px] lg:px-[232px] py-[16px]">
            <div
              onClick={back}
              className="p-[6px] border rounded-lg border-black cursor-pointer"
            >
              <FaAngleLeft className="text-gray-500  size-[14px]" />
            </div>
            <h2 className="text-[20px] font-bold leading-[24px]">
              Your Applications
            </h2>
            <img
              src={images.bellIcon}
              onClick={noti}
              className="cursor-pointer"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="lg:mx-[232px] xl:px-[274px] px-[24px]  flex font-urbanist items-center pt-[0px] bg-white">
        <div className="py-[14px] border border-gray-200 w-full rounded-xl leading-[20px] flex items-center">
          <img
            src={images.searchIcon}
            className="pl-[18px] cursor-pointer"
            alt=""
          />

          <input
            type="text"
            className="text-[14px] px-[14px] text-textSearch  focus:outline-none w-full"
            placeholder="Search..."
          />
          {/* <img src={images.option} className='pr-[14px]' alt="" /> */}
        </div>
      </div>

      <div className="mt-[24px] lg:px-[232px] xl:px-[274px] px-[24px]  ">
        <div className="bg-bgColor bg-opacity-65">
        <div className="bg-white  rounded-xl flex-col flex  p-[16px] mb-[16px]">
          <div className="relative flex   gap-[16px] mb-[20px]">
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
              <div className="flex mt-[10px] text-google gap-[6px] font-medium leading-[14px] text-[12px]">
                <p className="">
                  <img
                    src={images.wallet}
                    className="size-[12px] mb-1 inline-block mr-[4px]"
                    alt=""
                  />
                  8k/month
                </p>
                <p className="">
                  <img
                    src={images.location}
                    className="size-[12px] mb-1 inline-block mr-[4px]"
                    alt=""
                  />
                  Berlin, Germany
                </p>
              </div>
            </div>
          </div>
          <div className="flex  gap-[12px] font-semibold text-[14px]  ">
            <div className="p-[6px] rounded-xl flex-1 flex justify-center items-center bg-[#E5FAF5]">
              <h2 className="text-[#00CC9A]">On the way</h2>
            </div>
            <div className="p-[6px] rounded-xl flex-1 flex justify-center items-center bg-[#E9F0FF]">
              <h2 className="text-[#2869FE] ">View Application</h2>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl flex-col flex  p-[16px] mb-[16px]">
          <div className="relative flex   gap-[16px] mb-[20px]">
            <div className="flex    justify-center items-start  ">
              <div className="w-[40px] h-[40px] flex justify-center items-center border border-gray-400 rounded-xl">
                <img
                  src={images.notimicrosoft}
                  className="size-[24px]"
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center">
                <span className="font-semibold text-[15px] leading-[18px]">
                  Senior UI/UX Designer
                </span>
                <span className="w-[4px] h-[4px] bg-green-600 rounded-full flex leading-[12px] my-[8px] mx-2 "></span>
                <span className="text-google font-medium leading-[12px] text-[10px]">
                  Microsoft
                </span>
              </div>
              <div className="flex mt-[10px] text-google gap-[6px] font-medium leading-[14px] text-[12px]">
                <p className="">
                  <img
                    src={images.wallet}
                    className="size-[12px] mb-1 inline-block mr-[4px]"
                    alt=""
                  />
                  6k/month
                </p>
                <p className="">
                  <img
                    src={images.location}
                    className="size-[12px] mb-1 inline-block mr-[4px]"
                    alt=""
                  />
                  United States
                </p>
              </div>
            </div>
          </div>
          <div className="flex  gap-[12px] font-semibold text-[14px]  ">
            <div className="p-[6px] rounded-xl flex-1 flex justify-center items-center bg-[#F1F1F2]">
              <h2 className="">Delivered</h2>
            </div>
            <div className="p-[6px] rounded-xl flex-1 flex justify-center items-center bg-[#E9F0FF]">
              <h2 className="text-[#2869FE] ">View Application</h2>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl flex-col flex  p-[16px] mb-[16px]">
          <div className="relative flex   gap-[16px] mb-[20px]">
            <div className="flex    justify-center items-start  ">
              <div className="w-[40px] h-[40px] flex justify-center items-center border border-gray-400 rounded-xl">
                <img src={images.slack} className="size-[24px]" alt="" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center">
                <span className="font-semibold text-[15px] leading-[18px]">
                  Mobile Apps Designer
                </span>
                <span className="w-[4px] h-[4px] bg-green-600 rounded-full flex leading-[12px] my-[8px] mx-2 "></span>
                <span className="text-google font-medium leading-[12px] text-[10px]">
                  Slack
                </span>
              </div>
              <div className="flex mt-[10px] text-google gap-[6px] font-medium leading-[14px] text-[12px]">
                <p className="">
                  <img
                    src={images.wallet}
                    className="size-[12px] mb-1 inline-block mr-[4px]"
                    alt=""
                  />
                  8k/month
                </p>
                <p className="">
                  <img
                    src={images.location}
                    className="size-[12px] mb-1 inline-block mr-[4px]"
                    alt=""
                  />
                  United States
                </p>
              </div>
            </div>
          </div>
          <div className="flex  gap-[12px] font-semibold text-[14px]  ">
            <div className="p-[6px] rounded-xl flex-1 flex justify-center items-center bg-[#F1F1F2]">
              <h2 className="text-[#FA4848]">Canceled</h2>
            </div>
            <div className="p-[6px] rounded-xl flex-1 flex justify-center items-center bg-[#E9F0FF]">
              <h2 className="text-[#2869FE] ">View Application</h2>
            </div>
          </div>
        </div>

        <div className="bg-white mb-[72px] rounded-xl flex-col flex  p-[16px] ">
          <div className="relative flex   gap-[16px] mb-[20px]">
            <div className="flex    justify-center items-start  ">
              <div className="w-[40px] h-[40px] flex justify-center items-center border border-gray-400 rounded-xl">
                <img src={images.zapier} className="size-[24px]" alt="" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center">
                <span className="font-semibold text-[15px] leading-[18px]">
                  Application Designer
                </span>
                <span className="w-[4px] h-[4px] bg-green-600 rounded-full flex leading-[12px] my-[8px] mx-2 "></span>
                <span className="text-google font-medium leading-[12px] text-[10px]">
                  Zapier
                </span>
              </div>
              <div className="flex mt-[10px] text-google gap-[6px] font-medium leading-[14px] text-[12px]">
                <p className="">
                  <img
                    src={images.wallet}
                    className="size-[12px] mb-1 inline-block mr-[4px]"
                    alt=""
                  />
                  6k/month
                </p>
                <p className="">
                  <img
                    src={images.location}
                    className="size-[12px] mb-1 inline-block mr-[4px]"
                    alt=""
                  />
                  Dublin, Ireland
                </p>
              </div>
            </div>
          </div>
          <div className="flex  gap-[12px] font-semibold text-[14px]  ">
            <div className="p-[6px] rounded-xl flex-1 flex justify-center items-center bg-[#F1F1F2]">
              <h2 className="">Delivered</h2>
            </div>
            <div className="p-[6px] rounded-xl flex-1 flex justify-center items-center bg-[#E9F0FF]">
              <h2 className="text-[#2869FE] ">View Application</h2>
            </div>
          </div>
        </div>
        </div>
      </div >
      <Footer />
      </motion.div>
    </>
  );
};

export default Clipboard;
