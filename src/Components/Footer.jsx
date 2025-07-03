import { NavLink, Outlet, useNavigate } from "react-router-dom";
import ThemeContext from "./ThemeContext";
import images from "../assets/images";
import { useContext } from "react";
const Footer = () => {
  const { theme } = useContext(ThemeContext)
  const navigate = useNavigate();
  return (
    <div className="transition-all duration-300 ease-in-out ">
      <div className="lg:px-[140px] flex py-[24px] h-[72px] w-full fixed bottom-0 bg-white dark:bg-[#2869FE]
dark:text-white rounded-t-2xl z-10">
        <div className="w-full relative px-[20px]">
          <div className="flex lg:gap-20 justify-between w-full px-4 flex-grow">
            <NavLink to="/home" className="transition-transform duration-200 hover:scale-110">
              {({ isActive }) => (
                <img
                  src={isActive ? theme === 'light' ? images.homefill : images.homefillWhite : theme === 'light' ? images.home : images.homewhite}
                  className="cursor-pointer"
                  alt="Home"
                />
              )}
            </NavLink>
            <NavLink to="/clipboard" className="transition-transform duration-200 hover:scale-110">
              {({ isActive }) => (
                <img
                  src={isActive ? theme === 'light' ? images.clipboardfill : images.clipboardfillWhite : theme === 'light' ? images.clipboard : images.clipboardWhite}

                  className="cursor-pointer mr-8"
                  alt="Clipboard"
                />
              )}
            </NavLink>
            <NavLink to="/message" className="transition-transform duration-200 hover:scale-110">
              {({ isActive }) => (
                <img
                  src={isActive ? theme === 'light' ? images.messagefill : images.messagefillWhite : theme === 'light' ? images.message : images.messageWhite}
                  className="cursor-pointer ml-8"
                  alt="Message"
                />
              )}
            </NavLink>
            <NavLink to="/profile" className="transition-transform duration-200 hover:scale-110">
              {({ isActive }) => (
                <img
                  src={isActive ? theme === 'light' ? images.profilefill : images.profilefillWhite : theme === 'light' ? images.profileWhite : images.profileWhite}
                  className="cursor-pointer"
                  alt="Profile"
                />
              )}
            </NavLink>
          </div>
          <div
            onClick={() => navigate('/setfilters')}
            className="flex p-2 rounded-full bg-white dark:bg-[#111d39] bottom-0 left-1/2 -translate-x-1/2 absolute transition-transform duration-200 hover:scale-110"
          >
            <button className={`flex items-center justify-center bg-[#2869FE] h-[60px] w-[60px] text-[24px] font-normal text-white rounded-full`}>
              <span className="mb-1">+</span>
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