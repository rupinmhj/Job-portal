import React from 'react'
import { useNavigate } from "react-router-dom";
import { FaAngleLeft} from "react-icons/fa6";
import images from "../assets/images";
const ConfirmNewAccount = () => {
       const navigate = useNavigate();
  const back = () => navigate("/setup/interest");
  return (
    <div className='font-urbanist  h-[100dvh]'>
      <div className="max-w-[1024px] mx-auto">
        <div className="flex items-center justify-between p-[24px] pt-[16px] ">
          <div
            onClick={back}
            className="p-[6px] border rounded-lg border-gray-700 cursor-pointer"
          >
            <FaAngleLeft className="text-gray-700 size-[14px]" />
          </div>
          <h2 className="text-[20px] font-bold  leading-[24px]">
            Confirm New Address
          </h2>
          <h2 className="w-[14px]"></h2>
        </div>
      </div>
      <div className="max-w-[1024px] px-[24px] mx-auto">
        <div className="leading-[24px] text-[14px] font-medium text-gray-500">
            All is ok. Let’s confirm your account.
        </div>
        <div className="mt-[48px] flex justify-center items-center flex-col">
                <img className="size-[80.4px] rounded-2xl border border-blue-500" src={images.profileSmall} alt="" />
                <h1 className='mt-[16px] leading-[24px] text-gray-500'>Welcome</h1>
                <h1 className='mt-[16px] text-[18px] leading-[22px] font-bold'>Jonathan Smith</h1>

        </div>

      </div>

      <div className="fixed bottom-0 right-0 left-0 ">
         <div className="p-[24px] max-w-[1024px] mx-auto ">
          <div className="bg-[#2869FE] p-[16px] rounded-[16px] flex justify-center text-white cursor-pointer" onClick={()=>navigate('/setup/interest/confirmnewaccount/success')}>
                <h1 className="text-[16px] leading-[26px] font-bold">Create my account</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConfirmNewAccount
