import React, { useEffect, useState,useContext} from "react";
import ThemeContext from "./Themecontext";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import images from "../assets/images";
import { FaAngleLeft } from "react-icons/fa6";
import { motion } from "framer-motion";

const Clipboard = () => {
  const navigate = useNavigate();
  const back = () => navigate("/home");
  const noti = () => navigate("/notification");
  const application = () => navigate("/jobdetailstracking");
  const {theme}=useContext(ThemeContext)
  const [searchText, setSearchText] = useState("");
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true); // optional loading state

  useEffect(() => {
    // Simulate fetching from API (replace with axios later)
    const fetchJobs = async () => {
      setLoading(true);
      try {
        const response = [
          {
            id: 1,
            title: "Product Design",
            company: "Google LLC",
            salary: "8k/month",
            location: "Berlin, Germany",
            logo: images.notigoogle,
            status: "On the way",
            statusColor: "#00CC9A",
            statusBackgroundColor: "#203f52",
          },
          {
            id: 2,
            title: "Senior UI/UX Designer",
            company: "Microsoft",
            salary: "6k/month",
            location: "United States",
            logo: images.notimicrosoft,
            status: "Delivered",
             statusBackgroundColor: "#313b54",
          },
          {
            id: 3,
            title: "Mobile Apps Designer",
            company: "Slack",
            salary: "8k/month",
            location: "United States",
            logo: images.slack,
            status: "Canceled",
            statusColor: "#FA4848",
             statusBackgroundColor: "#313049",
          },
          {
            id: 4,
            title: "Application Designer",
            company: "Zapier",
            salary: "6k/month",
            location: "Dublin, Ireland",
            logo: images.zapier,
            status: "Delivered",
            statusBackgroundColor: "#313b54",
          },
        ];
        setJobs(response); // set data
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const filteredJobs = jobs.filter((job) =>
    `${job.title} ${job.company} ${job.location}`
      .toLowerCase()
      .includes(searchText.toLowerCase())
  );

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, delay: 0.15 }}
        className="h-screen overflow-y-scroll scroll-container font-urbanist dark:bg-[#111d39]
dark:text-white "
      >
        {/* Header */}
        <div className="fixed top-0 left-0 right-0 bg-white z-10 dark:bg-[#111d39] ">
          <div className="flex items-center justify-between px-[24px] max-w-[1024px] mx-auto py-[16px] dark:bg-[#111d39]
dark:text-white">
            <div onClick={back} className="p-[6px] border rounded-lg border-black dark:border-white cursor-pointer ">
              <FaAngleLeft className="text-gray-500  size-[14px] dark:text-white" />
            </div>
            <h2 className="text-[20px] font-bold leading-[24px]">Your Applications</h2>
            <img src={images.bellIcon} onClick={noti} className="cursor-pointer" alt="notifications" />
          </div>
        </div>

        {/* Search Box */}
        <div className="max-w-[1024px] mx-auto mt-20 px-6">
          <div className="py-[14px] focus-within:border-gray-400 dark:border-gray-600 dark:focus-within:border-white border border-gray-200 w-full rounded-xl flex items-center">
            <img src={theme==='light'?images.searchIcon:images.searchIconDark} className="pl-[18px] cursor-pointer " alt="search" />
            <input
              type="text"
              className="text-[14px] px-[14px] dark:bg-[#111d39]
dark:text-white text-textSearch focus:outline-none w-full"
              placeholder="Search..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
        </div>

        {/* Job Cards */}
        <div className="max-w-[1024px] pb-24 mx-auto mt-[24px] px-[24px]">
          <div className="bg-bgColor dark:bg-[#111d39] bg-opacity-65">
            {loading ? (
              <p className="text-center mt-10 text-gray-500">Loading...</p>
            ) : filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <div key={job.id} className="bg-white dark:bg-[#242f49] rounded-xl flex-col flex p-[16px] mb-[16px]">
                  <div className="relative flex gap-[16px] mb-[20px]">
                    <div className="w-[40px] h-[40px] flex justify-center items-center border border-gray-400 rounded-xl">
                      <img src={job.logo} className="size-[24px]" alt={job.company} />
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center">
                        <span className="font-semibold text-[15px] leading-[18px]">{job.title}</span>
                        <span className="w-[4px] h-[4px] bg-green-600 rounded-full flex mx-2"></span>
                        <span className="text-google font-medium text-[10px]">{job.company}</span>
                      </div>
                      <div className="flex mt-[10px] text-google dark:text-[#ffffff80] gap-[6px] font-medium text-[12px]">
                        <p>
                          <img src={images.wallet} className="size-[12px] mb-1 inline-block mr-[4px]" alt="" />
                          {job.salary}
                        </p>
                        <p>
                          <img src={images.location} className="size-[12px] mb-1 inline-block mr-[4px]" alt="" />
                          {job.location}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-[12px] font-semibold text-[14px]">
                    <div
                      className={`p-[6px] bg-white rounded-xl flex-1 flex justify-center items-center`}
                     style={{
                      background:theme==='dark'?job.statusBackgroundColor:'white',
                     }}
                    >
                      <h2 style={{ color: job.statusColor?job.statusColor: theme==='light'?"#000":"ffffff" }}>{job.status}</h2>
                    </div>
                    <div
                      className="p-[6px] rounded-xl flex-1 flex justify-center items-center bg-[#E9F0FF] dark:bg-[#24355c] cursor-pointer"
                      onClick={application}
                    >
                      <h2 className="text-[#2869FE]">View Application</h2>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center mt-10 text-gray-500">No applications found.</p>
            )}
          </div>
        </div>

        <Footer />
      </motion.div>
    </>
  );
};

export default Clipboard;
