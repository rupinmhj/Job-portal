import React, { useContext, useEffect, useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
import images from "../assets/images";
import { motion } from 'framer-motion';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AuthContext from "../Context/authContext";
import useAxiosAuth from "../hooks/useAxiosAuth";
import { IoIosCloseCircleOutline } from "react-icons/io";

const defaultExp = {
  company_name: "",
  company_business: "",
  job_title: "",
  Department: "",
  location: "",
  start_date: null,
  end_date: null,
  currently_working: false,
  description: "",
};

const WorkExperience = ({ mode = "onboarding" }) => {
  const api = useAxiosAuth();
  const { seekerDetails, email } = useContext(AuthContext);
  const navigate = useNavigate();
  const { id: experienceId } = useParams();
  const [loading, setLoading] = useState(false);
  const [experiences, setExperiences] = useState([defaultExp]);
  const [formErrors, setFormErrors] = useState([]);

  const handleChange = (index, field, value) => {
    const updated = [...experiences];
    updated[index][field] = value;
    setExperiences(updated);
  };

  const handleDateChange = (index, field, date) => {
    const formattedDate = date ? date.toISOString().split("T")[0] : null;
    handleChange(index, field, formattedDate);
  };

  const addExperience = () => {
    setExperiences([...experiences, defaultExp]);
  };

  const removeExperience = (index) => {
    setExperiences(experiences.filter((_, i) => i !== index));
  };

  const validateExperiences = () => {
    const newErrors = [];

    experiences.forEach((exp, index) => {
      const errors = {};
      if (!exp.company_name.trim()) errors.company_name = "Company name is required.";
      if (!exp.company_business.trim()) errors.company_business = "Business type is required.";
      if (!exp.job_title.trim()) errors.job_title = "Job title is required.";
      if (!exp.Department.trim()) errors.Department = "Department is required.";
      if (!exp.location.trim()) errors.location = "Location is required.";
      if (!exp.start_date) errors.start_date = "Start date is required.";
      if (!exp.currently_working && !exp.end_date)
        errors.end_date = "End date is required if not currently working.";

      newErrors[index] = errors;
    });

    setFormErrors(newErrors);
    return newErrors.every((err) => Object.keys(err).length === 0);
  };

  useEffect(() => {
    if (mode === "edit" && experienceId) {
      const fetchExperience = async () => {
        try {
          const res = await api.get(`/dashboards/experiences/${experienceId}/update/`);
          const data = res.data.data;

          const formatted = {
            company_name: data.company_name || "",
            company_business: data.company_business || "",
            job_title: data.job_title || "",
            Department: data.Department || "",
            location: data.location || "",
            start_date: data.start_date || null,
            end_date: data.end_date || null,
            currently_working: Boolean(data.currently_working),
            description: data.description || "",
          };
          setExperiences([formatted]);
        } catch (err) {
          console.error("Error fetching experience:", err);
        }
      };
      fetchExperience();
    }
  }, [mode, experienceId, api]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    const isValid = validateExperiences();
    if (!isValid) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    setLoading(true);
    try {
      if (mode === "edit") {
        await api.put(`/dashboards/experiences/${experienceId}/update/`, experiences[0]);
      } else {
        await api.post("/dashboards/jobseeker/experiences/", experiences);
      }
      navigate(mode === "onboarding" ? "/socialaccounts" : "/workexperienceprofile");
    } catch (err) {
      console.error("Submission error", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
      className="h-screen overflow-y-scroll scroll-container dark:bg-[#111d39]">
      <div className="text-custBlackBold font-urbanist dark:text-white">
        <div className="fixed left-0 right-0 top-0 z-30 bg-white dark:bg-[#111d39]">
          <div className="flex justify-between p-[24px] pt-[16px] mx-auto max-w-[1024px]">
            <div onClick={() => navigate(-1)} className="flex gap-[18px] items-center cursor-pointer">
              <div className="h-[30px] w-[30px] flex items-center justify-center border rounded-lg border-gray-500 dark:border-white">
                <FaAngleLeft className="text-gray-500 h-[14px] w-[14px] dark:text-white" />
              </div>
            </div>
            <h2 className="text-[20px] font-bold leading-[24px]">Work Experience</h2>
            {mode === "onboarding" ? (
              <h2 onClick={() => navigate("/socialaccounts")} className="w-[30px] cursor-pointer">Skip</h2>
            ) : (
              <img src={images.home} onClick={() => navigate("/home")} className="h-6 w-6 cursor-pointer dark:invert" alt="home" />
            )}
          </div>
        </div>

        <div className="flex mt-[70px] items-center flex-col">
          <img src={seekerDetails?.profile_pic || images.profileImage} className="size-[80.4px] border border-blue-600 rounded-2xl mb-[12px]" alt="profile" />
          <h2 className="text-[18px] font-bold mb-2">{seekerDetails?.full_name}</h2>
          <h2 className="text-gray-400 text-[12px] font-medium">{email}</h2>
        </div>

        <form onSubmit={handleSubmit} className="max-w-[1024px] mx-auto px-6 mt-[20px] mb-[120px]">
          {experiences.map((exp, index) => (
            <div key={index} className="border-t border-gray-300 mt-6 pt-4 relative">
              {(mode === "onboarding" || mode === "add") && experiences.length > 1 && (
                <button type="button" onClick={() => removeExperience(index)} className="text-gray-200 text-[14px] absolute top-3 right-0 flex items-center gap-1">
                  <span className="text-[18px]"><IoIosCloseCircleOutline /></span>
                  <span>Clear</span>
                </button>
              )}
              {[
                { key: "company_name", label: "Company Name" },
                { key: "company_business", label: "Company Business" },
                { key: "job_title", label: "Job Title" },
                { key: "Department", label: "Department" },
                { key: "location", label: "Location" },
              ].map(({ key, label }) => (
                <div className="mt-[20px]" key={key}>
                  <label className="pl-[12px] mb-[12px] block font-bold text-[15px]">{label}</label>
                  <input
                    type="text"
                    value={exp[key] || ""}
                    onChange={(e) => handleChange(index, key, e.target.value)}
                    className="w-full rounded-xl px-[20px] py-[14px] border-[0.5px] text-[14px] font-medium dark:bg-[#1f2a45] dark:text-white dark:border-gray-700 focus:outline-none focus:border-gray-500"
                  />
                  {formErrors[index]?.[key] && (
                    <p className="text-red-500 text-sm mt-1 pl-2">
                      {formErrors[index][key]}
                    </p>
                  )}
                </div>
              ))}

              <div className="mt-[20px]">
                <label className="pl-[12px] mb-[12px] block text-4 leading-[19px] font-bold">Employment Period</label>
                <div className="flex gap-2">
                  <div className="relative w-full">
                    <DatePicker
                      selected={exp.start_date ? new Date(exp.start_date) : null}
                      onChange={(date) => handleDateChange(index, "start_date", date)}
                      placeholderText="Start"
                      calendarClassName="calendar-deadline"
                      showYearDropdown
                      maxDate={new Date()}
                      className="w-full py-[14px] dark:focus:border-gray-200 pl-[52px] pr-[20px] leading-6 text-[14px] font-medium rounded-xl border-[0.5px] px-[20px] focus:outline-none focus:border-gray-500 dark:bg-[#1f2a45] dark:text-white dark:border-gray-700 "
                    />
                    <img src={images.calender} alt="Start" className="absolute top-4 left-[14px] dark:invert" />
                    {formErrors[index]?.start_date && (
                      <p className="text-red-500 text-sm mt-1 pl-2">{formErrors[index].start_date}</p>
                    )}
                  </div>
                  <div className="relative w-full flex">
                    <DatePicker
                      selected={exp.end_date ? new Date(exp.end_date) : null}
                      onChange={(date) => handleDateChange(index, "end_date", date)}
                      calendarClassName="calendar-deadline"
                      showYearDropdown
                      disabled={exp.currently_working}
                      placeholderText="End"
                      className={`${exp.currently_working ? "bg-gray-200 cursor-not-allowed" : ""} w-full justify-end dark:focus:border-gray-200 py-[14px] pl-[52px] pr-[20px] leading-6 text-[14px] font-medium rounded-xl border-[0.5px] px-[20px] focus:outline-none focus:border-gray-500 dark:bg-[#1f2a45] dark:text-white dark:border-gray-700`}
                    />
                    <img src={images.calender} alt="End" className="absolute top-4 left-[14px] dark:invert" />
                    {formErrors[index]?.end_date && (
                      <p className="text-red-500 text-sm mt-1 pl-2">{formErrors[index].end_date}</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-[20px]">
                <label className="leading-[24px] font-medium text-[14px] text-gray-400 flex items-center">
                  <input
                    type="checkbox"
                    checked={exp.currently_working || false}
                    onChange={(e) => {
                      handleChange(index, "currently_working", e.target.checked);
                      if (e.target.checked) handleChange(index, "end_date", null);
                    }}
                    className="mr-4 cursor-pointer size-[17.4px] rounded-[20px]"
                  />
                  I currently work here
                </label>
              </div>

              <div className="mt-[20px]">
                <label className="pl-[12px] mb-[12px] block font-bold">Responsibilities</label>
                <textarea
                  value={exp.description || ""}
                  onChange={(e) => handleChange(index, "description", e.target.value)}
                  className="w-full min-h-[150px] rounded-xl px-[20px] py-[14px] border-[0.5px] text-[14px] font-medium dark:bg-[#1f2a45] dark:text-white dark:border-gray-700 focus:outline-none focus:border-gray-500"
                  placeholder="Describe your role"
                />
              </div>
            </div>
          ))}

          {mode !== "edit" && (
            <button type="button" onClick={addExperience} className="mt-4 text-gray-200  text-[14px]">
              + Add Another Experience
            </button>
          )}

          <div className="p-6 fixed bottom-0 left-0 right-0 mx-auto max-w-[1024px] bg-white dark:bg-[#111d39]">
            <button
              type="submit"
              disabled={loading}
              className={`p-4 rounded-[16px] w-full text-white text-[16px] font-bold transition-colors ${loading ? "bg-[#2869FE] opacity-50 cursor-not-allowed" : "bg-[#2869FE] hover:bg-[#1752e4]"}`}
            >
              {loading ? "Saving..." : mode === "edit" ? "Save Changes" : "Save"}
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default WorkExperience;
