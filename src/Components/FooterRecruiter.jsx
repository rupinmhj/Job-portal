import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import images from "../assets/images";
import ThemeContext from "./ThemeContext";
import { useContext } from "react";
const FooterRecruiter = () => {
  const navigate = useNavigate();
  const {theme}=useContext(ThemeContext)
  const createJob = () => {
    navigate('/createjob');
  };

  return (
    <div className="transition-all duration-300 ease-in-out">
      <div className="lg:px-[140px] flex py-[24px] h-[72px] w-full fixed bottom-0 
        bg-white dark:bg-[#2869FE] dark:text-white rounded-t-2xl z-10">
        <div className="w-full relative px-[20px]">
          <div className="flex lg:gap-20 justify-between w-full px-4 flex-grow">
            <NavLink to="/homerecruiter" className="transition-transform duration-200 hover:scale-110">
              {({ isActive }) => (
                <img
                  src={
                    isActive
                      ? theme === "light"
                        ? images.homefill
                        : images.homefillWhite
                      : theme === "light"
                      ? images.home
                      : images.homewhite
                  }
                  className="cursor-pointer"
                  alt="Home"
                />
              )}
            </NavLink>

            <NavLink to="/application" className="transition-transform duration-200 hover:scale-110">
              {({ isActive }) => (
                <img
                  src={
                    isActive
                      ? theme === "light"
                        ? images.clipboardfill
                        : images.clipboardfillWhite
                      : theme === "light"
                      ? images.clipboard
                      : images.clipboardWhite
                  }
                  className="cursor-pointer mr-8"
                  alt="Clipboard"
                />
              )}
            </NavLink>

            <NavLink to="/messagerecruiter" className="transition-transform duration-200 hover:scale-110">
              {({ isActive }) => (
                <img
                  src={
                    isActive
                      ? theme === "light"
                        ? images.messagefill
                        : images.messagefillWhite
                      : theme === "light"
                      ? images.message
                      : images.messageWhite
                  }
                  className="cursor-pointer ml-8"
                  alt="Message"
                />
              )}
            </NavLink>

            <NavLink to="/profilerecruiter" className="transition-transform duration-200 hover:scale-110">
              {({ isActive }) => (
                <img
                  src={
                    isActive
                      ? theme === "light"
                        ? images.profilefill
                        : images.profilefillWhite
                      : theme === "light"
                      ? images.profile
                      : images.profileWhite
                  }
                  className="cursor-pointer"
                  alt="Profile"
                />
              )}
            </NavLink>
          </div>

          <div
            onClick={() => navigate("/createJob")}
            className="flex p-2 rounded-full bg-white dark:bg-[#111d39] bottom-0 left-1/2 -translate-x-1/2 absolute transition-transform duration-200 hover:scale-110"
          >
            <button className="flex items-center justify-center bg-[#2869FE] h-[60px] w-[60px] text-[24px] font-normal text-white rounded-full">
              <span className="mb-1">+</span>
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="animate-fadeIn">
        <Outlet />
      </div>
    </div>
  );
};

export default FooterRecruiter;