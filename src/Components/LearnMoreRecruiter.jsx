import React from "react";
import images from "../assets/images";
import SetFilters from "./SetFilters"
import { Plus, Users, Briefcase, FileText, TrendingUp, Clock, Eye, UserCheck } from "lucide-react";

import { useNavigate } from "react-router-dom";
const LearnMoreRecruiter = () => {
  const navigate=useNavigate();
  const filter=()=>{
    navigate("/details")
  }
  return (
    <div className="max-w-[1024px] mx-auto px-[24px] mt-[24px] flex font-urbanist items-center bg-white">
      <div className="px-[24px] pt-[20px] pb-[24px] bg-backGreen w-full rounded-2xl relative overflow-hidden ">
        <div className="flex items-center justify-between">
             <div className="">
             <h1 className="text-white text-[18px] leading-[26px] font-semibold mb-[23px]">
          Post your next job and find 
          <br />
          the right talent
        </h1>
        <button onClick={()=>navigate('/createjob')} className="text-[12px] leading-[20px] bg-buttonGreen text-white font-semibold px-[14px] py-[10px] rounded-lg">
          Create job
        </button>
        </div>
         <div className="hidden md:block text-white ">
                <div className="bg-white/10 rounded-lg p-6">
                  <Briefcase className="h-12 w-12 text-white mb-2" />
                  <div className="text-sm opacity-90">Active Jobs</div>
                  <div className="text-2xl font-bold">8</div>
                </div>
              </div>
        </div>
       
       
      
        
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

export default LearnMoreRecruiter;