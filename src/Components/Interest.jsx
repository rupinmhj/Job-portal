import { useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa6";
import images from "../assets/images";
import { useContext, useState } from "react";
import ThemeContext from "./Themecontext";

const interestsList = [
  { id: 1, label: "Design", icon: images.intDesign },
  { id: 2, label: "Develop", icon: images.intDevelop },
  { id: 3, label: "Information Tech", icon: images.intInfo },
  { id: 4, label: "Research & Analytic", icon: images.intResearch },
  { id: 5, label: "Marketing", icon: images.intMarketing },
];

const Interest = () => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [selected, setSelected] = useState([]);

  const handleCheck = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div
      className={`font-urbanist bg-[#816BFF] h-[100dvh]`}
    >
       <div className="max-w-[1024px] mx-auto">
        <div className="flex items-center justify-between p-[24px] pt-[16px]">
          <div onClick={() => navigate("/home")} className="p-[6px] border rounded-lg border-gray-300 cursor-pointer">
            <FaAngleLeft className="text-gray-300 size-[14px]" />
          </div>
          <h2 className="text-[20px] font-bold text-white leading-[24px]">Interest</h2>
          <div className=""></div>
        </div>
        <div className="max-w:[1080px] px-[24px] bg-[#816BFF]">
          <h1 className="text-[18px] font-bold text-white leading-[22px]">What Type of Job You’re Looking For?</h1>
          <h3 className="text-[14px] leading-[24px] mt-[6px] font-medium text-white opacity-60">Choose your job categories and we’ll click the job vacancy for you</h3>
        </div>
      </div>
      <div className="fixed bottom-0 right-0 left-0">
        <div className="bg-white dark:bg-[#2A2A40] pt-[32px] px-[24px] rounded-t-[40px]">
          <div className="text-[15px] leading-[18px] font-semibold">
            {interestsList.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-[#1F1F30] rounded-xl flex items-center gap-[12px] p-[16px] mb-[16px] rounded text-black dark:text-white"
              >
                <img src={item.icon} alt={item.label}  />
                <h1 className="flex-1">{item.label}</h1>
                <input
                  type="checkbox"
                  checked={selected.includes(item.id)}
                  onChange={() => handleCheck(item.id)}
                  className="w-5 h-5 cursor-pointer"
                  style={{
                    accentColor: selected.includes(item.id)
                      ? theme === "dark"
                        ? "#00FF90"
                        : "green"
                      : "gray",
                  }}
                />
              </div>
            ))}
          </div>
          <div className="py-[24px] max-w-[1024px] mx-auto">
            <div
              className="bg-[#2869FE] p-[16px] rounded-[16px] flex justify-center text-white cursor-pointer"
              onClick={() => navigate("/setup/interest/confirmnewaccount")}
            >
              <h1 className="text-[16px] leading-[26px] font-bold">Continue</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Interest;
