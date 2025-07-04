import React from 'react';
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Pages = ({ back }) => {
  const navigate = useNavigate();
  console.log("pages is seen");

  return (
    <div className="w-[280px] bg-white dark:bg-[#111d39] font-urbanist shadow-lg h-screen overflow-y-scroll scroll-container">
      <div className="flex pt-[16px] p-[24px]">
        <div  onClick={back} className="p-[6px] border border-1/2 rounded-lg border-black dark:border-white">
          <FaAngleLeft
            className="text-gray-500 dark:text-white cursor-pointer size-[14px]"
          />
        </div>
        <h2 className="text-[18px] font-bold ml-14 dark:text-white">Pages</h2>
      </div>

      <ul className="flex px-[24px] flex-col text-custBlackBold dark:text-white list-none">
        <li className="pt-[16px] font-medium text-[15px] cursor-pointer" onClick={() => navigate("/boarding")}>Boarding</li>
        <li className="pt-[16px] font-medium text-[15px]">Boarding 01</li>
        <li className="pt-[16px] font-medium text-[15px]">Boarding 02</li>
        <li className="pt-[16px] font-medium text-[15px] cursor-pointer" onClick={() => navigate("/signin")}>Sign In</li>
        <li className="pt-[16px] font-medium text-[15px] cursor-pointer" onClick={() => navigate("/signup")}>Sign Up</li>
        <li className="pt-[16px] font-medium text-[15px] cursor-pointer" onClick={() => navigate("/forgetpassword")}>Forgot Password</li>
        <li className="pt-[16px] font-medium text-[15px] cursor-pointer" onClick={() => navigate("/verification")}>Verification</li>
        <li className="pt-[16px] font-medium text-[15px] cursor-pointer" onClick={() => navigate("/resetpassword")}>Reset Password</li>
        <li className="pt-[16px] font-medium text-[15px] cursor-pointer" onClick={() => navigate("/")}>Home</li>
        <li className="pt-[16px] font-medium text-[15px] cursor-pointer" onClick={() => navigate("/setup")}>Set Up Profile</li>
        <li className="pt-[16px] font-medium text-[15px] cursor-pointer" onClick={() => navigate("/setup/interest")}>Interest</li>
        <li className="pt-[16px] font-medium text-[15px] cursor-pointer" onClick={() => navigate("/setup/interest/confirmnewaccount")}>Confirm New Account</li>
        <li className="pt-[16px] font-medium text-[15px]">Success Account</li>
        <li className="pt-[16px] font-medium text-[15px] cursor-pointer" onClick={() => navigate("/details")}>Job Details</li>
        <li className="pt-[16px] font-medium text-[15px] cursor-pointer" onClick={() => navigate("/alljob")}>All Job</li>
        <li className="pt-[16px] font-medium text-[15px] cursor-pointer" onClick={() => navigate("/applyjob")}>Apply Job</li>
        <li className="pt-[16px] font-medium text-[15px] cursor-pointer" onClick={() => navigate("/successskill")}>Success Applied</li>
        <li className="pt-[16px] font-medium text-[15px] cursor-pointer" onClick={() => navigate('/searchjob')}>Search Job</li>
        <li className="pt-[16px] font-medium text-[15px] cursor-pointer" onClick={() => navigate('/clipboard')}>Your Applications</li>
        <li className="pt-[16px] font-medium text-[15px] cursor-pointer" onClick={() => navigate('/jobdetailstracking')}>Job Details Tracking</li>
        <li className="pt-[16px] font-medium text-[15px] cursor-pointer" onClick={() => navigate('/emptynotification')}>Empty Notification</li>
        <li className="pt-[16px] font-medium text-[15px] cursor-pointer" onClick={() => navigate("/message")}>Message</li>
        <li className="pt-[16px] font-medium text-[15px] cursor-pointer" onClick={() => navigate("/message/messageinbox")}>Message Inbox</li>
        <li className="pt-[16px] font-medium text-[15px] cursor-pointer" onClick={() => navigate("/groupmessage")}>Group Message</li>
        <li className="pt-[16px] font-medium text-[15px] cursor-pointer" onClick={() => navigate("/profile")}>Profile</li>
        <li className="pt-[16px] font-medium text-[15px] cursor-pointer" onClick={() => navigate('/skilltest')}>Skill Test</li>
        <li className="pt-[16px] font-medium text-[15px] cursor-pointer" onClick={() => navigate('/skillassessment')}>Skill Assessment</li>
        <li className="pt-[16px] font-medium text-[15px] cursor-pointer" onClick={() => navigate('/workexperience')}>Work Experience</li>
        <li className="pt-[16px] font-medium text-[15px] cursor-pointer" onClick={() => navigate('/education')}>Education</li>
        <li className="pt-[16px] font-medium text-[15px] cursor-pointer" onClick={() => navigate('/awards')}>Awards</li>
        <li className="pt-[16px] font-medium text-[15px] cursor-pointer" onClick={() => navigate("/setup/interest/confirmnewaccount/success")}>Success</li>
      </ul>
    </div>
  );
};

export default Pages;
