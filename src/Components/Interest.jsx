
import { useNavigate } from "react-router-dom";
import { FaAngleLeft} from "react-icons/fa6";
import images from "../assets/images";
const Interest = () => {
   const navigate = useNavigate();
  const back = () => navigate("/");
  return (
    <div className="font-urbanist bg-[#816BFF] h-[100dvh]">
      <div className="max-w-[1024px] mx-auto ">
        <div className="flex items-center justify-between p-[24px] pt-[16px] ">
          <div
            onClick={back}
            className="p-[6px] border rounded-lg border-gray-300 cursor-pointer"
          >
            <FaAngleLeft className="text-gray-300 size-[14px]" />
          </div>
          <h2 className="text-[20px] font-bold text-white leading-[24px]">
            Interest
          </h2>
          <h2 className="w-[14px]"></h2>
        </div>
         <div className="max-w:[1080px] px-[24px] bg-[#816BFF] ">
        <h1 className="text-[18px] font-bold text-white leading-[22px]">What Type of Jon Your Looking For?</h1>
        <h3 className="text-[14px] leading-[24px] mt-[6px] font-medium text-white opacity-60">Choose your job categories and well click the job vacancy for you</h3>
      </div>
          
      </div>

      <div className="fixed bottom-0 right-0 left-0">
         <div className="bg-white  pt-[32px] px-[24px] rounded-t-[40px] ">
        <div className="bg-[#F7F7F8] text-[15px] leading-[18px] font-semibold">
            <div className="bg-white flex gap-[12px] p-[16px] mb-[16px]">
                <img src={images.intDesign} alt="" />
                <h1 className="flex-1 ">Design</h1>
                <img src={images.greentick}/>
            </div>
            <div className="bg-white flex gap-[12px] p-[16px] mb-[16px]">
                <img src={images.intDevelop} alt="" />
                <h1 className="flex-1 ">Develop</h1>
                <img src={images.greentick}/>
            </div>
            <div className="bg-white flex gap-[12px] p-[16px] mb-[16px]">
                <img src={images.intInfo} alt="" />
                <h1 className="flex-1 ">Information Tech</h1>
                <img src={images.graytick}/>
            </div>
            <div className="bg-white flex gap-[12px] p-[16px] mb-[16px]">
                <img src={images.intResearch} alt="" />
                <h1 className="flex-1 ">Research & Analytic</h1>
                <img src={images.greentick}/>
            </div>
            <div className="bg-white flex gap-[12px] p-[16px] mb-[16px]">
                <img src={images.intMarketing} alt="" />
                <h1 className="flex-1 ">Marketing</h1>
                <img src={images.graytick}/>
            </div>
        </div>
        <div className="py-[24px] max-w-[1024px] mx-auto ">
          <div className="bg-[#2869FE] p-[16px] rounded-[16px] flex justify-center text-white cursor-pointer" onClick={()=>navigate('/setup/interest/confirmnewaccount')}>
                <h1 className="text-[16px] leading-[26px] font-bold">Continue</h1>
          </div>
        </div>


      </div>

      </div>
     


     
    </div>
  );
};

export default Interest;
