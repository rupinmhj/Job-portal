import React, { useEffect, useState, useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import images from "../assets/images";
import { FaAngleLeft } from "react-icons/fa6";
import ThemeContext from "./ThemeContext";

const Notification = () => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const fetchedNotifications = [
      {
        id: 1,
        title: "Product Design",
        company: "Google LLC",
        message: "Congratulations, your application on Google has been accepted",
        time: "5 mins ago",
        icon: images.notigoogle,
      },
      {
        id: 2,
        title: "Apps Design",
        company: "Slack",
        message: "New job avaolable on Slack, (position - Mobile Apps Designer )",
        time: "30 mins ago",
        icon: images.slack,
      },
      {
        id: 3,
        title: "UI/UX Design",
        company: "Zapier",
        message: "New job avaolable on Zapier, (position - Application Designer )",
        time: "10 hr ago",
        icon: images.zapier,
      },
      {
        id: 4,
        title: "Product Design",
        company: "Google LLC",
        message: "A strong interview strategy can boost your chances of success",
        time: "18 hrs ago",
        icon: images.notigoogle,
      },
      {
        id: 5,
        title: "UX Researcher",
        company: "Treehouse",
        message: "Congratulations, your application on Google has been accepted",
        time: "5 mins ago",
        icon: images.treehouse,
      },
      {
        id: 6,
        title: "Product Design",
        company: "Microsolft",
        message: "Congratulations, your application on Microsoft has been accepted",
        time: "5 mins ago",
        icon: images.notimicrosoft,
      },
    ];

    setNotifications(fetchedNotifications);
  }, []);

  const back = () => navigate("/home");

  const filterNotifications = notifications.filter((noti) =>
    noti.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    noti.message.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className={` h-screen overflow-y-scroll scroll-container dark:bg-[#111d39]`}
    >
      <div className="text-[#121927] dark:text-white max-w-[1024px] mx-auto px-[24px] pt-[20px] pb-[24px] font-urbanist dark:bg-[#111d39] bg-white min-h-screen">
        <div className="fixed top-0 left-0 right-0 bg-white dark:bg-[#111d39] z-10">
          <div className="flex items-center justify-between px-[24px] lg:px-[252px] py-[16px]">
            <div
              onClick={back}
              className="p-[6px] border rounded-lg border-black dark:border-white cursor-pointer"
            >
              <FaAngleLeft className="text-gray-500 dark:text-gray-300 size-[14px]" />
            </div>
            <h2 className="text-[20px] font-bold leading-[24px]">Notification</h2>
            <img
              onClick={() => setShowSearch((prev) => !prev)}
              src={images.searchIcon}
              className="cursor-pointer dark:invert"
              alt=""
            />
          </div>
        </div>

        {showSearch && (
          <div className="max-w-[1024px] mx-auto px-6 py-[14px] mt-14 focus-within:border-gray-400 border border-gray-200 dark:border-gray-600 dark:focus-within:border-gray-200 dark:border-gray-600 dark:focus-within:border-gray-200 w-full rounded-xl flex items-center bg-white dark:bg-[#2A2A40]">
            <img src={images.searchIcon} className=" cursor-pointer dark:invert" alt="" />
            <input
              type="text"
              className="text-[14px] px-[14px] text-textSearch dark:bg-[#2A2A40] dark:text-white focus:outline-none w-full "
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title or messages..."
            />
          </div>
        )}

        <div className={`${showSearch ? 'mt-[10px]' : 'mt-[60px]'} w-full`}>
          {filterNotifications.length === 0 ? (
            <p className="text-gray-500 dark:text-gray-400 text-center mt-10">
              No notification found.
            </p>
          ) : (
            filterNotifications.map((notification) => (
              <div
                key={notification.id}
                className="relative flex p-[16px] pr-[32px] mt-[16px] gap-[16px] rounded-lg dark:bg-[#242f49]"
              >
                <div className="flex justify-center items-start">
                  <div className="w-[40px] h-[40px] flex justify-center items-center border border-gray-400 dark:border-gray-800 rounded-xl">
                    <img src={notification.icon} className="size-[24px]" alt="" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <span className="font-semibold text-[15px] leading-[18px]">
                      {notification.title}
                    </span>
                    <span className="w-[4px] h-[4px] bg-green-600 rounded-full flex leading-[12px] my-[8px] mx-2"></span>
                    <span className="text-google font-medium leading-[12px] text-[10px]">
                      {notification.company}
                    </span>
                  </div>
                  <p className="font-medium text-[12px] leading-[20px] text-google">
                    {notification.message}
                    <span className="w-[4px] h-[4px] inline-block bg-orange-400 rounded-full mx-[4px] mb-[1px]"></span>
                    <span className="text-google font-medium leading-[12px] text-[10px]">
                      {notification.time}
                    </span>
                  </p>
                </div>
                <img
                  src={images.threeDot}
                  className="absolute right-2 top-5 size-5 dark:invert"
                  alt=""
                />
              </div>
            ))
          )}
        </div>

        <Outlet />
      </div>
    </motion.div>
  );
};

export default Notification;
