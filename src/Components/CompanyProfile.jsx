import React, { useState, useContext, useEffect } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate, Outlet } from "react-router-dom";
import images from "../assets/images";
import { motion } from "framer-motion";
import ThemeContext from "./ThemeContext";
import AuthContext from "../Context/authContext";
import useAxiosAuth from "../hooks/useAxiosAuth"; // ✅ Custom axios instance with token

const CompanyProfile = () => {
  const { theme } = useContext(ThemeContext);
  const { companyDetails, setupCompany } = useContext(AuthContext);
  const navigate = useNavigate();
  const api = useAxiosAuth();

  const [previewUrl, setPreviewUrl] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    companyName: companyDetails?.name || "",
    about: companyDetails?.about || "",
    website: companyDetails?.website || "",
    headquarters: companyDetails?.headquarter || "",
    founded: companyDetails?.founded_at || "",
    size: companyDetails?.size || "",
    revenue: companyDetails?.revenue || ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({ ...prev, logo: "File size too large (max 5MB)" }));
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const formPayload = new FormData();
      formPayload.append("name", formData.companyName);
      formPayload.append("about", formData.about);
      formPayload.append("website", formData.website);
      formPayload.append("headquarter", formData.headquarters);
      formPayload.append("founded_at", formData.founded);
      formPayload.append("size", formData.size);
      formPayload.append("revenue", formData.revenue);
      if (profileImage) {
        formPayload.append("logo", profileImage);
      }
       for (let pair of formPayload.entries()) {
  console.log(pair[0]+ ': ' + pair[1]);
}

      const response = await api.put("/companies/update/", formPayload, {
        headers: { "Content-Type": "multipart/form-data" }
      });


      console.log("Company updated successfully:", response.data);
      setupCompany(response.data.company);
      navigate("/homerecruiter");
    } catch (error) {
      console.error("API error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  const back = () => navigate(-1);

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={`h-screen overflow-y-scroll scroll-container font-urbanist ${theme === "dark" ? "bg-[#111d39] text-white" : "bg-white text-[rgb(18,25,39)]"}`}
    >
      {/* Header */}
      <div className={`fixed top-0 left-0 right-0 z-10 ${theme === "dark" ? "bg-[#111d39]" : "bg-white"}`}>
        <div className="flex items-center justify-between max-w-[1024px] mx-auto px-6 py-[16px]">
          <div onClick={back} className={`p-[6px] border rounded-lg cursor-pointer ${theme === "dark" ? "border-white" : "border-black"}`}>
            <FaAngleLeft className={`size-[14px] ${theme === "dark" ? "text-white" : "text-gray-500"}`} />
          </div>
          <h2 className="text-[20px] font-bold">Edit Company</h2>
          <img src={images.home} alt="" className="cursor-pointer" onClick={() => navigate('/homerecruiter')} />
        </div>
      </div>

      {/* Upload Image */}
      <div className="max-w-[1024px] mx-auto px-6 flex flex-col justify-center items-center pt-[72px]">
        <input type="file" id="fileInput" accept="image/*" className="hidden" onChange={handleFileChange} />
        <label htmlFor="fileInput" className="cursor-pointer">
          <img
            src={previewUrl || companyDetails.logo || images.companyprofile}
            className="h-[80.4px] w-[80.4px] object-cover mb-[24px] bg-gray-300 p-1 rounded-xl"
            alt="Upload Logo"
          />
        </label>
        <h2 className="text-[18px] font-bold pb-[24px] w-full text-center">Company Information</h2>
      </div>

      {/* Form */}
      <div className="max-w-[1024px] mx-auto px-6">
        <form onSubmit={handleSubmit}>
          {[
            { id: "companyName", label: "Company Name", placeholder: "Enter company name" },
            { id: "about", label: "About", placeholder: "Write about the company", textarea: true },
            { id: "website", label: "Website", placeholder: "https://" },
            { id: "headquarters", label: "Headquarters", placeholder: "Enter location" },
            { id: "founded", label: "Founded", placeholder: "e.g. 2005" },
            { id: "size", label: "Company Size", placeholder: "e.g. 50-100 employees" },
            { id: "revenue", label: "Revenue", placeholder: "e.g. $1M - $10M" }
          ].map(({ id, label, placeholder, textarea }) => (
            <div key={id} className="mb-4">
              <label htmlFor={id} className="pl-[12px] text-[16px] font-bold">{label}</label>
              {textarea ? (
                <textarea
                  id={id}
                  name={id}
                  value={formData[id]}
                  onChange={handleChange}
                  placeholder={placeholder}
                 
                  className={`mt-[12px] p-[14px] w-full h-[120px] rounded-xl shadow-sm focus:outline-none ${theme === "dark" ? "bg-[#1f2a45] border-gray-600 text-white" : "border border-gray-400"} ${errors[id] ? "border-red-500" : ""}`}
                />
              ) : (
                <input
                  type="text"
                  id={id}
                  name={id}
                  value={formData[id]}
                  onChange={handleChange}
                  placeholder={placeholder}
                   disabled={id === "companyName"}
                  className={`mt-[12px] p-[14px] w-full rounded-xl shadow-sm focus:outline-none ${theme === "dark" ? "bg-[#1f2a45] border-gray-600 text-white" : "border border-gray-400"} ${errors[id] ? "border-red-500" : ""}`}
                />
              )}
              {errors[id] && <p className="text-red-500 text-sm pl-[12px] mt-1">{errors[id]}</p>}
            </div>
          ))}

          <div className="h-[100px]" />
          <div className={`fixed bottom-0 left-0 right-0 py-4 z-10 ${theme === "dark" ? "bg-[#111d39]" : "bg-white"}`}>
            <div className="max-w-[1024px] mx-auto px-6">
              <button type="submit" className="w-full bg-[#2869FE] p-[16px] text-white font-medium rounded-xl">
                Save Changes
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
