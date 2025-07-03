
import { useEffect, useState, useRef, useContext} from "react";
import { motion } from "framer-motion"
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate, useLocation } from "react-router-dom";
import FooterRecruiter from "./FooterRecruiter";
import images from "../assets/images";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ThemeContext from "./ThemeContext";
import {
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
  FaFileAlt,
  FaComments,
} from "react-icons/fa";
const Applications = () => {
  const {theme}=useContext(ThemeContext);
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef=useRef(null);
  const back = () => {
    navigate(-1);
  };
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");

  const [showDateTimePicker, setShowDateTimePicker] = useState(false);
  const [selectedAppId, setSelectedAppId] = useState(null);
  const [selectedDateTime, setSelectedDateTime] = useState("");

  const [openStatusDropdownId, setOpenStatusDropdownId] = useState(null);
  useEffect(()=>{
    const handleClickOutside=(e)=>{
      if(dropdownRef.current && 
        !dropdownRef.current.contains(e.target)
      ){
        setOpenStatusDropdownId(null);
      }
    }
    document.addEventListener("mousedown",handleClickOutside);
    return()=>{
      document.removeEventListener("mousedown",handleClickOutside);
    }
    // console.log(dropdownRef.current)
  },[])
  useEffect(() => {
    if (location.state?.searchTerm) {
      setSearchTerm(location.state.searchTerm);
    }
  }, [location.state]);
  const [applicationsData, setApplicationsData] = useState(
    [
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
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
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
        avatar:
          "https://static.vecteezy.com/system/resources/thumbnails/026/911/382/small_2x/happy-student-boy-with-books-isolated-free-photo.jpg",
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
    ]
  )

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
    "Reviewed",
    "Interview",
    "Shortlisted",
    "Rejected",
    "Hired",
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "New":
        return "bg-blue-100 text-blue-800";
      case "Reviewed":
        return "bg-yellow-100 text-yellow-800";
      case "Interview":
        return "bg-purple-100 text-purple-800";
      case "Shortlisted":
        return "bg-green-100 text-green-800";
      case "Rejected":
        return "bg-red-100 text-red-800";
      case "Hired":
        return "bg-teal-100 text-teal-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
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

      <div className=" min-h-screen font-urbanist scroll-container pb-16">
        <div className="fixed top-0 right-0 left-0 z-20">
          <header className="bg-white max-w-[1024px] mx-auto px-6 py-4 dark:bg-[#111d39] ">
            <div className="max-w-[1024px] mx-auto flex justify-between items-center">
              <div
                onClick={back}
                className="p-[6px] border rounded-lg border-black cursor-pointer dark:border-white"
              >
                <FaAngleLeft className="text-gray-500 dark:text-white size-[14px]" />
              </div>
              <h1 className="text-[20px] leading-[24px] font-bold text-gray-900 dark:text-white">Applications</h1>

              <span className="text-[14px] text-google w-[60px] ">{filteredApplications.length} Total</span>
            </div>
          </header>
        </div>


        <main className="max-w-[1024px] mx-auto px-6 py-6 mt-[61px]">
          <div className="flex flex-col  gap-6 mb-6">
            <div className="py-[14px]  focus-within:border-gray-400 border border-gray-200 w-full rounded-xl leading-[20px] flex items-center">
              <img
                src={theme==='light'?images.searchIcon:images.searchIconDark}

                className="pl-[18px] cursor-pointer"
                alt=""
              />

              <input
                type="text"
                className="text-[14px] px-[14px] text-textSearch dark:bg-[#111d39]  focus:outline-none   w-full"
                placeholder="Search by candidate or position"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}

              />
              {/* <img src={images.option} className='pr-[14px]' alt="" /> */}
            </div>

            <div className="flex flex-wrap bg-[#EEF3FF] dark:bg-[#1f2a49]  p-[8px] rounded-[18px] gap-[12px] items-center">
              {statusOptions.map((status) => (
                <button
                  key={status}
                  onClick={() => setSelectedStatus(status)}
                  className={`px-[14px] py-[8px] rounded-[12px] font-semibold leading-[24px] text-[14px] font-semibold ${selectedStatus === status
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
                className="bg-[#E9F0FF] bg-opacity-30 rounded-md shadow-sm border p-6 flex flex-col gap-4"
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
                        <h2 className="text-[15px] font-semibold leading-[18px]">
                          {app.candidateName}
                        </h2>
                        <span
                          className={`ml-2 px-2 py-1 text-xs font-medium rounded ${getStatusColor(
                            app.status
                          )}`}
                        >
                          {app.status}
                        </span>
                      </div>
                      <p className="text-[14px] text-gray-800 leading-[18px]">
                        Applied for: {app.position}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[13px] text-gray-800">
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
                            className="px-2 py-[2px] text-xs bg-gray-100 rounded"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* <div className="flex gap-[2px] mt-2">{renderStars(app.rating)}</div> */}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 text-[14px] font-medium ">
                    <button className="border rounded px-2 py-1 flex items-center gap-1">
                      <FaFileAlt className="h-3 w-3" /> Resume
                    </button>
                    <button className="border rounded px-2 py-1 flex items-center gap-1" onClick={() => navigate('/message/messageinbox')}>
                      <FaComments className="h-3 w-3" /> Message
                    </button>
                    <button
                      className="border rounded px-2 py-1 flex items-center gap-1"
                      onClick={() => {
                        setSelectedAppId(app.id);
                        setShowDateTimePicker(true);
                      }}
                    >
                      <FaCalendarAlt className="h-3 w-3" /> Interview
                    </button>

                    <div className="relative">
                      <button
                        className="border rounded px-2 py-1 flex items-center gap-1 w-[91.05px]"
                        onClick={() =>
                          setOpenStatusDropdownId(openStatusDropdownId === app.id ? null : app.id)
                        }
                      >
                        <img src={images.status} className="h-3 w-3" alt="" />
                        Status
                      </button>

                      {openStatusDropdownId === app.id && (
                        <div ref={dropdownRef} className="absolute mt-1 top-[-120px] right-[100px] w-[120px] bg-white border rounded shadow z-30">
                          
                          {statusOptions2.map((status, index) => (
                            <div
                              key={index}
                              className={`px-3 py-2 cursor-pointer text-sm hover:opacity-50 ${getStatusColor(status)}`}
                              onClick={() => {
                                setApplicationsData(prev =>
                                  prev.map(a =>
                                    a.id === app.id ? { ...a, status: status } : a
                                  )
                                );
                                setOpenStatusDropdownId(null);
                              }}
                            >
                              {status}
                            </div>
                          ))}

                        </div>
                      )}
                    </div>
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
      <FooterRecruiter />
      {
  showDateTimePicker && (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 font-urbanist">
      <div className="bg-gray-200 p-6 rounded-2xl shadow-lg w-[320px] max-w-full space-y-4">
        <h2 className="text-[18px] font-bold text-gray-800">Set Interview Date & Time</h2>

        <input
          type="datetime-local"
          value={selectedDateTime}
          onChange={(e) => setSelectedDateTime(e.target.value)}
          min={new Date().toISOString().slice(0, 16)}
          className="w-full px-4 py-2 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-blue-500"
        />

        <div className="flex justify-end gap-3 pt-2">
          <button
            onClick={() => {
              setShowDateTimePicker(false);
              setSelectedAppId(null);
              setSelectedDateTime("");
            }}
            className="px-4 py-2 text-sm border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={() => {
              if (!selectedDateTime) {
                toast.error("Please select a date and time", { autoClose: 1500 });
                return;
              }
              console.log(`Interview for app ${selectedAppId} set for ${selectedDateTime}`);
              toast.success("Interview Set", { autoClose: 1000 });
              setShowDateTimePicker(false);
              setSelectedAppId(null);
              setSelectedDateTime("");
            }}
            className="px-4 py-2 text-sm text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-all"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

      <ToastContainer />
    </motion.div>
  );
};

export default Applications;
