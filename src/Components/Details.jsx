import React, { useEffect, useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
import images from "../assets/images";
import { IoLocationSharp } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import JobDescription from "./JobDescription";
import CompanyDetail from "./CompanyDetail";
import Review from "./Review";
import apiPublic from "../api/api";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const back = () => navigate("/home");
  const [showOptions, setShowOptions] = useState("description");
  const [jobDetail, setJobDetail] = useState(null);
  const [companyDetail, setCompanyDetail] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await apiPublic.get(`/jobs/seeker/${id}/detail/`);
        setJobDetail(res.data.job_detail);
        setCompanyDetail(res.data.company_detail);
      } catch (err) {
        console.error("Failed to fetch job details", err);
      }
    };
    fetchDetails();
  }, [id]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className="h-screen overflow-y-scroll scroll-container dark:bg-[#111d39]"
    >
      <div className="bg-white dark:bg-[#111d39] text-[#121927] dark:text-white font-urbanist w-full max-w-[1024px] mx-auto px-[24px]">
        {/* Header */}
        <div className="fixed top-0 left-0 right-0 bg-white dark:bg-[#111d39] z-10 max-w-[1024px] mx-auto">
          <div className="flex items-center justify-between px-[24px]  py-[16px]">
            <div onClick={back} className="p-[6px] border rounded-lg border-black dark:border-white cursor-pointer">
              <FaAngleLeft className="text-gray-500 dark:text-white size-[14px]" />
            </div>
            <h2 className="text-[20px] font-bold leading-[24px]">Details</h2>
            <div className="p-[6px] border rounded-lg border-black dark:border-white cursor-pointer">
              <img src={images.bookmark} className="dark:invert" alt="" />
            </div>
          </div>
        </div>

        {/* Header Banner */}
        {jobDetail && (
          <div className="bg-sliderBlue relative text-white overflow-hidden rounded-[18px] p-[24px] mt-20">
            <div className="flex gap-[12px]">
              <img src={images.google} className="h-[60px]" alt="" />
              <div className="flex flex-col gap-[8px] pt-[3px]">
                <h1 className="font-bold text-[18px] leading-[22px]">{jobDetail.title}</h1>
                <h1 className="text-softWhite text-[14px] font-medium leading-[24px] flex items-center">
                  <IoLocationSharp className="inline-block mr-[4px]" /> {jobDetail.location}
                </h1>
              </div>
            </div>
            <div className="flex gap-[10px] mt-[24px] ml-[10px]">
              {[jobDetail.category = 'Company', jobDetail.job_type].map((item, idx) => (
                <span
                  key={idx}
                  className="rounded-[10px] bg-opacity-10 bg-white text-[14px] font-medium py-[6px] px-[12px] leading-[24px]"
                >
                  <span>
                    {item === 'full_time'
                      ? 'Full time'
                      : item === 'intern'
                        ? 'Internship'
                        : item === 'part_time'
                          ? 'Part time'
                          : item === 'freelance'
                            ? 'Freelance'
                            : item}
                  </span>
                </span>
              ))}
            </div>
            <div className="absolute top-[-30px] right-[-30px]">
              <div className="rounded-full h-[92px] w-[92px] border-opacity-45 border-8 border-gray-400" />
            </div>
            <div className="absolute top-[-10px] right-[-10px]">
              <div className="rounded-full h-[56px] w-[56px] border-opacity-45 border-8 border-gray-400" />
            </div>
          </div>
        )}

        {/* Tabs */}
        <div className="flex bg-[#EEF3FF] dark:bg-[#1f2a49] mt-[24px] p-[8px] rounded-[18px] gap-[12px] items-center">
          {["description", "company", "review"].map((key) => (
            <button
              key={key}
              className={`px-[14px] py-[8px] rounded-[12px] font-semibold leading-[24px] ${showOptions === key
                ? "bg-[#2869FE] text-white"
                : "bg-white dark:bg-[#2e3c61] dark:text-[#93b1ff] text-[#2869FEE6]"
                }`}
              onClick={() => setShowOptions(key)}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-[16px] mb-[100px]">
          <AnimatePresence mode="wait">
            {showOptions === "description" && (
              <motion.div
                key="description"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <JobDescription jobDetail={jobDetail} />
              </motion.div>
            )}
            {showOptions === "company" && (
              <motion.div
                key="company"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <CompanyDetail companyDetail={companyDetail} />
              </motion.div>
            )}
            {showOptions === "review" && (
              <motion.div
                key="review"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Review />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom Apply Button */}
        <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-[#111d39] py-4 z-10">
          <div className="px-[24px] lg:px-[232px] xl:px-[274px]">
            <button
              className="w-full bg-[#2869FE] p-[16px] text-white font-medium rounded-xl"
              onClick={() => navigate(`/applyjob/${id}`)}
            >
              Apply this job
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Details;
