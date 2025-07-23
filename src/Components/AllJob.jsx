import React, { useEffect, useState, useContext } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import images from "../assets/images";
import Select from "react-select";
import ThemeContext from "./ThemeContext";
import apiPublic from "../api/api";

const AllJob = () => {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchJobs = async (page = 1) => {
    try {
      const res = await apiPublic.get(`jobs/seeker/list/?page=${page}`);
      console.log(res.data.jobs);
      const jobData = res.data.jobs.map((job, index) => ({
        id: job.id,
        title: job.title,
        salary: job.salary,
        location: job.location,
        company: job.company_name,
icon: job.company_logo
  ? `${import.meta.env.VITE_API_BASE_URL}${job.company_logo}`
  : images.notigoogle,
        time: job.posted_days + "d",
      }));
      setJobs(jobData);
      setTotalPages(res.data.total_pages);
      setCurrentPage(res.data.current_page);
    } catch (error) {
      console.error("Failed to fetch jobs:", error);
    }
  };

  useEffect(() => {
    fetchJobs(currentPage);
  }, [currentPage]);

  const back = () => navigate(-1);
  const details = (id) => navigate(`/details/${id}`);

  const filterJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className={`dark:bg-[#111d39]`}
    >
      <div className="h-screen overflow-y-scroll scroll-container max-w-[1024px] mx-auto px-6 bg-white dark:bg-[#111d39] text-[#121927] dark:text-white font-urbanist">
        {/* Header */}
        <div className="fixed top-0 left-0 right-0 bg-white dark:bg-[#111d39] z-50">
          <div className="max-w-[1024px] flex items-center justify-between px-[24px] pb-[24px] mx-auto py-[16px]">
            <div
              className="p-[6px] border rounded-lg border-black dark:border-white cursor-pointer"
              onClick={back}
            >
              <FaAngleLeft className="text-gray-500 dark:text-white size-[14px]" />
            </div>
            <h2 className="text-[20px] font-bold leading-[24px] pl-10">
              All Job
            </h2>
            <p className="text-[15px] font-semibold leading-[18px]">
              {filterJobs.length} Jobs Found
            </p>
          </div>
        </div>

        {/* Search Filter */}
        <div className="flex justify-between items-center mt-[74px] gap-10 w-full">
          <div className="w-full relative">
            <img
              src={images.searchIcon}
              className="pl-[18px] cursor-pointer absolute top-[15px] z-20 dark:invert"
              alt=""
            />
            <Select
              options={[
                ...new Set(filterJobs.map((job) => job.title)),
              ].map((title) => ({
                value: title,
                label: title,
              }))}
              onChange={(selectedOption) =>
                setSearchTerm(selectedOption ? selectedOption.value : "")
              }
              isClearable
              placeholder="Search or select job title"
              className="outline-none w-full "
              styles={{
                control: (base) => ({
                  ...base,
                  backgroundColor: theme === "dark" ? "#111d39" : "#fff",
                  color: theme === "dark" ? "white" : "black",
                  boxShadow: "none",
                  paddingLeft: "40px",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                  borderRadius: "0.75rem",
                  overflowY: "auto", 
                  fontSize: "14px",
                }),
                menu: (base) => ({
                  ...base,
                  backgroundColor: theme === "dark" ? "#2A2A40" : "#fff",
                  color: theme === "dark" ? "white" : "black",
                }),
                singleValue: (base) => ({
                  ...base,
                  color: theme === "dark" ? "white" : "black",
                }),
                input: (base) => ({
                  ...base,
                  color: theme === "dark" ? "white" : "black",
                }),
                option: (base, state) => ({
                  ...base,
                  backgroundColor: state.isFocused
                    ? theme === "dark"
                      ? "#3F3F5E"
                      : "#f0f0f0"
                    : theme === "dark"
                    ? "#2A2A40"
                    : "#fff",
                  color: theme === "dark" ? "white" : "black",
                  cursor: "pointer",
                }),
              }}
            />
          </div>
          <img src={images.arrow} alt="" />
        </div>

        {/* Job Cards */}
        <div className="mt-[24px]">
          <div>
            {filterJobs.map((job) => (
              <div
                key={job.id}
                className="relative bg-white dark:bg-[#242f49] flex p-[16px] mb-[16px] gap-[16px] rounded-xl"
              >
                <div className="flex justify-center items-start">
                  <div
                    className="w-[40px] h-[40px] flex justify-center items-center border border-gray-400 rounded-xl cursor-pointer dark:border-gray-500"
                    onClick={()=>details(job.id)}
                  >
                    <img
                      src={job.icon}
                      className="size-[24px] object-cover"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex flex-col flex-1">
                  <span className="text-google dark:text-gray-400 font-medium leading-[12px] text-[10px]">
                    {job.company}
                  </span>
                  <span className="text-[15px] leading-[18px] font-semibold mt-1">
                    {job.title}
                  </span>
                  <div className="flex mt-[10px] text-google gap-[6px] font-medium leading-[14px] text-[12px] dark:text-gray-400">
                    <p>
                      <img
                        src={images.wallet}
                        className="size-[12px] mb-1 inline-block mr-[4px]"
                        alt=""
                      />
                      {job.salary}
                    </p>
                    <p>
                      <img
                        src={images.location}
                        className="size-[12px] mb-1 inline-block mr-[4px]"
                        alt=""
                      />
                      {job.location}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-between">
                  <img src={images.bookmark2} className="h-5 w-5 dark:invert" alt="" />
                  <span className="text-[12px] text-gray-600 dark:text-gray-400">
                    {job.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-4 mt-6 mb-10">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-md bg-gray-300 dark:bg-gray-600 text-sm"
          >
            Previous
          </button>
          <span className="text-sm">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-md bg-gray-300 dark:bg-gray-600 text-sm"
          >
            Next
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default AllJob;
