import React from 'react'
import images from '../assets/images'
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const SkillTest = () => {
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };

  return (
    <div className="font-urbanist h-[90dvh] bg-sliderBlue  text-custBlackBold dark:text-white">
      {/* Top Navbar */}
      <div className="fixed left-0 right-0 top-0 bg-sliderBlue  outline-none z-30">
        <div className="flex justify-between p-[24px] pt-[16px] mx-auto max-w-[1024px]">
          <div
            onClick={back}
            className="flex gap-[18px] items-center justify-between"
          >
            <div className="h-[30px] w-[30px] border rounded-lg border-white flex justify-center items-center cursor-pointer">
              <FaAngleLeft className="text-white h-[14px] w-[14px]" />
            </div>
          </div>
          <h2 className="text-[20px] font-bold leading-[24px] text-white">
            Skill Test
          </h2>
          <img
            src={images.homewhite}
            alt=""
            className="cursor-pointer"
            onClick={() => navigate('/home')}
          />
        </div>
      </div>

      {/* Info Section */}
      <div className="px-6 pb-[100px]  mx-auto max-w-[1024px] outline-none text-white flex gap-[12px] mt-[69px]">
        <div className="flex-1 flex flex-col">
          <span className="text-[18px] leading-[22px] font-bold">Recent Searches</span>
          <span className="font-medium text-[14px] leading-[24px] mt-[6px] text-white text-opacity-60 dark:text-gray-200">
            Explore yourself with Newbie Future Skill Assessment from Jobfinder
          </span>
        </div>
        <div className="flex justify-center items-center bg-white bg-opacity-40 dark:bg-opacity-20 rounded-xl h-[40px] w-[40px]">
          <img src={images.option2} className="z-40" alt="" />
        </div>
      </div>

      {/* Bottom Card Section */}
      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-[#111d39] pt-24 rounded-t-[40px]">
        <div className="rounded-t-[30px] flex flex-col justify-center items-center">
          <img src={images.Illustration} alt="Empty Test Illustration" />
          <h1 className="text-[24px] leading-[36px] font-bold mb-2">Empty Test</h1>
          <p className="font-medium text-google text-[14px] leading-[24px] dark:text-gray-400">
            You haven't done the self test, start the
          </p>
          <p className="font-medium text-google text-[14px] leading-[24px] dark:text-gray-400">
            skill assessment to see your interest
          </p>
        </div>

        <div className="p-[24px]">
          <button
            className="w-full flex justify-center items-center p-4 cursor-pointer bg-[#2869FE] text-white rounded-[16px] font-bold"
            onClick={() => navigate('/skillassessment')}
          >
            Start Skill Assessment
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkillTest;
