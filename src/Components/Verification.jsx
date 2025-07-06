import React, { useState, useEffect, useRef } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Verification = () => {
  const navigate = useNavigate();
  const back = () => navigate(-1);

  const [seconds, setSeconds] = useState(59);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    inputRefs[0].current?.focus();
  }, []);

  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [seconds]);

  const handleInput = (index, e) => {
    const input = e.target;
    input.value = input.value.replace(/[^\d]/g, "");
    if (input.value && index < 3) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      const prev = inputRefs[index - 1].current;
      prev.value = "";
      prev.focus();
    }
  };

  return (
    <>
      {/* Header */}
      <div className="bg-white dark:bg-[#111d39] lg:px-[232px] xl:px-[274px] px-[24px] pb-[24px] pt-[16px] font-urbanist text-[#121927] dark:text-white w-full">
        <div className="fixed top-0 left-0 right-0 bg-white dark:bg-[#111d39] z-10">
          <div className="flex items-center justify-between px-[24px] lg:px-[252px] py-[16px]">
            <div
              onClick={back}
              className="p-[6px] border border-black dark:border-white rounded-lg cursor-pointer"
            >
              <FaAngleLeft className="text-gray-500 dark:text-white size-[14px]" />
            </div>
            <h2 className="text-[20px] font-bold leading-[24px]">Verification</h2>
            <h2 className="w-[14px]"></h2>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="bg-white dark:bg-[#111d39] lg:px-[232px] xl:px-[274px] px-[24px] font-urbanist text-[#121927] dark:text-white min-h-screen">
        <div className="w-full mt-[16px]">
          <h2 className="text-[#71757D] dark:text-white/70 text-[14px] leading-[24px] font-medium">
            We’ve sent you the verification code on
          </h2>
          <h2 className="text-[14px] leading-[24px] font-medium">rupinmaharjan@gmail.com</h2>
        </div>

        {/* Code Inputs */}
        <div className="flex justify-center space-x-4 p-4 mt-4">
          {[0, 1, 2, 3].map((index) => (
            <input
              key={index}
              ref={inputRefs[index]}
              type="text"
              maxLength={1}
              inputMode="numeric"
              className="h-[55px] w-[55px] text-center text-[24px] font-bold border rounded-[12px] focus:outline-custBlackBold dark:bg-[#1f2a45] dark:border-gray-600 dark:text-white"
              onInput={(e) => handleInput(index, e)}
              onKeyDown={(e) => handleKeyDown(index, e)}
            />
          ))}
        </div>

        {/* Submit Button */}
        <button
          onClick={() => navigate('/resetpassword')}
          className="w-full cursor-pointer bg-[#2869FE] p-[16px] text-[16px] font-bold text-white rounded-xl mt-[20px]"
        >
          Request
        </button>

        {/* Timer */}
        <div className="text-[14px] mt-[48px] leading-[24px] font-medium text-google flex gap-2 justify-center">
          <h1>Code expires in 00:{seconds.toString().padStart(2, "0")}</h1>
          {seconds === 0 && <p className="text-[#2869FE] cursor-pointer">Resend code</p>}
        </div>
      </div>

    
    </>
  );
};

export default Verification;
