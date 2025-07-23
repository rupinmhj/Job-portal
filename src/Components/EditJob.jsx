// Updated EditJob.jsx with refactored structure based on CreateJob layout
import React, { useState, useContext, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CryptoJS from 'crypto-js';
import { FaAngleLeft } from "react-icons/fa6";
import { motion } from "framer-motion";
import ThemeContext from "./ThemeContext";
import AuthContext from "../Context/authContext";
import useAxiosAuth from "../hooks/useAxiosAuth";
import images from "../assets/images";
import JoditEditor from "jodit-react";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import "./custom-datepickerOnly.css";
import 'jodit/es2021/jodit.min.css';
import apiPublic from '../api/api'
import Cookies from "js-cookie"
const SECRET_KEY = import.meta.env.VITE_SECRET_KEY;
const EditJob = () => {
  const api = useAxiosAuth();
  const editorRef = useRef(null);
  const datePickerRef = useRef(null);
  const { theme } = useContext(ThemeContext);
  const { companyDetails } = useContext(AuthContext);
  const navigate = useNavigate();
  const { id } = useParams();

  const back = () => navigate(-1);

  const [currentStep, setCurrentStep] = useState(1);
  const [form, setForm] = useState({
    position: "",
    company: companyDetails?.name || "",
    location: "",
    status: "open",
    type: "full_time",
    vacancy: "",
    salary: "",
    deadline: "",
    email: "",
    skills: "",
    about: ""
  });

  const [positionError, setPositionError] = useState("");
  const [companyError, setCompanyError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [skillError, setSkillError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const encryptedToken = Cookies.get('access_token');
        console.log("Secret key is:", SECRET_KEY); // Add this temporarily

        const decryptedBytes = CryptoJS.AES.decrypt(encryptedToken, SECRET_KEY);
        console.log('Decrypted access token:', decryptedBytes);
        const token = decryptedBytes.toString(CryptoJS.enc.Utf8);
        console.log('token', token);
        const res = await apiPublic.get(`/jobs/${id}/detail/`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const job = res.data.job_detail;
        setForm({
          position: job.title,
          company: companyDetails?.name || '',
          location: job.location,
          status: job.job_status,
          type: job.job_type,
          vacancy: job.vacancies,
          salary: job.salary,
          deadline: job.deadline,
          email: job.contact_email,
          skills: job.req_skills,
          about: job.description
        });
      } catch (err) {
        console.error("Failed to fetch job:", err);
      }
    };
    fetchJob();
  }, [id, api]);

  const isTextareaEmpty = (text) => !text || text.trim().length === 0;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date) => {
    const formatted = format(date, 'yyyy-MM-dd');
    setForm((prev) => ({ ...prev, deadline: formatted }));
  };

  const nextStep = () => {
    setPositionError("");
    setCompanyError("");
    const { position, company } = form;
    if (!position) return setPositionError("Position is required!");
    if (!company) return setCompanyError("Company is required!");
    setCurrentStep(2);
  };

  const prevStep = () => currentStep > 1 ? setCurrentStep(currentStep - 1) : back();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (currentStep === 1) {
      nextStep();
    } else {
      setEmailError("");
      setSkillError("");

      if (!form.email) return setEmailError("Email is required!");
      if (isTextareaEmpty(form.skills)) return setSkillError("Skills are required!");

      const updatedJob = {
        title: form.position,
        description: form.about,
        location: form.location,
        job_type: form.type,
        job_status: form.status,
        salary: form.salary,
        vacancies: form.vacancy,
        deadline: form.deadline,
        contact_email: form.email,
        req_skills: form.skills
      };

      try {
        setIsSubmitting(true);
        await api.put(`/jobs/${id}/update/`, updatedJob, {
          headers: { "Content-Type": "application/json" }
        });
        navigate("/successcreateupdate", { state: { action: "update" } });
      } catch (err) {
        console.error("Job update failed:", err.response?.data || err.message);
        alert("Job update failed. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const getStepTitle = () => currentStep === 1 ? 'Edit Basic Info' : 'Edit Job';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="h-screen overflow-y-scroll scroll-container dark:bg-[#111d39]"
    >
      <div className="bg-white dark:bg-[#111d39] text-[#121927] dark:text-white font-urbanist w-full">
        <div className="fixed top-0 left-0 right-0 bg-white dark:bg-[#111d39] z-10">
          <div className="flex items-center justify-between max-w-[1024px] mx-auto px-6 py-[16px]">
            <div
              className="p-[6px] border rounded-lg border-black dark:border-white cursor-pointer"
              onClick={prevStep}
            >
              <FaAngleLeft className="text-gray-500 size-[14px] dark:text-white" />
            </div>
            <h2 className="text-[20px] font-bold leading-[24px]">{getStepTitle()}</h2>
            <div className="w-[28px]"></div>
          </div>
        </div>

        <div className="px-[24px] max-w-[1024px] mx-auto mt-[74px]">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Basic Information */}
            {currentStep === 1 && (
              <div>
                <label className="pl-3 text-[15px] font-semibold">Position<span className="text-red-500">*</span></label>
                <input
                  name="position"
                  value={form.position}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Senior UX Designer"
                  className={`${!positionError ? 'mb-4' : ''} w-full mt-2  p-3 border dark:focus-within:border-gray-300 dark:border-gray-600 rounded-xl text-[14px] focus:border-gray-400 focus:outline-none dark:bg-[#1f2a45] dark:border-gray-600 dark:text-white`}
                />
                {positionError && <p className="text-red-500  text-[13px] pl-[12px]">{positionError}</p>}

                <label className="pl-3 text-[15px] font-semibold ">Company<span className="text-red-500">*</span></label>
                <input
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  required
                  disabled
                  placeholder="e.g. Google"
                  className={`${!companyError ? 'mb-4' : ''} w-full mt-2  p-3 border dark:focus-within:border-gray-300 dark:border-gray-600 rounded-xl text-[14px] focus:border-gray-400 focus:outline-none dark:bg-[#1f2a45] dark:border-gray-600 dark:text-white`}
                />
                {companyError && <p className="text-red-500 text-[13px] pl-[12px] mb-4">{companyError}</p>}

                <label className="pl-3 text-[15px] font-semibold">Location</label>
                <input
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  placeholder="e.g. Kathmandu, Nepal"
                  className="w-full dark:focus-within:border-gray-300 dark:border-gray-600 mt-2 mb-4 p-3 border rounded-xl text-[14px] focus:border-gray-400 focus:outline-none dark:bg-[#1f2a45] dark:border-gray-600 dark:text-white"
                />

                <label className="pl-3 text-[15px] font-semibold">Job Status</label>
                <div className="w-full dark:focus-within:border-gray-300 h-[46.6px] focus-within:border-gray-400 dark:border-gray-600 mt-2 mb-4 px-3 cursor-pointer border rounded-xl text-[14px] focus:border-gray-400 focus:outline-none dark:bg-[#1f2a45] dark:border-gray-600 dark:text-white">
                  <select
                    name="status"
                    value={form.status}
                    onChange={handleChange}
                    className="w-full dark:bg-[#1f2a45] py-3 focus:outline-none cursor-pointer"
                  >
                    <option value="open">Open</option>
                    <option value="close" >Closed</option>
                  </select>
                </div>

                <label className="pl-3 text-[15px] font-semibold">Job Type</label>
                <div className="mt-2 mb-4 px-3 cursor-pointer h-[46.6px] border focus-within:border-gray-400 dark:focus-within:border-gray-300 dark:border-gray-600 rounded-xl text-[14px] focus:border-gray-400 focus:outline-none dark:bg-[#1f2a45] dark:border-gray-600 dark:text-white">
                  <select
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                    className="w-full py-3 dark:bg-[#1f2a45] dark:focus-within:border-gray-300 dark:border-gray-600 focus:outline-none cursor-pointer"
                  >
                    <option value="full_time">Full-time</option>
                    <option value="part_time">Part-time</option>
                    <option value="intern">Internship</option>
                    <option value="freelancing">Freelance</option>
                  </select>
                </div>

                <label className="pl-3 text-[15px] font-semibold">Vacancy</label>
                <input
                  name="vacancy"
                  value={form.vacancy}
                  onChange={handleChange}
                  type="number"
                  min="1"
                  step="1"
                  pattern="\d+"
                  className="w-full mt-2 dark:focus-within:border-gray-300 dark:border-gray-600 mb-4 p-3 border rounded-xl text-[14px] focus:border-gray-400 focus:outline-none dark:bg-[#1f2a45] dark:border-gray-600 dark:text-white"
                />

                <label className="pl-3 text-[15px] font-semibold">Salary</label>
                <input
                  name="salary"
                  value={form.salary}
                  onChange={handleChange}
                  placeholder="e.g. 40,000 - 60,000"
                  className="w-full mt-2 mb-4 p-3 border dark:focus-within:border-gray-300 dark:border-gray-600 rounded-xl text-[14px] focus:border-gray-400 focus:outline-none dark:bg-[#1f2a45] dark:border-gray-600 dark:text-white"
                />

                <div className="mb-24"></div>
              </div>
            )}

            {/* Step 2: Job Details */}
            {currentStep === 2 && (
              <div>


                <label className="pl-3 text-[15px] font-semibold">Application Deadline</label>
                <div className="relative mt-2">
                  <DatePicker
                    selected={form.deadline ? new Date(form.deadline) : null}
                    onChange={handleDateChange}
                    dateFormat="yyyy-MM-dd"
                    placeholderText="Select deadline"
                    className="w-full p-[12px]  rounded-xl datepicker picker-date-only outline-none border border-gray-300 focus:border-gray-700 dark:border-gray-600 dark:focus:border-gray-200 bg-white dark:bg-[#1f2a45] text-sm text-black dark:text-white mb-4"
                    ref={datePickerRef}
                    calendarClassName="calendar-deadline"
                    minDate={new Date()}
                  />
                  <div className="absolute top-3 right-3 cursor-pointer" onClick={() => datePickerRef.current.setFocus()}>
                    <img src={images.calender} className="dark:invert" alt="calendar" />
                  </div>
                </div>


                <label className="pl-3 text-[15px] font-semibold">Contact Email<span className="text-red-500">*</span></label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  required
                  className={`${!emailError ? 'mb-4' : ''} w-full mt-2  p-3 border dark:focus-within:border-gray-300 dark:border-gray-600 rounded-xl text-[14px] focus:border-gray-400 focus:outline-none dark:bg-[#1f2a45] dark:border-gray-600 dark:text-white`}
                />
                {emailError && <p className="text-red-500 text-[13px] pl-[12px] mb-4">{emailError}</p>}

                <div className="mb-4">
                  <label className="pl-3 text-[15px] font-semibold mb-2 block">Required Skills<span className="text-red-500">*</span></label>
                  <JoditEditor
                    ref={editorRef}
                    value={form.skills || ''}
                    config={{
                      readonly: false,
                      height: 250,
                      theme: theme === 'dark' ? 'dark' : 'default',
                            removeButtons: [
    'source', 'image', 'file', 'video', 'speech-recognize',
    'print', 'about', 'fullsize', 'selectall',
    'symbol', 'copyformat', 'preview', 'find', 'emoticons',
    'brush', 'fontsize', 'paragraph', 'link', 'table', 'hr','classSpan','superscript', 'subscript'
  ],
                      style: {
                        backgroundColor: theme === 'dark' ? '#1f2a45' : '#ffffff',
                        color: theme === 'dark' ? '#ffffff' : '#000000',
                      },
                      iframeStyle: `
      body {
        background-color: ${theme === 'dark' ? '#1f2a45' : '#ffffff'};
        color: ${theme === 'dark' ? '#ffffff' : '#000000'};
        font-family: 'Urbanist', sans-serif;
        border-radius:16px;
      }
    `
                    }}
                    onBlur={(newContent) => {
                      setForm((prev) => ({ ...prev, skills: newContent || '' }));
                    }}
                  />
                  {skillError && <p className="text-red-500 text-[13px] pl-[12px] mt-2">{skillError}</p>}
                </div>

                <div className="mb-6">
                  <label className="pl-3 text-[15px] font-semibold mb-2 block">About</label>
                  <JoditEditor
                    ref={editorRef}
                    value={form.about || ''}
                    config={{
                      readonly: false,
                      height: 250,
                        removeButtons: [
    'source', 'image', 'file', 'video', 'speech-recognize',
    'print', 'about', 'fullsize', 'selectall',
    'symbol', 'copyformat', 'preview', 'find', 'emoticons',
    'brush', 'fontsize', 'paragraph', 'link', 'table', 'hr','classSpan','superscript', 'subscript'
  ],
                      theme: theme === 'dark' ? 'dark' : 'default',
                      style: {
                        backgroundColor: theme === 'dark' ? '#1f2a45' : '#ffffff',
                        color: theme === 'dark' ? '#ffffff' : '#000000',
                      },
                      iframeStyle: `
      body {
        background-color: ${theme === 'dark' ? '#1f2a45' : '#ffffff'};
        color: ${theme === 'dark' ? '#ffffff' : '#000000'};
        font-family: 'Urbanist', sans-serif;
        border-radius:16px;
      }
    `
                    }}
                    onBlur={(newContent) => {
                      setForm((prev) => ({ ...prev, about: newContent || '' }));
                    }}
                  />
                </div>

                <div className="mb-24"></div>
              </div>
            )}

            {/* Navigation Button */}
            <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-[#111d39] py-4 z-10">
              <div className="max-w-[1024px] mx-auto px-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-[#2869FE] p-[16px] text-white font-medium rounded-xl transition-opacity ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`}>
                  {isSubmitting ? 'Updating...' : currentStep === 1 ? "Next" : "Update job"}
                </button>
              </div>
            </div>
          </form>
        </div>

      </div>
    </motion.div>
  );
};

export default EditJob;