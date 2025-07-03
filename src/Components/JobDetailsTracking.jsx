import React from "react";
import images from "../assets/images";
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { IoTrophy } from "react-icons/io5";

const JobDetailsTracking = () => {
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };

  return (
    <div className="font-urbanist text-custBlackBold dark:text-white bg-sliderBlue dark:bg-[#111d39] h-screen overflow-y-scroll scroll-container">
      {/* Top Blue Header */}
      <div className="bg-sliderBlue dark:bg-[#111d39] h-[30dvh]">
        <div className="fixed left-0 right-0 top-0 bg-sliderBlue dark:bg-[#111d39] z-30">
          <div className="flex justify-between p-[24px] pt-[16px] mx-auto max-w-[1024px]">
            <div onClick={back} className="flex gap-[18px] items-center">
              <div className="h-[30px] w-[30px] border rounded-lg border-white cursor-pointer flex justify-center items-center">
                <FaAngleLeft className="text-white h-[14px] w-[14px]" />
              </div>
            </div>
            <h2 className="text-[20px] font-bold leading-[24px] text-white">
              Applied Job
            </h2>
            <img
              src={images.homewhite}
              className="cursor-pointer"
              onClick={() => navigate("/home")}
              alt=""
            />
          </div>
        </div>

        {/* Job Info Card */}
        <div className="max-w-[1024px] mx-auto px-[24px]">
          <div className="relative bg-white dark:bg-[#1f2a45] text-[#121927] dark:text-white flex p-[16px] mb-[16px] gap-[16px] mt-[70px] rounded-[18px]">
            <div className="flex justify-center items-start">
              <div className="w-[40px] h-[40px] flex justify-center items-center border border-gray-400 dark:border-gray-600 rounded-xl">
                <img src={images.notigoogle} className="size-[24px]" alt="" />
              </div>
            </div>
            <div className="flex flex-col flex-1">
              <span className="text-[15px] leading-[18px] font-semibold">
                Lead Product Designer
              </span>
              <div className="flex mt-[10px] text-google gap-[6px] font-medium leading-[14px] text-[12px]">
                <p>
                  <img src={images.wallet} className="size-[12px] mb-1 inline-block mr-[4px]" alt="" />
                  $6k/month
                </p>
                <p>
                  <img src={images.location} className="size-[12px] mb-1 inline-block mr-[4px]" alt="" />
                  Berlin, Germany
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tracking Section */}
      <div className="bg-white dark:bg-[#1f2a45] relative p-[24px] rounded-t-[40px] z-30">
        <h1 className="text-[18px] leading-[22px] font-bold mb-6 pb-4">
          Track Application
        </h1>

        <div className="pl-2">
          {[
            { title: "Offer letter", date: "Not yet" },
            { title: "Final HR interview", date: "19/09/22", time: "02:00 PM" },
            { title: "Team matching", date: "19/09/22", time: "02:00 PM" },
            { title: "Technical interview", date: "19/09/22", time: "02:00 PM" },
            { title: "Screening interview", date: "19/09/22", time: "02:00 PM" },
            { title: "Reviewed by Google team", date: "19/09/22", time: "02:00 PM" },
            { title: "Application submitted", date: "19/09/22", time: "02:00 PM" },
          ].map((step, idx) => (
            <div key={idx} className="pl-[38px] pb-[23px] flex flex-col">
              <span className="text-[15px] font-semibold mb-2 leading-[18px]">
                {step.title}
              </span>
              {step.time ? (
                <div className="flex gap-7">
                  <span className="leading-[24px] text-[14px] font-medium text-google">
                    {step.date}
                  </span>
                  <span className="leading-[24px] text-[14px] font-medium text-google">
                    {step.time}
                  </span>
                </div>
              ) : (
                <span className="leading-[24px] text-[14px] font-medium text-google">
                  {step.date}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Timeline Line & Icons */}
        <div className="absolute top-[90px]">
          <IoTrophy className="text-sliderBlue size-[24px]" />
          <div className="h-[400px] w-[2px] bg-[#5FCF80] ml-[10px] mt-14"></div>

          <div className="h-[21.6px] absolute top-[70px] w-[21.6px] border border-[#5FCF80] flex justify-center rounded-full items-center">
            <span className="inline-block h-[14px] w-[14px] rounded-full bg-[#5FCF80]"></span>
          </div>

          <div className="absolute top-[142px]">
            {Array.from({ length: 5 }).map((_, i) => (
              <img key={i} src={images.greentick} className="mb-12" alt="tick" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsTracking;
