import React, { useState, useContext } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import images from "../assets/images";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { motion } from 'framer-motion';
import { IoIosCloseCircleOutline } from "react-icons/io";
import AuthContext from "../Context/authContext";
const Education = () => {
  const [educationList, setEducationList] = useState([
    {
      level: "",
      degree: "",
      program: "",
      board: "",
      institute: "",
      result: "",
      startYear: null,
      graduationYear: null,
      isStudying: false,
    },
  ]);
  const [loading, setLoading] = useState(false);
  const { seekerDetails, email } = useContext(AuthContext);
  const navigate = useNavigate();
  const back = () => navigate(-1);

  const handleChange = (index, field, value) => {
    const updated = [...educationList];
    updated[index][field] = value;
    setEducationList(updated);
  };

  const addEducation = () => {
    setEducationList([
      ...educationList,
      {
        level: "",
        degree: "",
        program: "",
        board: "",
        institute: "",
        result: "",
        startYear: null,
        graduationYear: null,
        isStudying: false,
      },
    ]);
  };

  const removeEducation = (index) => {
    const updated = educationList.filter((_, i) => i !== index);
    setEducationList(updated);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await api.post("", {
        educationList,

      });
      navigate("/profile");
    } catch (err) {
      console.error("Submission error", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, delay: 0.15 }}
       className="h-screen overflow-y-scroll scroll-container font-urbanist dark:bg-[#111d39]">
      <div className="text-custBlackBold font-urbanist dark:text-white">
        {/* Navbar */}
        <div className="fixed left-0 right-0 top-0 z-30 bg-white dark:bg-[#111d39]">
          <div className="flex justify-between p-[24px] pt-[16px] mx-auto max-w-[1024px] items-center">
            <div onClick={back} className="flex gap-[18px] items-center justify-between">
              <div className="h-[30px] w-[30px] flex justify-center items-center border rounded-lg border-gray-500 dark:border-white cursor-pointer">
                <FaAngleLeft className="text-gray-500 h-[14px] w-[14px] dark:text-white" />
              </div>
            </div>
            <h2 className="text-[20px] font-bold leading-[24px]">Education</h2>
            <img src={images.home} onClick={() => navigate('/')} className="h-6 w-6 cursor-pointer dark:invert" alt="home" />
          </div>
        </div>

        {/* Profile Section */}
        <div className="flex mt-[70px] items-center flex-col">
          <img src={seekerDetails?.profile_pic || images.profileImage} className="size-[81.4px] border border-blue-600 rounded-2xl mb-[12px]" alt="Profile" />
          <h2 className="text-[18px] leading-[22px] font-bold mb-2">{seekerDetails?.full_name}</h2>
          <h2 className="text-google text-[12px] leading-[20px] font-medium">jonathansmith@gmail.com</h2>
        </div>

        {/* Education Form */}
        <form className="max-w-[1024px] mx-auto px-6 mt-[20px] mb-[120px]">
          {educationList.map((edu, index) => (
            <div key={index} className="border-t border-gray-300 mt-6 pt-4 relative">
              {educationList.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeEducation(index)}
                  className="text-gray-200 text-[14px] absolute top-3 right-0 flex items-center gap-1"
                >
                  <span className="text-[18px]">
                    <IoIosCloseCircleOutline />
                  </span>
                  <span>Clear</span>
                </button>
              )}
              {[
                { key: "level", label: "Level of Education", placeholder: "Level" },
                { key: "degree", label: "Exam/Degree Title", placeholder: "Exam/Degree Title" },
                { key: "program", label: "Course/Program", placeholder: "Course/Program" },
                { key: "board", label: "Education Board/University", placeholder: "Board/University" },
                { key: "institute", label: "School/College/Institute Name", placeholder: "Institute Name" },
                { key: "result", label: "Result", placeholder: "Result" },
              ].map((field) => (
                <div className="mt-[20px]" key={field.key}>
                  <label className="pl-[12px] mb-[12px] block font-bold">{field.label}</label>
                  <input
                    type="text"
                    placeholder={field.placeholder}
                    value={edu[field.key]}
                    onChange={(e) => handleChange(index, field.key, e.target.value)}
                    className="w-full leading-6 dark:focus:border-gray-200 text-[14px] font-medium rounded-xl border-[0.5px] py-[14px] px-[20px] focus:outline-none focus:border-gray-500 dark:bg-[#111d39] dark:text-white dark:border-gray-700"
                  />
                </div>
              ))}

              {/* Start and Graduation Year */}
              <div className="mt-[20px]">
                <label className="pl-[12px] mb-[12px] block font-bold">Academic Period</label>
                <div className="flex gap-2 leading-6 text-[14px] font-medium justify-between">
                  <div className="relative w-full">
                    <DatePicker
                      selected={edu.startYear}
                      onChange={(date) => handleChange(index, "startYear", date)}
                      placeholderText="Start Year"
                      calendarClassName="calendar-deadline"
                      showYearDropdown
                      yearDropdownItemNumber={70}
                      scrollableYearDropdown
                      showYearPicker
                      maxDate={new Date()}
                      className="w-full py-[14px] pl-[52px] pr-[20px] leading-6 text-[14px] font-medium rounded-xl border-[0.5px] px-[20px] focus:outline-none focus:border-gray-500 dark:bg-[#111d39] dark:text-white dark:border-gray-700"
                    />
                    <img src={images.calender} alt="Start" className="absolute top-4 left-[14px] dark:invert" />
                  </div>
                  <div className="relative w-full">
                    <DatePicker
                      selected={edu.graduationYear}
                      onChange={(date) => handleChange(index, "graduationYear", date)}
                      placeholderText="Graduation Year"
                      showYearDropdown
                      yearDropdownItemNumber={70}
                      calendarClassName="calendar-deadline"
                      scrollableYearDropdown
                      showYearPicker
                      dateFormat="yyyy"
                      maxDate={new Date()}
                      disabled={edu.isStudying}
                      className={`${edu.isStudying ? "bg-gray-200 cursor-not-allowed" : ""} w-full py-[14px] pl-[52px] pr-[20px] leading-6 text-[14px] font-medium rounded-xl border-[0.5px] px-[20px] focus:outline-none focus:border-gray-500 dark:bg-[#111d39] dark:text-white dark:border-gray-700`}
                    />
                    <img src={images.calender} alt="End" className="absolute top-4 left-[14px] dark:invert" />
                  </div>
                </div>
              </div>

              {/* Checkbox */}
              <div className="mt-[20px]">
                <label className="leading-[24px] font-medium text-[14px] text-gray-400 flex items-center">
                  <input
                    type="checkbox"
                    checked={edu.isStudying}
                    onChange={(e) => {
                      handleChange(index, "isStudying", e.target.checked);
                      if (e.target.checked) {
                        handleChange(index, "graduationYear", null);
                      }
                    }}
                    className="mr-4 cursor-pointer size-[17.4px] rounded-[20px]"
                  />
                  I currently study here
                </label>
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={addEducation}
            className="mt-4 text-gray-200 text-[14px]"
          >
            + Add Another Education
          </button>

          {/* Save Button */}
          <div className="p-6 fixed bottom-0 left-0 right-0 mx-auto max-w-[1024px] bg-white dark:bg-[#111d39]">
            <button
              type="button"
              onClick={handleSubmit}
              className={`p-4 rounded-[16px] w-full text-white text-[16px] leading-[26px] font-bold transition-colors 
             ${loading ? "bg-[#2869FE] opacity-50 cursor-not-allowed" : "bg-[#2869FE] hover:bg-[#1752e4]"}`}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default Education;
