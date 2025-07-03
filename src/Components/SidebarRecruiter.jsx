import { useEffect, useState, useRef, useContext } from "react";
import { motion } from "framer-motion";
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate, useLocation } from "react-router-dom";
import FooterRecruiter from "./FooterRecruiter";
import images from "../assets/images";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
  FaFileAlt,
  FaComments,
} from "react-icons/fa";
import  ThemeContext from "./ThemeContext"; // Add this line if not already imported

const Applications = () => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef(null);

  const back = () => navigate(-1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [showDateTimePicker, setShowDateTimePicker] = useState(false);
  const [selectedAppId, setSelectedAppId] = useState(null);
  const [selectedDateTime, setSelectedDateTime] = useState("");
  const [openStatusDropdownId, setOpenStatusDropdownId] = useState(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenStatusDropdownId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (location.state?.searchTerm) {
      setSearchTerm(location.state.searchTerm);
    }
  }, [location.state]);

  const applicationsData = [ /* same as your list */ ];
  const [applications, setApplications] = useState(applicationsData);

  const statusOptions = ["All", "New", "Reviewed", "Interview", "Shortlisted", "Rejected", "Hired"];
  const statusOptions2 = ["Reviewed", "Interview", "Shortlisted", "Rejected", "Hired"];

  const getStatusColor = (status) => {
    switch (status) {
      case "New": return "bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-900";
      case "Reviewed": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900";
      case "Interview": return "bg-purple-100 text-purple-800 dark:bg-purple-200 dark:text-purple-900";
      case "Shortlisted": return "bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900";
      case "Rejected": return "bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-900";
      case "Hired": return "bg-teal-100 text-teal-800 dark:bg-teal-200 dark:text-teal-900";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-300 dark:text-gray-900";
    }
  };

  const filteredApplications = applications.filter((app) => {
    const matchesSearch = app.candidateName.toLowerCase().includes(searchTerm.toLowerCase()) || app.position.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === "All" || app.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, delay: 0.15 }}
      className={`h-screen overflow-y-scroll scroll-container font-urbanist ${theme === "dark" ? "bg-[#111d39] text-white" : "bg-white text-black"}`}
    >
      <div className="min-h-screen pb-16">
        {/* Header */}
        <div className="fixed top-0 left-0 right-0 z-20">
          <header className={`max-w-[1024px] mx-auto px-6 py-4 ${theme === "dark" ? "bg-[#111d39]" : "bg-white"}`}>
            <div className="flex justify-between items-center">
              <div
                onClick={back}
                className={`p-[6px] border rounded-lg cursor-pointer ${theme === "dark" ? "border-white" : "border-black"}`}
              >
                <FaAngleLeft className={`${theme === "dark" ? "text-white" : "text-gray-500"} size-[14px]`} />
              </div>
              <h1 className="text-[20px] font-bold">Applications</h1>
              <span className="text-[14px]">{filteredApplications.length} Total</span>
            </div>
          </header>
        </div>

        {/* Main Content */}
        <main className="max-w-[1024px] mx-auto px-6 py-6 mt-[61px]">
          <div className="flex flex-col gap-6 mb-6">
            {/* Search Bar */}
            <div className={`py-[14px] border w-full rounded-xl flex items-center ${theme === "dark" ? "border-white/20 bg-[#1c2c4a]" : "border-gray-200"}`}>
              <img src={images.searchIcon} className="pl-[18px]" alt="Search" />
              <input
                type="text"
                className={`text-[14px] px-[14px] w-full bg-transparent focus:outline-none ${theme === "dark" ? "text-white placeholder:text-white/60" : "text-gray-700"}`}
                placeholder="Search by candidate or position"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Status Filters */}
            <div className={`flex flex-wrap p-[8px] rounded-[18px] gap-[12px] items-center ${theme === "dark" ? "bg-[#2d3d63]" : "bg-[#EEF3FF]"}`}>
              {statusOptions.map((status) => (
                <button
                  key={status}
                  onClick={() => setSelectedStatus(status)}
                  className={`px-[14px] py-[8px] rounded-[12px] font-semibold text-[14px] ${
                    selectedStatus === status
                      ? "bg-[#2869FE] text-white"
                      : `${theme === "dark" ? "bg-[#1c2c4a] text-white" : "bg-white text-[#2869FE]"}`
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>

          {/* Applications List */}
          <div className="space-y-4">
            {filteredApplications.map((app) => (
              <div key={app.id} className={`rounded-md shadow-sm border p-6 flex flex-col gap-4 ${theme === "dark" ? "bg-[#1a2b48] border-white/10" : "bg-[#E9F0FF] bg-opacity-30"}`}>
                <div className="flex items-start justify-between gap-4">
                  {/* Candidate Info */}
                  <div className="flex gap-4">
                    <img src={app.avatar} alt={app.candidateName} className="h-[48px] w-[48px] rounded-full border-2 border-green-400" />
                    <div className="space-y-[5px]">
                      <div className="flex items-center">
                        <h2 className="text-[15px] font-semibold">{app.candidateName}</h2>
                        <span className={`ml-2 px-2 py-1 text-xs font-medium rounded ${getStatusColor(app.status)}`}>{app.status}</span>
                      </div>
                      <p className="text-[14px]">Applied for: {app.position}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[13px]">
                        <div className="flex items-center"><FaEnvelope className="mr-2 h-3 w-3" />{app.email}</div>
                        <div className="flex items-center"><FaPhone className="mr-2 h-3 w-3" />{app.phone}</div>
                        <div className="flex items-center"><FaCalendarAlt className="mr-2 h-3 w-3" />Applied: {app.appliedDate}</div>
                      </div>
                      <div className="flex items-center gap-1 mt-2 text-[13px]">Experience: <span className="font-medium">{app.experience}</span></div>
                      <div className="flex flex-wrap gap-2">
                        {app.skills.map((skill, i) => (
                          <span key={i} className={`px-2 py-[2px] text-xs rounded ${theme === "dark" ? "bg-white/20" : "bg-gray-100"}`}>{skill}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-2 text-[14px] font-medium">
                    <button className="border rounded px-2 py-1 flex items-center gap-1"><FaFileAlt className="h-3 w-3" />Resume</button>
                    <button className="border rounded px-2 py-1 flex items-center gap-1" onClick={() => navigate("/message/messageinbox")}><FaComments className="h-3 w-3" />Message</button>
                    <button className="border rounded px-2 py-1 flex items-center gap-1" onClick={() => { setSelectedAppId(app.id); setShowDateTimePicker(true); }}><FaCalendarAlt className="h-3 w-3" />Interview</button>

                    {/* Status Dropdown */}
                    <div className="relative">
                      <button onClick={() => setOpenStatusDropdownId(openStatusDropdownId === app.id ? null : app.id)} className="border rounded px-2 py-1 flex items-center gap-1 w-[91.05px]">
                        <img src={images.status} className="h-3 w-3" alt="" /> Status
                      </button>
                      {openStatusDropdownId === app.id && (
                        <div ref={dropdownRef} className="absolute mt-1 top-[-120px] right-[100px] w-[120px] bg-white dark:bg-[#2d3d63] border rounded shadow z-30">
                          {statusOptions2.map((status, i) => (
                            <div key={i} className={`px-3 py-2 cursor-pointer text-sm hover:opacity-70 ${getStatusColor(status)}`} onClick={() => {
                              setApplications(prev => prev.map(a => a.id === app.id ? { ...a, status } : a));
                              setOpenStatusDropdownId(null);
                            }}>{status}</div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredApplications.length === 0 && (
            <div className="text-center mt-12">
              No applications found.
              <div className="mt-4">
                <button onClick={() => { setSearchTerm(""); setSelectedStatus("All"); }} className="border px-4 py-2 text-[13px] rounded">
                  Clear Filters
                </button>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Footer */}
      <FooterRecruiter />

      {/* Date Picker Modal */}
      {showDateTimePicker && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 font-urbanist">
          <div className={`p-6 rounded-2xl shadow-lg w-[320px] max-w-full space-y-4 ${theme === "dark" ? "bg-[#2c3c5d] text-white" : "bg-gray-200"}`}>
            <h2 className="text-[18px] font-bold">Set Interview Date & Time</h2>
            <input
              type="datetime-local"
              value={selectedDateTime}
              onChange={(e) => setSelectedDateTime(e.target.value)}
              min={new Date().toISOString().slice(0, 16)}
              className="w-full px-4 py-2 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-blue-500"
            />
            <div className="flex justify-end gap-3 pt-2">
              <button onClick={() => { setShowDateTimePicker(false); setSelectedAppId(null); setSelectedDateTime(""); }} className="px-4 py-2 text-sm border border-gray-300 rounded-xl hover:bg-gray-100">
                Cancel
              </button>
              <button onClick={() => {
                if (!selectedDateTime) {
                  toast.error("Please select a date and time", { autoClose: 1500 });
                  return;
                }
                toast.success("Interview Set", { autoClose: 1000 });
                setShowDateTimePicker(false);
                setSelectedAppId(null);
                setSelectedDateTime("");
              }} className="px-4 py-2 text-sm text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-all">
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      <ToastContainer />
    </motion.div>
  );
};
export default Applications;
