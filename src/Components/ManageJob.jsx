import { useState } from "react";
import { motion } from "framer-motion"
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import images from "../assets/images";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const ManageJobs = () => {
    const navigate = useNavigate();
    const back = () => {
        navigate(-1);
    };
    const [searchTerm, setSearchTerm] = useState("");

    const jobs = [
        {
            id: 1,
            title: "Senior Frontend Developer",
            company: "Google",
            location: "Hyderabad, India",
            type: "Full-time",
            status: "Open",
            applications: 23,
            views: 156,
            postedDays: 5,
            deadline: "2025-07-15",
            salary: "$80k - $120k"
        },
        {
            id: 2,
            title: "UX Designer",
            company: "Google",
            location: "Remote",
            type: "Full-time",
            status: "Open",
            applications: 31,
            views: 203,
            postedDays: 8,
            deadline: "2025-07-20",
            salary: "$70k - $90k"
        },
        {
            id: 3,
            title: "Product Manager",
            company: "Google",
            location: "Mumbai, India",
            type: "Full-time",
            status: "Paused",
            applications: 18,
            views: 89,
            postedDays: 12,
            deadline: "2025-07-25",
            salary: "$90k - $130k"
        },
        {
            id: 4,
            title: "Backend Engineer",
            company: "Google",
            location: "Bangalore, India",
            type: "Contract",
            status: "Closed",
            applications: 45,
            views: 234,
            postedDays: 20,
            deadline: "2025-06-30",
            salary: "$85k - $115k"
        }
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case "Open": return "bg-[#E5FAF5] text-[#00CC9A]";
            case "Closed": return "bg-[#FFEFF8] text-[#FF5FBF]";
            case "Paused": return "bg-[#F6EFFF] text-[#7C66FF]";
            default: return "bg-[#F1F1F2] text-[#121927]";
        }
    };

    const filteredJobs = jobs.filter(job =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.15 }}
            className="h-screen overflow-y-scroll scroll-container"
        >
            <div className="text-[#121927] font-urbanist">
                {/* Header */}
                <div className="fixed top-0 left-0 right-0 bg-white z-10">
                    <div className="flex items-center justify-between lg:px-[232px] xl:px-[274px] px-[24px] pt-[16px] pb-[24px]">
                        <div
                            onClick={back}
                            className="p-[6px] border rounded-lg border-black cursor-pointer"
                        >
                            <FaAngleLeft className="text-gray-500 size-[14px]" />
                        </div>
                        <h2 className="text-[20px] font-bold leading-[24px] ml-6">Manage Jobs</h2>
                        <button 
                            onClick={() => navigate('/createjob')} 
                            className="bg-[#2869FE] text-white px-[12px] py-[8px] rounded-lg text-[14px] font-semibold flex items-center gap-[4px]"
                        >
                            <FaPlus className="size-[12px]" />
                            <span className="hidden sm:block">Create</span>
                        </button>
                    </div>
                </div>

                {/* Search Box */}
                <div className="lg:px-[232px] xl:px-[274px] px-[24px] pt-[80px]">
                    <div className="py-[14px] focus-within:border-gray-400 border border-gray-200 w-full rounded-xl flex items-center mb-[24px]">
                        <img
                            src={images.searchIcon}
                            className="pl-[18px] cursor-pointer"
                            alt=""
                        />
                        <input
                            type="text"
                            placeholder="Search jobs by title ..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="text-[14px] px-[14px] text-textSearch focus:outline-none w-full"
                        />
                    </div>
                </div>

                {/* Job Cards */}
                <div className="lg:px-[232px] xl:px-[274px] px-[24px] pb-[100px]">
                    {filteredJobs.length > 0 ? (
                        <div className="space-y-[16px]">
                            {filteredJobs.map((job) => (
                                <div key={job.id} className="bg-white rounded-xl p-[18px] border border-gray-200 shadow-md">
                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-[16px]">
                                        <div className="flex-1">
                                            <h3 className="text-[16px] font-bold leading-[20px] text-[#121927] mb-[4px]">
                                                {job.title}
                                            </h3>
                                            <div className="flex items-center gap-[8px]">
                                                <span className="text-[13px] font-medium text-[#121927]/80">{job.company}</span>
                                                <span className="w-[4px] h-[4px] bg-[#00CC9A] rounded-full"></span>
                                                <span className="text-[13px] font-medium text-[#121927]/80">{job.type}</span>
                                            </div>
                                        </div>
                                        <span className={`${getStatusColor(job.status)} text-[13px] font-semibold px-[8px] py-[4px] rounded-lg`}>
                                            {job.status}
                                        </span>
                                    </div>

                                    {/* Location */}
                                    <div className="flex items-center mb-[16px]">
                                        <img
                                            src={images.location}
                                            className="size-[14px] mr-[4px]"
                                            alt=""
                                        />
                                        <span className="text-[13px] font-medium text-[#121927]/80">{job.location}</span>
                                    </div>

                                    {/* Stats */}
                                    <div className="flex justify-around mb-[16px] py-[12px] bg-[#F8F9FA] rounded-xl">
                                        <div className="text-center">
                                            <h4 className="text-[18px] font-bold text-[#7C66FF]">{job.applications}</h4>
                                            <p className="text-[13px] text-[#121927]/50">Applied</p>
                                        </div>
                                        <div className="text-center">
                                            <h4 className="text-[18px] font-bold text-[#FF5FBF]">{job.views}</h4>
                                            <p className="text-[13px] text-[#121927]/50">Views</p>
                                        </div>
                                        <div className="text-center">
                                            <h4 className="text-[18px] font-bold text-[#00CC9A]">{job.postedDays}</h4>
                                            <p className="text-[13px] text-[#121927]/50">Days ago</p>
                                        </div>
                                    </div>

                                    {/* Details */}
                                    <div className="space-y-[8px] mb-[16px]">
                                        <div className="flex justify-between items-center">
                                            <span className="text-[15px] text-[#121927]/60">Salary:</span>
                                            <span className="text-[15px] font-semibold text-[#121927]">{job.salary}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-[15px] text-[#121927]/60">Deadline:</span>
                                            <span className="text-[15px] font-semibold text-[#121927]">{job.deadline}</span>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-[12px]">
                                        <button 
                                            onClick={() => navigate('/editjob')} 
                                            className="flex-1 bg-[#E5FAF5] rounded-xl py-[12px] px-[16px] flex items-center justify-center gap-[8px]"
                                        >
                                            <span className="text-[14px] font-semibold text-[#00CC9A]">Edit Job</span>
                                        </button>
                                        <button 
                                            onClick={() => navigate('/application')} 
                                            className="flex-1 bg-[#E9F0FF] rounded-xl py-[12px] px-[16px] flex items-center justify-center gap-[8px]"
                                        >
                                            <span className="text-[14px] font-semibold text-[#2869FE]">Applications</span>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-[48px]">
                            <div className="text-[#121927]/60 text-[16px] mb-[16px]">No jobs found matching your search.</div>
                            <button
                                onClick={() => setSearchTerm("")}
                                className="bg-[#2869FE] text-white px-[16px] py-[8px] rounded-xl text-[14px] font-semibold"
                            >
                                Clear Search
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ManageJobs;