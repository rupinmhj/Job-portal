import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import images from "../assets/images";
import { FaAngleLeft } from "react-icons/fa6";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoBagHandleOutline, IoLogOutOutline } from "react-icons/io5";
import { LiaAwardSolid } from "react-icons/lia";
import { CgProfile } from "react-icons/cg";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";
import { useContext } from "react";
import ThemeContext from "./ThemeContext";
import AuthContext from "../Context/authContext";

const Profile = () => {
  const { theme } = useContext(ThemeContext);
  const { seekerDetails, email, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const back = () => navigate("/home");

  const handleLogout = () => {
    logout();
    navigate("/signin");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, delay: 0.15 }}
      className={`h-screen overflow-y-scroll scroll-container font-urbanist ${
        theme === "dark" ? "bg-[#111d39] text-white" : ""
      }`}
    >
      {/* Header */}
      <div
        className={`fixed top-0 left-0 right-0 z-10 ${
          theme === "dark" ? "bg-[#111d39]" : "bg-white"
        }`}
      >
        <div className="flex items-center justify-between max-w-[1024px] mx-auto px-[24px] pt-[16px] pb-[24px]">
          <div
            onClick={back}
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
          <h2 className="text-[20px] font-bold leading-[24px] ml-6">Profile</h2>
          <div className="flex gap-[12px]">
            <img
              src={
                theme === "dark" ? images.searchIconDark : images.searchIcon
              }
              className="cursor-pointer"
              alt=""
              onClick={() => navigate("/searchjob")}
            />
            <img src={images.threeDot} className="cursor-pointer" alt="" />
          </div>
        </div>
      </div>

      {/* Profile Info */}
      <div className="flex max-w-[1024px] mx-auto px-[24px] flex-col pt-[72px] w-full items-center justify-center">
        <img
          src={
            seekerDetails.profile_pic
              ? seekerDetails.profile_pic
              : images.profileSetup
          }
          className="size-[80.4px] mb-[12px] border border-blue-500 rounded-xl"
          alt=""
        />
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-[18px] font-bold leading-[22px] mb-[8px]">
            {seekerDetails.full_name}
          </h2>
          <h2
            className={`text-[12px] leading-[20px] ${
              theme === "dark" ? "text-white/60" : "text-[#121927]/60"
            }`}
          >
            {email}
          </h2>
          <h2 className="text-[#7C66FF] leading-[24px] font-semibold text-[14px]">
            Active Looking
          </h2>
        </div>

        {/* Stats */}
        <div className="flex mt-[22px] justify-around w-full">
          <div className="flex-col flex gap-[6px] justify-center items-center">
            <div className="py-[13px] px-[32px] rounded-xl bg-[#F6EFFF] dark:bg-[#42366b]">
              <h2 className="text-[#a55fff] text-[28px] font-bold">36</h2>
            </div>
            <h2>Applied</h2>
          </div>
          <div className="flex-col flex gap-[6px] justify-center items-center">
            <div className="py-[13px] px-[32px] rounded-xl bg-[#FFEFF8] dark:bg-[#50384f]">
              <h2 className="text-[#FF5FBF] text-[28px] font-bold">20</h2>
            </div>
            <h2>Reviewed</h2>
          </div>
          <div className="flex-col flex gap-[6px] justify-center items-center">
            <div className="py-[13px] px-[32px] rounded-xl bg-[#E5FAF5] dark:bg-[#265148]">
              <h2 className="text-[#00CC9A] text-[28px] font-bold">36</h2>
            </div>
            <h2>Contacted</h2>
          </div>
        </div>
      </div>

      {/* Menu List */}
      <div className="rounded-t-3xl bg-[#7D67FF] text-white text-[16px] leading-[19px] mt-[24px] pt-[32px] h-full">
        <div className="px-[24px] pb-[20px]">
          {/* Personal Info */}
          <li
            onClick={() => navigate("/personalinfo")}
            className="mt-[16px] flex justify-between items-center pb-[16px] mb-[16px] cursor-pointer border-b border-gray-200 border-opacity-35"
          >
            <div className="flex gap-[16px]">
              <div className="p-2 bg-gray-300 bg-opacity-60 rounded-xl">
                <CgProfile className="h-[24px] w-[24px]" />
              </div>
              <span className="flex items-center text-[16px] font-bold">
                Personal Information
              </span>
            </div>
            <MdOutlineKeyboardArrowRight />
          </li>

          {/* Skill */}
          <li
            onClick={() => navigate("/skilltest")}
            className="mt-[16px] flex justify-between items-center pb-[16px] mb-[16px] cursor-pointer border-b border-gray-200 border-opacity-35"
          >
            <div className="flex gap-[16px]">
              <div className="p-2 bg-gray-300 bg-opacity-60 rounded-xl">
                <img src={images.education} alt="" />
              </div>
              <span className="flex items-center text-[16px] font-bold">
                Skill
              </span>
            </div>
            <MdOutlineKeyboardArrowRight />
          </li>

          {/* Work Experience */}
          <li
            onClick={() => navigate("/workexperience")}
            className="mt-[16px] flex justify-between items-center pb-[16px] mb-[16px] cursor-pointer border-b border-gray-200 border-opacity-35"
          >
            <div className="flex gap-[16px]">
              <div className="p-2 bg-gray-300 bg-opacity-60 rounded-xl">
                <IoBagHandleOutline className="size-[24px] fill-white" />
              </div>
              <span className="flex items-center text-[16px] font-bold">
                Work Experience
              </span>
            </div>
            <MdOutlineKeyboardArrowRight />
          </li>

          {/* Education */}
          <li
            onClick={() => navigate("/education")}
            className="mt-[16px] flex justify-between items-center pb-[16px] mb-[16px] cursor-pointer border-b border-gray-200 border-opacity-35"
          >
            <div className="flex gap-[16px]">
              <div className="p-2 bg-gray-300 bg-opacity-60 rounded-xl">
                <img src={images.education} alt="" />
              </div>
              <span className="flex items-center text-[16px] font-bold">
                Education
              </span>
            </div>
            <MdOutlineKeyboardArrowRight />
          </li>

          {/* Awards */}
          <li
            onClick={() => navigate("/awards")}
            className="mt-[16px] flex justify-between items-center pb-[16px] mb-[16px] cursor-pointer border-b border-gray-200 border-opacity-35"
          >
            <div className="flex gap-[16px]">
              <div className="p-2 bg-gray-300 bg-opacity-60 rounded-xl">
                <LiaAwardSolid className="size-[24px] fill-white" />
              </div>
              <span className="flex items-center text-[16px] font-bold">
                Awards
              </span>
            </div>
            <MdOutlineKeyboardArrowRight />
          </li>

          {/* Logout */}
          <li
            onClick={handleLogout}
            className="mt-[16px] flex justify-between items-center pb-[16px] mb-[16px] cursor-pointer border-b border-gray-200 border-opacity-35"
          >
            <div className="flex gap-[16px]">
              <div className="p-2 bg-gray-300 bg-opacity-60 rounded-xl">
                <IoLogOutOutline className="size-[24px] fill-white" />
              </div>
              <span className="flex items-center text-[16px] font-bold">
                Logout
              </span>
            </div>
            <MdOutlineKeyboardArrowRight />
          </li>
        </div>

        {/* Footer */}
        <div>
          <Footer className="mx-[10px]" isProfileDarkMode={theme === "dark"} />
        </div>
      </div>

      <Outlet />
    </motion.div>
  );
};

export default Profile;
