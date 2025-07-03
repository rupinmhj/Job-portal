import React, { useState, useEffect } from "react";
import images from "../assets/images";
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const MessageInbox = () => {
  const navigate = useNavigate();

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  // Simulate message fetch from backend
  useEffect(() => {
    const fetchMessages = async () => {
      // Simulate fetch: Replace with actual API call
      const dummyMessages = [
        { id: 1, text: "Did you watch Raw last night?", type: "sent", timestamp: "11:19 AM" },
        { id: 2, text: "Yes! It was amazing!", type: "received", timestamp: "11:20 AM" },
        { id: 3, text: "Roman still undefeated, bro!", type: "sent", timestamp: "11:25 AM" },
      ];
      setMessages(dummyMessages);
    };

    fetchMessages();
  }, []);

  const handleSend = async () => {
    if (newMessage.trim() === "") return;

    const messageObj = {
      id: Date.now(),
      text: newMessage.trim(),
      type: "sent",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    // Optimistically add message to UI
    setMessages((prev) => [...prev, messageObj]);
    setNewMessage("");

    // TODO: Send message to backend via POST request
    // await axios.post('/api/messages', messageObj);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, delay: 0.15 }}
      className="h-screen overflow-y-scroll font-urbanist bg-[#F7F9FF] dark:bg-[#111d39] dark:text-white"
    >
      <div className="h-[100dvh]">
        {/* Header */}
        <div className="fixed left-0 right-0 top-0 z-10">
          <div className="bg-white dark:bg-gray-800 max-w-[1024px] flex p-[24px] pt-[16px] justify-between items-center mx-auto">
            <div className="flex gap-[18px] items-center">
              <div
                onClick={() => navigate(-1)}
                className="p-[6px] border rounded-lg border-black dark:border-gray-500 cursor-pointer"
              >
                <FaAngleLeft className="text-gray-500 dark:text-white size-[14px]" />
              </div>
              <div className="relative">
                <img
                  src={images.messenger5}
                  className="h-[44px] w-[44px] border-green-400 border-2 rounded-full"
                  alt=""
                />
                <div className="absolute h-3 w-3 rounded-full bg-green-400 top-8 right-0 z-10"></div>
              </div>
              <div className="flex flex-col gap-[2px]">
                <h1 className="text-[15px] font-semibold">Sonu Nigam</h1>
                <h2 className="text-[11px] font-medium text-google">Online</h2>
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <img className="dark:invert" src={images.call} alt="Call" />
              <img className="dark:invert" src={images.videocall} alt="Video Call" />
              <img className="dark:invert h-5" src={images.threeDot} alt="More Options" />
            </div>
          </div>
        </div>

        {/* Message List */}
        <div className="pt-[108px] pb-[94px] px-[24px] max-w-[1024px] mx-auto">
          <div className="flex gap-4 items-center mb-[20px]">
            <div className="h-[2px] flex-1 bg-gray-100 dark:bg-gray-600"></div>
            <h2 className="text-[14px] font-medium text-google">Today</h2>
            <div className="h-[2px] flex-1 bg-gray-100 dark:bg-gray-600"></div>
          </div>

          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col w-full ${
                msg.type === "sent" ? "items-end" : "items-start"
              } mb-5`}
            >
              <span
                className={`${
                  msg.type === "sent" ? "mr-4" : "ml-4"
                } text-[10px] mb-1 text-google`}
              >
                {msg.timestamp}
              </span>
              <span
                className={`text-[12px] font-medium py-[14px] px-[16px] max-w-[75%] break-words ${
                  msg.type === "sent"
                    ? "bg-sliderBlue text-white rounded-t-[100px] rounded-b-[100px] rounded-tr-[30px]"
                    : "bg-white dark:bg-gray-700 text-black dark:text-white rounded-t-[100px] rounded-b-[100px] rounded-bl-[30px]"
                }`}
              >
                {msg.text}
              </span>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-[#111d39]">
          <div className="relative flex items-center max-w-[1024px] mx-auto px-[14px] dark:bg-gray-800 py-[16px]">
            <img
              src={images.attachfile}
              alt=""
              className="absolute left-[14px] top-[25px] z-50 cursor-pointer dark:invert"
            />
            <img
              src={images.emoji}
              alt=""
              className="absolute left-[54px] top-[25px] z-50 cursor-pointer dark:invert"
            />
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={(e)=>{
                if(e.key==="Enter"){
                  e.preventDefault();
                  handleSend();
                }
              }}
              placeholder="Type message"
              className="w-full  text-[14px] py-[12px] pl-[99px] pr-[60px] outline-none bg-transparent text-gray-700 dark:text-white"
            />
            <img
              src={images.sent}
              alt="Send"
              onClick={handleSend}
              className="absolute right-[20px] top-[22px] cursor-pointer"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MessageInbox;
