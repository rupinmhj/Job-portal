import React from "react";
import { useState, useRef } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

import { Editor } from '@tinymce/tinymce-react';
import images from "../assets/images";

import { motion } from 'framer-motion';
import { useContext } from "react";
import ThemeContext from './ThemeContext'
import { getTinyMCEConfig } from "../utils/tinymceConfig";

const CreateJob = () => {
  const { theme } = useContext(ThemeContext)
  const navigate = useNavigate();
  const back = () => {
    navigate(-1)
  }
  const [currentStep, setCurrentStep] = useState(1);
  const [form, setForm] = useState({
    position: '',
    company: 'Google',
    location: '',
    status: 'Open',
    type: 'Full-time',
    vacancy: '',
    salary: '',
    deadline: '',
    email: '',
    skills: '',
    facilities: '',
    about: '',
    requirements: ''
  });
  const [positionError, setPositionError] = useState("");
  const [companyError, setCompanyError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [skillError, setSkillError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentStep < 3) {
      nextStep();
    }else{
      console.log("Job posted:", form);
      navigate('/successcreateupdate', { state: { action: 'create' } });
    }
  };

  const nextStep = () => {
    if (currentStep == 1) {
      setPositionError('');
      setCompanyError('');
      const { position, company } = form;
      if (!position) {
        setPositionError("Position is required!!")
        return;
      }
      if (!company) {
        setCompanyError("Company is required!!")
        return;
      }
    }

    if (currentStep == 2) {
      setEmailError('');
      setSkillError('');
      const { email, skills } = form;
      if (!email) {
        setEmailError("Email is required!!")
        return;
      }
      if (!skills) {
        setSkillError("Skills are required!!")
        return;
      }
    }


    setCurrentStep(currentStep + 1);

  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case 1: return 'Basic Information';
      case 2: return 'Job Details';
      case 3: return 'Create Job';
      default: return 'Create Job';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="h-screen overflow-y-scroll scroll-container dark:bg-[#111d39]"
    >
      <div className="bg-white dark:bg-[#111d39] text-[#121927] dark:text-white font-urbanist w-full">
        {/* Header */}
        <div className="fixed top-0 left-0 right-0 bg-white dark:bg-[#111d39] z-10">
          <div className="flex items-center justify-between max-w-[1024px] mx-auto px-6 py-[16px]">
            <div
              className="p-[6px] border rounded-lg border-black dark:border-white cursor-pointer"
              onClick={currentStep === 1 ? back : prevStep}
            >
              <FaAngleLeft className="text-gray-500 size-[14px] dark:text-white" />
            </div>
            <h2 className="text-[20px] font-bold leading-[24px]">{getStepTitle()}</h2>
            <div className="w-[28px]"></div>
          </div>
        </div>

        {/* Form */}
        <div className="px-[24px] max-w-[1024px] mx-auto mt-[74px]">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Basic Information */}
            {currentStep === 1 && (
              <div>
                {/* Position */}
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

                {/* Company */}
                <label className="pl-3 text-[15px] font-semibold ">Company<span className="text-red-500">*</span></label>
                <input
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Google"
                  className={`${!companyError ? 'mb-4' : ''} w-full mt-2  p-3 border dark:focus-within:border-gray-300 dark:border-gray-600 rounded-xl text-[14px] focus:border-gray-400 focus:outline-none dark:bg-[#1f2a45] dark:border-gray-600 dark:text-white`}
                />
                {companyError && <p className="text-red-500 text-[13px] pl-[12px] mb-4">{companyError}</p>}

                {/* Location */}
                <label className="pl-3 text-[15px] font-semibold">Location</label>
                <input
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  placeholder="e.g. Kathmandu, Nepal"
                  className="w-full dark:focus-within:border-gray-300 dark:border-gray-600 mt-2 mb-4 p-3 border rounded-xl text-[14px] focus:border-gray-400 focus:outline-none dark:bg-[#1f2a45] dark:border-gray-600 dark:text-white"
                />

                {/* Job Status */}
                <label className="pl-3 text-[15px] font-semibold">Job Status</label>
                <div className="w-full dark:focus-within:border-gray-300 h-[46.6px] focus-within:border-gray-400 dark:border-gray-600 mt-2 mb-4 px-3 cursor-pointer border rounded-xl text-[14px] focus:border-gray-400 focus:outline-none dark:bg-[#1f2a45] dark:border-gray-600 dark:text-white">
                  <select
                    name="status"
                    value={form.status}
                    onChange={handleChange}
                    className="w-full dark:bg-[#1f2a45] py-3 focus:outline-none cursor-pointer"
                  >
                    <option value="Open">Open</option>
                    <option value="Closed">Closed</option>
                  </select>
                </div>

                {/* Job Type */}
                <label className="pl-3 text-[15px] font-semibold">Job Type</label>
                <div className="mt-2 mb-4 px-3 cursor-pointer h-[46.6px] border focus-within:border-gray-400 dark:focus-within:border-gray-300 dark:border-gray-600 rounded-xl text-[14px] focus:border-gray-400 focus:outline-none dark:bg-[#1f2a45] dark:border-gray-600 dark:text-white">
                  <select
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                    className="w-full py-3 dark:bg-[#1f2a45] dark:focus-within:border-gray-300 dark:border-gray-600 focus:outline-none cursor-pointer"
                  >
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Internship">Internship</option>
                    <option value="Freelance">Freelance</option>
                  </select>
                </div>

                {/* Vacancy */}
                <label className="pl-3 text-[15px] font-semibold">Vacancy</label>
                <input
                  name="vacancy"
                  value={form.vacancy}
                  onChange={handleChange}
                  type="number"
                  className="w-full mt-2 dark:focus-within:border-gray-300 dark:border-gray-600 mb-4 p-3 border rounded-xl text-[14px] focus:border-gray-400 focus:outline-none dark:bg-[#1f2a45] dark:border-gray-600 dark:text-white"
                />

                <div className="mb-24"></div>
              </div>
            )}

            {/* Step 2: Job Details */}
            {currentStep === 2 && (
              <div>
                {/* Salary */}
                <label className="pl-3 text-[15px] font-semibold">Salary</label>
                <input
                  name="salary"
                  value={form.salary}
                  onChange={handleChange}
                  placeholder="e.g. 40,000 - 60,000"
                  className="w-full mt-2 mb-4 p-3 border dark:focus-within:border-gray-300 dark:border-gray-600 rounded-xl text-[14px] focus:border-gray-400 focus:outline-none dark:bg-[#1f2a45] dark:border-gray-600 dark:text-white"
                />

                {/* Deadline */}
                <label className="pl-3 text-[15px] font-semibold">Application Deadline</label>
                <div className="relative">
                   <input
                  name="deadline"
                  value={form.deadline}
                  onChange={handleChange}
                  type="date"
                  className="w-full mt-2 mb-4 p-3 pr-10 border rounded-xl text-[14px] focus-within:border-gray-400 dark:focus-within:border-gray-300 focus:outline-none dark:bg-[#1f2a45] dark:border-gray-600 dark:text-white appearance-none remove-date-icon"
                />
                <div className="absolute top-6 right-4">

                <img src={images.calender} className="dark:invert"  alt="" />
                </div>
                </div>
               

                {/* Email */}
                <label className="pl-3 text-[15px] font-semibold">Contact Email</label>
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
                  <label className="pl-3 text-[15px] font-semibold mb-2 block">Required Skills</label>
                  <Editor
                    className={`${skillError ? 'mt-4' : ''}`}
                    apiKey="9xgp4373zlbxlw2r6rxbpkloeyrgwv1os4iltwqam4bdlekk"
                    value={form.skills}
                    onEditorChange={(content) =>
                      setForm((prev) => ({ ...prev, skills: content }))
                    }
                    init={getTinyMCEConfig(theme)}
                  />
                  {skillError && <p className="text-red-500 text-[13px] pl-[12px] mb-4">{skillError}</p>}
                </div>

                {/* Facilities */}
                <div className="mb-4">
                  <label className="pl-3 text-[15px] font-semibold mb-2 block">Job Facilities</label>
                  <Editor
                    className='mb-4'
                    apiKey="9xgp4373zlbxlw2r6rxbpkloeyrgwv1os4iltwqam4bdlekk"
                    value={form.facilities}
                    onEditorChange={(content) =>
                      setForm((prev) => ({ ...prev, facilities: content }))
                    }
                    init={getTinyMCEConfig(theme)}
                  />
                </div>

                <div className="mb-24"></div>
              </div>
            )}

            {/* Step 3: Create Job */}
            {currentStep === 3 && (
              <div>
                <div className="mb-6">
                  <label className="pl-3 text-[15px] font-semibold mb-2 block">About</label>
                  <Editor
                    className='mb-4'
                    apiKey="9xgp4373zlbxlw2r6rxbpkloeyrgwv1os4iltwqam4bdlekk"
                    value={form.about}
                    onEditorChange={(content) =>
                      setForm((prev) => ({ ...prev, about: content }))
                    }
                    init={getTinyMCEConfig(theme)}
                  />
                </div>

                <div className="mb-24">
                  <label className="pl-3 text-[15px] font-semibold mb-2 block">Requirements</label>
                  <Editor
                    className='mb-4'
                    apiKey="9xgp4373zlbxlw2r6rxbpkloeyrgwv1os4iltwqam4bdlekk"
                    value={form.requirements}
                    onEditorChange={(content) =>
                      setForm((prev) => ({ ...prev, requirements: content }))
                    }
                    init={getTinyMCEConfig(theme)}
                  />
                </div>
              </div>
            )}

            {/* Navigation Button */}
            <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-[#111d39] py-4 z-10">
              <div className="max-w-[1024px] mx-auto px-6">
                <button
                  type="submit"
                  className="w-full bg-[#2869FE] p-[16px] text-white font-medium rounded-xl"
                >
                  {currentStep < 3 ? "Next" : "Create Job"}
                </button>

              </div>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};
export default CreateJob;