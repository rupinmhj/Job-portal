import React from "react";
import images from "../assets/images";
import { motion } from "framer-motion";
const Boarding3 = () => {
  return (
    <motion.div
     
   
   
    >
      <div className="xl:px-[274px] lg:px-[232px] px-[24px] font-urbanist text-primary-text">
        <div className="flex justify-center items-center flex-col pt-[32px] ">
          <div className="flex bg-borderBlue p-5 rounded-[30px] ">
            <img
              className="bg-white rounded-[22px]"
              src={images.boarding3}
              alt=""
            />
          </div>
          <div className="title text-[28px] leading-[40px] font-bold flex flex-col mt-[36px] justify-center items-center ">
            <div className="">Search Job Easier</div>
            <div>and More Effective</div>
            <div className="flex flex-col justify-center items-center mt-[12px] text-google text-[16px] font-medium leading-[28px]">
              <p className="">Jobfill can help you find the right</p>
              <p>job with your desire</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Boarding3;
