import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate, Outlet } from "react-router-dom";
import images from "../assets/images";
import { motion } from "framer-motion";

const SetupCompany = () => {
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    companyName: "",
    about: "",
    website: "",
    headquarters: "",
    founded: "",
    size: "",
    revenue: ""
  });

  // Error state
  const [errors, setErrors] = useState({});

  // Profile image state
  const [profileImage, setProfileImage] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ""
      }));
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
    const newErrors = {};

    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company name is required";
      isValid = false;
    }
    if (!formData.about.trim()) {
      newErrors.about = "About section is required";
      isValid = false;
    }
    if (!formData.website.trim()) {
      newErrors.website = "Website is required";
      isValid = false;
    }
    if (!formData.headquarters.trim()) {
      newErrors.headquarters = "Headquarters is required";
      isValid = false;
    }
    if (!formData.founded.trim()) {
      newErrors.founded = "Founded year is required";
      isValid = false;
    }
    if (!formData.size.trim()) {
      newErrors.size = "Company size is required";
      isValid = false;
    }
    if (!formData.revenue.trim()) {
      newErrors.revenue = "Revenue is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate("/setup/interest");
    }
  };

  const back = () => navigate(-1);
  const handleInterest = () => navigate("/setup/interest");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="h-screen overflow-y-scroll scroll-container"
    >
      <div className="bg-white lg:px-[232px] font-urbanist text-[rgb(18, 25, 39)] w-full">
        {/* Header */}
        <div className="fixed top-0 left-0 right-0 bg-white z-10">
          <div className="flex items-center justify-between px-[24px] lg:px-[252px] py-[16px]">
            <div onClick={back} className="p-[6px] border rounded-lg border-black cursor-pointer">
              <FaAngleLeft  className="text-gray-500 size-[14px]" />
            </div>
            <h2 className="text-[20px] font-bold">Set Up Company</h2>
            <h2
              className="text-[15px] font-semibold cursor-pointer"
              onClick={handleInterest}
            >
              Skip
            </h2>
          </div>
        </div>

        {/* Profile image uploader */}
        <div className="px-[24px] flex flex-col justify-center items-center pt-[67.6px]">
          <input
            type="file"
            id="fileInput"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
          <label htmlFor="fileInput" className="cursor-pointer">
            <img
              src={profileImage || images.companyprofile}
              className="h-[80.4px] w-[80.4px] object-cover mb-[24px] bg-gray-300 p-1 rounded-xl"
              alt="Upload Profile"
            />
          </label>
          <h2 className="text-[18px] font-bold pb-[24px] border-b w-full text-center">
            Company Information
          </h2>
        </div>

        {/* Form */}
        <div className="px-[24px] mt-[24px]">
          <form onSubmit={handleSubmit}>
            {[
              { id: "companyName", label: "Company Name", placeholder: "Enter company name" },
              { id: "about", label: "About the Company", placeholder: "Write about the company", textarea: true },
              { id: "website", label: "Website", placeholder: "Enter website URL" },
              { id: "headquarters", label: "Headquarters", placeholder: "Enter location" },
              { id: "founded", label: "Founded", placeholder: "Enter year (e.g. 2005)" },
              { id: "size", label: "Company Size", placeholder: "e.g. 51-200 employees" },
              { id: "revenue", label: "Revenue", placeholder: "e.g. $1M - $10M" }
            ].map(({ id, label, placeholder, textarea }) => (
              <div key={id} className="mb-4">
                <label htmlFor={id} className="pl-[12px] text-[16px] font-bold">
                  {label}
                </label>
                {textarea ? (
                  <textarea
                    id={id}
                    name={id}
                    value={formData[id]}
                    onChange={handleChange}
                    placeholder={placeholder}
                    className={`mt-[12px] focus:outline-none border ${
                      errors[id] ? "border-red-500" : "focus:border-gray-400"
                    } shadow-sm rounded-xl p-[14px] w-full h-[100px]`}
                  />
                ) : (
                  <input
                    type="text"
                    id={id}
                    name={id}
                    value={formData[id]}
                    onChange={handleChange}
                    placeholder={placeholder}
                    className={`mt-[12px] focus:outline-none border ${
                      errors[id] ? "border-red-500" : "focus:border-gray-400"
                    } shadow-sm rounded-xl p-[14px] w-full`}
                  />
                )}
                {errors[id] && (
                  <p className="text-red-500 text-sm pl-[12px] mt-1">{errors[id]}</p>
                )}
              </div>
            ))}

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

export default SetupCompany;
