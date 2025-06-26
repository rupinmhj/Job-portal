import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa6";
import { motion } from "framer-motion";
import images from "../assets/images";

const RecruiterNotification = () => {
  const navigate = useNavigate();

  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchedNotifications = [
      {
        id: 1,
        title: "New Applicant",
        company: "Google",
        message: "You have received a new application for 'Frontend Developer'.",
        time: "2 mins ago",
        icon: images.notigoogle,
      },
      {
        id: 2,
        title: "Job Approved",
        company: "Slack",
        message: "Your job posting for 'UX Designer' has been approved.",
        time: "1 hr ago",
        icon: images.slack,
      },
      {
        id: 3,
        title: "Subscription Alert",
        company: "Zapier",
        message: "Your premium plan will expire in 3 days.",
        time: "Yesterday",
        icon: images.zapier,
      },
      {
        id: 4,
        title: "Application Viewed",
        company: "Treehouse",
        message: "An applicant viewed your job posting for 'React Developer'.",
        time: "5 hrs ago",
        icon: images.treehouse,
      },
    ];

    setNotifications(fetchedNotifications);
  }, []);

  const back = () => {
    navigate(-1);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      <div className="text-[#121927] max-w-[1024px] mx-auto px-[24px] pt-[20px] pb-[24px] font-urbanist">
        <div className="fixed top-0 left-0 right-0 bg-white z-10">
          <div className="flex items-center justify-between max-w-[1024px] px-6 mx-auto py-[16px]">
            <div
              onClick={back}
              className="p-[6px] border rounded-lg border-black cursor-pointer"
            >
              <FaAngleLeft className="text-gray-500 size-[14px]" />
            </div>
            <h2 className="text-[20px] font-bold leading-[24px]">Notifications</h2>
            <img src={images.searchIcon} className="cursor-pointer" alt="Search" />
          </div>
        </div>

        <div className="w-full mt-[60px]">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="relative flex p-[16px] pr-[32px] mt-[16px] gap-[16px]"
            >
              <div className="flex justify-center items-start">
                <div className="w-[40px] h-[40px] flex justify-center items-center border border-gray-400 rounded-xl">
                  <img src={notification.icon} className="size-[24px]" alt="Icon" />
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center">
                  <span className="font-semibold text-[15px] leading-[18px]">
                    {notification.title}
                  </span>
                  <span className="w-[4px] h-[4px] bg-green-600 rounded-full mx-2"></span>
                  <span className="text-google font-medium text-[10px] leading-[12px]">
                    {notification.company}
                  </span>
                </div>

                <p className="font-medium text-[12px] leading-[20px] text-google">
                  {notification.message}
                  <span className="w-[4px] h-[4px] inline-block bg-orange-400 rounded-full mx-[4px] mb-[1px]"></span>
                  <span className="text-google font-medium text-[10px] leading-[12px]">
                    {notification.time}
                  </span>
                </p>
              </div>

              <img
                src={images.threeDot}
                className="absolute right-2 top-5 size-5"
                alt="Options"
              />
            </div>
          ))}

          {notifications.length === 0 && (
            <div className="text-center mt-10 text-gray-500 text-[14px]">
              No notifications available.
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default RecruiterNotification;
