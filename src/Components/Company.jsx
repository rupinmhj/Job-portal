import React from "react";
import images from "../assets/images";
import { FaBuilding } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
const Company = () => {
    const navigate=useNavigate();
    const detail=()=>{
      navigate("/details")
    }
  return (
    <div className="lg:mx-[232px] px-[24px] mt-[24px] flex font-urbanist items-center flex-col pb-[100px] bg-bgColor bg-opacity-80 rounded-2xl">
      
      <div className="flex justify-between w-full bg-white  ">
        <h1 className="text-black font-bold text-[18px] leading-[22px] mb-[24px] ">
          Most Popular
        </h1>
        <h4 className="leading-[24px] font-bold text-[14px] text-textSeeAll">
          See all
        </h4>
      </div>
      <div className="flex flex-col w-full mb-[20px]">
        <div className="flex rounded-xl bg-white gap-[16px] p-[12px] justify-between w-full ">
            <img onClick={detail}  src={images.apple} className="cursor-pointer h-[48px] rounded-xl" alt="" />
            <div className="flex-grow flex justify-between">
                <div className="flex-col flex justify-between">
                    <h2 onClick={detail}  className="cursor-pointer text-[18px] font-semibold leading-[26px]">Sr. Product Designer</h2>
                    <span className="flex">
                        <span className="flex gap-[4px]"><FaBuilding className="text-blue-600 mt-[3px] size-[12px]"/><h2 className="text-[12px] text-[#12192799]">Apple</h2></span>
                        <span className="w-[4px] h-[4px] bg-green-600 rounded-full flex leading-[12px] my-[8px] mx-2 "></span>
                        <span className="flex gap-[4px]"><FaLocationDot className="text-blue-600 size-[12px] mt-[3px]"/><h2 className="text-[12px] text-[#12192799]">United States</h2></span>
                    </span>

                </div>

                <div>
                    <img src={images.threeDot} className="mt-3" alt="" />
                </div>
            </div>
        </div>
      </div>

      <div className="flex flex-col w-full mb-[20px]">
        <div className="flex rounded-xl bg-white gap-[16px] p-[12px] justify-between w-full ">
            <img onClick={detail}  src={images.amplitude} className="cursor-pointer h-[48px] rounded-xl" alt="" />
            <div className="flex-grow flex justify-between">
                <div className="flex-col flex justify-between">
                    <h2 onClick={detail}  className="cursor-pointer text-[18px] font-semibold leading-[26px]">Sr. UI/UX Designer</h2>
                    <span className="flex">
                        <span className="flex gap-[4px]"><FaBuilding className="text-blue-600 mt-[3px] size-[12px]"/><h2 className="text-[12px] text-[#12192799]">Amplitude</h2></span>
                        <span className="w-[4px] h-[4px] bg-green-600 rounded-full flex leading-[12px] my-[8px] mx-2 "></span>
                        <span className="flex gap-[4px]"><FaLocationDot className="text-blue-600 size-[12px] mt-[3px]"/><h2 className="text-[12px] text-[#12192799]">Singapore</h2></span>
                    </span>

                </div>

                <div>
                    <img src={images.threeDot} className="mt-3" alt="" />
                </div>
            </div>
        </div>
      </div>

      
      <div className="flex flex-col w-full mb-[20px]">
        <div className="flex rounded-xl bg-white  gap-[16px] p-[12px] justify-between w-full ">
            <img src={images.adobe} onClick={detail}  className="cursor-pointer h-[48px] rounded-xl" alt="" />
            <div className="flex-grow flex justify-between">
                <div className="flex-col flex justify-between">
                    <h2 onClick={detail}  className="cursor-pointer text-[18px] font-semibold leading-[26px]">Software Developer</h2>
                    <span className="flex">
                        <span className="flex gap-[4px]"><FaBuilding className="text-blue-600 mt-[3px] size-[12px]"/><h2 className="text-[12px] text-[#12192799]">Adobe</h2></span>
                        <span className="w-[4px] h-[4px] bg-green-600 rounded-full flex leading-[12px] my-[8px] mx-2 "></span>
                        <span className="flex gap-[4px]"><FaLocationDot className="text-blue-600 size-[12px] mt-[3px]"/><h2 className="text-[12px] text-[#12192799]">`New York City</h2></span>
                    </span>

                </div>

                <div>
                    <img src={images.threeDot} className="mt-3" alt="" />
                </div>
            </div>
        </div>
      </div>

      <div className="flex flex-col w-full mb-[20px]">
        <div className="flex rounded-xl bg-white gap-[16px] p-[12px] justify-between w-full ">
            <img onClick={detail}  src={images.wings} className="cursor-pointer h-[48px] rounded-xl" alt="" />
            <div className="flex-grow flex justify-between">
                <div className="flex-col flex justify-between">
                    <h2 onClick={detail}  className="cursor-pointer text-[18px] font-semibold leading-[26px]">Lead Digital Marketar</h2>
                    <span className="flex">
                        <span className="flex gap-[4px]"><FaBuilding className="text-blue-600 mt-[3px] size-[12px]"/><h2 className="text-[12px] text-[#12192799]">wings</h2></span>
                        <span className="w-[4px] h-[4px] bg-green-600 rounded-full flex leading-[12px] my-[8px] mx-2 "></span>
                        <span className="flex gap-[4px]"><FaLocationDot className="text-blue-600 size-[12px] mt-[3px]"/><h2 className="text-[12px] text-[#12192799]">Anywhere (Remote)</h2></span>
                    </span>

                </div>

                <div>
                    <img src={images.threeDot} className="mt-3" alt="" />
                </div>
            </div>
        </div>
      </div>
      <div className="flex flex-col w-full mb-[20px] ">
        <div className="flex gap-[16px] p-[12px] justify-between w-full bg-white rounded-xl">
            <img onClick={detail}  src={images.airbnb} className=" cursor-pointer h-[48px] rounded-xl" alt="" />
            <div className="flex-grow flex justify-between">
                <div className="flex-col flex justify-between">
                    <h2 onClick={detail}  className="text-[18px] cursor-pointer  font-semibold leading-[26px]">Full Stack Developer</h2>
                    <span className="flex">
                        <span className="flex gap-[4px]"><FaBuilding className="text-blue-600 mt-[3px] size-[12px]"/><h2 className="text-[12px] text-[#12192799]">Airbnb</h2></span>
                        <span className="w-[4px] h-[4px] bg-green-600 rounded-full flex leading-[12px] my-[8px] mx-2 "></span>
                        <span className="flex gap-[4px]"><FaLocationDot className="text-blue-600 size-[12px] mt-[3px]"/><h2 className="text-[12px] text-[#12192799]">United Kingdom</h2></span>
                    </span>

                </div>

                <div>
                    <img src={images.threeDot} className="mt-3" alt="" />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
