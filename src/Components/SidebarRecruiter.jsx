import React, { useRef } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import images from "../assets/images";
import Pages from "./Pages";
import { useState, useContext } from "react";
import Component from "./Component";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ThemeContext from "./ThemeContext";
import AuthContext from "../Context/authContext";
const SideBarRecruiter = ({
  isPageOpen,
  setIsPageOpen,
  isSidebarOpen,
  setIsSidebarOpen,
  isComponentOpen,
  setIsComponentOpen,
}) => {
  // console.log("Sidebar activated");
  // const [isPageOpen,setIsPageOpen]=useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const {logout,companyDetails}=useContext(AuthContext)
  const handelPages = () => {
    setIsPageOpen(true);
  };
  const handleComponent = () => {
    setIsComponentOpen(true);
  };
  const back = () => {
    setIsPageOpen(false);
    setIsComponentOpen(false);
  };
  // const navigate=useNavigate();
  const home = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const navigate = useNavigate();
  const handleProfile = () => {
    navigate("/profilerecruiter");
  };
  const handleLogout = () => {
    logout();
    navigate("/signin");
  }

  return (
    <div className="absolute w-[300px] h-screen   z-40 bg-white font-urbanist ">
      <div className="flex p-[15px] w-full bg-bgLogo ">
        <div className="logo cursor-pointer " onClick={home}>
          <img src={images.jobkoLogo} className="h-[60px]" alt="" />
        </div>
        <div className="flex text-[12px] leading-[20px] font-semibold text-white ml-[16px] justify-start items-center">
          Jobko - Job Finder Mobile App
        </div>
      </div>
      {/* Goodmorning */}
      <div className="flex flex-col px-[15px] py-[30px] dark:bg-[#111d39] h-screen dark:text-white">
        <div className="flex gap-[12px] items-center pb-[20px]">
          <div>
            <img
              src={companyDetails.logo}
              className="h-[40px] rounded-lg "
              alt=""
            />
          </div>
          <div className="flex flex-col ">
            <span className="text-[12px] font-medium leading-[20px] ">
              Good morning!
            </span>
            <span className="inline-flex text-[16px] font-bold leading-[19px] items-center ">
              Welcome {companyDetails.name}!{" "}
            </span>
          </div>
        </div>
        {/* main menu */}
        <div className=" my-[20px]  ">
          <p className="text-[12px] font-bold leading-[20px]  flex  w-[100%]">
            MAIN MENU
          </p>
          <ul className="list-none text-[15px] leading-[22px] font-semibold">
            <li
              onClick={home}
              className="mt-[16px] flex gap-[10px] cursor-pointer"
            >
              <img src={images.listHome} className="" alt="" />
              <span>Home</span>
            </li>
            <li
              onClick={handelPages}
              className="mt-[16px] flex justify-between cursor-pointer"
            >
              <div className="flex gap-[10px]">
                <img src={images.listPages} className="" alt="" />
                <span>Pages</span>
              </div>
              <div className=" flex items-center">
                <MdOutlineKeyboardArrowRight />
              </div>
            </li>
            <li
              onClick={handleComponent}
              className="mt-[16px] flex justify-between cursor-pointer"
            >
              <div className="flex gap-[10px]">
                <img src={images.listComponent} className="" alt="" />
                <span>Components</span>
              </div>
              <div className=" flex items-center">
                <MdOutlineKeyboardArrowRight />
              </div>
            </li>

            <li
              onClick={handleProfile}
              className="mt-[16px] flex gap-[10px] cursor-pointer"
            >
              <img src={images.listProfile} className="" alt="" />
              <span>Profile</span>
            </li>
            <li onClick={handleLogout} className="mt-[16px] flex gap-[10px] cursor-pointer">
              <img src={images.listLogout} className="" alt="" />
              <span>Logout</span>
            </li>
          </ul>
        </div>
        {/* setting */}
        <div className="py-[20px]">
          <p className="text-[12px] font-bold leading-[20px]  flex  w-[100%]">
            SETTING
          </p>
          <div className="flex full justify-between ">
            <h2 className="text-[16px] font-medium mt-[16px]">Dark Mode</h2>
            <div onClick={toggleTheme} className="h-[17px] w-[27px] bg-gray-300 dark:bg-[#2869fe] rounded-sm mt-[16px] cursor-pointer">
              <div
                className="h-[10px] w-[10px] bg-white dark:bg-[#111d39] mt-[4px] rounded-sm transition-all duration-300  ml-1 dark:ml-3"

              ></div>
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isPageOpen && (
          <motion.div
            initial={{ x: -280, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -280, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute top-0  z-50"
          >
            <Pages back={back} />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isComponentOpen && (
          <motion.div
            initial={{ x: -280, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -280, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute top-0  z-50"
          >
            <Component back={back} />
          </motion.div>
        )}
      </AnimatePresence>


      <AnimatePresence>
        {isPageOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30"
            onClick={() => setIsPageOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isComponentOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30"
            onClick={() => setIsComponentOpen(false)}
          ></motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default SideBarRecruiter;
