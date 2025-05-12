import React from 'react'
import { FaAngleLeft } from "react-icons/fa6";
import {useNavigate} from "react-router-dom"
const Pages = ({back}) => {
  const navigate=useNavigate();
  console.log("pages is seen")
  return (
    <div className='w-[280px]  bg-white font-urbanist shadow-lg h-screen overflow-y-scroll scroll-container'>

      <div className="flex pt-[16px] p-[24px]">
        <div className='p-[6px] border border-1/2 rounded-lg border-black '>
        <FaAngleLeft  onClick={back} className='text-gray-500 cursor-pointer size-[14px]'/>
        </div>
        <h2 className='text-[18px] font-bold ml-14'>Pages</h2>
      </div>
      <div className="flex px-[24px] flex-col">
  <h2 className='pt-[16px] font-medium text-[15px] cursor-pointer'  onClick={()=>navigate("/boarding")}>Boarding</h2>
  <h2 className='pt-[16px] font-medium text-[15px]'>Boarding 01</h2>
  <h2 className='pt-[16px] font-medium text-[15px]'>Boarding 02</h2>
  <h2 className='pt-[16px] font-medium text-[15px] cursor-pointer'  onClick={()=>navigate("/signin")}>Sign In</h2>
  <h2 className='pt-[16px] font-medium text-[15px] cursor-pointer'  onClick={()=>navigate("/signup")}>Sign Up</h2>
  <h2 className='pt-[16px] font-medium text-[15px] cursor-pointer'  onClick={()=>navigate("/forgetpassword")}>Forgot Password</h2>
  <h2 className='pt-[16px] font-medium text-[15px] cursor-pointer'  onClick={()=>navigate("/verification")}>Verification</h2>
  <h2 className='pt-[16px] font-medium text-[15px] cursor-pointer' onClick={()=>navigate("/resetpassword")}>Reset Password</h2>
  <h2 className='pt-[16px] font-medium text-[15px] cursor-pointer'  onClick={()=>navigate("/")}>Home</h2>
  <h2 className='pt-[16px] font-medium text-[15px] cursor-pointer'  onClick={()=>navigate("/setup")}>Set Up Profile</h2>
  <h2 className='pt-[16px] font-medium text-[15px] cursor-pointer'  onClick={()=>navigate("/setup/interest")}>Interest</h2>
  <h2 className='pt-[16px] font-medium text-[15px] cursor-pointer' onClick={()=>navigate("/setup/interest/confirmnewaccount")}>Confirm New Account</h2>
  <h2 className='pt-[16px] font-medium text-[15px]'>Success Account</h2>
  <h2 className='pt-[16px] font-medium text-[15px] cursor-pointer'  onClick={()=>navigate("/details")}>Job Details</h2>
  <h2 className='pt-[16px] font-medium text-[15px] cursor-pointer'  onClick={()=>navigate("/alljob")}>All Job</h2>
  <h2 className='pt-[16px] font-medium text-[15px] cursor-pointer'  onClick={()=>navigate("/applyjob")}>Apply Job</h2>
  <h2 className='pt-[16px] font-medium text-[15px]'>Success Applied</h2>
  <h2 className='pt-[16px] font-medium text-[15px] cursor-pointer'>Search Job</h2>
  <h2 className='pt-[16px] font-medium text-[15px]'>Your Applications</h2>
  <h2 className='pt-[16px] font-medium text-[15px]'>Job Details Tracking</h2>
  <h2 className='pt-[16px] font-medium text-[15px]'>Empty Notification</h2>
  <h2 className='pt-[16px] font-medium text-[15px] cursor-pointer'  onClick={()=>navigate("/message")}>Message</h2>
  <h2 className='pt-[16px] font-medium text-[15px]'>Message Inbox</h2>
  <h2 className='pt-[16px] font-medium text-[15px]'>Group Message</h2>
  <h2 className='pt-[16px] font-medium text-[15px] cursor-pointer'  onClick={()=>navigate("/profile")}>Profile</h2>
  <h2 className='pt-[16px] font-medium text-[15px] cursor-pointer'  onClick={()=>navigate("/searchjob")}>Search Job</h2>
  <h2 className='pt-[16px] font-medium text-[15px]'>Skill Test</h2>
  <h2 className='pt-[16px] font-medium text-[15px]'>Skill Assessment</h2>
  <h2 className='pt-[16px] font-medium text-[15px]'>Work Experience</h2>
  <h2 className='pt-[16px] font-medium text-[15px]'>Education</h2>
  <h2 className='pt-[16px] font-medium text-[15px]'>Awards</h2>
  <h2 className='pt-[16px] font-medium text-[15px] cursor-pointer' onClick={()=>navigate("/setup/interest/confirmnewaccount/success")}>Success</h2>
</div>

    </div>
  )
}

export default Pages
