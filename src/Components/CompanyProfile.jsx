import React, { useState, useContext } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate, Outlet } from "react-router-dom";
import images from "../assets/images";
import { motion } from "framer-motion";
import ThemeContext from "./ThemeContext"; // 🌓 Dark mode context

const CompanyProfile = () => {
  const { theme } = useContext(ThemeContext); // 🌙
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    companyName: "Google",
    companyImage: images.google,
    about: "Google is a multinational technology company...",
    website: "https://www.google.com",
    headquarters: "Mountain View, California",
    founded: "September 4, 1998",
    size: "190,000+",
    revenue: "$324 billion",
  });

  const [errors, setErrors] = useState({});
  const [profileImage, setProfileImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.entries(formData).forEach(([key, val]) => {
      if (!val.trim()) newErrors[key] = `${key} is required`;
    });
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) navigate("/homerecruiter");
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setProfileImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const back = () => navigate(-1);

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={`h-screen overflow-y-scroll scroll-container font-urbanist ${
        theme === "dark" ? "bg-[#111d39] text-white" : "bg-white text-[rgb(18,25,39)]"
      }`}
    >
      {/* Header */}
      <div className={`fixed top-0 left-0 right-0 z-10 ${theme === "dark" ? "bg-[#111d39]" : "bg-white"}`}>
        <div className="flex items-center justify-between max-w-[1024px] mx-auto px-6 py-[16px]">
          <div onClick={back} className={`p-[6px] border rounded-lg cursor-pointer ${theme === "dark" ? "border-white" : "border-black"}`}>
            <FaAngleLeft className={`size-[14px] ${theme === "dark" ? "text-white" : "text-gray-500"}`} />
          </div>
          <h2 className="text-[20px] font-bold">Set Up Company</h2>
          <img src={images.home} alt="" className="cursor-pointer" onClick={() => navigate('/homerecruiter')} />
        </div>
      </div>

      {/* Upload Image */}
      <div className="max-w-[1024px] mx-auto px-6 flex flex-col justify-center items-center pt-[72px]">
        <input type="file" id="fileInput" accept="image/*" className="hidden" onChange={handleFileChange} />
        <label htmlFor="fileInput" className="cursor-pointer">
          <img src={profileImage || formData.companyImage || images.companyprofile}
            className="h-[80.4px] w-[80.4px] object-cover mb-[24px] bg-gray-300 p-1 rounded-xl" alt="Upload" />
        </label>
        <h2 className="text-[18px] font-bold pb-[24px] w-full text-center">Company Information</h2>
      </div>

      {/* FORM - No map used */}
      <div className="max-w-[1024px] mx-auto px-6">
        <form onSubmit={handleSubmit}>
          {/* Company Name */}
          <div className="mb-4">
            <label htmlFor="companyName" className="pl-[12px] text-[16px] font-bold">Company Name</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Enter company name"
              className={`mt-[12px] p-[14px] w-full rounded-xl shadow-sm focus:outline-none ${
                theme === "dark" ? "bg-[#1f2a45] border-gray-600 text-white" : "border border-gray-400"
              } ${errors.companyName ? "border-red-500" : ""}`}
            />
            {errors.companyName && <p className="text-red-500 text-sm pl-[12px] mt-1">{errors.companyName}</p>}
          </div>

          {/* About */}
          <div className="mb-4">
            <label htmlFor="about" className="pl-[12px] text-[16px] font-bold">About</label>
            <textarea
              id="about"
              name="about"
              value={formData.about}
              onChange={handleChange}
              placeholder="Write about the company"
              className={`mt-[12px] p-[14px] w-full h-[150px] rounded-xl shadow-sm focus:outline-none ${
                theme === "dark" ? "bg-[#1f2a45] border-gray-600 text-white" : "border border-gray-400"
              } ${errors.about ? "border-red-500" : ""}`}
            />
            {errors.about && <p className="text-red-500 text-sm pl-[12px] mt-1">{errors.about}</p>}
          </div>

          {/* Website */}
          <div className="mb-4">
            <label htmlFor="website" className="pl-[12px] text-[16px] font-bold">Website</label>
            <input
              type="text"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="https://"
              className={`mt-[12px] p-[14px] w-full rounded-xl shadow-sm focus:outline-none ${
                theme === "dark" ? "bg-[#1f2a45] border-gray-600 text-white" : "border border-gray-400"
              } ${errors.website ? "border-red-500" : ""}`}
            />
            {errors.website && <p className="text-red-500 text-sm pl-[12px] mt-1">{errors.website}</p>}
          </div>

          {/* Headquarters */}
          <div className="mb-4">
            <label htmlFor="headquarters" className="pl-[12px] text-[16px] font-bold">Headquarters</label>
            <input
              type="text"
              id="headquarters"
              name="headquarters"
              value={formData.headquarters}
              onChange={handleChange}
              placeholder="Enter location"
              className={`mt-[12px] p-[14px] w-full rounded-xl shadow-sm focus:outline-none ${
                theme === "dark" ? "bg-[#1f2a45] border-gray-600 text-white" : "border border-gray-400"
              } ${errors.headquarters ? "border-red-500" : ""}`}
            />
            {errors.headquarters && <p className="text-red-500 text-sm pl-[12px] mt-1">{errors.headquarters}</p>}
          </div>

          {/* Founded */}
          <div className="mb-4">
            <label htmlFor="founded" className="pl-[12px] text-[16px] font-bold">Founded</label>
            <input
              type="text"
              id="founded"
              name="founded"
              value={formData.founded}
              onChange={handleChange}
              placeholder="e.g. 1998"
              className={`mt-[12px] p-[14px] w-full rounded-xl shadow-sm focus:outline-none ${
                theme === "dark" ? "bg-[#1f2a45] border-gray-600 text-white" : "border border-gray-400"
              } ${errors.founded ? "border-red-500" : ""}`}
            />
            {errors.founded && <p className="text-red-500 text-sm pl-[12px] mt-1">{errors.founded}</p>}
          </div>

          {/* Size */}
          <div className="mb-4">
            <label htmlFor="size" className="pl-[12px] text-[16px] font-bold">Company Size</label>
            <input
              type="text"
              id="size"
              name="size"
              value={formData.size}
              onChange={handleChange}
              placeholder="e.g. 50-100 employees"
              className={`mt-[12px] p-[14px] w-full rounded-xl shadow-sm focus:outline-none ${
                theme === "dark" ? "bg-[#1f2a45] border-gray-600 text-white" : "border border-gray-400"
              } ${errors.size ? "border-red-500" : ""}`}
            />
            {errors.size && <p className="text-red-500 text-sm pl-[12px] mt-1">{errors.size}</p>}
          </div>

          {/* Revenue */}
          <div className="mb-4">
            <label htmlFor="revenue" className="pl-[12px] text-[16px] font-bold">Revenue</label>
            <input
              type="text"
              id="revenue"
              name="revenue"
              value={formData.revenue}
              onChange={handleChange}
              placeholder="e.g. $1M - $10M"
              className={`mt-[12px] p-[14px] w-full rounded-xl shadow-sm focus:outline-none ${
                theme === "dark" ? "bg-[#1f2a45] border-gray-600 text-white" : "border border-gray-400"
              } ${errors.revenue ? "border-red-500" : ""}`}
            />
            {errors.revenue && <p className="text-red-500 text-sm pl-[12px] mt-1">{errors.revenue}</p>}
          </div>

          {/* Submit */}
          <div className="h-[100px]" />
          <div className={`fixed bottom-0 left-0 right-0 py-4 z-10 ${theme === "dark" ? "bg-[#111d39]" : "bg-white"}`}>
            <div className="max-w-[1024px] mx-auto px-6">
              <button type="submit" className="w-full bg-[#2869FE] p-[16px] text-white font-medium rounded-xl">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>

      <Outlet />
    </motion.div>
  );
};

export default CompanyProfile;
