import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import images from "../assets/images";

const Footer = () => {
  const navigate = useNavigate();

  const applyjob = () => {
    navigate('/applyjob');
  };

  return (
    <div className="transition-all duration-300 ease-in-out">
      <div className="lg:px-[232px] flex py-[24px] h-[72px] w-full fixed bottom-0 bg-white rounded-t-2xl z-10">
        <div className="w-full relative px-[20px]">
          <div className="flex lg:gap-20 justify-between w-full px-4 flex-grow">
            <NavLink to="/" className="transition-transform duration-200 hover:scale-110">
              {({ isActive }) => (
                <img
                  src={isActive ? images.homefill : images.home}
                  className="cursor-pointer"
                  alt="Home"
                />
              )}
            </NavLink>

            <NavLink to="/clipboard" className="transition-transform duration-200 hover:scale-110">
              {({ isActive }) => (
                <img
                  src={isActive ? images.clipboardfill : images.clipboard}
                  className="cursor-pointer mr-8"
                  alt="Clipboard"
                />
              )}
            </NavLink>

            <NavLink to="/message" className="transition-transform duration-200 hover:scale-110">
              {({ isActive }) => (
                <img
                  src={isActive ? images.messagefill : images.message}
                  className="cursor-pointer ml-8"
                  alt="Message"
                />
              )}
            </NavLink>

            <NavLink to="/profile" className="transition-transform duration-200 hover:scale-110">
              {({ isActive }) => (
                <img
                  src={isActive ? images.profilefill : images.profile}
                  className="cursor-pointer"
                  alt="Profile"
                />
              )}
            </NavLink>
          </div>

          <div 
            onClick={applyjob} 
            className="flex p-2 rounded-full bg-white bottom-0 left-1/2 -translate-x-1/2 absolute transition-transform duration-200 hover:scale-110"
          >
            <button className="flex items-center justify-center bg-[#2869FE] h-[60px] w-[60px] text-[24px] font-normal text-white rounded-full">
              +
            </button>
          </div>
        </div>
      </div>

      {/* Add animation wrapper for the content */}
      <div className="animate-fadeIn">
        <Outlet />
      </div>
    </div>
  );
};

export default Footer;