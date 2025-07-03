import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import images from "../assets/images";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Outlet } from "react-router-dom";
import { motion } from 'framer-motion';

const PersonalInfo = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "Jonathan",
    contactNumber: "9861771141",
    dateOfBirth: "02-01-2002",
    gender: ""
  });
  const [errors, setErrors] = useState({
    fullName: "",
    contactNumber: "",
    dateOfBirth: "",
    gender: "male"
  });
  const [profileImage, setProfileImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setProfileImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/setup/interest"); // Assuming validation passes
  };

  const back = () => navigate(-1);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="h-screen overflow-y-scroll scroll-container dark:bg-[#111d39] "
    >
      <div className="bg-white dark:bg-[#111d39] font-urbanist text-[rgb(18,25,39)] dark:text-white w-full">
        <div className="fixed top-0 left-0 right-0 bg-white dark:bg-[#111d39] z-10">
          <div className="flex px-[24px]  mx-auto max-w-[1024px] items-center justify-between py-[16px]">
            <div className="p-[6px] border dark:border-white rounded-lg border-black cursor-pointer" onClick={back}>
              <FaAngleLeft className="text-gray-500 size-[14px] dark:text-white" />
            </div>
            <h2 className="text-[20px] font-bold leading-[24px]">Set Up Profile</h2>
            <img src={images.home} className="cursor-pointer dark:invert" onClick={() => navigate('/home')} alt="home" />
          </div>
        </div>

        <div className="px-[24px]  mx-auto max-w-[1024px] flex flex-col justify-center items-center pt-[67.6px]">
          <input
            type="file"
            id="fileInput"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
          <label htmlFor="fileInput" className="cursor-pointer">
            <img
              src={profileImage || images.profileSmall}
              className="h-[80.4px] w-[80.4px] object-cover mb-[24px] bg-gray-300 p-1 rounded-xl"
              alt="Upload Profile"
            />
          </label>
          <h2 className="text-[18px] flex justify-center font-bold leading-[22px] pb-[24px] border-b w-full">
            Personal Information
          </h2>
        </div>

        <div className="px-[24px] mt-[24px]  mx-auto max-w-[1024px]">
          <form onSubmit={handleSubmit}>
            {/* Full Name */}
            <label className="pl-[12px] text-[16px] font-bold" htmlFor="fullName">Full Name</label>
            <div className="relative mb-[8px]">
              <img src={images.profile} className="absolute dark:invert  inset-y-7 size-[20px] left-4" alt="" />
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`focus:outline-none border placeholder-black dark:placeholder-gray-400 dark:bg-[#111d39] dark:text-white ${errors.fullName ? "border-red-500" : "border-gray-900 dark:border-gray-700"} shadow-sm rounded-xl mt-[12px] pl-[52px] border py-[14px] pr-[20px] w-full`}
                placeholder="Jonathan"
              />
            </div>
            {errors.fullName && <p className="text-red-500 text-sm pl-[12px] mb-[12px]">{errors.fullName}</p>}

            {/* Contact Number */}
            <label className="pl-[12px] text-[16px] font-bold" htmlFor="contactNumber">Contact Number</label>
            <div className="relative mb-[8px]">
              <img src={images.contact} className="absolute dark:invert inset-y-7 size-[20px] left-4" alt="" />
              <input
                type="text"
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                className={`focus:outline-none border placeholder-black dark:placeholder-gray-400 dark:bg-[#111d39] dark:text-white ${errors.contactNumber ? "border-red-500" : "border-gray-900 dark:border-gray-700"} shadow-sm rounded-xl mt-[12px] pl-[52px] border py-[14px] pr-[20px] w-full`}
                placeholder="9861771141"
              />
            </div>
            {errors.contactNumber && <p className="text-red-500 text-sm pl-[12px] mb-[12px]">{errors.contactNumber}</p>}

            {/* Date of Birth */}
            <label className="pl-[12px] text-[16px] font-bold" htmlFor="dateOfBirth">Date of Birth</label>
            <div className="relative mb-[8px]">
              <img src={images.calender} className="absolute dark:invert inset-y-7 size-[20px] left-4" alt="" />
              <input
                type="text"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className={`bg-white dark:bg-[#111d39] dark:text-white dark:placeholder-gray-400 appearance-none focus:outline-none border ${errors.dateOfBirth ? "border-red-500" : "border-gray-900 dark:border-gray-700"} shadow-sm rounded-xl mt-[12px] pl-[52px] py-[14px] pr-[20px] w-full`}
              />
              <RiArrowDropDownLine className="sm:hidden size-6 text-gray-500 right-4 top-7 absolute" />
            </div>
            {errors.dateOfBirth && <p className="text-red-500 text-sm pl-[12px] mb-[12px]">{errors.dateOfBirth}</p>}

            {/* Gender */}
            <label className="pl-[12px] text-[16px] font-bold" htmlFor="gender">Gender</label>
            <div className="relative mb-[8px] cursor-pointer">
              <img src={images.gender} className="absolute dark:invert inset-y-7 size-[20px] left-4" alt="gender" />
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="appearance-none focus:outline-none border placeholder-black bg-white dark:bg-[#111d39] dark:text-white dark:placeholder-gray-400 border-gray-900 dark:border-gray-700 shadow-sm rounded-xl mt-[12px] pl-[52px] py-[14px] border pr-[20px] w-full"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <RiArrowDropDownLine className="size-6 text-gray-500 right-4 top-7 absolute" />
            </div>

            <div className="h-[100px]"></div>

            {/* Submit Button */}
            <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-[#111d39] py-4 z-10">
              <div className="px-[24px]  mx-auto max-w-[1024px]">
                <button
                  onClick={() => navigate('/profile')}
                  type="submit"
                  className="w-full bg-[#2869FE] hover:bg-[#1752e4] transition-colors p-[16px] text-white font-medium rounded-xl"
                >
                  Continue
                </button>
              </div>
            </div>
          </form>
        </div>
        <Outlet />
      </div>
    </motion.div>
  );
};

export default PersonalInfo;
