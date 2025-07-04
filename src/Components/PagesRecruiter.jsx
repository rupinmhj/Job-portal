import React from 'react';
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const PagesRecruiter = ({ back }) => {
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
        <h3 className="text-[18px] font-bold ml-14 dark:text-white">Pages</h3>
      </div>

      <div className="flex px-[24px] flex-col text-custBlackBold dark:text-white list-none">
        <li className="pt-[16px] font-medium text-[15px] cursor-pointer" onClick={() => navigate("/boarding")}>Boarding</li>
        <li className="pt-[16px] font-medium text-[15px]">Boarding 01</li>
        <li className="pt-[16px] font-medium text-[15px]">Boarding 02</li>
        <li className="pt-[16px] font-medium text-[15px] cursor-pointer" onClick={() => navigate("/signin")}>Sign In</li>
        <li className="pt-[16px] font-medium text-[15px] cursor-pointer" onClick={() => navigate("/signup")}>Sign Up</li>
        <li className="pt-[16px] font-medium text-[15px] cursor-pointer" onClick={() => navigate("/forgetpassword")}>Forgot Password</li>
        <li className="pt-[16px] font-medium text-[15px] cursor-pointer" onClick={() => navigate("/verification")}>Verification</li>
        <li className="pt-[16px] font-medium text-[15px] cursor-pointer" onClick={() => navigate("/resetpassword")}>Reset Password</li>
        <li className="pt-[16px] font-medium text-[15px] cursor-pointer" onClick={() => navigate("/")}>HomeRecruiter</li>
        <li className="pt-[16px] font-medium text-[15px] cursor-pointer" onClick={() => navigate("/setup/interest")}>Interest</li>
        <li className="pt-[16px] font-medium text-[15px] cursor-pointer" onClick={() => navigate("/setup/interest/confirmnewaccount")}>Confirm New Account</li>
        <li className="pt-[16px] font-medium text-[15px]">Success Account</li>
        <li className="pt-[16px] font-medium text-[15px] cursor-pointer" onClick={() => navigate("/managejob")}>Manage Job </li>
        <li className="pt-[16px] font-medium text-[15px] cursor-pointer" onClick={() => navigate("/successskill")}>Success Applied</li>
        <li className="pt-[16px] font-medium text-[15px] cursor-pointer" onClick={() => navigate('/createjob')}>Create Job</li>
        <li className="pt-[16px] font-medium text-[15px] cursor-pointer" onClick={() => navigate('/application')}>Applications</li>
        <li className="pt-[16px] font-medium text-[15px] cursor-pointer" onClick={() => navigate('/emptynotification')}>Empty Notification</li>
        <li className="pt-[16px] font-medium text-[15px] cursor-pointer" onClick={() => navigate("/messagerecruiter")}>Message</li>
        <li className="pt-[16px] font-medium text-[15px] cursor-pointer" onClick={() => navigate("/message/messageinbox")}>Message Inbox</li>
        <li className="pt-[16px] font-medium text-[15px] cursor-pointer" onClick={() => navigate("/groupmessage")}>Group Message</li>
        <li className="pt-[16px] font-medium text-[15px] cursor-pointer" onClick={() => navigate("/profilerecruiter")}>Profile</li>
        <li className="pt-[16px] font-medium text-[15px] cursor-pointer" onClick={() => navigate("/companyprofile")}>Company Profile</li>
        <li className="pt-[16px] font-medium text-[15px] cursor-pointer" onClick={() => navigate("/setup/interest/confirmnewaccount/success")}>Success</li>
      </div>
    </div>
  );
};

export default PagesRecruiter;
