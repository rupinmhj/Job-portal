import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import images from "../assets/images";
const SkillAssessment = () => {
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };
  const skillassessment2=()=>{
    navigate('/skillassessment2');
  }

  const [selected, setSelected] = useState("");
  const options = ["Almost Never", "Sometimes", "Fairly Often", "Very Often"];

  return (
    <div className="bg-[#7661F2] ">
      <div className="h-[100dvh]   text-white font-urbanist">
        <div className="fixed left-0 right-0 top-0 outline-none z-30">
          <div className="flex  justify-between p-[24px] pt-[16px] mx-auto max-w-[1024px] items-center">
            <div
              onClick={back}
              className="flex gap-[18px] items-center justify-between"
            >
              <div className="h-[30px] flex justify-center items-center w-[30px] border rounded-lg border-white cursor-pointer">
                <IoMdClose  className=" h-[14px] w-[14px]" />
              </div>
            </div>
            <h2 className="text-[20px] font-bold leading-[24px] ">
              Skill Assessment
            </h2>

            <img src={images.homewhite} className="h-6 w-6 cursor-pointer" onClick={()=>navigate('/')} alt="" />
          </div>
        </div>

        <div className="px-8 pt-[70px] max-w-[1024px] mx-auto">
          <h1 className="text-[18px] font-semibold leading-[26px]">
            Question 4/20
          </h1>
          <div className=" relative h-[7px] w-full bg-[#6757D4] rounded-2xl mt-[12px] ">
                <div className="absolute left-0 top-0 h-[7px] bg-green-400 rounded-2xl w-[25%]"></div>
          </div>
          <div className="mt-8 bg-white dark:bg-[#111d39] p-6 rounded-[28px] flex flex-col gap-6 text-custBlackBold ">
            <div className="">
              <h1 className="text-[12px] leading-[20px] font-medium text-gray-500">
                Select and answer
              </h1>
              <p className="text-[24px] leading-9 font-bold dark:text-white">
                You find good things so easy to relaxed even under pressure
              </p>
            </div>
            <div className="">
              {options.map((option, index) => (
                <div
                  key={index}
                  className={`py-[14px] px-[16px] mb-[16px] flex items-center gap-[12px] border rounded-[12px] cursor-pointer
                            transition-colors ${
                              selected === option
                                ? "border-green-500"
                                : "border-gray-200"
                            }`}
                  onClick={() => setSelected(option)}
                >
                  <input
                    type="radio"
                    checked={selected === option}
                    onChange={() => setSelected(option)}
                    className="green-radio size-[13px] focus:outline-white"
                  />
                  <p className="text-[14px] leading-6 font-medium text-gray-500">
                    {option}
                  </p>
                </div>
              ))}
            </div>
                       <button className="p-[12px] rounded-[16px] w-full text-white text-[16px] leading-[26px] font-bold bg-[#2869FE]" onClick={skillassessment2}>Next</button>

          </div>
          <div className="bg-gray-200 dark:bg-gray-800 h-[16px] w-[92%] mx-auto rounded-b-[40px] bg-opacity-70 dark:bg-opacity-70"></div>
          <div className="bg-gray-200 dark:bg-gray-900 h-[16px] w-[84%] mx-auto rounded-b-[40px] bg-opacity-30 dark:bg-opacity-30"></div>
        </div>
      </div>
    </div>
  );
};

export default SkillAssessment;
