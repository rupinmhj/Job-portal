import React from "react";
import images from "../assets/images";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useNavigate } from "react-router-dom";
const MostPopular = () => {
  const navigate=useNavigate();
  const detail=()=>{
    navigate("/details");
  }
  const allJob=()=>{
    navigate("/alljob")
  }
  return (
    <div className="text-white max-w-[1024px] mx-auto pl-[24px] mt-[24px] font-urbanist">
      <div className="flex justify-between pr-[24px]">

      <h1 className='text-black font-bold text-[18px] leading-[22px] mb-[24px] dark:text-white'>Most Popular</h1>
      <h4 className="leading-[24px] font-bold text-[14px] cursor-pointer text-textSeeAll" onClick={allJob}>See all</h4>
      </div>
      <Swiper
        spaceBetween={20}
        slidesPerView={"auto"}
        // grabCursor={false}
        centeredSlides={false}
        speed={800}
        
      >
        {/* Slide 1 */}
        <SwiperSlide className="!w-[80%]">
          <div className="bg-sliderBlue   rounded-xl p-[16px]">
            <div className="w-full justify-between flex">
              <div className="flex gap-[12px]">
                <img src={images.google} className="h-[40px]" alt="" />
                <div className="flex flex-col gap-[2px]">
                  <h1 className="text-softWhite text-[14px] font-medium leading-[24px]">Google LLC</h1>
                  <h1 className="font-bold text-[16px] leading-[19px] cursor-pointer" onClick={()=>navigate('/details')}>Sr. UX Designer</h1>
                </div>
              </div>
              <div className="p-2 h-[32px] bg-white bg-opacity-30 rounded-full text-center">
                <img src={images.popu} className="z-50 text-white" alt="" />
              </div>
            </div>

            <div className="flex gap-[10px] mt-[20px]">
              {["Design", "Full Time", "In House"].map((item, idx) => (
                <span key={idx} className="rounded-lg bg-opacity-10 bg-white text-[10px] font-medium px-[12px] leading-[24px]">
                  {item}
                </span>
              ))}
            </div>

            <div className="flex mt-[20px] justify-between">
              <div className="flex items-end font-bold text-[16px] leading-[19px]">
                $195,000/<span className="font-medium text-[10px] ml-1">Year</span>
              </div>
              <button onClick={detail} className="font-medium text-[12px] bg-buttonBlue flex gap-[4px] px-[12px] rounded-lg py-[6px]">
                Apply <img src={images.arrowRight} alt="" />
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide className="!w-[80%]">
          <div className="bg-sliderPurple   rounded-xl p-[16px]">
            <div className="w-full justify-between flex">
              <div className="flex gap-[12px]">
                <img src={images.microsoft} className="h-[40px]" alt="" />
                <div className="flex flex-col gap-[2px]">
                  <h1 className="text-softWhite text-[14px] font-medium leading-[24px]">Microsoft</h1>
                  <h1 className="font-bold text-[16px] leading-[19px] cursor-pointer" onClick={()=>navigate('details')}>Lead Designer</h1>
                </div>
              </div>
              <div className="p-2 h-[32px] bg-white bg-opacity-30 rounded-full">
                <img src={images.popu} className="z-50 text-white" alt="" />
              </div>
            </div>

            <div className="flex gap-[10px] mt-[20px]">
              {["Design", "Full Time", "In House"].map((item, idx) => (
                <span key={idx} className="rounded-lg bg-opacity-10 bg-white text-[10px] font-medium px-[12px] leading-[24px]">
                  {item}
                </span>
              ))}
            </div>

            <div className="flex mt-[20px] justify-between">
              <div className="flex items-end font-bold text-[16px] leading-[19px]">
                $195,000/<span className="font-medium text-[10px] ml-1">Year</span>
              </div>
              <button onClick={detail} className="font-medium text-[12px] bg-buttonPurple flex gap-[4px] px-[12px] rounded-lg py-[6px]">
                Apply <img src={images.arrowRight} alt="" />
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MostPopular;
