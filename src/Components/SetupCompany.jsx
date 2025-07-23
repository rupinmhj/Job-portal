import React, { useState, useContext, useEffect } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate, Outlet } from "react-router-dom";
import images from "../assets/images";
import { motion } from "framer-motion";
import ThemeContext from "./ThemeContext";
import AuthContext from "../Context/authContext";
import useAxiosAuth from "../hooks/useAxiosAuth";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SetupCompany = () => {
  const navigate = useNavigate();
  const api = useAxiosAuth();
  const { theme } = useContext(ThemeContext);
  const { setupCompany } = useContext(AuthContext);

  const [previewUrl, setPreviewUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    recruiterEmail: "",
    about: "",
    website: "",
    headquarters: "",
    founded: "",
    size: "",
    revenue: "",
    businessRegDoc: null,
    taxCertificate: null,
    representativeId: null
  });

  const [errors, setErrors] = useState({});
  const [profileImage, setProfileImage] = useState(null);

  const handleChange = (e) => {
    const { name, type, value, files } = e.target;
    const newValue = type === "file" ? files[0] : value;

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
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

    const requiredFields = ["companyName", "about", "recruiterEmail", "website", "headquarters", "founded", "size", "revenue", "businessRegDoc", "taxCertificate", "representativeId"];
    requiredFields.forEach(field => {
      if (!formData[field] || (typeof formData[field] === "string" && !formData[field].trim())) {
        newErrors[field] = "This field is required";
        isValid = false;
      }
    });

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
      formPayload.append("name", formData.companyName);
      formPayload.append("recruiter_email", formData.recruiterEmail);
      formPayload.append("about", formData.about);
      formPayload.append("website", formData.website);
      formPayload.append("headquarter", formData.headquarters);
      formPayload.append("founded_at", formData.founded);
      formPayload.append("size", formData.size);
      formPayload.append("revenue", formData.revenue);
      if (profileImage) formPayload.append("logo", profileImage);
      formPayload.append("business_reg_doc", formData.businessRegDoc);
      formPayload.append("tax_certificate", formData.taxCertificate);
      formPayload.append("representative_id", formData.representativeId);

      const response = await api.post("/companies/create/", formPayload, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setupCompany(response.data.company);
      navigate("/homerecruiter");
    } catch (error) {
      console.error("API error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const back = () => navigate(-1);

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className={`h-screen overflow-y-scroll scroll-container  font-urbanist ${theme === 'dark' ? 'bg-[#111d39] text-white' : 'bg-white text-[rgb(18, 25, 39)]'}`}>
      <div className="w-full lg:px-[232px]">
        <div className={`fixed top-0 left-0 right-0 z-10 ${theme === 'dark' ? 'bg-[#111d39]' : 'bg-white'}`}>
          <div className="flex items-center justify-between px-[24px] lg:px-[252px] py-[15px]">
            <div onClick={back} className={`p-[6px] border rounded-lg cursor-pointer ${theme === 'dark' ? 'border-white' : 'border-black'}`}>
              <FaAngleLeft className={`${theme === 'dark' ? 'text-white' : 'text-gray-500'} size-[14px]`} />
            </div>
            <h2 className="text-[20px] font-bold">Set Up Company</h2>
            <div className="w-[27.6px] " />
          </div>
        </div>

        <div className="px-[24px] flex flex-col justify-center items-center pt-[67.6px]">
          <input type="file" id="fileInput" accept="image/*" className="hidden" onChange={handleFileChange} />
          <label htmlFor="fileInput" className="cursor-pointer relative w-[80.4px] h-[80.4px] mb-[24px]">
            <img src={previewUrl || images.companyprofile} className="h-full w-full object-cover bg-gray-300 p-1 rounded-xl" alt="Upload Profile" />
            {!previewUrl && <div className="absolute inset-0 bg-black/60 flex items-center justify-center rounded-xl">
              <span className="text-white text-sm font-medium">Add Image</span>
            </div>}
          </label>
          <h2 className="text-[18px] font-bold pb-[24px] border-b w-full text-center">Company Information</h2>
        </div>

        <form onSubmit={handleSubmit} className="px-[24px] mt-[24px]">
          {/* All text and file input fields here */}
          {/* (Refer to previous message for inputs explicitly listed) */}
          {/* Company Name */}
          <div className="mb-4">
            <label htmlFor="companyName" className="pl-3 text-[15px] font-semibold">
              Company Name<span className="text-red-500">*</span>
            </label>
            <div className="w-full h-[46.6px] mt-2 mb-4 px-3 cursor-pointer border rounded-xl text-[14px] focus-within:border-gray-400 dark:focus-within:border-gray-300 dark:border-gray-600 dark:bg-[#1f2a45] dark:text-white flex items-center">
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
                placeholder="Enter company name"
                className="w-full bg-transparent outline-none text-inherit"
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="companyName" className="pl-3 text-[15px] font-semibold">
              Recruitment Contact Email
              <span className="text-red-500">*</span>
            </label>
            <div className="w-full h-[46.6px] mt-2 mb-4 px-3 cursor-pointer border rounded-xl text-[14px] focus-within:border-gray-400 dark:focus-within:border-gray-300 dark:border-gray-600 dark:bg-[#1f2a45] dark:text-white flex items-center">
              <input
                type="email"
                id="recruiterEmail"
                name="recruiterEmail"
                value={formData.recruiterEmail}
                onChange={handleChange}
                required
                placeholder="Enter recruiter email"
                className="w-full bg-transparent outline-none text-inherit"
              />
            </div>
          </div>

          {/* About */}
          <div className="mb-4">
            <label htmlFor="about" className="pl-3 text-[6] font-semibold">
              About the Company<span className="text-red-500">*</span>
            </label>
            <div className="w-full mt-2 mb-4 px-3 py-2 border rounded-xl text-[14px] focus-within:border-gray-400 dark:focus-within:border-gray-300 dark:border-gray-600 dark:bg-[#1f2a45] dark:text-white">
              <textarea
                id="about"
                name="about"
                value={formData.about}
                onChange={handleChange}
                required
                placeholder="Write about the company"
                className="w-full h-[100px] bg-transparent outline-none resize-none text-inherit"
              />
            </div>
          </div>

          {/* Website */}
          <div className="mb-4">
            <label htmlFor="website" className="pl-3 text-[6] font-semibold">
              Website<span className="text-red-500">*</span>
            </label>
            <div className="w-full h-[46.6px] mt-2 mb-4 px-3 border rounded-xl text-[14px] flex items-center focus-within:border-gray-400 dark:focus-within:border-gray-300 dark:border-gray-600 dark:bg-[#1f2a45] dark:text-white">
              <input
                type="text"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                required
                placeholder="Enter website URL"
                className="w-full bg-transparent outline-none text-inherit"
              />
            </div>
          </div>

          {/* Headquarters */}
          <div className="mb-4">
            <label htmlFor="headquarters" className="pl-3 text-[6] font-semibold">
              Headquarters<span className="text-red-500">*</span>
            </label>
            <div className="w-full h-[46.6px] mt-2 mb-4 px-3 border rounded-xl text-[14px] flex items-center focus-within:border-gray-400 dark:focus-within:border-gray-300 dark:border-gray-600 dark:bg-[#1f2a45] dark:text-white">
              <input
                type="text"
                id="headquarters"
                name="headquarters"
                value={formData.headquarters}
                onChange={handleChange}
                required
                placeholder="Enter location"
                className="w-full bg-transparent outline-none text-inherit"
              />
            </div>
          </div>

          {/* Founded */}
          <div className="mb-4">
            <label htmlFor="founded" className="pl-3 text-[6] font-semibold">
              Founded<span className="text-red-500">*</span>
            </label>
            <div className="w-full h-[46.6px] mt-2 mb-4 px-3 border rounded-xl text-[14px] flex items-center focus-within:border-gray-400 dark:focus-within:border-gray-300 dark:border-gray-600 dark:bg-[#1f2a45] dark:text-white">
              <input
                type="text"
                id="founded"
                name="founded"
                value={formData.founded}
                onChange={handleChange}
                required
                placeholder="Enter year (e.g. 2005)"
                className="w-full bg-transparent outline-none text-inherit"
              />
            </div>
          </div>

          {/* Company Size */}
          <div className="mb-4">
            <label htmlFor="size" className="pl-3 text-[6] font-semibold">
              Company Size<span className="text-red-500">*</span>
            </label>
            <div className="w-full h-[46.6px] mt-2 mb-4 px-3 border rounded-xl text-[14px] flex items-center focus-within:border-gray-400 dark:focus-within:border-gray-300 dark:border-gray-600 dark:bg-[#1f2a45] dark:text-white">
              <input
                type="text"
                id="size"
                name="size"
                value={formData.size}
                onChange={handleChange}
                required
                placeholder="e.g. 51-200 employees"
                className="w-full bg-transparent outline-none text-inherit"
              />
            </div>
          </div>

          {/* Revenue */}
          <div className="mb-4">
            <label htmlFor="revenue" className="pl-3 text-[6] font-semibold">
              Revenue<span className="text-red-500">*</span>
            </label>
            <div className="w-full h-[46.6px] mt-2 mb-4 px-3 border rounded-xl text-[14px] flex items-center focus-within:border-gray-400 dark:focus-within:border-gray-300 dark:border-gray-600 dark:bg-[#1f2a45] dark:text-white">
              <input
                type="text"
                id="revenue"
                name="revenue"
                value={formData.revenue}
                onChange={handleChange}
                required
                placeholder="e.g. $1M - $10M"
                className="w-full bg-transparent outline-none text-inherit"
              />
            </div>
          </div>

          {/* Business Registration Document */}
          <div className="mb-4">
            <label htmlFor="businessRegDoc" className="pl-3 text-[6] font-semibold">
              Business Registration Document<span className="text-red-500">*</span>
            </label>
            <div className="w-full mt-2 mb-4 px-3 py-2 border rounded-xl text-[14px] focus-within:border-gray-400 dark:focus-within:border-gray-300 dark:border-gray-600 dark:bg-[#1f2a45] dark:text-white">
              <input
                type="file"
                id="businessRegDoc"
                name="businessRegDoc"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleChange}
                required
                className="w-full cursor-pointer bg-transparent text-inherit file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
              />
            </div>
          </div>

          {/* Tax Identification Certificate */}
          <div className="mb-4">
            <label htmlFor="taxCertificate" className="pl-3 text-[6] font-semibold">
              Tax Identification Certificate (PAN/VAT/GST)<span className="text-red-500">*</span>
            </label>
            <div className="w-full mt-2 mb-4 px-3 py-2 border rounded-xl text-[14px] focus-within:border-gray-400 dark:focus-within:border-gray-300 dark:border-gray-600 dark:bg-[#1f2a45] dark:text-white">
              <input
                type="file"
                id="taxCertificate"
                name="taxCertificate"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleChange}
                required
                className="w-full bg-transparent cursor-pointer  text-inherit file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
              />
            </div>
          </div>

          {/* Company Representative ID */}
          <div className="mb-4">
            <label htmlFor="representativeId" className="pl-3 text-[6] font-semibold">
              Company Representative ID<span className="text-red-500">*</span>
            </label>
            <div className="w-full mt-2 mb-4 px-3 py-2 border rounded-xl text-[14px] focus-within:border-gray-400 dark:focus-within:border-gray-300 dark:border-gray-600 dark:bg-[#1f2a45] dark:text-white">
              <input
                type="file"
                id="representativeId"
                name="representativeId"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleChange}
                required
                className="w-full bg-transparent cursor-pointer  text-inherit file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
              />
            </div>
          </div>


          <div className="h-[100px]" />

          <div className={`fixed bottom-0 left-0 right-0 py-4 z-10 ${theme === 'dark' ? 'bg-[#111d39]' : 'bg-white'}`}>
            <div className="px-[24px] lg:px-[252px]">
              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-[#2869FE] p-[15px] text-white font-medium rounded-xl ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                Continue
              </button>
            </div>
          </div>
        </form>

        <Outlet />
      </div>
      <ToastContainer />
    </motion.div>
  );
};

export default SetupCompany;
