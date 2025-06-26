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
    className="h-screen overflow-y-scroll scroll-container"
  >
    <div className=" bg-white   text-[#121927] font-urbanist  w-full ">
      <div className="fixed top-0 left-0 right-0 bg-white z-10">
        <div className="flex items-center justify-between max-w-[1024px] mx-auto px-6 py-[16px]">
          <div className="p-[6px] border rounded-lg border-black cursor-pointer"   onClick={back}>
            <FaAngleLeft
            
              className="text-gray-500  size-[14px]"
            />
          </div>
          <h2 className="text-[20px] font-bold leading-[24px]">
            Create Job
          </h2>
          <h2
            className="w-[28px]"
          >
            
          </h2>
        </div>
      </div>

      <div className="px-[24px] max-w-[1024px] mx-auto mt-[74px] ">
       <form onSubmit={handleSubmit}>
  {/* Position */}
  <label className="pl-3 text-[15px] font-semibold">Position<span className="text-red-500">*</span></label>
  <input name="position" value={form.position} onChange={handleChange} required placeholder="e.g. Senior UX Designer"
    className="w-full mt-2 mb-4 p-3 border rounded-xl text-[14px] focus:border-gray-400 focus:outline-none" />

  {/* Company */}
  <label className="pl-3 text-[15px] font-semibold">Company<span className="text-red-500">*</span></label>
  <input name="company" value={form.company} onChange={handleChange} required placeholder="e.g. Google"
    className="w-full mt-2 mb-4 p-3 border rounded-xl text-[14px] focus:border-gray-400 focus:outline-none" />

  {/* Location */}
  <label className="pl-3 text-[15px] font-semibold">Location</label>
  <input name="location" value={form.location} onChange={handleChange} placeholder="e.g. Kathmandu, Nepal"
    className="w-full mt-2 mb-4 p-3 border rounded-xl text-[14px] focus:border-gray-400 focus:outline-none" />

  {/* Job Status */}
  <label className="pl-3 text-[15px] font-semibold">Job Status</label>
  <select name="status" value={form.status} onChange={handleChange}
    className="w-full mt-2 mb-4 p-3 border rounded-xl text-[14px] focus:border-gray-400 focus:outline-none">
    <option value="Open">Open</option>
    <option value="Closed">Closed</option>
  </select>

  {/* Job Type */}
  <label className="pl-3 text-[15px] font-semibold">Job Type</label>
  <select name="type" value={form.type} onChange={handleChange}
    className="w-full mt-2 mb-4 p-3 border rounded-xl text-[14px] focus:border-gray-400 focus:outline-none">
    <option value="Full-time">Full-time</option>
    <option value="Part-time">Part-time</option>
    <option value="Internship">Internship</option>
    <option value="Freelance">Freelance</option>
  </select>

  {/* Vacancy */}
  <label className="pl-3 text-[15px] font-semibold">Vacancy</label>
  <input name="vacancy" value={form.vacancy} onChange={handleChange} type="number"
    className="w-full mt-2 mb-4 p-3 border rounded-xl text-[14px] focus:border-gray-400 focus:outline-none" />

  {/* Salary */}
  <label className="pl-3 text-[15px] font-semibold">Salary</label>
  <input name="salary" value={form.salary} onChange={handleChange} placeholder="e.g. 40,000 - 60,000"
    className="w-full mt-2 mb-4 p-3 border rounded-xl text-[14px] focus:border-gray-400 focus:outline-none" />

  {/* Deadline */}
  <label className="pl-3 text-[15px] font-semibold">Application Deadline</label>
  <input name="deadline" value={form.deadline} onChange={handleChange} type="date"
    className="w-full mt-2 mb-4 p-3 border rounded-xl text-[14px] focus:border-gray-400 focus:outline-none" />

  {/* Contact Email */}
  <label className="pl-3 text-[15px] font-semibold">Contact Email</label>
  <input name="email" value={form.email} onChange={handleChange} type="email" required
    className="w-full mt-2 mb-4 p-3 border rounded-xl text-[14px] focus:border-gray-400 focus:outline-none" />

  {/* Required Skills */}
  <label className="pl-3 text-[15px] font-semibold">Required Skills</label>
  <textarea name="skills" value={form.skills} onChange={handleChange} placeholder="List required skills..."
    className="w-full mt-2 mb-4 p-3 border rounded-xl text-[14px] focus:border-gray-400 focus:outline-none" />

  {/* Job Facilities */}
  <label className="pl-3 text-[15px] font-semibold">Job Facilities</label>
  <textarea name="facilities" value={form.facilities} onChange={handleChange} placeholder="e.g. Remote work, Free meals"
    className="w-full mt-2 mb-4 p-3 border rounded-xl text-[14px] focus:border-gray-400 focus:outline-none" />

  {/* About the Role */}
  <label className="pl-3 text-[15px] font-semibold">About the Role</label>
  <textarea name="about" value={form.about} onChange={handleChange} placeholder="Describe the job responsibilities..."
    className="w-full mt-2 mb-4 p-3 border rounded-xl text-[14px] focus:border-gray-400 focus:outline-none" />

  {/* Requirement Skills for Role */}
  <label className="pl-3 text-[15px] font-semibold">Requirement Skills for the Role</label>
  <textarea name="requirements" value={form.requirements} onChange={handleChange} placeholder="e.g. Fluent English, Teamwork"
    className="w-full mt-2 mb-[120px] p-3 border rounded-xl text-[14px] focus:border-gray-400 focus:outline-none" />

  {/* Submit Button */}
  <div className="fixed bottom-0 left-0 right-0 bg-white py-4 z-10">
    <div className="max-w-[1024px] mx-auto px-6">
      <button type="submit" className="w-full bg-[#2869FE] p-[16px] text-white font-medium rounded-xl">
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
