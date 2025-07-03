import React from "react";
import images from "../assets/images";
import { motion } from "framer-motion";

const Boarding3 = () => {
  return (
    <motion.div>
      <div className="xl:px-[274px] dark:bg-[#111d39]  lg:px-[232px] px-[24px] font-urbanist text-primary-text dark:text-white transition-colors duration-300">
        <div className="flex justify-center items-center flex-col pt-[32px]">
          <div className="flex bg-borderBlue dark:bg-[#1e2b45] p-5 rounded-[30px]">
            <img
              className="bg-white dark:bg-[#d6d6d6] rounded-[22px]"
              src={images.boarding3}
              alt="boarding"
            />
          </div>
          <div className="title text-[28px] leading-[40px] font-bold flex flex-col mt-[36px] justify-center items-center text-black dark:text-white">
            <div>Search Job Easier</div>
            <div>and More Effective</div>
            <div className="flex flex-col justify-center items-center mt-[12px] text-google dark:text-gray-300 text-[16px] font-medium leading-[28px]">
              <p>Jobfill can help you find the right</p>
              <p>job with your desire</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Boarding3;
