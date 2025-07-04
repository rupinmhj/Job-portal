import React, { useState, useEffect } from "react";
import images from "../assets/images";
import { useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa6";
import { motion } from "framer-motion";

const dummyJobs = [
  "UI/UX Designer",
  "Product Designer",
  "Web App Developer",
  "Mobile App Developer",
  "Graphic Designer",
  "Backend Developer",
  "Frontend Developer",
];

const SearchJob = () => {
  const navigate = useNavigate();
  const filter = () => navigate("/setfilters");
  const allJob = () => navigate("/alljob");

  const [query, setQuery] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [recentSearches, setRecentSearches] = useState([
    "UI/UX Design",
    "Product Design",
    "Web Apps Designer",
    "Mobile Apps Designer",
  ]);

  useEffect(() => {
    if (query.trim() === "") {
      setFilteredJobs([]);
      return;
    }

    // Simulated backend search filter
    const filtered = dummyJobs.filter((job) =>
      job.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredJobs(filtered);
  }, [query]);

  const handleSearchClick = (term) => {
    setQuery(term);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="h-screen overflow-y-scroll scroll-container dark:bg-[#111d39] dark:text-white"
    >
      <div className="font-urbanist h-[100dvh]">
        <div className="max-w-[1024px] mx-auto">
          <div className="flex items-center justify-between p-[24px] pt-[16px]">
            <div
              onClick={() => navigate(-1)}
              className="p-[6px] border rounded-lg border-gray-700 dark:border-gray-400 cursor-pointer"
            >
              <FaAngleLeft className="text-gray-700 dark:text-white size-[14px]" />
            </div>
            <h2 className="text-[20px] font-bold leading-[24px]">Search Job</h2>
            <div className="w-[27.6px] h-[27.6px]"></div>
          </div>
        </div>

        <div className="max-w-[1024px] mx-auto px-[24px]">
          {/* Search Bar */}
          <div className="py-[14px] border focus-within:border-gray-400 dark:focus-within:border-gray-500 dark:border-gray-600 w-full rounded-xl leading-[20px] flex items-center">
            <img src={images.searchIcon} className="pl-[18px] cursor-pointer" alt="Search" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="text-[14px] px-[14px] dark:focus-within:border-gray-200 bg-transparent text-textSearch dark:text-white focus:outline-none w-full"
              placeholder="Search..."
            />
            <img onClick={filter} src={images.option} className="pr-[14px] cursor-pointer" alt="Options" />
          </div>

          {/* Filtered Results */}
          {query && (
            <div className="mt-[24px]">
              <h4 className="text-[18px] font-bold leading-[22px]">Results for "{query}"</h4>
              <div className="mt-[16px]">
                {filteredJobs.length > 0 ? (
                  filteredJobs.map((job, i) => (
                    <div key={i} className="flex mb-[12px] gap-[12px]">
                      <img src={images.clock} alt="icon" />
                      <p className="text-[14px] leading-[24px] font-medium text-gray-700 dark:text-gray-300">
                        {job}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 dark:text-gray-400 mt-4">No jobs found.</p>
                )}
              </div>
            </div>
          )}

          {/* Recent Searches */}
          {!query && (
            <div className="mt-[24px]">
              <h4 className="text-[18px] font-bold leading-[22px]">Recent Searches</h4>
              <div className="mt-[24px]">
                {recentSearches.map((label, i) => (
                  <div
                    key={i}
                    onClick={() => handleSearchClick(label)}
                    className="flex mb-[16px] gap-[12px] cursor-pointer"
                  >
                    <img src={images.clock} />
                    <p className="text-[14px] leading-[24px] font-medium text-gray-500 dark:text-gray-400">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

      
      </div>
    </motion.div>
  );
};

export default SearchJob;
