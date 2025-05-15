import React from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import images from "../assets/images";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

const Awards = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };
  return (
    <div className="h-screen overflow-y-scroll scroll-container">
      <div className="text-custBlackBold font-urbanist">
        <div className="fixed left-0 right-0 top-0 outline-none z-30">
          <div className="flex items-center bg-white justify-between p-[24px] pt-[16px] mx-auto max-w-[1024px]">
            <div
              onClick={back}
              className="flex gap-[18px] items-center justify-between"
            >
              <div className="h-[30px] flex justify-center items-center w-[30px] border rounded-lg border-gray-500 cursor-pointer">
                <FaAngleLeft className="text-gray-500 h-[14px] w-[14px]" />
              </div>
            </div>
            <h2 className="text-[20px] font-bold leading-[24px] ">Awards</h2>

            <img src={images.home} onClick={()=>navigate('/')} className="h-6 w-6 cursor-pointer" alt="" />
          </div>
        </div>

        <div className="flex mt-[70px] items-center flex-col">
          <img
            src={images.profileSmall}
            className="size-[80.4px] border border-blue-600 rounded-2xl mb-[12px]"
            alt=""
          />
          <h2 className="text-[18px] leading-[22px] font-bold mb-2">
            Jonathan Smith
          </h2>
          <h2 className="text-gray-400 text-[12px] leading-[20px] font-medium ">
            jonathansmith@gmail.com
          </h2>
        </div>

        <div className="max-w-[1024px] mx-auto px-6 mt-[20px]">
          <form>
            <div className="">
              <div className=" pl-[12px] mb-[12px] text-4 leading-[19px] font-bold">
                Title
              </div>
              <input
                className="w-full leading-6 text-[14px] font-medium rounded-xl focus:border-gray-500 focus:outline-none border-[0.5px] py-[14px] px-[20px] "
                type="text"
                placeholder="Title"
              />
            </div>

            <div className="mt-[20px]">
              <div className="flex gap-2 leading-6 text-[14px] font-medium justify-between">
                <div className="relative ">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    placeholderText="Start"
                    className="w-full py-[14px] pl-[52px] pr-[20px] leading-6 text-[14px] font-medium rounded-xl focus:border-gray-500 focus:outline-none border-[0.5px]  px-[20px]"
                  />
                  <img
                    src={images.calender}
                    alt=""
                    className=" absolute top-4 left-[14px]"
                  />
                </div>

                <div className="relative ">
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    placeholderText="End"
                    className="w-full py-[14px] pl-[52px] pr-[20px] leading-6 text-[14px] font-medium rounded-xl focus:border-gray-500 focus:outline-none border-[0.5px]  px-[20px] "
                  />
                  <img
                    src={images.calender}
                    alt=""
                    className=" absolute top-4 left-[14px]"
                  />
                </div>
              </div>
            </div>

            <div className="flex mt-[12px] gap-2">
                <input type="checkbox" />
                <p className="leading-6 text-[14px] font-medium text-gray-500">Doesn't Expire</p>
            </div>

            <div className="mt-[20px] mb-[107.6px]">
              <div className=" pl-[12px] mb-[12px] text-4 leading-[19px] font-bold">
                Description
              </div>
              <textarea
                className="w-full leading-6 text-[14px] font-medium rounded-xl focus:border-gray-500 focus:outline-none border-[0.5px] py-[14px] px-[20px] min-h-[35px] "
                placeholder="About your details"
              ></textarea>
            </div>
            <div className="p-6 fixed bottom-0 left-0 right-0 mx-auto max-w-[1024px] bg-white">
              <button className="p-4 rounded-[16px] w-full text-white text-[16px] leading-[26px] font-bold bg-[#2869FE]">
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
