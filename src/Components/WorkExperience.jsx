import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import images from "../assets/images";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const WorkExperience = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const navigate = useNavigate();
  const back = () => navigate(-1);

  return (
    <div className="h-screen overflow-y-scroll scroll-container dark:bg-[#111d39]">
      <div className="text-custBlackBold font-urbanist dark:text-white">
        {/* Navbar */}
        <div className="fixed left-0 right-0 top-0 z-30 bg-white dark:bg-[#111d39]">
          <div className="flex justify-between p-[24px] pt-[16px] mx-auto max-w-[1024px]">
            <div onClick={back} className="flex gap-[18px] items-center justify-between">
              <div className="h-[30px] w-[30px] flex items-center justify-center border rounded-lg border-gray-500 dark:border-white cursor-pointer">
                <FaAngleLeft className="text-gray-500 h-[14px] w-[14px] dark:text-white" />
              </div>
            </div>
            <h2 className="text-[20px] font-bold leading-[24px]">Work Experience</h2>
            <img src={images.home} onClick={() => navigate('/')} className="h-6 w-6 cursor-pointer dark:invert" alt="home" />
          </div>
        </div>

        {/* Profile */}
        <div className="flex mt-[70px] items-center flex-col">
          <img
            src={images.profileSmall}
            className="size-[80.4px] border border-blue-600 rounded-2xl mb-[12px]"
            alt=""
          />
          <h2 className="text-[18px] leading-[22px] font-bold mb-2">Jonathan Smith</h2>
          <h2 className="text-gray-400 text-[12px] leading-[20px] font-medium">jonathansmith@gmail.com</h2>
        </div>

        {/* Form */}
        <div className="max-w-[1024px] mx-auto px-6 mt-[20px]">
          <form>
            {[
              { label: "Company Name", placeholder: "Company Name" },
              { label: "Company Business", placeholder: "Company Business" },
              { label: "Job Title", placeholder: "Job Title" },
              { label: "Department", placeholder: "Department" },
              { label: "Location", placeholder: "Write your location" },
            ].map((field, idx) => (
              <div className="mt-[20px]" key={idx}>
                <label className="pl-[12px] mb-[12px] block text-4 leading-[19px] font-bold">{field.label}</label>
                <input
                  type="text"
                  placeholder={field.placeholder}
                  className="w-full dark:focus:border-gray-200 leading-6 text-[14px] font-medium rounded-xl focus:border-gray-500 focus:outline-none border-[0.5px] py-[14px] px-[20px] dark:bg-[#111d39] dark:text-white dark:border-gray-700"
                />
              </div>
            ))}

            {/* Employment Period */}
            <div className="mt-[20px]">
              <label className="pl-[12px] mb-[12px] block text-4 leading-[19px] font-bold">Employment Period</label>
               <div className="mt-[20px]">
              <div className="flex gap-2 leading-6 text-[14px] font-medium justify-between">
                <div className="relative w-full">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    placeholderText="Start"
                    className="w-full py-[14px] dark:focus:border-gray-200 pl-[52px] pr-[20px] leading-6 text-[14px] font-medium rounded-xl border-[0.5px] px-[20px] focus:outline-none focus:border-gray-500 dark:bg-[#111d39] dark:text-white dark:border-gray-700"
                  />
                  <img src={images.calender} alt="Start" className="absolute top-4 left-[14px] dark:invert" />
                </div>

                <div className="relative w-full flex">
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    placeholderText="End"
                    className="w-full justify-end dark:focus:border-gray-200 py-[14px] pl-[52px] pr-[20px] leading-6 text-[14px] font-medium rounded-xl border-[0.5px] px-[20px] focus:outline-none focus:border-gray-500 dark:bg-[#111d39] dark:text-white dark:border-gray-700"
                  />
                  <img src={images.calender} alt="End" className="absolute top-4 left-[14px] dark:invert" />
                </div>
              </div>
            </div>
            </div>

            {/* Checkbox */}
            <div className="mt-[20px]">
              <label className="leading-[24px] font-medium text-[14px] text-gray-400 flex items-center">
                <input
                  type="checkbox"
                  name="jobStatus"
                  className="mr-4 cursor-pointer size-[17.4px] rounded-[20px]"
                />
                I currently work here
              </label>
            </div>

            {/* Responsibilities */}
            <div className="mt-[20px] mb-[107.6px]">
              <label className="pl-[12px] mb-[12px] block text-4 leading-[19px] font-bold">Responsibilities</label>
              <textarea
                className="w-full dark:focus:border-gray-200 min-h-[150px] leading-6 text-[14px] font-medium rounded-xl focus:border-gray-500 focus:outline-none border-[0.5px] py-[14px] px-[20px] dark:bg-[#111d39] dark:text-white dark:border-gray-700"
                placeholder="About your position"
              ></textarea>
            </div>

            {/* Save Button */}
            <div className="p-6 fixed bottom-0 left-0 right-0 mx-auto max-w-[1024px] bg-white dark:bg-[#111d39]">
              <button
                onClick={() => navigate('/profile')}
                className="p-4 rounded-[16px] w-full text-white text-[16px] leading-[26px] font-bold bg-[#2869FE] hover:bg-[#1752e4] transition-colors"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default WorkExperience;
