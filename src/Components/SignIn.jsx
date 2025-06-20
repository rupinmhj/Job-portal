import React, { useState } from "react";
import { FaAngleLeft, FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import images from "../assets/images";

const SignIn = () => {
  const navigate = useNavigate();
  const back = () => navigate("/");
  const home=()=>navigate("/home");
  const signup=()=>navigate("/signup");

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
            <h2 className="text-[20px] font-bold leading-[24px]">Sign In</h2>
            <h2 className="w-[14px]"></h2>
          </div>
        </div>
      </div>

      <div className="bg-white lg:px-[232px] xl:px-[274px] px-[24px] font-urbanist text-[#121927]">
        <div className="w-full">
          <img src={images.logolight} className="w-[117px] h-[32px]" alt="Logo" />
          <div className="w-full mt-[16px]">
            <h2 className="text-[#71757D] text-[14px] leading-[24px] font-medium">
              Give credential to sign in your account
            </h2>
          </div>
        </div>

        {/* Email Field */}
        <div className="mt-[32px] w-full flex flex-col">
          <p className="pl-[12px] text-[16px] font-bold leading-[19px]">Email  <span className="text-red-500">*</span></p>

          <div className=" relative mb-[20px]">
            <img src={images.email} className="absolute inset-y-7 size-[20px] left-4" alt="Email" />
            <input
              type="email"
              className="focus:outline-none border focus:border-gray-400 text-[14px] shadow-sm rounded-xl mt-[12px] pl-[52px] py-[14px] pr-[20px] w-full"
              placeholder="Type your email"
            />
           
          </div>
        </div>

        {/* Password Field */}
        <div className="mt-[10px] w-full flex flex-col">
          <p className="pl-[12px] text-[16px] font-bold leading-[19px]">Password  <span className="text-red-500">*</span></p>
          <div className="relative mb-[20px]">
            <img src={images.password} className="absolute z-20 inset-y-7 size-[20px] left-4" alt="Password" />
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full focus:border-gray-400  focus:outline-none border text-[14px] shadow-sm rounded-xl mt-[12px] pl-[52px] py-[14px] pr-[45px]"
                placeholder="Type your password"
              />
              <span
                className="absolute right-4 top-[42%] transform -translate-y-1/2 cursor-pointer text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaRegEye size={20} className="mt-4" /> : <FaRegEyeSlash size={20} className="mt-4"/>}
              </span>
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center gap-2 mb-[20px]">
            <input
              type="checkbox"
              id="checkRemember"
              checked={remember}
              onChange={() => setRemember(!remember)}
              className="w-4 h-4 text-[#2869FE] rounded border-gray-300 focus:ring-blue-500 cursor-pointer"
            />
            <label htmlFor="checkRemember" className="text-sm text-[#71757D]">
              Remember me
            </label>
          </div>

          <p className="text-blue-600 font-semibold text-[14px] leading-[24px] cursor-pointer" onClick={()=>navigate('/forgetpassword')}>
            Forgot Password?
          </p>
        </div>

        <button onClick={home} className="w-full cursor-pointer bg-[#2869FE] p-[16px] text-[16px] font-bold text-white rounded-xl mt-[40px]">
          Sign In
        </button>

        <div className="flex text-[#71757D] w-full my-[35px] justify-center">
          or continue with
        </div>

        {/* Social Logins */}
        <div className="flex justify-center gap-[16px]">
          <div className="items-center rounded-lg cursor-pointer border border-gray-200 shadow-sm h-[52px] w-[80px] flex justify-center">
            <img src={images.facebook} className="w-[24px] h-[24px]" alt="Facebook" />
          </div>
          <div className="items-center rounded-lg cursor-pointer border border-gray-200 shadow-sm h-[52px] w-[80px] flex justify-center">
            <img src={images.googlelogo} className="w-[24px] h-[24px]" alt="Google" />
          </div>
          <div className="items-center rounded-lg cursor-pointer border border-gray-200 shadow-sm h-[52px] w-[80px] flex justify-center">
            <img src={images.apple} className="w-[24px] h-[24px]" alt="Apple" />
          </div>
        </div>

        <div onClick={signup} className="flex mt-[35px] justify-center mb-4">
          <p className="text-[#71757D] text-[14px] font-medium leading-[24px]">
            Don't have an account?
            <span className="text-[#2869FE] cursor-pointer"> Sign Up</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignIn;
