import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import images from "../assets/images";
import { FaAngleLeft } from "react-icons/fa6";
import Footer from "../Components/Footer";
import ThemeContext from "./ThemeContext";

const Message = () => {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext); 
  const [messages, setMessages] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const mockMessages = [
      {
        id: 1,
        name: "Sonu Nigam",
        msg: "Great I will have a look the",
        time: "Just Now",
        unread: 2,
        img: images.messenger5,
        type: "unread",
      },
      {
        id: 2,
        name: "Jane Cooper",
        msg: "I'll send you the files tonight.",
        time: "5 mins ago",
        img: images.messenger2,
        type: "read",
      },
      {
        id: 3,
        name: "Ronald Richards",
        msg: "Can we reschedule our meeting?",
        time: "10 mins ago",
        img: images.messenger3,
        type: "read",
      },
      {
        id: 4,
        name: "Esther Howard",
        msg: "Let's catch up this weekend.",
        time: "30 mins ago",
        img: images.messenger4,
        type: "read",
      },
      {
        id: 5,
        name: "Wade Warren",
        msg: "Thanks! That was really helpful.",
        time: "1 hour ago",
        img: images.messenger7,
        type: "read",
      },
      {
        id: 6,
        name: "Courtney Henry",
        msg: "Check your inbox please.",
        time: "2 hours ago",
        img: images.messenger6,
        type: "read",
      },
      {
        id: 7,
        name: "Courtney Henry",
        msg: "Check your inbox please.",
        time: "2 hours ago",
        img: images.messenger1,
        type: "read",
      },
    ];

    setMessages(mockMessages);
  }, []);

  const filteredMessages = messages.filter(msg =>
    msg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    msg.msg.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, delay: 0.15 }}
      className={`h-screen overflow-y-scroll font-urbanist scroll-container ${
        theme === "dark" ? "dark bg-[#111d39] text-white" : ""
      }`}
    >
      {/* Header */}
      <div className={`fixed top-0 left-0 right-0 z-10 ${
        theme === "dark" ? "bg-[#111d39]" : "bg-white"
      }`}>
        <div className={`flex items-center justify-between max-w-[1024px] mx-auto px-6 pt-[16px] pb-[24px] ${
          theme === "dark" ? "text-white" : ""
        }`}>
          <div
            onClick={() => navigate(-1)}
            className={`p-[6px] border rounded-lg cursor-pointer ${
              theme === "dark" ? "border-white" : "border-black"
            }`}
          >
            <FaAngleLeft className={`size-[14px] ${theme === "dark" ? "text-white" : "text-gray-500"}`} />
          </div>
          <h2 className="text-[20px] font-bold ml-6">Message</h2>
          <div className="flex gap-[12px]">
            <img
              src={theme === "dark" ? images.searchIconDark : images.searchIcon}
              className="cursor-pointer"
              alt="Search"
              onClick={() => setShowSearch((prev) => !prev)}
            />
            <img src={theme==='light'?images.threeDot:images.threeDotDark} className="cursor-pointer" alt="Options" />
          </div>
        </div>

        {/* Search Input */}
        {showSearch && (
          <div className="max-w-[1024px] mx-auto px-6">
            <div className={`py-[14px] border w-full rounded-xl leading-[20px] flex items-center
              ${theme === "dark"
                ? "border-gray-600 focus-within:border-white bg-[#111d39] text-white"
                : "border-gray-200 focus-within:border-gray-400 bg-white text-black"
              }`}>
              <img
                src={theme === "dark" ? images.searchIconDark : images.searchIcon}
                className="pl-[18px] cursor-pointer"
                alt=""
              />
              <input
                type="text"
                className="text-[14px] px-[14px] bg-transparent focus:outline-none w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name or message..."
              />
            </div>
          </div>
        )}
      </div>

      <div className={`${showSearch ? "pt-[136px]" : "pt-[80px]"} pb-[90px] max-w-[1024px] px-6 max-md:px-2 mx-auto space-y-4`}>
        {filteredMessages.length === 0 ? (
          <p className="text-gray-500 text-center mt-10">No messages found.</p>
        ) : (
          filteredMessages.map((msg) => (
            <div
              key={msg.id}
              onClick={() => navigate("/message/messageinbox")}
              className={`flex items-center gap-[12px] p-[16px] rounded-xl cursor-pointer ${
                theme === "dark" ? "bg-[#242f49]" : "bg-white"
              }`}
            >
              <img
                src={msg.img}
                alt={msg.name}
                className="h-[44px] w-[44px] border border-green-800 rounded-full flex-shrink-0"
              />
              <div className="flex flex-col flex-grow">
                <h1 className="text-[15px] font-bold leading-[18px]">{msg.name}</h1>
                <p className={`text-[12px] truncate ${
                  theme === "dark" ? "text-[#ffffff80]" : "text-google"
                }`}>
                  {msg.msg}
                </p>
              </div>
              <div className={`flex flex-col items-end text-[11px] gap-[6px] ${
                theme === "dark" ? "text-[#ffffff80]" : "text-google"
              }`}>
                <span>{msg.time}</span>
                {msg.unreadCount ? (
                  <span className="text-white text-[10px] h-4 w-4 flex items-center justify-center rounded-full bg-purple-600">
                    {msg.unreadCount}
                  </span>
                ) : msg.type ? (
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ) : null}
              </div>
            </div>
          ))
        )}
      </div>

      <Footer />
      <Outlet />
    </motion.div>
  );
};

export default Message;
