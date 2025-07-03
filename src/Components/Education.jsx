import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import images from "../assets/images";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Education = () => {
  const [startDate, setStartDate] = useState(null);
  const navigate = useNavigate();
  const back = () => navigate(-1);

  return (
    <div className="h-screen overflow-y-scroll scroll-container font-urbanist dark:bg-[#111d39]">
      <div className="text-custBlackBold font-urbanist dark:text-white">
        {/* Navbar */}
        <div className="fixed left-0 right-0 top-0 z-30 bg-white dark:bg-[#111d39]">
          <div className="flex justify-between p-[24px] pt-[16px] mx-auto max-w-[1024px] items-center">
            <div onClick={back} className="flex gap-[18px] items-center justify-between">
              <div className="h-[30px] w-[30px] flex justify-center items-center border rounded-lg border-gray-500 dark:border-white cursor-pointer">
                <FaAngleLeft className="text-gray-500 h-[14px] w-[14px] dark:text-white" />
              </div>
            </div>
            <h2 className="text-[20px] font-bold leading-[24px]">Education</h2>
            <img src={images.home} onClick={() => navigate('/')} className="h-6 w-6 cursor-pointer dark:invert" alt="home" />
          </div>
        </div>

        {/* Profile Section */}
        <div className="flex mt-[70px] items-center flex-col">
          <img src={images.profileSmall} className="size-[81.4px] border border-blue-600 rounded-2xl mb-[12px]" alt="Profile" />
          <h2 className="text-[18px] leading-[22px] font-bold mb-2">Jonathan Smith</h2>
          <h2 className="text-google text-[12px] leading-[20px] font-medium">jonathansmith@gmail.com</h2>
        </div>

        {/* Form Section */}
        <div className="max-w-[1024px] mx-auto px-6 mt-[20px]">
          <form>
            {[
              { label: "Level of Education", placeholder: "Level" },
              { label: "Exam/Degree Title", placeholder: "Exam/Degree Title" },
              { label: "Major", placeholder: "Major" },
              { label: "Institute Name", placeholder: "Institute Name" },
              { label: "Result", placeholder: "Result" },
            ].map((field, idx) => (
              <div className="mt-[20px]" key={idx}>
                <label className="pl-[12px] mb-[12px] block text-4 leading-[19px] font-bold">{field.label}</label>
                <input
                  type="text"
                  placeholder={field.placeholder}
                  className="w-full leading-6 dark:focus:border-gray-200 text-[14px] font-medium rounded-xl border-[0.5px] py-[14px] px-[20px] focus:outline-none focus:border-gray-500 dark:bg-[#111d39] dark:text-white dark:border-gray-700"
                />
              </div>
            ))}

            {/* Year of Passing */}
            <div className="mt-[20px] pb-[107.6px] w-full">
              <label className="pl-[12px] mb-[12px] block text-4 leading-[19px] font-bold">Year of Passing</label>
              <div className="leading-6 text-[14px] w-full font-medium">
                <div className="relative w-full">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    placeholderText="Year of Passing"
                    wrapperClassName="w-full block"
                    className="block dark:focus:border-gray-200 w-full py-[14px] pl-[52px] pr-[20px] leading-6 text-[14px] font-medium rounded-xl border-[0.5px] px-[20px] focus:outline-none focus:border-gray-500 dark:bg-[#111d39] dark:text-white dark:border-gray-700"
                  />
                  <img
                    src={images.calender}
                    alt="calendar"
                    className="absolute top-4 left-[14px] dark:invert"
                  />
                </div>
              </div>
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

export default Education;
