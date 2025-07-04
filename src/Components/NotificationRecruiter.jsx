import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa6";
import { motion } from "framer-motion";
import images from "../assets/images";

const RecruiterNotification = () => {
  const navigate = useNavigate();

  const [notifications, setNotifications] = useState([]);
  const [searchQuery,setSearchQuery]=useState("");
  const [showSearch,setShowSearch]=useState(false);

  useEffect(() => {
    const fetchedNotifications = [
      {
        id: 1,
        title: "New Applicant",
        company: "Google",
        message: "You have received a new application for 'Frontend Developer'.",
        time: "2 mins ago",
      },
      {
        id: 2,
        title: "Job Approved",
        company: "Slack",
        message: "Your job posting for 'UX Designer' has been approved.",
        time: "1 hr ago",
      },
      {
        id: 3,
        title: "Subscription Alert",
        company: "Zapier",
        message: "Your premium plan will expire in 3 days.",
        time: "Yesterday",
      },
      {
        id: 4,
        title: "Application Viewed",
        company: "Treehouse",
        message: "An applicant viewed your job posting for 'React Developer'.",
        time: "5 hrs ago",
      },
    ];

    setNotifications(fetchedNotifications);
  }, []);

  const back = () => {
    navigate(-1);
  };

  const filterNotifications=notifications.filter(noti=>
    noti.title.toLowerCase().includes(searchQuery.toLowerCase())||
    noti.message.toLowerCase().includes(searchQuery.toLowerCase())

  )

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      <div className="text-[#121927] max-w-[1024px] mx-auto px-[24px] pt-[20px] pb-[24px] font-urbanist">
        <div className="fixed top-0 left-0 right-0 bg-white z-10 dark:bg-[#111d39]">
          <div className="flex items-center justify-between max-w-[1024px] px-6 mx-auto py-[16px]">
            <div
              onClick={back}
              className="p-[6px] border rounded-lg border-black cursor-pointer dark:border-white"
            >
              <FaAngleLeft className="text-gray-500 size-[14px] dark:text-white" />
            </div>
            <h2 className="text-[20px] font-bold leading-[24px] dark:text-white">Notifications</h2>
            <img
              onClick={()=>setShowSearch((prev)=>!prev)}
            src={images.searchIcon} className="cursor-pointer dark:invert" alt="Search" />
          </div>
        </div>
         {showSearch && (
           <div className="max-w-[1024px] mx-auto px-6 py-[14px] mt-14  focus-within:border-gray-400 border dark:border-gray-600 dark:focus-within:border-gray-200 border-gray-200 w-full rounded-xl leading-[20px] flex items-center">
              <img
                src={images.searchIcon}
                className=" cursor-pointer dark:invert"
                alt=""
              />
              <input
                type="text"
                className="text-[14px] px-[14px] text-textSearch  focus:outline-none dark:bg-[#111d39]  w-full dark:text-white "
                value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title or messages..."

              />
            </div>
        )}

        <div className={`${showSearch?'mt-[10px]':'mt-[60px]'} w-full`} >

          { filterNotifications.length===0? <p className="text-gray-500 text-center mt-10">No notification found.</p>:
          filterNotifications.map((notification) => (
            <div
              key={notification.id}
              className="relative flex p-[16px] pr-[32px] mt-[16px] gap-[16px] rounded-2xl dark:bg-[#242f49]"
            >
              {/* <div className="flex justify-center items-start">
                <div className="w-[40px] h-[40px] flex justify-center items-center border border-gray-400 rounded-xl">
                  <img src={notification.icon} className="size-[24px] " alt="Icon" />
                </div>
              </div> */}

              <div className="flex flex-col">
                <div className="flex items-center mb-1">
                  <span className="font-semibold text-[15px] leading-[18px] dark:text-white/80">
                    {notification.title}
                  </span>
                  <span className="w-[4px] h-[4px] bg-green-600 rounded-full mx-2"></span>
                  <span className="text-google font-medium text-[10px] leading-[12px]">
                    {notification.company}
                  </span>
                </div>

                <p className="font-medium text-[12px] leading-[20px] text-google dark:text-gray-400 ">
                  {notification.message}
                  <span className="w-[4px] h-[4px] inline-block bg-orange-400 rounded-full mx-[4px] mb-[1px]"></span>
                  <span className="text-google font-medium text-[10px] leading-[12px]">
                    {notification.time}
                  </span>
                </p>
              </div>

              <img
                src={images.threeDot}
                className="absolute right-2 top-5 size-5 dark:invert"
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
