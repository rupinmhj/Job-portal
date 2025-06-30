import React from 'react'
import { useNavigate,useLocation } from 'react-router-dom';
import { FaAngleLeft} from "react-icons/fa6";
import images from '../assets/images';
const SuccessCreateUpdate = () => {
         const navigate = useNavigate();
         const location=useLocation();
  const back = () => navigate(-1);
  const action=location.state?.action;
  const heading=action==='update'?
  "You have succefully updated the job":
  "You have succefully created the job"

  return (
    <div className='font-urbanist h-[100dvh]'>
      <div className="max-w-[1024px] mx-auto">
              <div className="flex items-center justify-between p-[24px] pt-[16px] ">
                <div
                  onClick={back}
                  className="p-[6px] border rounded-lg border-gray-700 cursor-pointer"
                >
                  <FaAngleLeft className="text-gray-700 size-[14px]" />
                </div>
                <h2 className="text-[20px] font-bold  leading-[24px]">
                  Success
                </h2>
                  <div className="w-[27.6px] h-[27.6px]"></div>
              </div>
            </div>

            <div className="p-[24px] max-w-[1024px] mx-auto pt-[120px]" >
                <div className="p-[32px] pt-[16px] flex flex-col justify-center items-center">
                  <img src={images.success} className='size-[220px]' alt="" />
                  <h1 className="text-[24px] leading-[36px] font-bold mt-[15px]">{heading}</h1>
      
                </div>
                </div>

             <div className="fixed bottom-0 right-0 left-0 ">
         <div className="p-[24px] max-w-[1024px] mx-auto ">
          <div className="bg-[#2869FE] p-[16px] rounded-[16px] flex justify-center text-white cursor-pointer" onClick={()=>navigate('/managejob')}>
                <h1 className="text-[16px] leading-[26px] font-bold" >Back To Manage Jobs</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SuccessCreateUpdate
