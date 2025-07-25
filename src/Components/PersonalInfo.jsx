import React, { useState, useContext, useRef, useEffect } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import images from "../assets/images";
import { motion } from "framer-motion";
import ThemeContext from "./ThemeContext";
import AuthContext from "../Context/authContext";
import useAxiosAuth from "../hooks/useAxiosAuth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PersonalInfo = () => {
  const { theme } = useContext(ThemeContext);
  const { authTokens, seekerDetails } = useContext(AuthContext);
  const navigate = useNavigate();
  const api = useAxiosAuth();
  const datePickerRef = useRef(null);

  const [previewUrl, setPreviewUrl] = useState(null);
  const [profileImage, setProfileImage] = useState(null);

  const [formData, setFormData] = useState({
    fullName: seekerDetails.full_name || "",
    contactNumber: seekerDetails.contact_no || "",
    dateOfBirth: seekerDetails.dob ? new Date(seekerDetails.dob) : "",
    gender: seekerDetails.gender || "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const back = () => navigate("/profile");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({ ...prev, profilePic: "File size too large (max 5MB)" }));
        toast.error("File size too large(max 5MB")
        return;
      }
      if (!file.type.startsWith('image/')) {
        setErrors(prev => ({ ...prev, profilePic: "Please select an image file" }));
         toast.error("Please select a valid image file");
        return;
      }

      setProfileImage(file);
      setPreviewUrl(URL.createObjectURL(file));
      // Clear any previous profile pic error
      if (errors.profilePic) {
        setErrors(prev => ({ ...prev, profilePic: "" }));
      }
    }
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
      isValid = false;
    }

    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = "Contact number is required";
      isValid = false;
    }

    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = "Date of birth is required";
      isValid = false;
    }

    if (!formData.gender) {
      newErrors.gender = "Gender is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading || !validateForm()) return;

    try {
      setLoading(true);

      const formPayload = new FormData();
      formPayload.append("full_name", formData.fullName);
      formPayload.append("contact_no", formData.contactNumber);
      formPayload.append("dob", formData.dateOfBirth.toISOString().split("T")[0]);
      formPayload.append("gender", formData.gender);

      if (profileImage) {
        formPayload.append("profile_pic", profileImage);
      }
     for (let pair of formPayload.entries()) {
  console.log(pair[0]+ ': ' + pair[1]);
}


      const response=await api.put("dashboards/jobseeker/setup/", formPayload, {
        headers: { "Content-Type": "multipart/form-data" }
      });

      console.log("Seeker updated data:",response.data);

      toast.success("Profile updated successfully");
    } catch (error) {
      console.error("API error:", error);
      toast.error("Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className={`min-h-screen font-urbanist ${theme === "dark" ? "bg-[#111d39] text-white" : "bg-white text-black"}`}
    >
      <div className="px-[24px] lg:px-[252px] pt-[16px]">
        <div className="flex items-center justify-between pb-4">
          <div onClick={back} className={`p-[6px] rounded-lg cursor-pointer border ${theme === 'dark' ? 'border-white' : 'border-black'}`}>
            <FaAngleLeft className={`${theme === 'dark' ? 'text-white' : 'text-gray-500'} size-[14px]`} />
          </div>
          <h2 className="text-[20px] font-bold">Edit Personal Info</h2>
          <div></div>
        </div>

        {/* Profile Picture Upload Section */}
        <div className="flex flex-col justify-center items-center mb-6">
          <input
            type="file"
            id="profilePicInput"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
          <label htmlFor="profilePicInput" className="cursor-pointer">
            <img
              src={previewUrl || seekerDetails.profile_pic || images.profileImage}
              className="h-[80px] w-[80px] object-cover mb-4 bg-gray-300 p-1 rounded-full border-2 border-gray-300"
              alt="Profile Picture"
            />
          </label>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Tap to change profile picture</p>
          {errors.profilePic && <p className="text-red-500 text-sm mb-2">{errors.profilePic}</p>}
        </div>


        <form onSubmit={handleSubmit}>
          <label className="pl-3 text-[15px] font-semibold">Full Name<span className="text-red-500">*</span></label>
          <div className="w-full h-[46.6px] mt-2 mb-4 px-3 border rounded-xl text-[14px] focus-within:border-gray-400 dark:focus-within:border-gray-300 dark:border-gray-600 dark:bg-[#1f2a45] dark:text-white flex items-center">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full bg-transparent outline-none"
              placeholder="Type your full name"

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
              className="w-full bg-transparent outline-none"
              placeholder="Type your phone number"
            />
          </div>
          {errors.contactNumber && <p className="text-red-500 text-sm pl-[12px] mb-[12px]">{errors.contactNumber}</p>}

          <label className="pl-3 text-[15px] font-semibold">Date of Birth<span className="text-red-500">*</span></label>
          <div className="relative mt-2">
            <DatePicker
              selected={formData.dateOfBirth}
              onChange={(date) => setFormData({ ...formData, dateOfBirth: date })}
              dateFormat="yyyy-MM-dd"
              placeholderText="Select DOB"
              className="w-full p-[12px] rounded-xl outline-none border border-gray-300 focus:border-gray-700 dark:border-gray-600 dark:focus:border-gray-200 bg-white dark:bg-[#1f2a45] text-sm text-black dark:text-white mb-4"
              ref={datePickerRef}
              calendarClassName="calendar-deadline"
              maxDate={new Date()}
              showYearDropdown
              scrollableYearDropdown
              yearDropdownItemNumber={100} 
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
              className="w-full bg-transparent dark:bg-[#1f2a45] cursor-pointer outline-none"
            >
              <option value="" disabled>Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          {errors.gender && <p className="text-red-500 text-sm pl-[12px] mb-[12px]">{errors.gender}</p>}

          <button
            type="submit"
            disabled={loading}
            className={`w-full mt-6 ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#2869FE]"} p-[16px] text-white font-medium rounded-xl`}
          >
            {loading ? "Updating..." : "Save Changes"}
          </button>
        </form>
      </div>
      <ToastContainer />
    </motion.div>
  );
};

export default PersonalInfo;