import React, { useState, useEffect } from "react";
import images from "../assets/images";
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const GroupMessage = () => {
  const navigate = useNavigate();
  const back = () => navigate(-1);

  const [messages, setMessages] = useState([]);
   const [newMessage, setNewMessage] = useState("");

  // Simulate fetching messages from backend (for future integration)
  useEffect(() => {
    const fetchGroupMessages = async () => {
      // TODO: Replace with real backend API call
      const dummyMessages = [
        { id: 1, type: "sent", name: "", text: "Did you watch Raw last night?", timestamp: "11:19 AM" },
        { id: 2, type: "received", name: "Arijit Singh", text: "Did you watch Raw last night?", timestamp: "11:23 AM", image: images.messenger1 },
        { id: 3, type: "sent", name: "", text: "Roman still undefeated, bro!", timestamp: "11:25 AM" },
        { id: 4, type: "received", name: "Sonu Nigam", text: "Acknowledge the Tribal Chief! 🔥", timestamp: "11:27 AM", image: images.messenger5 },
        { id: 5, type: "sent", name: "", text: "WrestleMania was insane this year!", timestamp: "11:35 AM" },
      ];
      setMessages(dummyMessages);
    };

    fetchGroupMessages();
  }, []);

    const handleSend = async () => {
    if (newMessage.trim() === "") return;

    const messageObj = {
      id: Date.now(),
      text: newMessage.trim(),
      type: "sent",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setMessages((prev) => [...prev, messageObj]);
    setNewMessage("");
  };

  return (
    <div className="bg-[#F7F9FF] dark:bg-[#111d39] text-black dark:text-white h-[100dvh] font-urbanist">
      {/* Header */}
      <div className="fixed left-0 right-0 top-0 z-10">
        <div className="bg-white dark:bg-[#0e172e] max-w-[1024px] flex p-[24px] pt-[16px] justify-between items-center mx-auto">
          <div onClick={back} className="flex gap-[18px] items-center cursor-pointer">
            <div className="h-[23px] w-[23px] flex justify-center items-center border rounded-lg border-gray-500 dark:border-white">
              <FaAngleLeft className="text-gray-500 dark:text-white h-[14px] w-[14px]" />
            </div>
            <div className="relative">
              <img src={images.groupcall} className="h-[44px] w-[44px] rounded-full border-2 border-green-400" alt="" />
              <div className="absolute h-3 w-3 rounded-full bg-green-400 top-8 right-0 z-10"></div>
            </div>
            <div className="flex flex-col gap-[2px]">
              <h1 className="text-[15px] font-semibold">WWE Tech</h1>
              <h2 className="text-[11px] font-medium text-google">34 Members, 7 Online</h2>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <img src={images.call} className="dark:invert" alt="" />
            <img src={images.videocall} className="dark:invert" alt="" />
            <img src={images.threeDot} className="h-5 dark:invert" alt="" />
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="pt-[108px] pb-[94px] px-[24px] max-w-[1024px] mx-auto">
        <div className="flex gap-4 items-center mb-[20px]">
          <div className="h-[2px] flex-1 bg-gray-100 dark:bg-gray-600"></div>
          <h2 className="text-[14px] font-medium text-google">Today</h2>
          <div className="h-[2px] flex-1 bg-gray-100 dark:bg-gray-600"></div>
        </div>

        {messages.map((msg) => (
          msg.type === "sent" ? (
            <div key={msg.id} className="flex flex-col w-full items-end mb-5">
              <span className="mr-4 mb-[5px] text-[10px] font-medium text-google">{msg.timestamp}</span>
              <span className="text-[12px] font-medium text-white py-[14px] pl-[31px] pr-[16px] bg-sliderBlue rounded-t-[100px] rounded-b-[100px] rounded-tr-[30px]">
                {msg.text}
              </span>
            </div>
          ) : (
            <div key={msg.id} className="flex flex-col sm:flex-row gap-2">
              <img src={msg.image} className="h-[38.4px] w-[38.4px] rounded-full border border-green-400" alt="" />
              <div className="flex flex-col w-full items-start mb-5">
                <p className="flex gap-2 items-center ml-4 mb-[5px] text-[10px] font-medium text-google">
                  <span className="text-[12px] font-semibold dark:text-white">{msg.name}</span>
                  <span className="h-1 w-1 bg-orange-400 rounded-full"></span>
                  <span>{msg.timestamp}</span>
                </p>
                <span className="text-[12px] font-medium py-[14px] pr-[31px] pl-[16px] bg-white dark:bg-gray-700 dark:text-white rounded-t-[100px] rounded-bl-[30px] rounded-br-[100px]">
                  {msg.text}
                </span>
              </div>
            </div>
          )
        ))}
      </div>

      {/* Message Input */}
      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-[#111d39]">
          <div className="relative flex items-center max-w-[1024px] mx-auto px-[14px] dark:bg-[#0e172e] py-[16px]">
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
  );
};

export default GroupMessage;
