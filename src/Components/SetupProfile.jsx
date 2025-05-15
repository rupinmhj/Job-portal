import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import images from "../assets/images";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Outlet } from "react-router-dom";
import { motion } from 'framer-motion';
const SetupProfile = () => {
  const navigate = useNavigate();
  
  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    dateOfBirth: "",
    gender: ""
  });
  
  // Error state
  const [errors, setErrors] = useState({
    fullName: "",
    contactNumber: "",
    dateOfBirth: "",
    gender: ""
  });
  
  // Profile image state
  const [profileImage, setProfileImage] = useState(null);
  
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ""
      });
    }
  };
  
  // Handle file upload
  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setProfileImage(URL.createObjectURL(e.target.files[0]));
    }
  };
  
  // Form validation
  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };
    
    // Validate full name
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
      isValid = false;
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = "Name must be at least 3 characters";
      isValid = false;
    }
    
    // Validate contact number
    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = "Contact number is required";
      isValid = false;
    } else if (!/^\d{10,15}$/.test(formData.contactNumber.trim())) {
      newErrors.contactNumber = "Please enter a valid phone number (10-15 digits)";
      isValid = false;
    }
    
    // Validate date of birth
    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = "Date of birth is required";
      isValid = false;
    } else {
      // Check if user is at least 13 years old
      const dob = new Date(formData.dateOfBirth);
      const today = new Date();
      const age = today.getFullYear() - dob.getFullYear();
      const monthDiff = today.getMonth() - dob.getMonth();
      
      if (age < 13 || (age === 13 && monthDiff < 0) || 
          (age === 13 && monthDiff === 0 && today.getDate() < dob.getDate())) {
        newErrors.dateOfBirth = "You must be at least 13 years old";
        isValid = false;
      }
    }
    
    // Validate gender
    if (!formData.gender) {
      newErrors.gender = "Please select your gender";
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // If valid, proceed to next step
      navigate("/setup/interest");
    }
  };
  
  // Navigate back
  const back = () => {
    navigate("/");
  };
  
  // Skip to interest page
  const handleInterest = () => {
    navigate("/setup/interest");
  };

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 ,delay:0.1 }}
    className="h-screen overflow-y-scroll scroll-container"
  >
    <div className="bg-white lg:px-[232px] font-urbanist text-[rgb(18, 25, 39)] w-full">
      <div className="fixed top-0 left-0 right-0 bg-white z-10">
        <div className="flex items-center justify-between px-[24px] lg:px-[252px] py-[16px]">
          <div className="p-[6px] border rounded-lg border-black cursor-pointer">
            <FaAngleLeft
              onClick={back}
              className="text-gray-500 size-[14px]"
            />
          </div>
          <h2 className="text-[20px] font-bold leading-[24px]">
            Set Up Profile
          </h2>
          <h2
            className="text-[15px] font-semibold leading-[18px] cursor-pointer"
            onClick={handleInterest}
          >
            Skip
          </h2>
        </div>
      </div>

      <div className="px-[24px] flex flex-col justify-center items-center pt-[67.6px]">
        {/* Hidden file input */}
        <input
          type="file"
          id="fileInput"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />

        {/* Clickable image label */}
        <label htmlFor="fileInput" className="cursor-pointer">
          <img
            src={profileImage || images.profileSetup}
            className="h-[80.4px] w-[80.4px] object-cover mb-[24px] bg-gray-300 p-1 rounded-xl"
            alt="Upload Profile"
          />
        </label>

        {/* Title */}
        <h2 className="text-[18px] flex justify-center font-bold leading-[22px] pb-[24px] border-b w-full">
          Personal Information
        </h2>
      </div>

      <div className="px-[24px] mt-[24px]">
        <form onSubmit={handleSubmit}>
          <label
            className="pl-[12px] text-[16px] leading-[19px] font-bold"
            htmlFor="fullName"
          >
            Full Name
          </label>
          <div className="relative mb-[8px]">
            <img
              src={images.profile}
              className="absolute inset-y-7 size-[20px] left-4"
              alt=""
            />
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={`focus:outline-none border ${
                errors.fullName ? "border-red-500" : "focus:border-gray-400"
              } shadow-sm rounded-xl mt-[12px] pl-[52px] border py-[14px] pr-[20px] w-full`}
              placeholder="Type your full name"
            />
          </div>
          {errors.fullName && (
            <p className="text-red-500 text-sm pl-[12px] mb-[12px]">
              {errors.fullName}
            </p>
          )}

          <label
            className="pl-[12px] text-[16px] leading-[19px] font-bold"
            htmlFor="contactNumber"
          >
            Contact Number
          </label>
          <div className="relative mb-[8px]">
            <img
              src={images.contact}
              className="absolute inset-y-7 size-[20px] left-4"
              alt=""
            />
            <input
              type="text"
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              className={`focus:outline-none border ${
                errors.contactNumber ? "border-red-500" : "focus:border-gray-400"
              } shadow-sm rounded-xl mt-[12px] pl-[52px] py-[14px] border pr-[20px] w-full`}
              placeholder="Type your phone"
            />
          </div>
          {errors.contactNumber && (
            <p className="text-red-500 text-sm pl-[12px] mb-[12px]">
              {errors.contactNumber}
            </p>
          )}

          <label
            className="pl-[12px] text-[16px] leading-[19px] font-bold"
            htmlFor="dateOfBirth"
          >
            Date of Birth
          </label>
          <div className="relative mb-[8px]">
            <img
              src={images.calender}
              className="absolute inset-y-7 size-[20px] left-4"
              alt=""
            />
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className={`bg-white appearance-none focus:outline-none border ${
                errors.dateOfBirth ? "border-red-500" : "focus:border-gray-400 "
              } shadow-sm rounded-xl mt-[12px] pl-[52px] py-[14px] border pr-[20px] w-full`}
            />
            <RiArrowDropDownLine className="sm:hidden size-6 text-gray-500 right-4 top-7 absolute" />
          </div>
          {errors.dateOfBirth && (
            <p className="text-red-500 text-sm pl-[12px] mb-[12px]">
              {errors.dateOfBirth}
            </p>
          )}

          <label
            className="pl-[12px] text-[16px] leading-[19px] font-bold"
            htmlFor="gender"
          >
            Gender
          </label>
          <div className="relative mb-[8px]">
            <img
              src={images.gender}
              className="absolute inset-y-7 size-[20px] left-4"
              alt="gender icon"
            />
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className={`appearance-none focus:outline-none border ${
                errors.gender ? "border-red-500" : "focus:border-gray-400"
              } shadow-sm rounded-xl mt-[12px] pl-[52px] py-[14px] border pr-[20px] w-full bg-white text-gray-700`}
            >
              <option value="" disabled>Select your gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <RiArrowDropDownLine className="size-6 text-gray-500 right-4 top-7 absolute" />
          </div>
          {errors.gender && (
            <p className="text-red-500 text-sm pl-[12px] mb-[12px]">
              {errors.gender}
            </p>
          )}

          <div className="h-[100px]"></div>

          <div className="fixed bottom-0 left-0 right-0 bg-white py-4 z-10">
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