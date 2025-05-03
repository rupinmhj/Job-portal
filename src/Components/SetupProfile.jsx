import React from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import images from "../assets/images";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Outlet } from "react-router-dom";
const SetupProfile = () => {
  const navigate = useNavigate();
  const back = () => {
    navigate("/");
  };
  const handleInterest = () => {
    navigate("/setup/interest");
  };
  return (
    <div className=" bg-white lg:px-[232px]  font-urbanist text-[rgb(18, 25, 39)] w-full ">
      <div className="fixed top-0 left-0 right-0 bg-white z-10">
        <div className="flex items-center justify-between px-[24px] lg:px-[252px] py-[16px]">
          <div className="p-[6px] border rounded-lg border-black cursor-pointer">
            <FaAngleLeft
              onClick={back}
              className="text-gray-500  size-[14px]"
            />
          </div>
          <h2 className="text-[20px] font-bold leading-[24px]">
            Set Up Profile
          </h2>
          <h2
            className="text-[15px] font-semibold leading-[18px] cursor-pointer"
            onClick={handleInterest}
          >
            Skip
          </h2>
        </div>
      </div>

      {/* <div className="px-[24px] flex flex-col justify-center items-center">
            <input type="file" />
            <img src={images.profileSetup} className="h-[80.4px] mb-[24px] bg-gray-300 p-1 rounded-xl" alt="" />
            <h2 className="text-[18px] flex justify-center font-bold leading-[22px] pb-[24px] border-b w-full ">Personal Information</h2>
      </div> */}
      <div className="px-[24px] flex flex-col justify-center items-center pt-[67.6px]">
        {/* Hidden file input */}
        <input
          type="file"
          id="fileInput"
          className="hidden "
          onChange={(e) => {
            // Optional: handle selected file preview or upload here
            console.log(e.target.files[0]);
          }}
        />

        {/* Clickable image label */}
        <label htmlFor="fileInput" className="cursor-pointer">
          <img
            src={images.profileSetup}
            className="h-[80.4px] mb-[24px] bg-gray-300 p-1 rounded-xl"
            alt="Upload Profile"
          />
        </label>

        {/* Title */}
        <h2 className="text-[18px] flex justify-center font-bold leading-[22px] pb-[24px] border-b w-full ">
          Personal Information
        </h2>
      </div>

      <div className="px-[24px] mt-[24px] ">
        <form>
          <label
            className="pl-[12px] text-[16px] leading-[19px] font-bold "
            htmlFor=""
          >
            Full Name
          </label>
          <div className="relative mb-[20px]">
            <img
              src={images.profile}
              className="absolute inset-y-7 size-[20px] left-4 "
              alt=""
            />
            <input
              type="text"
              className=" focus:outline-none border shadow-sm rounded-xl mt-[12px] pl-[52px] py-[14px] pr-[20px] w-full"
              placeholder="Type your full name"
            />
          </div>
          <label
            className="pl-[12px] text-[16px] leading-[19px] font-bold  "
            htmlFor=""
          >
            Contact Number
          </label>
          <div className="relative mb-[20px]">
            <img
              src={images.contact}
              className="absolute inset-y-7 size-[20px] left-4 "
              alt=""
            />
            <input
              type="number"
              className=" focus:outline-none border shadow-sm rounded-xl mt-[12px] pl-[52px] py-[14px] pr-[20px] w-full"
              placeholder="Type your phone"
            />
          </div>
          <label
            className="pl-[12px] text-[16px] leading-[19px] font-bold  "
            htmlFor=""
          >
            Date of Birth
          </label>
          <div className="relative mb-[20px]">
            <img
              src={images.calender}
              className="absolute  inset-y-7 size-[20px] left-4 "
              alt=""
            />
            <input
              type="date"
              className="bg-white appearance-none focus:outline-none border shadow-sm rounded-xl mt-[12px] pl-[52px] py-[14px] pr-[20px] w-full"
              placeholder="Type your full name"
            />
          </div>
          <label
            className="pl-[12px] text-[16px] leading-[19px] font-bold"
            htmlFor="gender"
          >
            Gender
          </label>
          <div className="relative pb-[100px]  ">
            <img
              src={images.gender}
              className="absolute inset-y-7 size-[20px] left-4"
              alt="gender icon"
            />
            <select
              id="gender"
              className="appearance-none focus:outline-none border shadow-sm rounded-xl mt-[12px] pl-[52px] py-[14px] pr-[20px] w-full bg-white text-gray-700 transition-all duration-300 ease-in-out"
            >
              {/* <option className="opacity-0 animate-fadeIn">Select your gender</option> */}
              <option className="animate-fadeIn">Male</option>
              <option className="animate-fadeIn">Female</option>
              <option className="animate-fadeIn">Other</option>
            </select>
            <RiArrowDropDownLine className="size-6 text-gray-500 right-4 top-7 absolute" />
          </div>
          <div className="fixed bottom-0 left-0 right-0 bg-white py-4 z-10">
            <div className="px-[24px] lg:px-[252px]">
              <button className="w-full bg-[#2869FE] p-[16px] text-white font-medium rounded-xl">
                Continue
              </button>
            </div>
          </div>
        </form>
      </div>

      <Outlet />
    </div>
  );
};

export default SetupProfile;
