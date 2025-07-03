import React, { useContext, useEffect, useState } from "react";
import images from "../assets/images";
import { FaBuilding } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import ThemeContext from "./Themecontext";
const Company = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const {theme}=useContext(ThemeContext);

  useEffect(() => {
    const fetchJobs = async () => {
      const data = [
        {
          id: 1,
          title: "Sr. Product Designer",
          company: "Apple",
          location: "United States",
          logo: images.apple,
        },
        {
          id: 2,
          title: "Sr. UI/UX Designer",
          company: "Amplitude",
          location: "Singapore",
          logo: images.amplitude,
        },
        {
          id: 3,
          title: "Software Developer",
          company: "Adobe",
          location: "New York City",
          logo: images.adobe,
        },
        {
          id: 4,
          title: "Lead Digital Marketer",
          company: "Wings",
          location: "Anywhere (Remote)",
          logo: images.wings,
        },
        {
          id: 5,
          title: "Full Stack Developer",
          company: "Airbnb",
          location: "United Kingdom",
          logo: images.airbnb,
        },
      ];
      setJobs(data);
    };
    fetchJobs();
  }, []);

  const detail = () => {
    navigate("/details");
  };

  const allJob = () => {
    navigate("/alljob");
  };

  return (
    <div className="max-w-[1024px] dark:bg-[#111d39] dark:text-white mx-auto px-[24px] mt-[24px] flex font-urbanist items-center flex-col pb-[100px] bg-bgColor bg-opacity-80 rounded-2xl">
      <div className="flex justify-between w-full bg-white dark:bg-[#111d39]">
        <h1 className="text-black dark:text-white font-bold text-[18px] leading-[22px] mb-[24px]">
          Top Companies Hiring Now
        </h1>
        <h4 onClick={allJob} className="leading-[24px] font-bold text-[14px] text-textSeeAll cursor-pointer">
          See all
        </h4>
      </div>

      {jobs.map((job) => (
        <div key={job.id} className="flex flex-col w-full mb-[20px]">
          <div className="flex rounded-xl bg-white gap-[16px] p-[12px] justify-between w-full dark:bg-[#1f2a44]">
            <img onClick={detail} src={job.logo} className="cursor-pointer h-[48px] rounded-xl" alt={job.company} />
            <div className="flex-grow flex justify-between">
              <div className="flex-col flex justify-between">
                <h2 onClick={detail} className="cursor-pointer text-[18px] font-semibold leading-[26px]">
                  {job.title}
                </h2>
                <span className="flex">
                  <span className="flex gap-[4px]">
                    <FaBuilding className="text-blue-600 mt-[3px] size-[12px]" />
                    <h2 className="text-[12px] text-[#12192799] dark:text-white/70">{job.company}</h2>
                  </span>
                  <span className="w-[4px] h-[4px] bg-green-600 rounded-full flex leading-[12px] my-[8px] mx-2"></span>
                  <span className="flex gap-[4px]">
                    <FaLocationDot className="text-blue-600 size-[12px] mt-[3px]" />
                    <h2 className="text-[12px] text-[#12192799] dark:text-white/70">{job.location}</h2>
                  </span>
                </span>
              </div>
              <div>
                <img src={theme==='light'?images.threeDot:images.threeDotDark} className="mt-3" alt="options" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Company;
