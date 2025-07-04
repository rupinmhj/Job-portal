import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import images from "../assets/images";

const EditJob = () => {
  const navigate = useNavigate();
  const back = () => navigate(-1);

  const [form, setForm] = useState({
    position: "", company: "", location: "",
    status: "Open", type: "Full-time", vacancy: "1",
    salary: "", deadline: "", email: "",
    skills: "", facilities: "", about: "", requirements: ""
  });

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/successcreateupdate", { state: { action: "update" } });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="h-screen overflow-y-scroll scroll-container font-urbanist dark:bg-[#111d39] dark:text-white"
    >
      <div className="bg-white dark:bg-[#111d39] text-[#121927] dark:text-white w-full lg:px-[232px] xl:px-[274px]">
        {/* Header */}
        <div className="fixed top-0 left-0 right-0 bg-white dark:bg-[#111d39] z-10">
          <div className="flex items-center justify-between px-[24px] lg:px-[252px] xl:px-[294px] py-[16px]">
            <div onClick={back} className="p-[6px] border border-black dark:border-white rounded-lg cursor-pointer">
              <FaAngleLeft className="text-gray-500 dark:text-white size-[14px]" />
            </div>
            <h2 className="text-[20px] font-bold leading-[24px]">Edit Job</h2>
            <div className="w-[28px]" />
          </div>
        </div>

        {/* Form */}
        <div className="px-[24px] mt-[74px]">
          <form onSubmit={handleSubmit}>
            <label className="pl-3 text-[15px] font-semibold">Position<span className="text-red-500">*</span></label>
            <input name="position" value={form.position} onChange={handleChange} required placeholder="e.g. Senior UX Designer"
              className="w-full mt-2 mb-4 p-3 border rounded-xl text-[14px] focus:outline-none focus:border-gray-400 dark:bg-[#1f2a45] dark:border-gray-600 dark:text-white" />

            <label className="pl-3 text-[15px] font-semibold">Company<span className="text-red-500">*</span></label>
            <input name="company" value={form.company} onChange={handleChange} required placeholder="e.g. Google"
              className="w-full mt-2 mb-4 p-3 border rounded-xl text-[14px] focus:outline-none focus:border-gray-400 dark:bg-[#1f2a45] dark:border-gray-600 dark:text-white" />

            <label className="pl-3 text-[15px] font-semibold">Location</label>
            <input name="location" value={form.location} onChange={handleChange} placeholder="e.g. Kathmandu, Nepal"
              className="w-full mt-2 mb-4 p-3 border rounded-xl text-[14px] focus:outline-none focus:border-gray-400 dark:bg-[#1f2a45] dark:border-gray-600 dark:text-white" />

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

            <label className="pl-3 text-[15px] font-semibold">Vacancy</label>
            <input name="vacancy" type="number" value={form.vacancy} onChange={handleChange}
              className="w-full mt-2 mb-4 p-3 border rounded-xl text-[14px] focus:outline-none focus:border-gray-400 dark:bg-[#1f2a45] dark:border-gray-600 dark:text-white" />

            <label className="pl-3 text-[15px] font-semibold">Salary</label>
            <input name="salary" value={form.salary} onChange={handleChange} placeholder="e.g. 40,000 - 60,000"
              className="w-full mt-2 mb-4 p-3 border rounded-xl text-[14px] focus:outline-none focus:border-gray-400 dark:bg-[#1f2a45] dark:border-gray-600 dark:text-white" />

            <label className="pl-3 text-[15px] font-semibold">Application Deadline</label>
            <input name="deadline" type="date" value={form.deadline} onChange={handleChange}
              className="w-full mt-2 mb-4 p-3 border rounded-xl text-[14px] focus:outline-none focus:border-gray-400 dark:bg-[#1f2a45] dark:border-gray-600 dark:text-white" />

            <label className="pl-3 text-[15px] font-semibold">Contact Email</label>
            <input name="email" type="email" value={form.email} onChange={handleChange}
              className="w-full mt-2 mb-4 p-3 border rounded-xl text-[14px] focus:outline-none focus:border-gray-400 dark:bg-[#1f2a45] dark:border-gray-600 dark:text-white" />

            <label className="pl-3 text-[15px] font-semibold">Required Skills</label>
            <textarea name="skills" value={form.skills} onChange={handleChange} placeholder="List required skills..."
              className="w-full h-[150px] mt-2 mb-4 p-3 border rounded-xl text-[14px] focus:outline-none focus:border-gray-400 dark:bg-[#1f2a45] dark:border-gray-600 dark:text-white" />

            <label className="pl-3 text-[15px] font-semibold">Job Facilities</label>
            <textarea name="facilities" value={form.facilities} onChange={handleChange} placeholder="e.g. Remote work, Free meals"
              className="w-full h-[150px] mt-2 mb-4 p-3 border rounded-xl text-[14px] focus:outline-none focus:border-gray-400 dark:bg-[#1f2a45] dark:border-gray-600 dark:text-white" />

            <label className="pl-3 text-[15px] font-semibold">About the Role</label>
            <textarea name="about" value={form.about} onChange={handleChange} placeholder="Describe the job responsibilities..."
              className="w-full h-[150px] mt-2 mb-4 p-3 border rounded-xl text-[14px] focus:outline-none focus:border-gray-400 dark:bg-[#1f2a45] dark:border-gray-600 dark:text-white" />

            <label className="pl-3 text-[15px] font-semibold">Requirement Skills for the Role</label>
            <textarea name="requirements" value={form.requirements} onChange={handleChange} placeholder="e.g. Fluent English, Teamwork"
              className="w-full h-[150px] mt-2 mb-[120px] p-3 border rounded-xl text-[14px] focus:outline-none focus:border-gray-400 dark:bg-[#1f2a45] dark:border-gray-600 dark:text-white" />

            {/* Submit Button */}
            <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-[#111d39] py-4 z-10">
              <div className="px-[24px] lg:px-[252px]">
                <button type="submit" className="w-full bg-[#2869FE] text-white p-[16px] font-medium rounded-xl">
                  Edit Job
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
