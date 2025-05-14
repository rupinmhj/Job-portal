import React from "react";
import images from "../assets/images";
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { IoTrophy } from "react-icons/io5";
const JobDetailsTracking = () => {
  const navigate = useNavigate();
  const back = () => {
    navigate("/");
  };
  return (
    <div className="font-urbanist text-custBlackBold bg-sliderBlue h-screen overflow-y-scroll scroll-container">
        <div className="bg-sliderBlue h-[30dvh]">
             <div className="fixed left-0 right-0 top-0 bg-sliderBlue outline-none z-30">
        <div className="flex justify-between p-[24px] pt-[16px] mx-auto max-w-[1024px]">
          <div
            onClick={back}
            className="flex gap-[18px] items-center justify-between"
          >
            <div className="h-[30px] flex justify-center items-center w-[30px] border rounded-lg border-white cursor-pointer">
              <FaAngleLeft className="text-white h-[14px] w-[14px]" />
            </div>
          </div>
          <h2 className="text-[20px] font-bold leading-[24px] text-white">
            Applied Job
          </h2>

          <img src={images.homewhite} onClick={()=>navigate('/')} alt="" />
        </div>
      </div>
      <div className="max-w-[1024px] mx-auto px-[24px] ">
        <div className="relative bg-white flex p-[16px] mb-[16px] gap-[16px] mt-[70px] rounded-[18px]">
        <div className="flex    justify-center items-start  ">
          <div className="w-[40px] h-[40px] flex justify-center items-center border border-gray-400 rounded-xl">
            <img src={images.notigoogle} className="size-[24px]" alt="" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          
          <span className="text-[15px] leading-[18px] font-semibold">
            Lead Product Designer
          </span>

          <div className="flex mt-[10px] text-google gap-[6px] font-medium leading-[14px] text-[12px]">
            <p className="">
              <img
                src={images.wallet}
                className="size-[12px] mb-1 inline-block mr-[4px]"
                alt=""
              />
              $6k/month
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
      </div>
      
        </div>

           
        <div className="bg-white relative p-[24px] rounded-t-[40px] z-30">
            <h1 className="text-[18px] leading-[22px] font-bold mb-6 pb-4">Track Application</h1>
            <div className="pl-2">
                <div className="pl-[38px] pb-[23px] flex flex-col">
                    <span className="text-[15px] font-semibold mb-2 leading-[18px]">Offer letter</span>
                    <span className="leading-[24px] text-[14px] font-medium text-google">Not yet</span>
                </div>
                <div className="pl-[38px] pb-[23px] flex flex-col">
                    <span className="text-[15px] font-semibold mb-2 leading-[18px]">Final HR interview</span>
                    <div className="flex gap-7">

                    <span className="leading-[24px] text-[14px] font-medium text-google">19/09/22</span>
                    <span className="leading-[24px] text-[14px] font-medium text-google">02:00 PM</span>
                    </div>
                </div>
                <div className="pl-[38px] pb-[23px] flex flex-col">
                    <span className="text-[15px] font-semibold mb-2 leading-[18px]">Team matching</span>
                    <div className="flex gap-7">

                    <span className="leading-[24px] text-[14px] font-medium text-google">19/09/22</span>
                    <span className="leading-[24px] text-[14px] font-medium text-google">02:00 PM</span>
                    </div>
                </div>
                <div className="pl-[38px] pb-[23px] flex flex-col">
                    <span className="text-[15px] font-semibold mb-2 leading-[18px]">Technical interview</span>
                    <div className="flex gap-7">

                    <span className="leading-[24px] text-[14px] font-medium text-google">19/09/22</span>
                    <span className="leading-[24px] text-[14px] font-medium text-google">02:00 PM</span>
                    </div>
                </div>
                <div className="pl-[38px] pb-[23px] flex flex-col">
                    <span className="text-[15px] font-semibold mb-2 leading-[18px]">Screening interview</span>
                    <div className="flex gap-7">

                    <span className="leading-[24px] text-[14px] font-medium text-google">19/09/22</span>
                    <span className="leading-[24px] text-[14px] font-medium text-google">02:00 PM</span>
                    </div>
                </div>
                <div className="pl-[38px] pb-[23px] flex flex-col">
                    <span className="text-[15px] font-semibold mb-2 leading-[18px]">Reviewed by Google team</span>
                    <div className="flex gap-7">

                    <span className="leading-[24px] text-[14px] font-medium text-google">19/09/22</span>
                    <span className="leading-[24px] text-[14px] font-medium text-google">02:00 PM</span>
                    </div>
                </div>
                <div className="pl-[38px] pb-[23px] flex flex-col">
                    <span className="text-[15px] font-semibold mb-2 leading-[18px]">Application submitted</span>
                    <div className="flex gap-7">

                    <span className="leading-[24px] text-[14px] font-medium text-google">19/09/22</span>
                    <span className="leading-[24px] text-[14px] font-medium text-google">02:00 PM</span>
                    </div>
                </div>
            </div>
            <div className="absolute top-[90px]">
                <IoTrophy className="text-sliderBlue size-[24px]" />
                <div className="h-[400px] w-[2px] bg-[#5FCF80] ml-[10px] mt-14"></div>
                <div className="h-[21.6px] absolute top-[70px] w-[21.6px] border border-[#5FCF80] flex justify-center rounded-full items-center">
                    <span className="inline-block   h-[14px] w-[14px] rounded-full bg-[#5FCF80]"></span>
                </div>
                <div className="absolute top-[142px]">
                    <img src={images.greentick} className="mb-12" alt="" />
                    <img src={images.greentick}className="mb-12" alt="" />
                    <img src={images.greentick}className="mb-12" alt="" />
                    <img src={images.greentick}className="mb-12" alt="" />
                    <img src={images.greentick}className="mb-12" alt="" />
                </div>
            </div>
        </div>
    </div>
  );
};

export default JobDetailsTracking;
