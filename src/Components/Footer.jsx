import React from "react";
import { NavLink, Outlet,useNavigate } from "react-router-dom";
import images from "../assets/images";

const Footer = () => {
  const navigate=useNavigate();
  const applyjob=()=>{
    navigate('/applyjob')
  }
  return (
    <div>
      <div className="lg:px-[232px] flex py-[24px] h-[72px] w-full fixed bottom-0 bg-white rounded-t-2xl z-10">
        <div className="w-full relative px-[20px]">
          <div className="flex lg:gap-20 justify-between w-full px-4 flex-grow">
            <NavLink to="/">
              {({ isActive }) => (
                <img
                  src={isActive ? images.homefill : images.home}
                  className="cursor-pointer"
                  alt="Home"
                />
              )}
            </NavLink>

            <NavLink to="/clipboard">
              {({ isActive }) => (
                <img
                  src={isActive ? images.clipboardfill : images.clipboard}
                  className="cursor-pointer mr-6"
                  alt="Clipboard"
                />
              )}
            </NavLink>

            <NavLink to="/message">
              {({ isActive }) => (
                <img
                  src={isActive ? images.messagefill : images.message}
                  className="cursor-pointer ml-6"
                  alt="Message"
                />
              )}
            </NavLink>

            <NavLink to="/profile">
              {({ isActive }) => (
                <img
                  src={isActive ? images.profilefill : images.profile}
                  className="cursor-pointer"
                  alt="Profile"
                />
              )}
            </NavLink>
          </div>

          <div onClick={applyjob} className=" flex p-2 rounded-full bg-white bottom-0 left-1/2 -translate-x-1/2 absolute">
            <button className="flex items-center justify-center bg-[#2869FE] h-[60px] w-[60px] text-[24px] font-normal text-white rounded-full">
              +
            </button>
          </div>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default Footer;
