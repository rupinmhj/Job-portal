import React, { useState, useRef, useEffect } from "react";
import { IoIosClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import images from "../assets/images";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Range } from "react-range";
import { motion } from 'framer-motion';
const categories = [
  "Business",
  "Writing",
  "Design",
  "Development",
  "Marketing",
  "Photography",
  "Finance",
];

const MIN = 0;
const MAX = 200000;

const SetFilters = () => {
  const [selectedCategory, setSelectedCategory] = useState("Business");
  const [showOptions, setShowOptions] = useState(false);
  const dropdownRef = useRef(null);
  const [values, setValues] = useState([28000, 161000]);
  const navigate = useNavigate();

  const handleBack = () => navigate(-1);
  const allJob=()=>{
    navigate('/alljob')
  }
  const handleSelect = (category) => {
    setSelectedCategory(category);
    setShowOptions(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Generate random bar chart heights
  const bars = Array.from({ length: 30 }, () =>
    Math.floor(Math.random() * 40 + 20)
  );
  const [selectedFilters, setSelectedFilters] = useState([]);
  
  const jobTypes = [
    "Company",
    "Contract Based",
    "Freelance",
    "Full Time", 
    "Part Time"
  ];
  
  const toggleFilter = (filter) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter(item => item !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };
  

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    <div className="bg-white font-urbanist w-full text-[#121927] lg:px-[232px]">
      {/* Top Header */}
      <div className="fixed top-0 left-0 right-0 bg-white z-10">
        <div className="flex items-center justify-between px-[24px] lg:px-[252px] py-[16px]">
          <div
            className="p-[4px] border rounded-lg border-black cursor-pointer"
            onClick={handleBack}
          >
            <IoIosClose className="text-gray-500 size-[20px]" />
          </div>
          <h2 className="text-[20px] font-bold leading-[24px]">Set filters</h2>
          <div className="w-[28px]" />
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-[80px] pb-[80px] px-[24px] ">
        {/* Category */}
        <label className="pl-[12px] text-[15px] leading-[18px] font-semibold">
          Category <span className="text-red-500">*</span>
        </label>
        <div className="relative mb-[20px]" ref={dropdownRef}>
          <img
            src={images.bag}
            alt="Bag"
            className="absolute top-[29px] left-6 size-[20px]"
          />
          <RiArrowDropDownLine className="absolute top-[25px] right-6 size-[30px]" />
          <input
            type="text"
            value={selectedCategory}
            onFocus={() => setShowOptions(true)}
            readOnly
            required
            className="focus:outline-gray-500 text-[15px] font-medium leading-[24px] border shadow-sm rounded-xl mt-[12px] pl-[58px] py-[14px] pr-[20px] w-full cursor-pointer"
          />
          {showOptions && (
            <div className="absolute left-0 right-0 mt-2 bg-white border rounded-xl shadow-lg z-10 max-h-[150px] overflow-y-auto">
              {categories.map((category) => (
                <div
                  key={category}
                  onClick={() => handleSelect(category)}
                  className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                    selectedCategory === category
                      ? "bg-gray-100 text-black font-semibold"
                      : "text-gray-700"
                  }`}
                >
                  {category}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Location */}
        <label className="pl-[12px] text-[15px] leading-[18px] font-semibold">
          Location
        </label>
        <div className="relative mb-[20px]">
          <img
            src={images.locationfilter}
            className="absolute inset-y-7 size-[20px] left-6"
            alt="Location"
          />
          <input
            type="text"
            placeholder="Write your location"
            className="focus:outline-gray-500 border text-[14px] shadow-sm rounded-xl mt-[12px] pl-[52px] py-[14px] pr-[20px] w-full"
          />
        </div>

        {/* Salary Range */}
        <div className="w-full   mt-[24px] mb-16">
          <div className="flex justify-between text-[15px] font-medium font-urbanist  mb-2">
            <span>Min. Salary</span>
            <span>Max. Salary</span>
          </div>

          {/* Bar Chart Behind Slider */}
          <div className="relative h-16">
            <div className="absolute inset-0 flex items-end gap-[2px]">
              {bars.map((height, idx) => {
                const left = (idx / bars.length) * 100;
                const isInRange =
                  left >= (values[0] / MAX) * 100 &&
                  left <= (values[1] / MAX) * 100;
                return (
                  <div
                    key={idx}
                    className="w-[3%] rounded-t-md"
                    style={{
                      height: `${height}px`,
                      backgroundColor: isInRange ? "#5B9BFF" : "#D1D5DB",
                    }}
                  />
                );
              })}
            </div>

            {/* Range Slider */}
            <Range
              step={1000}
              min={MIN}
              max={MAX}
              values={values}
              onChange={setValues}
              renderTrack={({ props, children }) => (
                <div
                  {...props}
                  className="absolute bottom-0 h-[6px] w-full rounded-full"
                  style={{
                    background: `linear-gradient(to right,
                      #ccc 0%,
                      #ccc ${(values[0] / MAX) * 100}%,
                      #2869FE ${(values[0] / MAX) * 100}%,
                      #2869FE ${(values[1] / MAX) * 100}%,
                      #ccc ${(values[1] / MAX) * 100}%,
                      #ccc 100%)`,
                  }}
                >
                  {children}
                </div>
              )}
              renderThumb={({ props, index }) => (
                <div
                  {...props}
                  className="w-6 h-6 bg-white border-4 border-yellow-400 rounded-full shadow-md relative"
                >
                  <div className="absolute text-xs mt-8 w-16 -ml-5 text-center font-semibold">
                    ${Math.round(values[index] / 1000)}K
                  </div>
                </div>
              )}
            />
          </div>
        </div>
        <label className="pl-[12px] text-[15px] leading-[18px] font-semibold ">
          Job Type
        </label>
        <div className="mt-6">
      <div className="flex flex-wrap gap-2">
        {jobTypes.map((type) => {
          const isSelected = selectedFilters.includes(type);
          return (
            <span 
              key={type}
              onClick={() => toggleFilter(type)}
              className={`flex cursor-pointer rounded-lg justify-center items-center px-3 py-1.5 text-xs border whitespace-nowrap ${
                isSelected 
                  ? "bg-violet-500 text-white border-violet-500" 
                  : "border-gray-200 text-gray-700"
              }`}
            >
              {type}
            </span>
          );
        })}
      </div>
    </div>
      </div>

      {/* Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white py-4 z-10">
        <div className="px-[24px] lg:px-[252px]">
          <button onClick={allJob} className="w-full bg-[#2869FE]  p-[16px] text-white font-medium rounded-xl">
            Apply filter
          </button>
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default SetFilters;
