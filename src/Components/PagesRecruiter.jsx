import React from 'react'
import { FaAngleLeft } from "react-icons/fa6";
import {useNavigate} from "react-router-dom"
const PagesRecruiter = ({back}) => {
  const navigate=useNavigate();
  console.log("pages is seen")
 return (
    <div className="w-[280px] bg-white dark:bg-[#111d39] dark:text-white font-urbanist shadow-lg h-screen overflow-y-scroll scroll-container">
      
      {/* Header */}
      <div className="flex pt-[16px] p-[24px]">
        <div
          onClick={back}
          className="p-[6px] border rounded-lg border-black dark:border-white cursor-pointer"
        >
          <FaAngleLeft className="text-gray-500 dark:text-white size-[14px]" />
        </div>
        <h2 className="text-[18px] font-bold ml-14 dark:text-white">Pages</h2>
      </div>

      {/* Links */}
      <div className="flex px-[24px] flex-col text-custBlackBold dark:text-white">
        {[
          { label: "Boarding", path: "/boarding" },
          { label: "Boarding 01" },
          { label: "Boarding 02" },
          { label: "Sign In", path: "/signin" },
          { label: "Sign Up", path: "/signup" },
          { label: "Forgot Password", path: "/forgetpassword" },
          { label: "Verification", path: "/verification" },
          { label: "Reset Password", path: "/resetpassword" },
          { label: "Home Recruiter", path: "/homerecruiter" },
          { label: "Set Up Company", path: "/setupcompany" },
          { label: "Interest", path: "/setup/interest" },
          { label: "Success Account" },
          { label: "Success Applied", path: "/successskill" },
          { label: "Empty Notification", path: "/emptynotification" },
          { label: "Message", path: "/messagerecruiter" },
          { label: "Message Inbox", path: "/message/messageinbox" },
          { label: "Group Message", path: "/groupmessage" },
          { label: "Profile", path: "/profilecompany" },
          { label: "Success", path: "/setup/interest/confirmnewaccount/success" },
        ].map(({ label, path }, i) => (
          <h2
            key={i}
            className={`pt-[16px] font-medium text-[15px] ${path ? "cursor-pointer" : ""}`}
            onClick={() => path && navigate(path)}
          >
            {label}
          </h2>
        ))}
      </div>
    </div>
  );
}

export default PagesRecruiter
