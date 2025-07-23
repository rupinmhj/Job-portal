import React, { useState, useContext, useRef, useEffect } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import images from "../assets/images";
import { Outlet } from "react-router-dom";
import { motion } from 'framer-motion';
import ThemeContext from "./ThemeContext";
import AuthContext from "../Context/authContext";
import useAxiosAuth from "../hooks/useAxiosAuth";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DatePicker from "react-datepicker";

const SetupProfile = () => {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  const { authTokens, setupProfile } = useContext(AuthContext);
  const [previewUrl, setPreviewUrl] = useState(null);
  const datePickerRef = useRef(null);
  const api = useAxiosAuth();

  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    dateOfBirth: "",
    gender: ""
  });

  const [errors, setErrors] = useState({});
  const [profileImage, setProfileImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 1 * 1024 * 1024) {
        setErrors(prev => ({ ...prev, logo: "File size too large" }));
        return;
      }
      if (!file.type.startsWith('image/')) {
        setErrors(prev => ({ ...prev, logo: "Please select an image file" }));
        return;
      }
      setProfileImage(file);
      setPreviewUrl(URL.createObjectURL(file));
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
    }

    if (!formData.gender) {
      newErrors.gender = "Please select your gender";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    if (!validateForm()) return;

    try {
      setLoading(true);
      const formPayload = new FormData();
      formPayload.append("full_name", formData.fullName);
      formPayload.append("contact_no", formData.contactNumber);
      formPayload.append("dob", formData.dateOfBirth);
      formPayload.append("gender", formData.gender);
      if (profileImage) formPayload.append("profile_pic", profileImage);

      const response = await api.post("dashboards/jobseeker/setup/", formPayload, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      navigate("/setup/interest");
    } catch (error) {
      console.error("API Error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const back = () => navigate("/signin");

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={`h-screen overflow-y-scroll scroll-container font-urbanist ${theme === 'dark' ? 'bg-[#111d39] text-white' : 'bg-white text-[rgb(18, 25, 39)]'}`}
    >
      <div className="lg:px-[232px] w-full">
        <div className={`fixed top-0 left-0 right-0 z-10 ${theme === 'dark' ? 'bg-[#111d39]' : 'bg-white'}`}>
          <div className="flex items-center justify-between px-[24px] lg:px-[252px] py-[16px]">
            <div onClick={back} className={`p-[6px] rounded-lg cursor-pointer ${theme === 'dark' ? 'border border-white' : 'border border-black'}`}>
              <FaAngleLeft className={`${theme === 'dark' ? 'text-white' : 'text-gray-500'} size-[14px]`} />
            </div>
            <h2 className="text-[20px] font-bold">Set Up Profile</h2>
            <h2 className="text-[15px] w-[27.6px] font-semibold cursor-pointer"></h2>
          </div>
        </div>

        <div className="px-[24px] flex flex-col justify-center items-center pt-[67.6px]">
          <input type="file" id="fileInput" accept="image/*" className="hidden" onChange={handleFileChange} />
          <label htmlFor="fileInput" className="cursor-pointer relative w-[80.4px] h-[80.4px] mb-[24px]">
            <img src={previewUrl || images.profileSetup} className="h-full w-full object-cover bg-gray-300 p-1 rounded-xl" alt="Upload Profile" />
            {!previewUrl && (
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center rounded-xl">
                <span className="text-white text-sm font-medium">Add Image</span>
              </div>
            )}
          </label>
          <h2 className="text-[18px] flex justify-center font-bold pb-[24px] border-b w-full">Personal Information</h2>
        </div>

        <div className="px-[24px] mt-[24px]">
          <form onSubmit={handleSubmit}>
            <label className="pl-3 text-[15px] font-semibold">Full Name<span className="text-red-500">*</span></label>
            <div className="w-full h-[46.6px] mt-2 mb-4 px-3 border rounded-xl text-[14px] focus-within:border-gray-400 dark:focus-within:border-gray-300 dark:border-gray-600 dark:bg-[#1f2a45] dark:text-white flex items-center">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Type your full name"
                className="w-full bg-transparent outline-none text-inherit"
              />
            </div>
            {errors.fullName && <p className="text-red-500 text-sm pl-[12px] mb-[12px]">{errors.fullName}</p>}

            <label className="pl-3 text-[15px] font-semibold">Contact Number<span className="text-red-500">*</span></label>
            <div className="w-full h-[46.6px] mt-2 mb-4 px-3 border rounded-xl text-[14px] focus-within:border-gray-400 dark:focus-within:border-gray-300 dark:border-gray-600 dark:bg-[#1f2a45] dark:text-white flex items-center">
              <input
                type="text"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                placeholder="Type your phone number"
                className="w-full bg-transparent outline-none text-inherit"
              />
            </div>
            {errors.contactNumber && <p className="text-red-500 text-sm pl-[12px] mb-[12px]">{errors.contactNumber}</p>}

            <label className="pl-[12px] text-[16px] font-bold" htmlFor="dateOfBirth">Date of Birth</label>
            <div className="relative mt-2">
              <DatePicker
                selected={formData.dateOfBirth}
                name='dateOfBirth'
                onChange={(date) => setFormData(prev => ({ ...prev, dateOfBirth: date }))}
                dateFormat="yyyy-MM-dd"
                placeholderText="Select DOB"
                className="w-full p-[12px] rounded-xl outline-none border border-gray-300 focus:border-gray-700 dark:border-gray-600 dark:focus:border-gray-200 bg-white dark:bg-[#1f2a45] text-sm text-black dark:text-white mb-4"
                ref={datePickerRef}
                calendarClassName="calendar-deadline"
                maxDate={new Date()}
                showYearDropdown
                scrollableYearDropdown={100}
              />
              <div className="absolute top-3 right-3 cursor-pointer" onClick={() => datePickerRef.current.setFocus()}>
                <img src={images.calender} className="dark:invert" alt="calendar" />
              </div>
            </div>
            {errors.dateOfBirth && <p className="text-red-500 text-sm pl-[12px] mb-[12px]">{errors.dateOfBirth}</p>}

            <label className="pl-3 text-[15px] font-semibold">Gender<span className="text-red-500">*</span></label>
            <div className="w-full h-[46.6px] mt-2 mb-4 px-3 border rounded-xl text-[14px] focus-within:border-gray-400 dark:focus-within:border-gray-300 dark:border-gray-600 dark:bg-[#1f2a45] dark:text-white flex items-center">
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full bg-transparent dark:bg-[#1f2a45] cursor-pointer outline-none text-inherit"
              >
                <option value="" disabled>Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            {errors.gender && <p className="text-red-500 text-sm pl-[12px] mb-[12px]">{errors.gender}</p>}

            <div className="h-[100px]" />

            <div className={`fixed bottom-0 left-0 right-0 z-10 py-4 ${theme === 'dark' ? 'bg-[#111d39]' : 'bg-white'}`}>
              <div className="px-[24px] lg:px-[252px]">
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#2869FE]"} p-[16px] text-white font-medium rounded-xl`}
                >
                  {loading ? "Submitting..." : "Continue"}
                </button>
              </div>
            </div>
          </form>
        </div>

        <Outlet />
      </div>
      <ToastContainer />
    </motion.div>
  );
};

export default SetupProfile;
