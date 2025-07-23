import { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { FaAngleLeft, FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import AuthContext from "../Context/authContext";
import useAxiosAuth from "../hooks/useAxiosAuth";
import images from "../assets/images";

// --- Header Component ---
const Header = ({ onBack, onCreate }) => (
    <div className="fixed top-0 left-0 right-0 bg-white z-10 dark:bg-[#111d39]">
        <div className="flex items-center justify-between max-w-[1024px] mx-auto px-[24px] pt-[16px] pb-[24px]">
            <div onClick={onBack} className="p-[6px] border rounded-lg border-black cursor-pointer dark:border-white">
                <FaAngleLeft className="text-gray-500 size-[14px] dark:text-white" />
            </div>
            <h2 className="text-[20px] font-bold leading-[24px] ml-6 dark:text-white">Manage Jobs</h2>
            <button onClick={onCreate} className="bg-[#2869FE] text-white px-[12px] py-[8px] rounded-lg text-[14px] font-semibold flex items-center gap-[4px]">
                <FaPlus className="size-[12px]" />
                <span className="hidden sm:block">Create</span>
            </button>
        </div>
    </div>
);

// --- SearchBar Component ---
const SearchBar = ({ searchTerm, setSearchTerm }) => (
    <div className="max-w-[1024px] mx-auto px-[24px] pt-[80px]">
        <div className="py-[14px] focus-within:border-gray-400 dark:focus-within:border-gray-200 dark:border-gray-500 border border-gray-200 w-full rounded-xl flex items-center mb-[24px]">
            <img src={images.searchIcon} className="pl-[18px] cursor-pointer dark:invert" alt="" />
            <input
                type="text"
                placeholder="Search jobs by title ..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="text-[14px] px-[14px] text-textSearch focus:outline-none w-full dark:bg-[#111d39] dark:text-white"
            />
        </div>
    </div>
);

// --- Skeleton Loader ---
const SkeletonLoader = () => (
    <div className="max-w-[1024px] mx-auto px-[24px] pt-[80px]">
        <div className="py-[14px] border border-gray-200 dark:border-gray-500 w-full rounded-xl flex items-center mb-[24px]">
            <div className="pl-[18px] w-4 h-4 bg-gray-300 rounded animate-pulse"></div>
            <div className="px-[14px] w-full">
                <div className="h-4 bg-gray-300 rounded animate-pulse w-1/3"></div>
            </div>
        </div>
        <div className="space-y-[16px]">
            {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-white dark:bg-[#242f49] rounded-xl p-[18px] border border-gray-200 dark:border-gray-800 shadow-md">
                    <div className="animate-pulse space-y-2">
                        <div className="h-6 bg-gray-300 rounded w-3/4" />
                        <div className="h-4 bg-gray-300 rounded w-1/2" />
                        <div className="h-4 bg-gray-300 rounded w-1/3" />
                        <div className="h-16 bg-gray-300 rounded" />
                        <div className="flex gap-2">
                            <div className="h-10 bg-gray-300 rounded flex-1" />
                            <div className="h-10 bg-gray-300 rounded flex-1" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

// --- ErrorDisplay ---
const ErrorDisplay = ({ error }) => (
    <div className="max-w-[1024px] mx-auto px-[24px] pt-[80px]">
        <div className="text-center py-[48px]">
            <div className="text-red-500 text-[16px] mb-[16px]">
                Error loading jobs: {error}
            </div>
            <button
                onClick={() => window.location.reload()}
                className="bg-[#2869FE] text-white px-[16px] py-[8px] rounded-xl text-[14px] font-semibold"
            >
                Try Again
            </button>
        </div>
    </div>
);

// --- JobCard ---
const JobCard = ({ job, onEdit, onView }) => {
    const getStatusColor = (status) => {
        switch (status) {
            case "Open": return "bg-[#E5FAF5] dark:bg-black/20 text-[#00CC9A]";
            case "Closed": return "bg-[#FFEFF8] text-[#FF5FBF] dark:bg-black/20";
            case "Paused": return "bg-[#F6EFFF] text-[#7C66FF] dark:bg-black/20";
            default: return "bg-[#F1F1F2] text-[#121927]";
        }
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        });
    };

    return (
        <div className="bg-white dark:bg-[#242f49] rounded-xl p-[18px] border border-gray-200 dark:border-gray-800 shadow-md">
            <div className="flex items-start justify-between mb-[16px]">
                <div className="flex-1">
                    <h3 className="text-[16px] font-bold leading-[20px] text-[#121927] dark:text-[#ffffff] mb-[4px]">
                        {job.title}
                    </h3>
                    <div className="flex items-center gap-[8px]">
                        <span className="text-[13px] font-medium text-[#121927]/80 dark:text-gray-400">{job.company_name}</span>
                        <span className="w-[4px] h-[4px] bg-[#00CC9A] rounded-full"></span>
                        {(() => {
                            let jobType = "";
                            if (job.job_type === 'full_time') {
                                jobType = "Full Time";
                            } else if (job.job_type === 'part_time') {
                                jobType = "Part Time";
                            } else if (job.job_type === 'intern') {
                                jobType = "Internship";
                            } else {
                                jobType = "Freelancing";
                            }

                            return (
                                <span className="text-[13px] font-medium text-[#121927]/80 dark:text-gray-400">
                                    {jobType}
                                </span>
                            );
                        })()}

                    </div>
                </div>
                <span className={`${getStatusColor(job.status)} text-[13px] font-semibold px-[8px] py-[4px] rounded-lg`}>
                    {job.job_status}
                </span>
            </div>

            <div className="flex items-center mb-[16px]">
                <img src={images.location} className="size-[14px] mr-[4px]" alt="" />
                <span className="text-[13px] font-medium text-[#121927]/80 dark:text-gray-300">{job.location}</span>
            </div>

            <div className="flex justify-around mb-[16px] py-[12px] bg-[#F8F9FA] dark:bg-black/20 rounded-xl">
                <div className="text-center">
                    <h4 className="text-[18px] font-bold text-[#7C66FF]">{job.applications || 0}</h4>
                    <p className="text-[13px] text-[#121927]/50 dark:text-gray-300">Applied</p>
                </div>
                <div className="text-center">
                    <h4 className="text-[18px] font-bold text-[#FF5FBF]">{job.views || 0}</h4>
                    <p className="text-[13px] text-[#121927]/50 dark:text-gray-300">Views</p>
                </div>
                <div className="text-center">
                    <h4 className="text-[18px] font-bold text-[#00CC9A]">{job.posted_days}</h4>
                    <p className="text-[13px] text-[#121927]/50 dark:text-gray-300">Days ago</p>
                </div>
            </div>

            <div className="space-y-[8px] mb-[16px]">
                <div className="flex justify-between items-center">
                    <span className="text-[15px] text-[#121927]/60 dark:text-gray-100">Salary:</span>
                    <span className="text-[15px] font-semibold text-[#121927] dark:text-gray-100">{job.salary || 'Not specified'}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-[15px] text-[#121927]/60 dark:text-gray-100">Deadline:</span>
                    <span className="text-[15px] font-semibold text-[#121927] dark:text-gray-100">{job.deadline ? formatDate(job.deadline) : 'Not specified'}</span>
                </div>
            </div>

            <div className="flex gap-[12px]">
                <button onClick={onEdit} className="flex-1 bg-[#E5FAF5] dark:bg-[#313b54] rounded-xl py-[12px] px-[16px] flex items-center justify-center gap-[8px]">
                    <span className="text-[14px] font-semibold text-[#00CC9A]">Edit Job</span>
                </button>
                <button onClick={onView} className="flex-1 bg-[#E9F0FF] dark:bg-[#313b54] rounded-xl py-[12px] px-[16px] flex items-center justify-center gap-[8px]">
                    <span className="text-[14px] font-semibold text-[#2869FE]">Applications</span>
                </button>
            </div>
        </div>
    );
};

// --- Main Component ---
const ManageJobs = () => {
    const navigate = useNavigate();
    const api = useAxiosAuth();
    const { authTokens, authReady } = useContext(AuthContext);

    const [searchTerm, setSearchTerm] = useState("");
    const [jobs, setJobs] = useState([]);
    const [nextPage, setNextPage] = useState(null);
    const [prevPage, setPrevPage] = useState(null);
    const [totalJobs, setTotalJobs] = useState(0);
    const [currentPage,setCurrentPage]=useState(1);
    const [totalPage,setTotalPage]=useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchJobs = async (url = "jobs/creator/list/") => {
        try {
            setLoading(true);
            const response = await api.get(url);
            setJobs(response.data.job_list);
            setTotalJobs(response.data.total_jobs);
            setNextPage(response.data.next_page);
            setPrevPage(response.data.previous_page);
            setCurrentPage(response.data.current_page);
            setTotalPage(response.data.total_pages);
        } catch (err) {
            setError(err.response?.data?.message || err.message || 'Failed to fetch jobs');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!authReady || !authTokens?.access) return;
        fetchJobs();
    }, [authTokens, authReady]);

    if (!authReady) {
        return (
            <motion.div className="h-screen flex items-center justify-center dark:bg-[#111d39] text-[#121927] font-urbanist">
                <SkeletonLoader />
            </motion.div>
        );
    }

    const filteredJobs = jobs.filter(job =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.15 }}
            className="h-screen overflow-y-scroll scroll-container dark:bg-[#111d39] text-[#121927] font-urbanist"
        >
            <Header onBack={() => navigate('/homerecruiter')} onCreate={() => navigate("/createjob")} />

            {loading ? (
                <SkeletonLoader />
            ) : error ? (
                <ErrorDisplay error={error} />
            ) : (
                <>
                    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                    <div className="max-w-[1024px] mx-auto px-[24px] pb-[100px]">
                        <p className="text-sm text-gray-500 dark:text-gray-300 mb-2">Total Jobs: {totalJobs}</p>

                        {filteredJobs.length > 0 ? (
                            <div className="space-y-[16px]">
                                {filteredJobs.map(job => (
                                    <JobCard
                                        key={job.id}
                                        job={job}
                                        onEdit={() => navigate(`/jobs/${job.id}/edit`)}
                                        onView={() => navigate(`/jobs/${job.id}/applications`)}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-[48px]">
                                <div className="text-[#121927]/60 dark:text-gray-100 text-[16px] mb-[16px]">
                                    {jobs.length === 0
                                        ? "No jobs available. Create your first job!"
                                        : "No jobs found matching your search."}
                                </div>
                                <button
                                    onClick={() => jobs.length === 0 ? navigate("/createjob") : setSearchTerm("")}
                                    className="bg-[#2869FE] text-white px-[16px] py-[8px] rounded-xl text-[14px] font-semibold"
                                >
                                    {jobs.length === 0 ? (
                                        <>
                                            <FaPlus className="size-[12px] inline-block mr-2" />
                                            Create Job
                                        </>
                                    ) : "Clear Search"}
                                </button>
                            </div>
                        )}

                        {/* Pagination Buttons */}
                        {/* Pagination Controls */}
                        {(nextPage || prevPage) && (
                            <div className="flex flex-col items-center mt-8 gap-2">
                                {/* Page Info */}
                                <span className="text-sm text-gray-600 dark:text-gray-300">
Page {currentPage} of {totalPage}                                </span>

                                <div className="flex justify-center gap-4">
                                    {/* Prev Button */}
                                    <button
                                        onClick={() => fetchJobs(prevPage)}
                                        disabled={!prevPage || loading}
                                        className={`px-4 py-2 rounded-xl text-sm font-semibold ${prevPage && !loading
                                                ? "bg-[#f3f4f6] text-[#121927] hover:bg-[#e5e7eb] dark:bg-[#313b54] dark:text-white dark:hover:bg-[#3a4a6a]"
                                                : "bg-gray-300 text-gray-500 dark:bg-gray-700 cursor-not-allowed"
                                            }`}
                                    >
                                        {loading && prevPage ? "Loading..." : "Previous"}
                                    </button>

                                    {/* Next Button */}
                                    <button
                                        onClick={() => fetchJobs(nextPage)}
                                        disabled={!nextPage || loading}
                                        className={`px-4 py-2 rounded-xl text-sm font-semibold ${nextPage && !loading
                                                ? "bg-[#f3f4f6] text-[#121927] hover:bg-[#e5e7eb] dark:bg-[#313b54] dark:text-white dark:hover:bg-[#3a4a6a]"
                                                : "bg-gray-300 text-gray-500 dark:bg-gray-700 cursor-not-allowed"
                                            }`}
                                    >
                                        {loading && nextPage ? "Loading..." : "Next"}
                                    </button>
                                </div>
                            </div>
                        )}

                    </div>
                </>
            )}
        </motion.div>
    );
};


export default ManageJobs;
