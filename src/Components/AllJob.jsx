import React, { useEffect, useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import images from "../assets/images";

const AllJob = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const data = [
        {
          id: 1,
          company: "Google LLC",
          title: "Lead Product Designer",
          salary: "$6k/month",
          location: "Berlin, Germany",
          time: "24h",
          icon: images.notigoogle,
        },
        {
          id: 2,
          company: "Mailchimp",
          title: "Lead Product Designer",
          salary: "$8k/month",
          location: "United States",
          time: "36h",
          icon: images.mailchimp,
        },
        {
          id: 3,
          company: "Slack",
          title: "Mobile Apps Designer",
          salary: "$8k/month",
          location: "United States",
          time: "48h",
          icon: images.slack,
        },
        {
          id: 4,
          company: "Treehouse",
          title: "Graphic Designer",
          salary: "$5k/month",
          location: "London",
          time: "3d",
          icon: images.treehouse,
        },
        {
          id: 5,
          company: "Zapier",
          title: "Application Designer",
          salary: "$6K/month",
          location: "Dublin, Ireland",
          time: "5h",
          icon: images.zapier,
        },
        {
          id: 6,
          company: "Evernote",
          title: "Lead Product Designer",
          salary: "8k/month",
          location: "United States",
          time: "5d",
          icon: images.evernote,
        },
      ];

      setJobs(data);
    };

    fetchJobs();
  }, []);

  const back = () => navigate(-1);
  const details = () => navigate("/details");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className="h-screen overflow-y-scroll scroll-container"
    >
      <div className="bg-white lg:px-[232px] xl:px-[274px] text-[#121927] font-urbanist w-full">
        <div className="fixed top-0 left-0 right-0 bg-white z-10">
          <div className="flex items-center justify-between px-[24px] pb-[24px] lg:px-[252px] py-[16px]">
            <div className="p-[6px] border rounded-lg border-black cursor-pointer" onClick={back}>
              <FaAngleLeft className="text-gray-500 size-[14px]" />
            </div>
            <h2 className="text-[20px] font-bold leading-[24px]">All Job</h2>
            <h2 className="w-[28px]"></h2>
          </div>
        </div>

        <div className="flex justify-between items-center mt-[74px] px-[24px]">
          <p className="text-[15px] font-semibold leading-[18px]">{jobs.length} Jobs Found</p>
          <img src={images.arrow} alt="" />
        </div>

        <div className="mt-[24px] px-[24px]">
          <div className="bg-bgColor bg-opacity-65">
            {jobs.map((job) => (
              <div key={job.id} className="relative bg-white flex p-[16px] mb-[16px] gap-[16px]">
                <div className="flex justify-center items-start">
                  <div
                    className="w-[40px] h-[40px] flex justify-center items-center border border-gray-400 rounded-xl cursor-pointer"
                    onClick={details}
                  >
                    <img src={job.icon} className="size-[24px]" alt="" />
                  </div>
                </div>
                <div className="flex flex-col flex-1">
                  <span className="text-google font-medium leading-[12px] text-[10px]">
                    {job.company}
                  </span>
                  <span className="text-[15px] leading-[18px] font-semibold">
                    {job.title}
                  </span>
                  <div className="flex mt-[10px] text-google gap-[6px] font-medium leading-[14px] text-[12px]">
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
                <div className="flex flex-col justify-between">
                  <img src={images.bookmark2} className="right-2 top-5 h-5 w-5" alt="" />
                  <span className="text-[12px] text-gray-600">{job.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AllJob;
