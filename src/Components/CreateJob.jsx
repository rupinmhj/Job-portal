import React from "react";
import { useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import images from "../assets/images";

import { motion } from 'framer-motion';

const CreateJob = () => {
  const navigate = useNavigate();
  const back = () => navigate(-1);

  const [form, setForm] = useState({
    position: "", company: "Google", location: "",
    status: "Open", type: "Full-time", vacancy: "1",
    salary: "", deadline: "", email: "",
    skills: "", facilities: "",
    about: "", requirements: ""
  });

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Job posted:", form);
    navigate('/successcreateupdate',{state:{action:'create'}});
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
            onClick={back}
          >
            <FaAngleLeft className="text-gray-500 size-[14px] dark:text-white" />
          </div>
          <h2 className="text-[20px] font-bold leading-[24px]">Create Job</h2>
          <div className="w-[28px]"></div>
        </div>
      </div>

      {/* Form */}
      <div className="px-[24px] max-w-[1024px] mx-auto mt-[74px]">
        <form onSubmit={handleSubmit}>
          {/* Position */}
          <label className="pl-3 text-[15px] font-semibold">Position<span className="text-red-500">*</span></label>
          <input
            name="position"
            value={form.position}
            onChange={handleChange}
            required
            placeholder="e.g. Senior UX Designer"
            className="w-full mt-2 mb-4 p-3 border rounded-xl text-[14px] focus:border-gray-400 focus:outline-none dark:bg-[#1f2a45] dark:border-gray-600 dark:text-white"
          />

          {/* Company */}
          <label className="pl-3 text-[15px] font-semibold">Company<span className="text-red-500">*</span></label>
          <input
            name="company"
            value={form.company}
            onChange={handleChange}
            required
            placeholder="e.g. Google"
            className="w-full mt-2 mb-4 p-3 border rounded-xl text-[14px] focus:border-gray-400 focus:outline-none dark:bg-[#1f2a45] dark:border-gray-600 dark:text-white"
          />

          {/* Location */}
          <label className="pl-3 text-[15px] font-semibold">Location</label>
          <input
            name="location"
            value={form.location}
            onChange={handleChange}
            placeholder="e.g. Kathmandu, Nepal"
            className="w-full mt-2 mb-4 p-3 border rounded-xl text-[14px] focus:border-gray-400 focus:outline-none dark:bg-[#1f2a45] dark:border-gray-600 dark:text-white"
          />

          {/* Job Status */}
          <label className="pl-3 text-[15px] font-semibold">Job Status</label>
          <div className="w-full mt-2 mb-4 p-3  border rounded-xl text-[14px] focus:border-gray-400 focus:outline-none dark:bg-[#1f2a45] dark:border-gray-600 dark:text-white">
            <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="w-full dark:bg-[#1f2a45] focus:outline-none "
          >
            <option value="Open">Open</option>
            <option value="Closed">Closed</option>
          </select>
          </div>
          

          {/* Job Type */}
          <label className="pl-3 text-[15px] font-semibold">Job Type</label>
          <div className="mt-2 mb-4 p-3  border rounded-xl text-[14px] focus:border-gray-400 focus:outline-none dark:bg-[#1f2a45] dark:border-gray-600 dark:text-white">
             <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="w-full dark:bg-[#1f2a45] focus:outline-none"
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
            className="w-full mt-2 mb-4 p-3 border rounded-xl text-[14px] focus:border-gray-400 focus:outline-none dark:bg-[#1f2a45] dark:border-gray-600 dark:text-white"
          />

          {/* Salary */}
          <label className="pl-3 text-[15px] font-semibold">Salary</label>
          <input
            name="salary"
            value={form.salary}
            onChange={handleChange}
            placeholder="e.g. 40,000 - 60,000"
            className="w-full mt-2 mb-4 p-3 border rounded-xl text-[14px] focus:border-gray-400 focus:outline-none dark:bg-[#1f2a45] dark:border-gray-600 dark:text-white"
          />

          {/* Deadline */}
          <label className="pl-3 text-[15px] font-semibold">Application Deadline</label>
          <input
            name="deadline"
            value={form.deadline}
            onChange={handleChange}
            type="date"
className="w-full mt-2 mb-4 p-3 pr-10 border rounded-xl text-[14px] 
               focus:border-gray-400 focus:outline-none 
               dark:bg-[#1f2a45] dark:border-gray-600 dark:text-white 
               appearance-none"          />

          {/* Email */}
          <label className="pl-3 text-[15px] font-semibold">Contact Email</label>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            required
            className="w-full mt-2 mb-4 p-3 border rounded-xl text-[14px] focus:border-gray-400 focus:outline-none dark:bg-[#1f2a45] dark:border-gray-600 dark:text-white"
          />

          {/* Skills */}
          <label className="pl-3 text-[15px] font-semibold">Required Skills</label>
          <textarea
            name="skills"
            value={form.skills}
            onChange={handleChange}
            placeholder="List required skills..."
            className="w-full h-[200px] mt-2 mb-4 p-3 border rounded-xl text-[14px] focus:border-gray-400 focus:outline-none dark:bg-[#1f2a45] dark:border-gray-600 dark:text-white"
          />

          {/* Facilities */}
          <label className="pl-3 text-[15px] font-semibold">Job Facilities</label>
          <textarea
            name="facilities"
            value={form.facilities}
            onChange={handleChange}
            placeholder="e.g. Remote work, Free meals"
            className="w-full mt-2 mb-4 p-3 border rounded-xl text-[14px] focus:border-gray-400 focus:outline-none dark:bg-[#1f2a45] dark:border-gray-600 dark:text-white"
          />

          {/* About */}
          <label className="pl-3 text-[15px] font-semibold">About the Role</label>
          <textarea
            name="about"
            value={form.about}
            onChange={handleChange}
            placeholder="Describe the job responsibilities..."
            className="w-full h-[200px] mt-2 mb-4 p-3 border rounded-xl text-[14px] focus:border-gray-400 focus:outline-none dark:bg-[#1f2a45] dark:border-gray-600 dark:text-white"
          />

          {/* Requirements */}
          <label className="pl-3 text-[15px] font-semibold">Requirement Skills for the Role</label>
          <textarea
            name="requirements"
            value={form.requirements}
            onChange={handleChange}
            placeholder="e.g. Fluent English, Teamwork"
            className="w-full h-[200px] mt-2 mb-[120px] p-3 border rounded-xl text-[14px] focus:border-gray-400 focus:outline-none dark:bg-[#1f2a45] dark:border-gray-600 dark:text-white"
          />

          {/* Submit Button */}
          <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-[#111d39] py-4 z-10">
            <div className="max-w-[1024px] mx-auto px-6">
              <button
                type="submit"
                className="w-full bg-[#2869FE] p-[16px] text-white font-medium rounded-xl"
              >
                Post Job
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
