import React from "react";
import Boarding1 from "./Boarding1";
import Boarding2 from "./Boarding2";
import Boarding3 from "./Boarding3";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";

const slideAnimation = {
  hidden: { opacity: 0, y: 0 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.1 } },
};

const Boarding = () => {
  const navigate = useNavigate();
  const signIn = () => {
    navigate("/signin");
  };

  return (
    <div className="relative h-screen dark:bg-[#111d39]  transition-colors duration-300 ">
      <Swiper
        slidesPerView={1}
        modules={[Pagination,Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        style={{ paddingBottom: "40px" }}
        speed={800}
      >
        <SwiperSlide>
          {({ isActive }) => (
            <motion.div
              initial="hidden"
              animate={isActive ? "visible" : "hidden"}
              variants={slideAnimation}
            >
              <Boarding1 />
            </motion.div>
          )}
        </SwiperSlide>

        <SwiperSlide>
          {({ isActive }) => (
            <motion.div
              initial="hidden"
              animate={isActive ? "visible" : "hidden"}
              variants={slideAnimation}
            >
              <Boarding2 />
            </motion.div>
          )}
        </SwiperSlide>

        <SwiperSlide>
          {({ isActive }) => (
            <motion.div
              initial="hidden"
              animate={isActive ? "visible" : "hidden"}
              variants={slideAnimation}
            >
              <Boarding3 />
            </motion.div>
          )}
        </SwiperSlide>
      </Swiper>

      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-[#1b2a47]  py-4 z-10 transition-colors duration-300">
        <div className="px-[24px] lg:px-[252px]">
          <button
            onClick={signIn}
            className="w-full bg-[#2869FE] text-[16px] leading-[26px] font-bold p-[16px] text-white rounded-xl hover:bg-[#1e56d3] transition-all duration-200"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Boarding;
