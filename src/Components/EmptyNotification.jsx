import React from 'react'
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import images from "../assets/images";

const EmptyNotification = () => {
  const navigate = useNavigate();
  const back = () => navigate(-1);

  return (
    <div className="font-urbanist max-w-[1024px] mx-auto bg-white dark:bg-[#111d39] min-h-screen text-[#121927] dark:text-white">
      {/* Header */}
      <div className="fixed left-0 right-0 top-0 z-30">
        <div className="flex justify-between items-center bg-white dark:bg-[#111d39] p-[24px] pt-[16px] mx-auto max-w-[1024px]">
          <div
            onClick={back}
            className="flex gap-[18px] items-center justify-between"
          >
            <div className="h-[30px] w-[30px] flex justify-center items-center border rounded-lg border-gray-500 dark:border-white cursor-pointer">
              <FaAngleLeft className="text-gray-500 dark:text-white h-[14px] w-[14px]" />
            </div>
          </div>
          <h2 className="text-[20px] font-bold leading-[24px]">Education</h2>
          <img src={images.search} className="h-[17px] w-[17px]" alt="search" />
        </div>
      </div>

      {/* Content */}
      <div className="my-[250px] gap-[40px] flex flex-col justify-center items-center px-6">
        <img src={images.cat} alt="no notification" />
        <div className="flex flex-col gap-[10px] justify-center items-center">
          <p className="leading-9 text-[24px] font-bold">There is No Notification</p>
          <div className="flex flex-col items-center md:items-start">
            <p className="text-[14px] leading-6 font-medium text-google text-center dark:text-white/70">
              You'll be notified about activity on tasks you are a collaborator on.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyNotification;
