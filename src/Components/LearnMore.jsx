import React from "react";
import images from "../assets/images";

const LearnMore = () => {
  return (
    <div className="lg:mx-[232px] px-[24px] mt-[24px] flex font-urbanist items-center bg-white">
      <div className="px-[24px] pt-[20px] pb-[24px] bg-backGreen w-full rounded-2xl relative overflow-hidden ">
        <h1 className="text-white text-[18px] leading-[26px] font-semibold mb-[23px]">
          Let's find a new job
          <br />
          suitable for you
        </h1>
        <button className="text-[12px] leading-[20px] bg-buttonGreen text-white font-semibold px-[14px] py-[10px] rounded-lg">
          Learn More
        </button>
        <img
          src={images.banner1}
          className="bottom-0 right-5 z-10 h-[133px] w-[114px] absolute"
          alt=""
        />
        
        {/* Updated circle animation container */}
        <div className="circle-animation absolute  bottom-0 w-[300px] h-[300px] top-0 right-[-110px]">
          {[0, 0.6, 1.2, 1.8, 2.4].map((delay, index) => (
            <div
              key={index}
              className="circle animate-circle"
              style={{ 
                animationDelay: `${delay}s`,
                opacity: 0  // Start with opacity 0
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearnMore;