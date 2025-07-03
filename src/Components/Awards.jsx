import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import images from "../assets/images";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Awards = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const navigate = useNavigate();
  const back = () => navigate(-1);

  return (
    <div className="h-screen overflow-y-scroll scroll-container dark:bg-[#111d39] font-urbanist">
      <div className="text-custBlackBold font-urbanist dark:text-white">
        {/* Header */}
        <div className="fixed left-0 right-0 top-0 z-30 bg-white dark:bg-[#111d39]">
          <div className="flex items-center justify-between p-[24px] pt-[16px] mx-auto max-w-[1024px]">
            <div onClick={back} className="flex gap-[18px] items-center justify-between">
              <div className="h-[30px] w-[30px] flex justify-center items-center border rounded-lg border-gray-500 dark:border-white cursor-pointer">
                <FaAngleLeft className="text-gray-500 h-[14px] w-[14px] dark:text-white" />
              </div>
            </div>
            <h2 className="text-[20px] font-bold leading-[24px]">Awards</h2>
            <img src={images.home} onClick={() => navigate('/home')} className="h-6 w-6 cursor-pointer dark:invert" alt="home" />
          </div>
        </div>

        {/* Profile */}
        <div className="flex mt-[70px] items-center flex-col">
          <img src={images.profileSmall} className="size-[80.4px] border border-blue-600 rounded-2xl mb-[12px]" alt="Profile" />
          <h2 className="text-[18px] leading-[22px] font-bold mb-2">Jonathan Smith</h2>
          <h2 className="text-gray-400 text-[12px] leading-[20px] font-medium">jonathansmith@gmail.com</h2>
        </div>

        {/* Form */}
        <div className="max-w-[1024px] mx-auto px-6 mt-[20px]">
          <form>
            {/* Title */}
            <div>
              <label className="pl-[12px] mb-[12px] block text-4 leading-[19px] font-bold">Title</label>
              <input
                className="w-full leading-6 text-[14px] font-medium rounded-xl border-[0.5px] py-[14px] px-[20px] focus:outline-none focus:border-gray-500 dark:focus:border-gray-200 dark:bg-[#111d39] dark:text-white dark:border-gray-700"
                type="text"
                placeholder="Title"
              />
            </div>

            {/* Date Range */}
            <div className="mt-[20px]">
              <div className="flex gap-2 leading-6 text-[14px] font-medium justify-between">
                <div className="relative w-full">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    placeholderText="Start"
                    className="w-full py-[14px] pl-[52px] pr-[20px] leading-6 text-[14px] font-medium rounded-xl border-[0.5px] px-[20px] focus:outline-none dark:focus:border-gray-200 focus:border-gray-500 dark:bg-[#111d39] dark:text-white dark:border-gray-700"
                  />
                  <img src={images.calender} alt="Start" className="absolute top-4 left-[14px] dark:invert" />
                </div>

                <div className="relative w-full flex">
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    placeholderText="End"
                    className="w-full justify-end py-[14px] pl-[52px] pr-[20px] leading-6 text-[14px] dark:focus:border-gray-200 font-medium rounded-xl border-[0.5px] px-[20px] focus:outline-none focus:border-gray-500 dark:bg-[#111d39] dark:text-white dark:border-gray-700"
                  />
                  <img src={images.calender} alt="End" className="absolute top-4 left-[14px] dark:invert" />
                </div>
              </div>
            </div>

            {/* Checkbox */}
            <div className="flex mt-[12px] gap-2">
              <input type="checkbox" className="accent-[#2869FE]" />
              <p className="leading-6 text-[14px] font-medium text-gray-500 dark:text-gray-300">Doesn't Expire</p>
            </div>

            {/* Description */}
            <div className="mt-[20px] mb-[107.6px]">
              <label className="pl-[12px] mb-[12px] block text-4 leading-[19px] font-bold">Description</label>
              <textarea
                className="w-full leading-6 dark:focus:border-gray-200 text-[14px] font-medium rounded-xl border-[0.5px] py-[14px] px-[20px] min-h-[35px] focus:outline-none focus:border-gray-500 dark:bg-[#111d39] dark:text-white dark:border-gray-700"
                placeholder="About your details"
              ></textarea>
            </div>

            {/* Save Button */}
            <div className="p-6 fixed bottom-0 left-0 right-0 mx-auto max-w-[1024px] bg-white dark:bg-[#111d39]">
              <button
                className="p-4 rounded-[16px] w-full text-white text-[16px] leading-[26px] font-bold bg-[#2869FE] hover:bg-[#1752e4] transition-colors"
                onClick={() => navigate('/profile')}
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

export default Awards;
