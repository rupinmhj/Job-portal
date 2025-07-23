import React, { useContext, useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import images from "../assets/images";
import { motion } from 'framer-motion';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AuthContext from "../Context/authContext";
import useAxiosAuth from "../hooks/useAxiosAuth";
import { IoIosCloseCircleOutline } from "react-icons/io";
const WorkExperience = () => {
  const api = useAxiosAuth();
  const { seekerDetails, email } = useContext(AuthContext);
  const navigate = useNavigate();
  const back = () => navigate(-1);
  const [loading, setLoading] = useState(false);
  const [experiences, setExperiences] = useState([
    {
      companyName: "",
      companyBusiness: "",
      jobTitle: "",
      department: "",
      location: "",
      startDate: null,
      endDate: null,
      isCurrent: false,
      responsibilities: "",
    },
  ]);

  const handleChange = (index, field, value) => {
    const updated = [...experiences];
    updated[index][field] = value;
    setExperiences(updated);
  };

  const addExperience = () => {
    setExperiences([
      ...experiences,
      {
        companyName: "",
        companyBusiness: "",
        jobTitle: "",
        department: "",
        location: "",
        startDate: null,
        endDate: null,
        isCurrent: false,
        responsibilities: "",
      },
    ]);
  };

  const removeExperience = (index) => {
    const updated = experiences.filter((_, i) => i !== index);
    setExperiences(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(false);
      await api.post("", {
        experiences,

      });
      navigate("/profile");
    } catch (err) {
      console.error("Submission error", err);
    } finally {
      setLoading(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }} 
      className="h-screen overflow-y-scroll scroll-container dark:bg-[#111d39]">
      <div className="text-custBlackBold font-urbanist dark:text-white">
        <div className="fixed left-0 right-0 top-0 z-30 bg-white dark:bg-[#111d39]">
          <div className="flex justify-between p-[24px] pt-[16px] mx-auto max-w-[1024px]">
            <div onClick={back} className="flex gap-[18px] items-center cursor-pointer">
              <div className="h-[30px] w-[30px] flex items-center justify-center border rounded-lg border-gray-500 dark:border-white">
                <FaAngleLeft className="text-gray-500 h-[14px] w-[14px] dark:text-white" />
              </div>
            </div>
            <h2 className="text-[20px] font-bold leading-[24px]">Work Experience</h2>
            <img src={images.home} onClick={() => navigate("/")} className="h-6 w-6 cursor-pointer dark:invert" alt="home" />
          </div>
        </div>

        <div className="flex mt-[70px] items-center flex-col">
          <img src={seekerDetails?.profile_pic || images.profileImage} className="size-[80.4px] border border-blue-600 rounded-2xl mb-[12px]" alt="profile" />
          <h2 className="text-[18px] font-bold mb-2">{seekerDetails?.full_name}</h2>
          <h2 className="text-gray-400 text-[12px] font-medium">{email}</h2>
        </div>

        <form onSubmit={handleSubmit} className="max-w-[1024px] mx-auto px-6 mt-[20px] mb-[120px]">
          {experiences.map((exp, index) => (
            <div key={index} className="border-t border-gray-300 mt-6 pt-4 relative">
              {experiences.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeExperience(index)}
                  className="text-gray-200 text-[14px] absolute top-3 right-0 flex items-center gap-1"
                >
                  <span className="text-[18px]"><IoIosCloseCircleOutline /></span>
                  <span>Clear</span>
                </button>

              )}
              {[
                { key: "companyName", label: "Company Name" },
                { key: "companyBusiness", label: "Company Business" },
                { key: "jobTitle", label: "Job Title" },
                { key: "department", label: "Department" },
                { key: "location", label: "Location" },
              ].map(({ key, label }) => (
                <div className="mt-[20px]" key={key}>
                  <label className="pl-[12px] mb-[12px] block font-bold">{label}</label>
                  <input
                    type="text"
                    value={exp[key]}
                    onChange={(e) => handleChange(index, key, e.target.value)}
                    className="w-full rounded-xl px-[20px] py-[14px] border-[0.5px] text-[14px] font-medium dark:bg-[#111d39] dark:text-white dark:border-gray-700 focus:outline-none focus:border-gray-500"
                  />
                </div>
              ))}

              {/* Employment Period */}
              <div className="mt-[20px]">
                <label className="pl-[12px] mb-[12px] block text-4 leading-[19px] font-bold">Employment Period</label>
                <div className="mt-[20px]">
                  <div className="flex gap-2 leading-6 text-[14px] font-medium justify-between">
                    <div className="relative w-full">
                      <DatePicker
                        selected={exp.startDate}
                        onChange={(date) => handleChange(index, "startDate", date)}
                        placeholderText="Start"
                        calendarClassName="calendar-deadline"
                        showYearDropdown
                        showYearPicker
                        maxDate={new Date()}
                        yearDropdownItemNumber={70}
                        scrollableYearDropdown={true}
                        className="w-full py-[14px] dark:focus:border-gray-200 pl-[52px] pr-[20px] leading-6 text-[14px] font-medium rounded-xl border-[0.5px] px-[20px] focus:outline-none focus:border-gray-500 dark:bg-[#111d39] dark:text-white dark:border-gray-700 "
                      />
                      <img src={images.calender} alt="Start" className="absolute top-4 left-[14px] dark:invert" />
                    </div>

                    <div className="relative w-full flex">
                      <DatePicker
                        selected={exp.endDate}
                        onChange={(date) => handleChange(index, "endDate", date)}
                        calendarClassName="calendar-deadline"
                        showYearDropdown
                        showYearPicker
                        maxDate={new Date()}
                        yearDropdownItemNumber={70}
                        scrollableYearDropdown={true}
                        disabled={exp.isCurrent}
                        placeholderText="End"
                        className={`${exp.isCurrent ? "bg-gray-200 cursor-not-allowed" : ""} w-full justify-end dark:focus:border-gray-200 py-[14px] pl-[52px] pr-[20px] leading-6 text-[14px] font-medium rounded-xl border-[0.5px] px-[20px] focus:outline-none focus:border-gray-500 dark:bg-[#111d39] dark:text-white dark:border-gray-700`}
                      />
                      <img src={images.calender} alt="End" className="absolute top-4 left-[14px] dark:invert" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Checkbox */}
              <div className="mt-[20px]">
                <label className="leading-[24px] font-medium text-[14px] text-gray-400 flex items-center">
                  <input
                    type="checkbox"
                    name="jobStatus"
                    checked={exp.isCurrent}
                    onChange={(e) => {
                      handleChange(index, "isCurrent", e.target.checked);
                      if (e.target.checked) {
                        handleChange(index, "endDate", null)
                      }
                    }}
                    className="mr-4 cursor-pointer size-[17.4px] rounded-[20px]"
                  />
                  I currently work here
                </label>
              </div>

              <div className="mt-[20px]">
                <label className="pl-[12px] mb-[12px] block font-bold">Responsibilities</label>
                <textarea
                  value={exp.responsibilities}
                  onChange={(e) => handleChange(index, "responsibilities", e.target.value)}
                  className="w-full min-h-[150px] rounded-xl px-[20px] py-[14px] border-[0.5px] text-[14px] font-medium dark:bg-[#111d39] dark:text-white dark:border-gray-700 focus:outline-none focus:border-gray-500"
                  placeholder="Describe your role"
                />
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={addExperience}
            className="mt-4 text-gray-200  text-[14px]"
          >
            + Add Another Experience
          </button>

          <div className="p-6 fixed bottom-0 left-0 right-0 mx-auto max-w-[1024px] bg-white dark:bg-[#111d39]">
            <button
              type="submit"
              disabled={loading}
              className={`p-4 rounded-[16px] w-full text-white text-[16px] font-bold transition-colors
    ${loading ? "bg-[#2869FE] opacity-50 cursor-not-allowed" : "bg-[#2869FE] hover:bg-[#1752e4]"}`}
            >
              {loading ? "Saving..." : "Save"}
            </button>

          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default WorkExperience;
