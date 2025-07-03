import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaAngleLeft } from "react-icons/fa6";
import images from '../assets/images';
import { motion } from 'framer-motion';

const SuccessSkill = () => {
  const navigate = useNavigate();
  const back = () => navigate(-1);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="h-screen overflow-y-scroll scroll-container dark:bg-[#111d39]"
    >
      <div className="font-urbanist h-[100dvh] dark:text-white">
        <div className="max-w-[1024px] mx-auto">
          <div className="flex items-center justify-between p-[24px] pt-[16px]">
            <div
              onClick={back}
              className="p-[6px] border h-[30px] w-[30px] flex justify-center items-center rounded-lg border-gray-700 dark:border-white cursor-pointer"
            >
              <FaAngleLeft className="text-gray-700 dark:text-white size-[14px]" />
            </div>
            <h2 className="text-[20px] font-bold leading-[24px]">Success</h2>
            <div className="w-[27.6px] h-[27.6px]"></div>
          </div>
        </div>

        <div className="p-[24px] max-w-[1024px] mx-auto pt-[120px]">
          <div className="p-[32px] pt-[16px] flex flex-col justify-center items-center">
            <img src={images.success} className="size-[220px]" alt="success" />
            <h1 className="text-[24px] leading-[36px] font-bold mt-[15px]">Test Success</h1>
            <h2 className="text-google text-[14px] leading-[24px] font-medium mt-[8px] dark:text-gray-400">
              You Have Successfully top up the wallet
            </h2>
          </div>
        </div>

        {/* Buttons */}
        <div className="fixed bottom-0 right-0 left-0 bg-white dark:bg-[#111d39]">
          <div className="p-[24px] max-w-[1024px] mx-auto">
            {/* Back to Home */}
            <div
              className="bg-[#2869FE] mb-[20px] p-[16px] rounded-[16px] flex justify-center text-white cursor-pointer hover:bg-[#1752e4] transition-all duration-200"
              onClick={() => navigate('/home')}
            >
              <h1 className="text-[16px] leading-[26px] font-bold">Back To Home</h1>
            </div>

            {/* Back to Skill Test */}
            <div
              className="bg-[#2869FE1A] dark:bg-[#ffffff1a] p-[16px] text-[#2869FE] dark:text-white rounded-[16px] flex justify-center shadow-2xl cursor-pointer hover:bg-[#2869FE] hover:text-white transition-all duration-200"
              onClick={() => navigate(-1)}
            >
              <h1 className="text-[16px] leading-[26px] font-bold">Back To Skill Test</h1>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SuccessSkill;
