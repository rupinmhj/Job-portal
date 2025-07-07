import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Editor } from "@tinymce/tinymce-react";
import ThemeContext from "./ThemeContext";
import { getTinyMCEConfig } from "../utils/tinymceConfig";
import images from "../assets/images";

const EditJob = () => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const back = () => navigate(-1);

  const [currentStep, setCurrentStep] = useState(1);

  const [form, setForm] = useState({
  position: "UX Designer",
  company: "Google",
  location: "Mountain View, California, USA",
  status: "Open",
  type: "Full-time",
  vacancy: "2",
  salary: "$90,000 - $120,000 per year",
  deadline: "2025-08-31",
  email: "careers@google.com",

  skills: `
    <ul>
      <li>Proficiency in design tools like Figma, Adobe XD, Sketch</li>
      <li>Strong understanding of UX principles and user-centered design</li>
      <li>Ability to create wireframes, prototypes, and mockups</li>
      <li>Excellent communication and collaboration skills</li>
      <li>Knowledge of HTML/CSS is a plus</li>
    </ul>
  `,

  facilities: `
    <ul>
      <li>Flexible working hours</li>
      <li>Health insurance and wellness programs</li>
      <li>Remote work opportunities</li>
      <li>On-site meals and snacks</li>
      <li>Learning and development budget</li>
    </ul>
  `,

  about: `
    <ul>
      <li>As a UX Designer at Google, you will work closely with product managers, engineers, and researchers to shape intuitive and delightful user experiences.</li>
      <li>Your designs will impact millions of users across multiple platforms.</li>
      <li>You’ll play a key role from product ideation to launch, ensuring a high-quality user journey throughout.</li>
    </ul>
  `,

  requirements: `
    <ul>
      <li>Bachelor's degree in Design, HCI, or related field (or equivalent experience)</li>
      <li>Minimum 2 years of professional UX design experience</li>
      <li>Strong portfolio demonstrating user-centered design solutions</li>
      <li>Ability to handle multiple projects and meet deadlines</li>
    </ul>
  `
});


  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      console.log("Job updated:", form);
      navigate("/successcreateupdate", { state: { action: "update" } });
    }
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
    else back();
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case 1: return "Edit Basic Info";
      case 2: return "Edit Job Details";
      case 3: return "Edit Job Description";
      default: return "Edit Job";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="h-screen overflow-y-scroll scroll-container font-urbanist dark:bg-[#111d39] dark:text-white"
    >
      <div className="bg-white dark:bg-[#111d39] w-full">
        {/* Header */}
        <div className="fixed top-0 left-0 right-0 bg-white dark:bg-[#111d39] z-10">
          <div className="flex items-center justify-between max-w-[1024px] mx-auto px-6 py-[16px]">
            <div onClick={prevStep} className="p-[6px] border border-black dark:border-white rounded-lg cursor-pointer">
              <FaAngleLeft className="text-gray-500 dark:text-white size-[14px]" />
            </div>
            <h2 className="text-[20px] font-bold leading-[24px]">{getStepTitle()}</h2>
            <div className="w-[28px]" />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="max-w-[1024px] mx-auto mt-[74px] px-[24px]">
          {/* Step 1 */}
          {currentStep === 1 && (
            <>
              <label className="pl-3 font-semibold">Position<span className="text-red-500">*</span></label>
              <input name="position" value={form.position} onChange={handleChange} required
                className="w-full mt-2 mb-4 p-3 border rounded-xl text-sm focus:outline-none dark:bg-[#1f2a45] dark:border-gray-600 dark:text-white" />

              <label className="pl-3 font-semibold">Company<span className="text-red-500">*</span></label>
              <input name="company" value={form.company} onChange={handleChange} required
                className="w-full mt-2 mb-4 p-3 border rounded-xl text-sm focus:outline-none dark:bg-[#1f2a45] dark:border-gray-600 dark:text-white" />

              <label className="pl-3 font-semibold">Location</label>
              <input name="location" value={form.location} onChange={handleChange}
                className="w-full mt-2 mb-4 p-3 border rounded-xl text-sm focus:outline-none dark:bg-[#1f2a45] dark:border-gray-600 dark:text-white" />

              <label className="pl-3 font-semibold">Job Status</label>
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

              <label className="pl-3 font-semibold">Job Type</label>
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

              <label className="pl-3 font-semibold">Vacancy</label>
              <input name="vacancy" type="number" value={form.vacancy} onChange={handleChange}
                className="w-full mt-2 mb-24 p-3 border rounded-xl text-sm dark:bg-[#1f2a45] dark:border-gray-600 dark:text-white" />
            </>
          )}

          {/* Step 2 */}
          {currentStep === 2 && (
            <>
              <label className="pl-3 font-semibold">Salary</label>
              <input name="salary" value={form.salary} onChange={handleChange}
                className="w-full mt-2 mb-4 p-3 border rounded-xl text-sm dark:bg-[#1f2a45] dark:border-gray-600 dark:text-white" />

              <label className="pl-3 font-semibold">Application Deadline</label>
              <div className="relative">
                <input name="deadline" type="date" value={form.deadline} onChange={handleChange}
                  className="w-full mt-2 mb-4 p-3 pr-10 border rounded-xl text-sm appearance-none remove-date-icon dark:bg-[#1f2a45] dark:border-gray-600 dark:text-white" />
                <div className="absolute top-6 right-4">
                  <img src={images.calender} alt="calendar" className="dark:invert" />
                </div>
              </div>

              <label className="pl-3 font-semibold">Contact Email</label>
              <input name="email" type="email" value={form.email} onChange={handleChange}
                className="w-full mt-2 mb-4 p-3 border rounded-xl text-sm dark:bg-[#1f2a45] dark:border-gray-600 dark:text-white" />

              <label className="pl-3 font-semibold mb-2 block">Required Skills</label>
              <Editor
                value={form.skills}
                onEditorChange={(content) => setForm(prev => ({ ...prev, skills: content }))}
                apiKey="your-api-key"
                init={getTinyMCEConfig(theme)}
              />

              <label className="pl-3 font-semibold mb-2 block mt-6">Job Facilities</label>
              <Editor
                value={form.facilities}
                onEditorChange={(content) => setForm(prev => ({ ...prev, facilities: content }))}
                apiKey="your-api-key"
                init={getTinyMCEConfig(theme)}
              />
              <div className="mb-24"></div>
            </>
          )}

          {/* Step 3 */}
          {currentStep === 3 && (
            <>
              <label className="pl-3 font-semibold mb-2 block">About</label>
              <Editor
                value={form.about}
                onEditorChange={(content) => setForm(prev => ({ ...prev, about: content }))}
                apiKey="your-api-key"
                init={getTinyMCEConfig(theme)}
              />

              <label className="pl-3 font-semibold mb-2 block mt-6">Requirements</label>
              <Editor
                value={form.requirements}
                onEditorChange={(content) => setForm(prev => ({ ...prev, requirements: content }))}
                apiKey="your-api-key"
                init={getTinyMCEConfig(theme)}
              />
              <div className="mb-24"></div>
            </>
          )}
          {/* Bottom Button */}
          <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-[#111d39] py-4 z-10">
            <div className="max-w-[1024px] mx-auto px-6">
              <button
                type="submit"
                className="w-full bg-[#2869FE] p-[16px] text-white font-medium rounded-xl"
              >
                {currentStep < 3 ? "Next" : "Save Changes"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </motion.div>
  );
};
export default EditJob;
