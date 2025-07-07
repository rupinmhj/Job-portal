import { useEffect, useState, useRef, useContext } from "react";
import { motion } from "framer-motion"
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate, useLocation } from "react-router-dom";
import FooterRecruiter from "./FooterRecruiter";
import ApplicationPreview from "./ApplicationPreview";
import images from "../assets/images";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ThemeContext from "./ThemeContext";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './custom-datepicker.css'
import {
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
  FaFileAlt,
  FaComments,
} from "react-icons/fa";

const Applications = () => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef(null);
  
  const back = () => {
    navigate(-1);
  };
  
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [openInterviewPickerId, setOpenInterviewPickerId] = useState(null);
  const [selectedDateTime, setSelectedDateTime] = useState("");
  const [previewApplicant, setPreviewApplicant] = useState(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const datePickerRef = useRef(null);
  const handleIconClick = () => {
    datePickerRef.current.setFocus();
  }

  useEffect(() => {
    if (location.state?.searchTerm) {
      setSearchTerm(location.state.searchTerm);
    }
  }, [location.state]);

  const [applicationsData, setApplicationsData] = useState([
    {
      id: 1,
      candidateName: "John Smith",
      email: "john.smith@email.com",
      phone: "+977-9876543210",
      position: "Senior Frontend Developer",
      appliedDate: "2024-06-20",
      status: "New",
      experience: "5 years",
      skills: ["React", "TypeScript", "Node.js"],
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
    },
    {
      id: 2,
      candidateName: "Sarah Johnson",
      email: "sarah.j@email.com",
      phone: "+977-9876543211",
      position: "UX Designer",
      appliedDate: "2024-06-19",
      status: "Reviewed",
      experience: "3 years",
      skills: ["Figma", "Adobe XD", "Prototyping"],
      avatar: "https://static.vecteezy.com/system/resources/thumbnails/026/911/382/small_2x/happy-student-boy-with-books-isolated-free-photo.jpg",
    },
    {
      id: 3,
      candidateName: "Michael Chen",
      email: "m.chen@email.com",
      phone: "+977-9876543212",
      position: "Product Manager",
      appliedDate: "2024-06-18",
      status: "Interview",
      experience: "7 years",
      skills: ["Product Strategy", "Agile", "Analytics"],
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face"
    },
    {
      id: 4,
      candidateName: "Emily Davis",
      email: "emily.davis@email.com",
      phone: "+977-9876543213",
      position: "Backend Engineer",
      appliedDate: "2024-06-17",
      status: "Shortlisted",
      experience: "4 years",
      skills: ["Python", "Django", "PostgreSQL"],
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face"
    },
    {
      id: 5,
      candidateName: "David Wilson",
      email: "d.wilson@email.com",
      phone: "+977-9876543214",
      position: "Senior Frontend Developer",
      appliedDate: "2024-06-16",
      status: "Rejected",
      experience: "2 years",
      skills: ["JavaScript", "Vue.js", "CSS"],
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face"
    }
  ]);

  const statusOptions = [
    "All",
    "New",
    "Reviewed",
    "Interview",
    "Shortlisted",
    "Rejected",
    "Hired",
  ];

  const statusOptions2 = [
    "New",
    "Reviewed",
    "Interview",
    "Shortlisted",
    "Rejected",
    "Hired",
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "New":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300";
      case "Reviewed":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300";
      case "Interview":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300";
      case "Shortlisted":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
      case "Rejected":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300";
      case "Hired":
        return "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300";
    }
  };

  const handleStatusChange = (applicantId, newStatus) => {
    const applicant = applicationsData.find(app => app.id === applicantId);
    const oldStatus = applicant?.status;
    
    setApplicationsData(prev =>
      prev.map(app =>
        app.id === applicantId ? { ...app, status: newStatus } : app
      )
    );
    
    toast.success(
      `Status changed from "${oldStatus}" to "${newStatus}" for ${applicant?.candidateName}`,
      { 
        autoClose: 3000,
        position: "top-right"
      }
    );
  };

  const openPreview = (applicant) => {
    setPreviewApplicant(applicant);
    setIsPreviewOpen(true);
  };

  const closePreview = () => {
    setIsPreviewOpen(false);
    setPreviewApplicant(null);
  };

  const filteredApplications = applicationsData.filter((app) => {
    const matchesSearch =
      app.candidateName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.position.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === "All" || app.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, delay: 0.15 }}
      className="h-screen overflow-y-scroll scroll-container dark:bg-[#111d39]"
    >
      <div className="min-h-screen font-urbanist scroll-container pb-16">
        <div className="fixed top-0 right-0 left-0 z-30">
          <header className="bg-white max-w-[1024px] mx-auto px-6 py-4 dark:bg-[#111d39]">
            <div className="max-w-[1024px] mx-auto flex justify-between items-center">
              <div
                onClick={back}
                className="p-[6px] border rounded-lg border-black cursor-pointer dark:border-white"
              >
                <FaAngleLeft className="text-gray-500 dark:text-white size-[14px]" />
              </div>
              <h1 className="text-[20px] leading-[24px] font-bold text-gray-900 dark:text-white">Applications</h1>
              <span className="text-[14px] text-google w-[60px] dark:text-gray-300">{filteredApplications.length} Total</span>
            </div>
          </header>
        </div>

        <main className="max-w-[1024px] mx-auto px-6 py-6 mt-[61px]">
          <div className="flex flex-col gap-6 mb-6">
            <div className="py-[14px] focus-within:border-gray-700 border w-full rounded-xl leading-[20px] flex items-center dark:border-gray-500 dark:focus-within:border-gray-200">
              <img
                src={theme === 'light' ? images.searchIcon : images.searchIconDark}
                className="pl-[18px] cursor-pointer"
                alt=""
              />
              <input
                type="text"
                className="text-[14px] px-[14px] text-textSearch dark:bg-[#111d39] focus:outline-none dark:text-white w-full"
                placeholder="Search by candidate or position"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap bg-[#EEF3FF] dark:bg-[#1f2a49] p-[8px] rounded-[18px] gap-[12px] items-center">
              {statusOptions.map((status) => (
                <button
                  key={status}
                  onClick={() => setSelectedStatus(status)}
                  className={`px-[14px] py-[8px] rounded-[12px] font-semibold leading-[24px] text-[14px] ${
                    selectedStatus === status
                      ? "bg-[#2869FE] text-white"
                      : "bg-white text-[#2869FEE6] dark:bg-[#2e3c61] dark:text-[#93b1ff]"
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {filteredApplications.map((app) => (
              <div
                key={app.id}
                className="bg-[#E9F0FF] dark:bg-[#242f49] dark:bg-opacity-90 dark:border-gray-600 bg-opacity-30 rounded-md shadow-sm border p-6 flex flex-col gap-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex gap-4">
                    <img
                      src={app.avatar}
                      alt={app.candidateName}
                      className="h-[48px] w-[48px] rounded-full border-2 border-green-400"
                    />
                    <div className="space-y-[5px]">
                      <div className="flex justify-between items-center">
                        <h2 className="text-[15px] font-semibold leading-[18px] dark:text-gray-100">
                          {app.candidateName}
                        </h2>
                        <span className={`ml-2 px-2 py-1 text-xs font-medium rounded ${getStatusColor(app.status)}`}>
                          {app.status}
                        </span>
                      </div>
                      <p className="text-[14px] text-gray-800 leading-[18px] dark:text-gray-300">
                        Applied for: {app.position}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[13px] text-gray-800 dark:text-gray-300">
                        <div className="flex items-center">
                          <FaEnvelope className="mr-2 h-3 w-3" /> {app.email}
                        </div>
                        <div className="flex items-center">
                          <FaPhone className="mr-2 h-3 w-3" /> {app.phone}
                        </div>
                        <div className="flex items-center">
                          <FaCalendarAlt className="mr-2 h-3 w-3" /> Applied: {app.appliedDate}
                        </div>
                      </div>

                      <div className="flex items-center gap-1 mt-2 text-[13px] pb-2">
                        Experience: <span className="font-medium">{app.experience}</span>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {app.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="px-2 py-[2px] text-xs bg-gray-100 dark:bg-gray-700 rounded"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 text-[14px] font-medium text-gray-800 dark:text-gray-300">
                    <button className="border dark:border-gray-700 rounded px-2 py-1 flex items-center gap-1">
                      <FaFileAlt className="h-3 w-3" /> Resume
                    </button>
                    <button 
                      className="border dark:border-gray-700 rounded px-2 py-1 flex items-center gap-1" 
                      onClick={() => navigate('/message/messageinbox')}
                    >
                      <FaComments className="h-3 w-3" /> Message
                    </button>
                    
                    <div className="relative">
                      <button
                        className="border dark:border-gray-700 rounded px-2 py-1 flex items-center gap-1"
                        onClick={() => {
                          setOpenInterviewPickerId(prev => (prev === app.id ? null : app.id));
                          setTimeout(() => {
                            handleIconClick();
                          }, 0);
                        }}
                      >
                        <FaCalendarAlt className="h-3 w-3" /> Interview
                      </button>
                      {openInterviewPickerId === app.id && (
                        <div className="fixed inset-0 bg-black/30 backdrop-blur-[0.1px] z-30 border border-black flex items-center justify-center">
                          <div className="bg-gray-200 mb-40 dark:bg-[#1e293b] p-6 shadow-lg w-[320px] space-y-4 rounded-2xl">
                            <div className="relative">
                              <DatePicker
                                selected={selectedDateTime}
                                onChange={(date) => setSelectedDateTime(date)}
                                showTimeSelect
                                dateFormat="Pp"
                                className="w-full pr-4 pl-10 py-2 rounded-xl outline-none border border-gray-300 focus:border-gray-700 dark:border-gray-600 bg-white dark:bg-[#334155] text-sm text-black dark:text-white"
                                ref={datePickerRef}
                              />
                              <div className="absolute top-2 left-2 cursor-pointer" onClick={handleIconClick}>
                                <img src={images.calender} className="dark:invert" alt="" />
                              </div>
                            </div>

                            <div className="flex justify-end gap-3 pt-2">
                              <button
                                onClick={() => {
                                  setOpenInterviewPickerId(null);
                                  setSelectedDateTime("");
                                }}
                                className="px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                              >
                                Cancel
                              </button>
                              <button
                                onClick={() => {
                                  if (!selectedDateTime) {
                                    toast.error("Please select a date and time", { autoClose: 1500 });
                                    return;
                                  }
                                  console.log(`Interview for app ${openInterviewPickerId} set for ${selectedDateTime}`);
                                  toast.success(`Interview Set for ${app.candidateName}`, { autoClose: 1000 });
                                  setOpenInterviewPickerId(null);
                                  setSelectedDateTime("");
                                }}
                                className="px-4 py-2 text-sm text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-all"
                              >
                                Save
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    <button
                      className="border rounded px-2 py-1 flex items-center gap-1 w-[91.05px] dark:border-gray-700"
                      onClick={() => openPreview(app)}
                    >
                      <img src={images.status} className="h-3 w-3 dark:invert dark:opacity-80" alt="" />
                      Status
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredApplications.length === 0 && (
            <div className="text-center text-google mt-12">
              No applications found matching your filters.
              <div className="mt-4">
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedStatus("All");
                  }}
                  className="border px-4 py-2 text-[13px] rounded"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          )}
        </main>
      </div>

      <ApplicationPreview
        applicant={previewApplicant}
        isOpen={isPreviewOpen}
        onClose={closePreview}
        onStatusChange={handleStatusChange}
        statusOptions={statusOptions2}
        getStatusColor={getStatusColor}
      />

      <FooterRecruiter />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme === 'dark' ? 'dark' : 'light'}
      />
    </motion.div>
  );
};

export default Applications;