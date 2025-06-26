import React from "react";
import images from "../assets/images";
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import {  motion } from "framer-motion";

const MessageInbox = () => {
  const navigate = useNavigate();
  const back = () => {
    navigate("/message");
  };
  return (
       <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, delay: 0.15 }}
      className="h-screen overflow-y-scroll font-urbanist"
    >
       <div className="bg-[#F7F9FF] h-[100dvh] font-urbanist">
      <div className="fixed left-0 right-0 top-0">
        <div className="bg-white max-w-[1024px] flex p-[24px] pt-[16px] justify-between items-center mx-auto">
          <div
            onClick={back}
            className="flex gap-[18px] items-center justify-between"
          >
            <div className="h-[23px] flex justify-center items-center w-[23px] border rounded-lg border-gray-500 cursor-pointer">
              <FaAngleLeft className="text-gray-500  h-[14px] w-[14px]" />
            </div>
            <div className="relative">
              <img
                src={images.messenger5}
                className=" h-[44px] w-[44px] flex-shrink-0 border-green-400 border-2 rounded-full"
                alt=""
              />
              <div className="absolute h-3 w-3 rounded-full bg-green-400 outline-none  top-8  z-10 right-0"></div>
            </div>

            <div className="flex flex-col gap-[2px]">
              <h1 className="text-[15px] leading-[18px] font-semibold">
                Sonu Nigam
              </h1>
              <h2 className="text-[11px] leading-[20px] font-medium text-google">
                Online
              </h2>
            </div>
          </div>

          <div className="flex gap-3 items-center">
            <img src={images.call} alt="" />
            <img src={images.videocall} alt="" />
            <img src={images.threeDot} className="h-5" alt="" />
          </div>
        </div>
      </div>

      <div className="p-[24px] pb-[94px] pt-[108px] max-w-[1024px] mx-auto">
        <div className="flex gap-4 items-center mb-[20px]">
          <div className="h-[2px] flex-1 bg-gray-100"></div>
          <h2 className="text-[14px] leading-[24px] font-medium text-google">
            Today
          </h2>
          <div className="h-[2px] flex-1 bg-gray-100"></div>
        </div>
        <div className="flex flex-col w-full items-end mb-5">
          <span className="mr-4 mb-[5px] text-[10px] font-medium leading-[12px] text-google">
            11:19 AM
          </span>
          <span className="text-[12px] leading-[14px] font-medium text-white py-[14px] pl-[31px] pr-[16px] bg-sliderBlue rounded-t-[100px] rounded-b-[100px] rounded-tr-[30px]">
            Did you watch Raw last night?
          </span>
        </div>

        <div className="flex flex-col w-full items-start mb-5">
          <span className="ml-4 mb-[5px] text-[10px] font-medium leading-[12px] text-google">
            11:23 AM
          </span>
          <span className="text-[12px] leading-[14px] font-medium  py-[14px] pr-[31px] pl-[16px] bg-white rounded-t-[100px] rounded-bl-[30px] rounded-br-[100px]">
            Did you watch Raw last night?
          </span>
        </div>

        <div className="flex flex-col w-full items-end mb-5">
          <span className="mr-4 mb-[5px] text-[10px] font-medium leading-[12px] text-google">
            11:25 AM
          </span>
          <span className="text-[12px] leading-[14px] font-medium text-white py-[14px] pl-[31px] pr-[16px] bg-sliderBlue rounded-t-[100px] rounded-b-[100px] rounded-tr-[30px]">
            Roman still undefeated, bro!
          </span>
        </div>

        <div className="flex flex-col w-full items-start mb-5">
          <span className="ml-4 mb-[5px] text-[10px] font-medium leading-[12px] text-google">
            11:30 AM
          </span>
          <span className="text-[12px] leading-[14px] font-medium  py-[14px] pr-[31px] pl-[16px] bg-white rounded-t-[100px] rounded-bl-[30px] rounded-br-[100px]">
            Acknowledge the Tribal Chief! 🔥
          </span>
        </div>

        <div className="flex flex-col w-full items-end mb-5">
          <span className="mr-4 mb-[5px] text-[10px] font-medium leading-[12px] text-google">
            11:35 AM
          </span>
          <span className="text-[12px] leading-[14px] font-medium text-white py-[14px] pl-[31px] pr-[16px] bg-sliderBlue rounded-t-[100px] rounded-b-[100px] rounded-tr-[30px]">
            WrestleMania was insane this year!
          </span>
        </div>
        <div className="flex flex-col w-full items-start mb-5">
          <span className="ml-4 mb-[5px] text-[10px] font-medium leading-[12px] text-google">
            11:40 AM
          </span>
          <span className="text-[12px] leading-[14px] font-medium  py-[14px] pr-[31px] pl-[16px] bg-white rounded-t-[100px] rounded-bl-[30px] rounded-br-[100px]">
            Logan Paul actually impressed me.
          </span>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0">
        <div className="relative flex bg-white  mx-auto justify-center items-center max-w-[1024px]">
          <img
            src={images.attachfile}
            alt=""
            className="absolute left-[14px] top-[22px] z-50"
          />
          <input
            type="text"
            placeholder="Type message"
            className="w-full  text-gray-700 outline-none text-[14px] py-[24px] pl-[99px] pr-[80px] "
          />
          <img
            src={images.emoji}
            alt=""
            className="absolute left-[54px] top-[22px] z-50"
          />
          <img
            src={images.sent}
            className="absolute right-[34px] top-[22px]"
            alt=""
          />
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0">
        <div className="relative flex bg-white  mx-auto justify-center items-center max-w-[1024px]">
          <img
            src={images.attachfile}
            alt=""
            className="absolute left-[14px] top-[22px] z-50 cursor-pointer"
          />
          <input
            type="text"
            placeholder="Type message"
            className="w-full text-gray-700 outline-none text-[14px] py-[24px] pl-[99px] pr-[80px] "
          />
          <img
            src={images.emoji}
            alt=""
            className="absolute left-[54px] top-[22px] z-50"
          />
          <img
            src={images.sent}
            className="absolute right-[34px] top-[22px]"
            alt=""
          />
        </div>
      </div>
    </div>

    </motion.div>
   
  );
};

export default MessageInbox;
