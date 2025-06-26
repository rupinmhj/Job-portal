import React, { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { FaAngleLeft, FaPlus } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoLogOutOutline, IoBagHandleOutline } from "react-icons/io5";
import { MdOutlinePhonelinkSetup } from "react-icons/md";
import { CgBriefcase } from "react-icons/cg";

import FooterRecruiter from "../Components/FooterRecruiter";
import images from "../assets/images";

const ProfileRecruiter = () => {
  const navigate = useNavigate();

  const [profile, setProfile] = useState({
    name: "TechCorp (Recruiter)",
    email: "recruiter@techcorp.com",
    logo: images.companyLogo,
  });

  const [stats, setStats] = useState({
    postedJobs: 0,
    applications: 0,
    views: 0,
  });

  useEffect(() => {
    // Replace this with API call later
    setTimeout(() => {
      setProfile({
        name: "Google",
        email: "google@company.com",
        logo: images.google || images.googlelogo,
      });

      setStats({
        postedJobs: 24,
        applications: 432,
        views: 1250,
      });
    }, 500);
  }, []);

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="h-screen overflow-y-scroll bg-[#F7F9FF] font-urbanist"
    >
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 bg-white z-20 shadow-sm">
        <div className="flex items-center justify-between px-[24px] py-[16px] max-w-[1024px] mx-auto">
          <div
            onClick={() => navigate(-1)}
            className="p-[6px] border rounded-lg border-black cursor-pointer"
          >
            <FaAngleLeft className="text-gray-500 text-[14px]" />
          </div>
          <h2 className="text-[20px] font-bold">Recruiter Profile</h2>
          <div className="flex gap-[12px]">
            {/* <img
              src={images.searchIcon}
              alt="Search"
              className="cursor-pointer"
              onClick={() => navigate("/searchapplicants")}
            /> */}
            <img src={images.threeDot} alt="Options" className="cursor-pointer" />
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
          <p className="text-[12px] text-gray-500">{profile.email}</p>
        </div>

        {/* Stats */}
        <div className="flex justify-around w-full max-w-[320px] mb-[24px]">
          {[
            { label: "Posted Jobs", count: stats.postedJobs, bg: "#F6EFFF", color: "#a55fff" },
            { label: "Applications", count: stats.applications, bg: "#E5FAF5", color: "#00CC9A" },
            { label: "Views", count: stats.views, bg: "#FFEFF8", color: "#FF5FBF" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <div
                className="py-2 px-4 rounded-xl mb-1"
                style={{ backgroundColor: item.bg }}
              >
                <h2 className="text-[20px] font-bold" style={{ color: item.color }}>
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
        <div className="w-full bg-[#7D67FF] px-[24px] py-[24px] text-white space-y-4 rounded-t-3xl">
          {[
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
              label: "Setup Profile",
              icon: <MdOutlinePhonelinkSetup />,
              action: () => navigate("/companyprofile"),
            },
            {
              label: "Logout",
              icon: <IoLogOutOutline />,
              action: handleLogout,
            },
          ].map((item, i) => (
            <div
              key={i}
              onClick={item.action}
              className="flex justify-between items-center cursor-pointer py-3 border-b border-white/20 last:border-none"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/30 rounded-lg">{item.icon}</div>
                <span className="font-medium text-[16px]">{item.label}</span>
              </div>
              <MdOutlineKeyboardArrowRight className="text-white" />
            </div>
          ))}
        </div>
      </div>

      <FooterRecruiter />
      <Outlet />
    </motion.div>
  );
};

export default ProfileRecruiter;
