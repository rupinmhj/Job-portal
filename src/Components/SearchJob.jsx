import React from "react";
import images from "../assets/images";
import { useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa6";
const SearchJob = () => {
  const navigate = useNavigate();
  const filter = () => {
    navigate("/setfilters");
  };
  const allJob=()=>{
    navigate("/alljob")
  }

  return (
    <div className="font-urbanist h-[100dvh]">
      <div className="max-w-[1024px] mx-auto">
        <div className="flex items-center justify-between p-[24px] pt-[16px] ">
          <div
            onClick={() => navigate(-1)}
            className="p-[6px] border rounded-lg border-gray-700 cursor-pointer"
          >
            <FaAngleLeft className="text-gray-700 size-[14px]" />
          </div>
          <h2 className="text-[20px] font-bold  leading-[24px]">Search Job</h2>
          <div className="w-[27.6px] h-[27.6px]"></div>
        </div>
      </div>
      <div className="max-w-[1024px] mx-auto px-[24px]">
        <div className="py-[14px] border focus-within:border-gray-400 w-full rounded-xl leading-[20px] flex items-center focus:border-gray-700  ">
          <img
            src={images.searchIcon}
            className="pl-[18px] cursor-pointer"
            alt=""
          />

          <input
            type="text"
            className="text-[14px]  px-[14px] text-textSearch  focus:outline-none w-full"
            placeholder="Search..."
          />
          <img
            onClick={filter}
            src={images.option}
            className="pr-[14px]"
            alt=""
          />
        </div>
        <div className="mt-[24px]">
          <h4 className="text-[18px] font-bold leading-[22px]">
            Recent Searches
          </h4>
          <div className="mt-[24px]">
            <div className="flex mb-[16px] gap-[12px]">
              <img src={images.clock} />
              <p className="text-[14px] leading-[24px] font-medium text-gray-500">
                UI/UX Design
              </p>
            </div>
            <div className="flex mb-[16px] gap-[12px]">
              <img src={images.clock} />
              <p className="text-[14px] leading-[24px] font-medium text-gray-500">
                Product Design
              </p>
            </div>
            <div className="flex mb-[16px] gap-[12px]">
              <img src={images.clock} />
              <p className="text-[14px] leading-[24px] font-medium text-gray-500">
                Web Apps Designer
              </p>
            </div>
            <div className="flex mb-[16px] gap-[12px]">
              <img src={images.clock} />
              <p className="text-[14px] leading-[24px] font-medium text-gray-500">
                Mobile Apps Designer
              </p>
            </div>
            <div className="flex mb-[16px] gap-[12px]">
              <img src={images.clock} />
              <p className="text-[14px] leading-[24px] font-medium text-gray-500">
                Website Designer
              </p>
            </div>
            <div className="flex mb-[16px] gap-[12px]">
              <img src={images.clock} />
              <p className="text-[14px] leading-[24px] font-medium text-gray-500">
                Graphic Designer
              </p>
            </div>
          </div>
        </div>
        </div>

        <div className="mt-[24px] px-[24px] max-w-[1024px] mx-auto">
            <div className='w-full'>
        <h1 className='font-bold text-[18px] leading-[22px] mb-[24px] '>Browse By Category</h1>
        <div className="flex w-[100%] flex-wrap ">
          <div onClick={allJob} className="  flex justify-center flex-1 flex-col items-center gap-[8px] w-1/4 ">
            <img src={images.company} className=" cursor-pointer hover:border-blue-500  border-2 transition-all duration-300 hover:shadow-sm size-[65.6px]  border-gray-200 p-[9px] rounded-lg" alt="" />
            <h2 className='text-[12px] font-medium'>Company</h2>
          </div>
          <div onClick={allJob} className=" flex justify-center flex-1 flex-col items-center gap-[8px] w-1/4 ">
            <img src={images.fullTime} className="cursor-pointer hover:border-blue-500   transition-all duration-300 hover:shadow-sm  size-[65.6px] border-2 border-gray-200 p-[9px] rounded-lg" alt="" />
            <h2 className='text-[12px] font-medium'>Full Time</h2>
          </div>
          <div onClick={allJob} className=" flex justify-center flex-1 flex-col items-center gap-[8px] w-1/4 ">
            <img src={images.partTime} className="cursor-pointer hover:border-blue-500   transition-all duration-300 hover:shadow-sm  size-[65.6px] border-2 border-gray-200 p-[9px] rounded-lg" alt="" />
            <h2 className='text-[12px] font-medium'>Part Time</h2>
          </div>
          <div onClick={allJob} className=" flex justify-center flex-1 flex-col items-center gap-[8px] w-1/4 ">
            <img src={images.freelancer} className=" cursor-pointer hover:border-blue-500   transition-all duration-300 hover:shadow-sm size-[65.6px] border-2 border-gray-200 p-[9px] rounded-lg" alt="" />
            <h2 className='text-[12px] font-medium'>Freelance</h2>
          </div>
          
          
        </div>
      </div>
        </div>
    
    </div>
  );
};

export default SearchJob;
