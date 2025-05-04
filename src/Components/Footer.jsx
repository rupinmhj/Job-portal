import React from "react";
import images from "../assets/images";
const Footer = () => {
  return (
    <div>
      <div className="lg:px-[232px] flex px-[24px] py-[24px] h-[72px]  w-full fixed bottom-0 bg-white rounded-t-2xl z-10">
        <div className="w-full relative ">
          <div className="flex  lg:gap-20 gap-20 justify-between w-full px-4  flex-grow ">
            <img src={images.home} className="cursor-pointer" alt="" />
            <img
              src={images.clipboard}
              className="xl:pr-40 lg:pr-30 pr-18 cursor-pointer"
              alt=""
            />

            <img
              src={images.message}
              className="xl:pl-40 lg:pr-30 pl-18 cursor-pointer"
              alt=""
            />
            <img src={images.profile} className="cursor-pointer" alt="" />
          </div>
          <div className="flex p-2 rounded-full bg-white bottom-0 left-1/2 -translate-x-1/2  absolute">
            <button className="flex items-center justify-center bg-[#2869FE] h-[60px] w-[60px] text-[24px] font-normal text-white  rounded-full ">
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
