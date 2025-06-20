import React from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import images from "../assets/images";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

const Education = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };
  return (
    <div className="h-screen overflow-y-scroll scroll-container font-urbanist">
      <div className="text-custBlackBold font-urbanist">
        <div className="fixed left-0 right-0 top-0 outline-none z-30">
          <div className="flex bg-white justify-between p-[24px] pt-[16px] mx-auto max-w-[1024px] items-center">
            <div
              onClick={back}
              className="flex gap-[18px] items-center justify-between"
            >
              <div className="h-[30px] flex justify-center items-center w-[30px] border rounded-lg border-gray-500 cursor-pointer">
                <FaAngleLeft className="text-gray-500 h-[14px] w-[14px]" />
              </div>
            </div>
            <h2 className="text-[20px] font-bold leading-[24px] ">Education</h2>

            <img src={images.home} onClick={()=>navigate('/')} className="h-6 w-6 cursor-pointer" alt="" />
          </div>
        </div>

        <div className="flex mt-[70px] items-center flex-col">
          <img
            src={images.profileSmall}
            className="size-[81.4px] border border-blue-600 rounded-2xl mb-[12px]"
            alt=""
          />
          <h2 className="text-[18px] leading-[22px] font-bold mb-2">
            Jonathan Smith
          </h2>
          <h2 className="text-google text-[12px] leading-[20px] font-medium ">
            jonathansmith@gmail.com
          </h2>
        </div>

        <div className="max-w-[1024px] mx-auto px-6 mt-[20px]">
          <form>
            <div className="">
              <div className=" pl-[12px] mb-[12px] text-4 leading-[19px] font-bold">
                Level of Education
              </div>
              <input
                className="w-full leading-6 text-[14px] font-medium rounded-xl focus:border-gray-500 focus:outline-none border-[0.5px] py-[14px] px-[20px] "
                type="text"
                placeholder="Level "
              />
            </div>
            <div className="mt-[20px]">
              <div className=" pl-[12px] mb-[12px] text-4 leading-[19px] font-bold">
                Exam/Degree Title
              </div>
              <input
                className="w-full leading-6 text-[14px] font-medium rounded-xl focus:border-gray-500 focus:outline-none border-[0.5px] py-[14px] px-[20px] "
                type="text"
                placeholder="Exam/Degree Title"
              />
            </div>
            <div className="mt-[20px]">
              <div className=" pl-[12px] mb-[12px] text-4 leading-[19px] font-bold">
                Major
              </div>
              <input
                className="w-full leading-6 text-[14px] font-medium rounded-xl focus:border-gray-500 focus:outline-none border-[0.5px] py-[14px] px-[20px] "
                type="text"
                placeholder="Major"
              />
            </div>
            <div className="mt-[20px]">
              <div className=" pl-[12px] mb-[12px] text-4 leading-[19px] font-bold">
                Institute Name
              </div>
              <input
                className="w-full leading-6 text-[14px] font-medium rounded-xl focus:border-gray-500 focus:outline-none border-[0.5px] py-[14px] px-[20px] "
                type="text"
                placeholder="Institute Name"
              />
            </div>
            <div className="mt-[20px]">
              <div className=" pl-[12px] mb-[12px] text-4 leading-[19px] font-bold">
                Result
              </div>
              <input
                className="w-full leading-6 text-[14px] font-medium rounded-xl focus:border-gray-500 focus:outline-none border-[0.5px] py-[14px] px-[20px] "
                type="text"
                placeholder="Result"
              />
            </div>

            <div className="mt-[20px] pb-[107.6px] w-full">
              <div className=" w-full pl-[12px] mb-[12px] text-4 leading-[19px] font-bold">
                Year of Passing
              </div>
              <div className=" leading-6 text-[14px] w-full font-medium justify-between">
                <div className="relative w-full ">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    placeholderText="Year of Passing"
                    wrapperClassName="w-full block"
                    className="block  py-[14px] w-full pl-[52px] pr-[20px] leading-6 text-[14px] font-medium rounded-xl focus:border-gray-500 focus:outline-none border-[0.5px]  px-[20px]"
                  />
                  <img
                    src={images.calender}
                    alt=""
                    className=" absolute top-4 left-[14px]"
                  />
                </div>
              </div>
            </div>

            <div className="p-6 fixed bottom-0 left-0 right-0 mx-auto max-w-[1024px] bg-white">
              <button className="p-4 rounded-[16px] w-full text-white text-[16px] leading-[26px] font-bold bg-[#2869FE]" onClick={()=>navigate('/profile')}>
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
