import React, { useState } from "react";
import { FaAngleLeft, FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import images from "../assets/images";

const ResetPassword = () => {
  const navigate = useNavigate();
  const back = () => navigate(-1);

  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      {/* Header */}
      <div className="bg-white dark:bg-[#111d39] lg:px-[232px] xl:px-[274px] px-[24px] pb-[24px] mb-[35.6px] pt-[16px] font-urbanist text-[#121927] dark:text-white w-full">
        <div className="fixed top-0 left-0 right-0 bg-white dark:bg-[#111d39] z-10">
          <div className="flex items-center justify-between px-[24px] lg:px-[252px] py-[16px]">
            <div
              onClick={back}
              className="p-[6px] border rounded-lg border-black dark:border-white cursor-pointer"
            >
              <FaAngleLeft className="text-gray-500 dark:text-white size-[14px]" />
            </div>
            <h2 className="text-[20px] font-bold leading-[24px]">Reset Password</h2>
            <h2 className="w-[14px]"></h2>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="bg-white dark:bg-[#111d39] lg:px-[232px] xl:px-[274px] px-[24px] font-urbanist text-[#121927] dark:text-white min-h-screen">
        <div className="w-full mt-[16px]">
          <h2 className="text-[#71757D] dark:text-white/70 text-[14px] leading-[24px] font-medium">
            Please enter your email address to request a password reset
          </h2>
        </div>

        {/* Password */}
        <div className="mt-[10px] w-full flex flex-col">
          <p className="pl-[12px] text-[16px] font-bold leading-[19px]">Password</p>
          <div className="relative mb-[20px]">
            <img
              src={images.password}
              className="absolute z-20 inset-y-7 size-[20px] left-4"
              alt="Password"
            />
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full focus:border-gray-400 focus:outline-none border text-[14px] shadow-sm rounded-xl mt-[12px] pl-[52px] py-[14px] pr-[45px] dark:bg-[#1f2a45] dark:border-gray-600 dark:text-white"
                placeholder="Type your password"
              />
              <span
                className="absolute right-4 top-[42%] transform -translate-y-1/2 cursor-pointer text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FaRegEye size={20} className="mt-4" />
                ) : (
                  <FaRegEyeSlash size={20} className="mt-4" />
                )}
              </span>
            </div>
          </div>
        </div>

        {/* Confirm Password */}
        <div className="mt-[10px] w-full flex flex-col">
          <p className="pl-[12px] text-[16px] font-bold leading-[19px]">Confirm Password</p>
          <div className="relative mb-[20px]">
            <img
              src={images.password}
              className="absolute z-20 inset-y-7 size-[20px] left-4"
              alt="Password"
            />
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full focus:border-gray-400 focus:outline-none border text-[14px] shadow-sm rounded-xl mt-[12px] pl-[52px] py-[14px] pr-[45px] dark:bg-[#1f2a45] dark:border-gray-600 dark:text-white"
                placeholder="Type your password"
              />
              <span
                className="absolute right-4 top-[42%] transform -translate-y-1/2 cursor-pointer text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FaRegEye size={20} className="mt-4" />
                ) : (
                  <FaRegEyeSlash size={20} className="mt-4" />
                )}
              </span>
            </div>
          </div>
        </div>

        {/* Submit */}
        <button
          onClick={() => navigate('/signin')}
          className="w-full cursor-pointer bg-[#2869FE] p-[16px] text-[16px] font-bold text-white rounded-xl mt-[40px]"
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default ResetPassword;
