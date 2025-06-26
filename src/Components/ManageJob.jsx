import { useState } from "react";
import { motion } from "framer-motion"
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import {
    FaPlus,
    FaSearch,
    FaFilter,
    FaEllipsisH,
    FaUsers,
    FaEye,
    FaCalendarAlt,
    FaMapMarkerAlt,
    FaEdit
} from "react-icons/fa";

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
            deadline: "2024-07-15",
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
            deadline: "2024-07-20",
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
            deadline: "2024-07-25",
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
            deadline: "2024-06-30",
            salary: "$85k - $115k"
        }
    ];
    //   const jobs=[]

    const getStatusColor = (status) => {
        switch (status) {
            case "Open": return "bg-green-100 text-green-800";
            case "Closed": return "bg-red-100 text-red-800";
            case "Paused": return "bg-yellow-100 text-yellow-800";
            default: return "bg-gray-100 text-gray-800";
        }
    };

    const filteredJobs = jobs.filter(job =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.15 }}
            className="h-screen overflow-y-scroll scroll-container"
        >
            <div className=" min-h-screen font-urbanist ">
                <div className="fixed top-0 right-0 left-0 z-20">
                    <header className="bg-white border-b px-[24px] py-[16px]">
                        <div className="relative max-w-[1024px] mx-auto flex justify-between items-center h-[48px]">
                            {/* Back Button */}
                            <div
                                onClick={back}
                                className="p-[6px] border rounded-lg border-black cursor-pointer z-10"
                            >
                                <FaAngleLeft className="text-gray-500 size-[14px]" />
                            </div>

                            {/* Centered Title */}
                            <h1 className="absolute left-1/2 transform -translate-x-1/2 text-[20px] font-bold text-gray-900">
                                Manage Jobs
                            </h1>

                            {/* Create Button */}
                            <button onClick={() => navigate('/createjob')} className="bg-[#2869FE] text-white px-4 py-2 rounded-lg text-[14px] font-medium flex items-center z-10">
                                <FaPlus className="h-4 w-4 md:mr-2" />
                                <span className="hidden md:block">Create New Job</span>
                            </button>
                        </div>

                    </header>
                </div>


                <main className="max-w-[1024px] mx-auto px-[24px] py-[24px] mt-[81px] " >
                    <div className="flex flex-col sm:flex-row gap-4 mb-[24px]">
                        <div className="relative flex-1">
                            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                            <input
                                type="text"
                                placeholder="Search jobs by title or company..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full border border-gray-300 rounded-lg pl-10 py-[12px] text-[14px] focus:outline-none border focus:border-gray-400"
                            />
                        </div>
                        {/* <button className="border border-gray-300 rounded-md text-[14px] px-4 flex items-center">
            <FaFilter className="h-4 w-4 mr-2" />
            Filters
          </button> */}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                        {filteredJobs.map((job) => (
                            <div key={job.id} className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition-shadow">
                                <div className="flex items-start justify-between mb-3">
                                    <div>
                                        <h2 className="text-[16px] font-semibold text-gray-900 mb-1">{job.title}</h2>
                                        <p className="text-[13px] text-gray-600">{job.company}</p>
                                    </div>
                                    <span className={`${getStatusColor(job.status)} text-[12px] px-2 py-[2px] rounded-md`}>
                                        {job.status}
                                    </span>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center justify-between text-[13px] text-gray-600">
                                        <div className="flex items-center">
                                            <FaMapMarkerAlt className="h-4 w-4 mr-1" />
                                            {job.location}
                                        </div>
                                        <div className="text-[13px] font-medium text-gray-900">
                                            {job.type}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-3 gap-2 py-3 border-t border-b">
                                        <div className="text-center">
                                            <FaUsers className="h-4 w-4 text-blue-500 mx-auto mb-1" />
                                            <div className="text-[14px] font-semibold text-gray-900">{job.applications}</div>
                                            <div className="text-[11px] text-gray-500">Applications</div>
                                        </div>
                                        <div className="text-center">
                                            <FaEye className="h-4 w-4 text-green-500 mx-auto mb-1" />
                                            <div className="text-[14px] font-semibold text-gray-900">{job.views}</div>
                                            <div className="text-[11px] text-gray-500">Views</div>
                                        </div>
                                        <div className="text-center">
                                            <FaCalendarAlt className="h-4 w-4 text-purple-500 mx-auto mb-1" />
                                            <div className="text-[14px] font-semibold text-gray-900">{job.postedDays}</div>
                                            <div className="text-[11px] text-gray-500">Days ago</div>
                                        </div>
                                    </div>

                                    <div className="space-y-2 text-[13px]">
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Salary:</span>
                                            <span className="font-medium text-gray-900">{job.salary}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Deadline:</span>
                                            <span className="font-medium text-gray-900">{job.deadline}</span>
                                        </div>
                                    </div>

                                    <div className="flex gap-2 pt-3">
                                        <button onClick={() => navigate('/editjob')} className="flex-1 border border-gray-300 rounded-md text-[13px] py-1 flex items-center justify-center">
                                            <FaEdit className="h-4 w-4 mr-1" />
                                            Edit
                                        </button>
                                        <button onClick={() => navigate('/application')} className=" flex-1 border border-gray-300 rounded-md text-[13px] py-1 flex items-center justify-center ">
                                            <FaUsers className="h-4 w-4 mr-1" />
                                            Applications
                                        </button>
                                        {/* <button className="border border-gray-300 rounded-md p-2">
                    <FaEllipsisH className="h-4 w-4" />
                  </button> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredJobs.length === 0 && (
                        <div className="text-center py-12">
                            <div className="text-gray-500 mb-4 text-[14px]">No jobs found matching your search.</div>
                            <button
                                onClick={() => setSearchTerm("")}
                                className="border border-gray-300 rounded-md px-4 py-2 text-[13px]"
                            >
                                Clear Search
                            </button>
                        </div>
                    )}
                </main>
            </div>
        </motion.div>

    );
};

export default ManageJobs;
