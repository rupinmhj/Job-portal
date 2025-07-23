import React, { useEffect, useState, useContext } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { FaAngleLeft, FaPlus } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoLogOutOutline, IoBagHandleOutline } from "react-icons/io5";
import { MdOutlinePhonelinkSetup } from "react-icons/md";
import { CgBriefcase } from "react-icons/cg";
import FooterRecruiter from "../Components/FooterRecruiter";
import images from "../assets/images";
import ThemeContext from "./ThemeContext";
import AuthContext from "../Context/authContext";
const ProfileRecruiter = () => {
  const {logout,companyDetails,email}=useContext(AuthContext)
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  const [notificationPreference, setNotificationPreference] = useState("both");
  const [showSettings, setShowSettings] = useState(false);

  const [profile, setProfile] = useState({
  name: "",
  email: "",
  logo: "",
});


  const [stats, setStats] = useState({
    postedJobs: 0,
    applications: 0,
    views: 0,
  });

  useEffect(() => {
    setTimeout(() => {
      setProfile({
        name: companyDetails?.name||"Company name" ,
        email: companyDetails?.email||"Company email" ,
        logo: companyDetails?.logo||images.companyprofile ,
      });

      setStats({
        postedJobs: 24,
        applications: 432,
        views: 1250,
      });
    }, 500);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/signin');
    
  };

  const menuItems = [
    {
      label: "Manage Jobs",
      icon: <CgBriefcase />,
      action: () => navigate("/managejob"),
    },
    {
      label: "View Applicants",
      icon: <IoBagHandleOutline />,
      action: () => navigate("/application"),
    },
   {
  label: "Settings",
  icon: <MdOutlinePhonelinkSetup />,
  action: () => setShowSettings((prev) => !prev),
  custom: showSettings && (
    <div className="w-full mt-2 space-y-2 pl-10">
      <p className="text-[13px] font-semibold mb-1">Notification Preference</p>
      {["app", "email", "both"].map((option) => (
        <label
          key={option}
          className="flex items-center gap-2 text-[14px] cursor-pointer"
        >
          <input
            type="radio"
            name="notification"
            value={option}
            checked={notificationPreference === option}
            onChange={() => setNotificationPreference(option)}
            className="accent-blue-600 dark:accent-white"
          />
          <span className="capitalize">
            {option === "app"
              ? "App Notification"
              : option === "email"
              ? "Email Notification"
              : "Both"}
          </span>
        </label>
      ))}
    </div>
  ),
},
,
    {
      label: "Logout",
      icon: <IoLogOutOutline />,
      action: handleLogout,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={`h-screen overflow-y-scroll font-urbanist scroll-container ${
        theme === "dark" ? "bg-[#111d39] text-white" : "bg-[#F7F9FF]"
      }`}
    >
      {/* Header */}
      <div
        className={`fixed top-0 left-0 right-0 z-20 shadow-sm ${
          theme === "dark" ? "bg-[#111d39]" : "bg-white"
        }`}
      >
        <div className="flex items-center justify-between px-[24px] py-[16px] max-w-[1024px] mx-auto">
          <div
            onClick={() => navigate(-1)}
            className={`p-[6px] border rounded-lg cursor-pointer ${
              theme === "dark" ? "border-white" : "border-black"
            }`}
          >
            <FaAngleLeft
              className={`size-[14px] ${
                theme === "dark" ? "text-white" : "text-gray-500"
              }`}
            />
          </div>
          <h2 className="text-[20px] font-bold">Recruiter Profile</h2>
          <div className="flex gap-[12px]">
            <img
              src={images.threeDot}
              alt="Options"
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-[90px] pb-[60px] flex flex-col items-center">
        <img
          src={profile.logo}
          alt="Company Logo"
          className="w-[80px] h-[80px] mb-[12px] rounded-xl"
        />
        <div className="text-center mb-[16px]">
          <h2 className="text-[18px] font-bold">{profile.name}</h2>
          <p
            className={`text-[12px] ${
              theme === "dark" ? "text-white/60" : "text-gray-500"
            }`}
          >
            {email}
          </p>
        </div>

        {/* Stats */}
        <div className="flex justify-around w-full max-w-[320px] mb-[24px]">
          {[
            {
              label: "Posted Jobs",
              count: stats.postedJobs,
              bg: theme === "dark" ? "#42366b" : "#F6EFFF",
              color: "#a55fff",
            },
            {
              label: "Applications",
              count: stats.applications,
              bg: theme === "dark" ? "#265148" : "#E5FAF5",
              color: "#00CC9A",
            },
            {
              label: "Views",
              count: stats.views,
              bg: theme === "dark" ? "#50384f" : "#FFEFF8",
              color: "#FF5FBF",
            },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <div
                className="py-2 px-4 rounded-xl mb-1"
                style={{ backgroundColor: item.bg }}
              >
                <h2
                  className="text-[20px] font-bold"
                  style={{ color: item.color }}
                >
                  {item.count}
                </h2>
              </div>
              <span className="text-[13px]">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Create Button */}
        <button
          onClick={() => navigate("/createjob")}
          className="flex items-center bg-[#2869FE] text-white px-6 py-3 rounded-lg mb-[32px]"
        >
          <FaPlus className="mr-2" />
          <span>Create New Job</span>
        </button>

        {/* Menu */}
        <div className="w-full">
          <div className="w-full bg-[#7D67FF] px-[24px] pt-[48px] pb-[150px] text-white space-y-4 rounded-t-3xl">
            {menuItems.map((item, i) => (
              <div key={i} className="space-y-2">
                <div
                  onClick={item.action}
                  className={`flex justify-between items-center py-3 border-b border-white/20 last:border-none ${
                    item.custom ? "cursor-default" : "cursor-pointer"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/30 rounded-lg">{item.icon}</div>
                    <span className="font-medium text-[16px]">{item.label}</span>
                  </div>
                  {!item.custom && (
                    <MdOutlineKeyboardArrowRight className="text-white" />
                  )}
                </div>
                {item.custom && item.custom}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <FooterRecruiter />
      <Outlet />
    </motion.div>
  );
};

export default ProfileRecruiter;
