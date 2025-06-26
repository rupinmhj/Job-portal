import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import {  motion } from "framer-motion";
import images from "../assets/images";
import { FaAngleLeft } from "react-icons/fa6";
import FooterRecruiter from "../Components/FooterRecruiter";

 const MessageRecruiter = () => {
  const navigate=useNavigate();
  const [messages,setMessages]=useState([]);
  const [searchQuery,setSearchQuery]=useState("");
  const [showSearch,setShowSearch]=useState(false);

  useEffect(()=>{
    const mockMessages = [
      {
        id: 1,
        name: "Sonu Nigam",
        message: "Great I will have a look",
        time: "Just Now",
        unreadCount: 2,
        avatar: images.messenger5,
        seen: false,
      },
      {
        id: 2,
        name: "Jane Cooper",
        message: "I'll send you the files tonight.",
        time: "5 mins ago",
        avatar: images.messenger2,
        seen: true,
      },
      {
        id: 3,
        name: "Ronald Richards",
        message: "Can we reschedule our meeting?",
        time: "10 mins ago",
        avatar: images.messenger3,
        seen: true,
      },
      {
        id: 4,
        name: "Esther Howard",
        message: "Let's catch up this weekend.",
        time: "30 mins ago",
        avatar: images.messenger4,
        seen: true,
      },
    ];

    setMessages(mockMessages);
  },[]);

  const filteredMessages=messages.filter(msg=>
    msg.name.toLowerCase().includes(searchQuery.toLowerCase())||
    msg.message.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, delay: 0.15 }}
      className="h-screen overflow-y-scroll font-urbanist"
    >
       {/* Header */}
      <div className="fixed top-0 left-0 right-0 bg-white z-10 ">
        <div className="flex items-center justify-between max-w-[1024px] mx-auto px-6 pt-[16px] pb-[24px]">
          <div
            onClick={() => navigate(-1)}
            className="p-[6px] border rounded-lg border-black cursor-pointer"
          >
            <FaAngleLeft className="text-gray-500 size-[14px]" />
          </div>
          <h2 className="text-[20px] font-bold ml-6">Message</h2>
          <div className="flex gap-[12px]">
            <img
              src={images.searchIcon}
              className="cursor-pointer"
              alt="Search"
              onClick={() => setShowSearch((prev) => !prev)}
            />
            <img src={images.threeDot} className="cursor-pointer" alt="Options" />
          </div>
        </div>

        {/* Search Input */}
        {showSearch && (
          <div className="px-6 max-w-[1024px] mx-auto mt-[-20px] ">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name or message..."
              className="w-full px-4 py-2 mt-2 mb-2 border border-gray-300 rounded-lg focus:outline-none text-[14px]"
            />
          </div>
        )}
      </div>

       <div className={`${showSearch?'pt-[100px]':'pt-[80px]'} pb-[90px] px-6 max-w-[1024px] mx-auto space-y-4`}>
        {filteredMessages.length === 0 ? (
          <p className="text-gray-500 text-center mt-10">No messages found.</p>
        ) : (
          filteredMessages.map((msg) => (
            <div
              key={msg.id}
              onClick={() => navigate("/message/messageinbox")}
              className="flex items-center gap-[12px] bg-white p-[16px] rounded-xl cursor-pointer"
            >
              <img
                src={msg.avatar}
                alt={msg.name}
                className="h-[44px] w-[44px] border border-green-800 rounded-full flex-shrink-0"
              />
              <div className="flex flex-col flex-grow">
                <h1 className="text-[15px] font-bold leading-[18px]">{msg.name}</h1>
                <p className="text-[12px] text-google truncate">{msg.message}</p>
              </div>
              <div className="flex flex-col items-end text-google text-[11px] gap-[6px]">
                <span>{msg.time}</span>
                {msg.unreadCount ? (
                  <span className="text-white text-[10px] h-4 w-4 flex items-center justify-center rounded-full bg-purple-600">
                    {msg.unreadCount}
                  </span>
                ) : msg.seen ? (
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ) : null}
              </div>
            </div>
          ))
        )}
      </div>

      <FooterRecruiter />
      <Outlet />
    </motion.div>
  );
};

export default MessageRecruiter;