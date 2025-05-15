import React, { useState } from "react";
import { FaAngleLeft, FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import images from "../assets/images";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const back = () => navigate("/");
  const home=()=>navigate("/");
  const signup=()=>navigate("/signup");
  const verification=()=>navigate("/verification");

  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="bg-white lg:px-[232px] xl:px-[274px] px-[24px] pb-[24px] mb-[35.6px] pt-[16px] font-urbanist text-[#121927] w-full">
        <div className="fixed top-0 left-0 right-0 bg-white z-10">
          <div className="flex items-center justify-between px-[24px] lg:px-[252px] py-[16px]">
            <div onClick={back} className="p-[6px] border rounded-lg border-black cursor-pointer">
              <FaAngleLeft  className="text-gray-500 size-[14px]" />
            </div>
            <h2 className="text-[20px] font-bold leading-[24px]">Forget Password</h2>
            <h2 className="w-[14px]"></h2>
          </div>
        </div>
      </div>

      <div className="bg-white lg:px-[232px] xl:px-[274px] px-[24px] font-urbanist text-[#121927]">
        <div className="w-full">
          
          <div className="w-full mt-[16px]">
            <h2 className="text-[#71757D] text-[14px] leading-[24px] font-medium">
              Please enter your email address to request a password reset
            </h2>
          </div>
        </div>

        {/* Email Field */}
        <div className="mt-[32px] w-full flex flex-col">
          <p className="pl-[12px] text-[16px] font-bold leading-[19px]">Email</p>
          <div className="relative mb-[20px]">
            <img src={images.email} className="absolute inset-y-7 size-[20px] left-4" alt="Email" />
            <input
              type="email"
              className="focus:border-gray-400 focus:outline-none border text-[14px] shadow-sm rounded-xl mt-[12px] pl-[52px] py-[14px] pr-[20px] w-full"
              placeholder="Type your email"
            />
          </div>
        </div>

       

          <button
          onClick={verification}
          className="w-full cursor-pointer bg-[#2869FE] p-[16px] text-[16px] font-bold text-white rounded-xl mt-[20px]"
        >
          Request
        </button>
      </div>
    </>
  );
};

export default ForgetPassword;
