import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FaAngleLeft} from "react-icons/fa6";
import images from '../assets/images';
import {motion} from 'framer-motion'
const Success = () => {
         const navigate = useNavigate();
  const back = () => navigate(-1);
  return (
     <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="h-screen overflow-y-scroll scroll-container dark:bg-[#111d39] "
    >
      <div className='font-urbanist h-[100dvh] dark:text-white'>
      <div className="max-w-[1024px] mx-auto">
              <div className="flex items-center justify-between p-[24px] pt-[16px] ">
                <div
                  onClick={back}
                  className="p-[6px] border rounded-lg border-gray-700 dark:border-white cursor-pointer"
                >
                  <FaAngleLeft className="text-gray-700 size-[14px] dark:text-white" />
                </div>
                <h2 className="text-[20px] font-bold dark leading-[24px]">
                  Success
                </h2>
                  <div className="w-[27.6px] h-[27.6px]"></div>
              </div>
            </div>

            <div className="p-[24px] max-w-[1024px] mx-auto pt-[120px]" >
                <div className="p-[32px] pt-[16px] flex flex-col justify-center items-center">
                  <img src={images.success} className='size-[220px]' alt="" />
                  <h1 className="text-[24px] leading-[36px] font-bold mt-[15px]">Your Account Set</h1>
                  <h2 className='text-google text-[14px] leading-[24px] font-medium mt-[8px] dark:text-gray-400'>You have successfully created account </h2>
      
                </div>
                </div>

             <div className="fixed bottom-0 right-0 left-0 ">
         <div className="p-[24px] max-w-[1024px] mx-auto ">
          <div className="bg-[#2869FE] p-[16px] rounded-[16px] flex justify-center text-white cursor-pointer" onClick={()=>navigate('/home')}>
                <h1 className="text-[16px] leading-[26px] font-bold" >Back To Home</h1>
          </div>
        </div>
      </div>
    </div>
    </motion.div>
    
  )
}

export default Success
