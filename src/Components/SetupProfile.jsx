import React, { useState, useContext } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import images from "../assets/images";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Outlet } from "react-router-dom";
import { motion } from 'framer-motion';
import ThemeContext from "./ThemeContext";

const SetupProfile = () => {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    dateOfBirth: "",
    gender: ""
  });

  const [errors, setErrors] = useState({
    fullName: "",
    contactNumber: "",
    dateOfBirth: "",
    gender: ""
  });

  const [profileImage, setProfileImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setProfileImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
      isValid = false;
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = "Name must be at least 3 characters";
      isValid = false;
    }

    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = "Contact number is required";
      isValid = false;
    } else if (!/^\d{10,15}$/.test(formData.contactNumber.trim())) {
      newErrors.contactNumber = "Please enter a valid phone number (10-15 digits)";
      isValid = false;
    }

    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = "Date of birth is required";
      isValid = false;
    } else {
      const dob = new Date(formData.dateOfBirth);
      const today = new Date();
      const age = today.getFullYear() - dob.getFullYear();
      const monthDiff = today.getMonth() - dob.getMonth();
      if (age < 13 || (age === 13 && monthDiff < 0) || (age === 13 && monthDiff === 0 && today.getDate() < dob.getDate())) {
        newErrors.dateOfBirth = "You must be at least 13 years old";
        isValid = false;
      }
    }

    if (!formData.gender) {
      newErrors.gender = "Please select your gender";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) navigate("/setup/interest");
  };

  const back = () => navigate("/");
  const handleInterest = () => navigate("/setup/interest");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={`h-screen overflow-y-scroll scroll-container font-urbanist ${theme === 'dark' ? 'bg-[#111d39] text-white' : 'bg-white text-[rgb(18, 25, 39)]'}`}
    >
      <div className="lg:px-[232px] w-full">
        {/* Top Navigation */}
        <div className={`fixed top-0 left-0 right-0 z-10 ${theme === 'dark' ? 'bg-[#111d39]' : 'bg-white'}`}>
          <div className="flex items-center justify-between px-[24px] lg:px-[252px] py-[16px]">
            <div onClick={back} className={`p-[6px] rounded-lg cursor-pointer ${theme === 'dark' ? 'border border-white' : 'border border-black'}`}>
              <FaAngleLeft className={`${theme === 'dark' ? 'text-white' : 'text-gray-500'} size-[14px]`} />
            </div>
            <h2 className="text-[20px] font-bold">Set Up Profile</h2>
            <h2 onClick={handleInterest} className="text-[15px] font-semibold cursor-pointer">Skip</h2>
          </div>
        </div>

        {/* Profile Upload */}
        <div className="px-[24px] flex flex-col justify-center items-center pt-[67.6px]">
          <input type="file" id="fileInput" accept="image/*" className="hidden" onChange={handleFileChange} />
          <label htmlFor="fileInput" className="cursor-pointer">
            <img
              src={profileImage || images.profileSetup}
              className="h-[80.4px] w-[80.4px] object-cover mb-[24px] bg-gray-300 p-1 rounded-xl"
              alt="Upload Profile"
            />
          </label>
          <h2 className="text-[18px] flex justify-center font-bold pb-[24px] border-b w-full">Personal Information</h2>
        </div>

        {/* Form */}
        <div className="px-[24px] mt-[24px]">
          <form onSubmit={handleSubmit}>
            {/* Full Name */}
            <label className="pl-[12px] text-[16px] font-bold" htmlFor="fullName">Full Name</label>
            <div className="relative mb-[8px]">
              <img src={images.profile} className="dark:invert absolute inset-y-7 size-[20px] left-4" alt="" />
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Type your full name"
                className={`bg-transparent text-inherit focus:outline-none border ${errors.fullName ? "border-red-500" : "focus:border-gray-400"} shadow-sm rounded-xl mt-[12px] pl-[52px] py-[14px] pr-[20px] w-full`}
              />
            </div>
            {errors.fullName && <p className="text-red-500 text-sm pl-[12px] mb-[12px]">{errors.fullName}</p>}

            {/* Contact Number */}
            <label className="pl-[12px] text-[16px] font-bold" htmlFor="contactNumber">Contact Number</label>
            <div className="relative mb-[8px]">
              <img src={images.contact} className="dark:invert absolute inset-y-7 size-[20px] left-4" alt="" />
              <input
                type="text"
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                placeholder="Type your phone"
                className={`bg-transparent text-inherit focus:outline-none border ${errors.contactNumber ? "border-red-500" : "focus:border-gray-400"} shadow-sm rounded-xl mt-[12px] pl-[52px] py-[14px] pr-[20px] w-full`}
              />
            </div>
            {errors.contactNumber && <p className="text-red-500 text-sm pl-[12px] mb-[12px]">{errors.contactNumber}</p>}

            {/* Date of Birth */}
            <label className="pl-[12px] text-[16px] font-bold" htmlFor="dateOfBirth">Date of Birth</label>
            <div className="relative mb-[8px]">
              <img src={images.calender} className="dark:invert absolute inset-y-7 size-[20px] left-4" alt="" />
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className={`bg-transparent dark:invert dark:border-gray-600 text-black appearance-none focus:outline-none border ${errors.dateOfBirth ? "border-red-500" : "focus:border-gray-400"} shadow-sm rounded-xl mt-[12px] pl-[52px] py-[14px] pr-[20px] w-full`}
              />
              <RiArrowDropDownLine className="sm:hidden size-6 text-gray-500 right-4 top-7 absolute" />
            </div>
            {errors.dateOfBirth && <p className="text-red-500 text-sm pl-[12px] mb-[12px]">{errors.dateOfBirth}</p>}

            {/* Gender */}
            <label className="pl-[12px] text-[16px] font-bold" htmlFor="gender">Gender</label>
            <div className="relative mb-[8px]">
              <img src={images.gender} className="dark:invert absolute inset-y-7 size-[20px] left-4" alt="" />
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className={`bg-white dark:bg-[#111d39] appearance-none dark:text-white focus:outline-none border ${errors.gender ? "border-red-500" : "focus:border-gray-400"} shadow-sm rounded-xl mt-[12px] pl-[52px] py-[14px] pr-[50px]  w-full`}
                
              >
                <option value="" disabled>Select your gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <RiArrowDropDownLine className="pointer-events-none size-6 text-gray-500 right-4 top-7 absolute dark:invert" />
            </div>
            {errors.gender && <p className="text-red-500 text-sm pl-[12px] mb-[12px]">{errors.gender}</p>}

            <div className="h-[100px]"></div>

            {/* Bottom Fixed Continue Button */}
            <div className={`fixed bottom-0 left-0 right-0 z-10 py-4 ${theme === 'dark' ? 'bg-[#111d39]' : 'bg-white'}`}>
              <div className="px-[24px] lg:px-[252px]">
                <button
                  type="submit"
                  className="w-full bg-[#2869FE] p-[16px] text-white font-medium rounded-xl"
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

export default SetupProfile;
