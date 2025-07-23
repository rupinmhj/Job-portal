import { useEffect, useState, useContext } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
import images from "../assets/images";
import { motion } from "framer-motion";
import AuthContext from "../Context/authContext";
import useAxiosAuth from "../hooks/useAxiosAuth";
import { toast } from "react-toastify";

const ApplyJob = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const axiosAuth = useAxiosAuth();
  const { email, role } = useContext(AuthContext);

  const [form, setForm] = useState({
    name: "",
    website: "",
    motivational_letter: "",
    resume: null,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileChange = (e) => {
    setForm((prev) => ({
      ...prev,
      resume: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email && !role) {
      toast.error("You must be signed in to apply.");
      navigate("/signin");
      return;
    }

    if (!form.name || !form.resume) {
      toast.error("Please fill all required fields");
      return;
    }

    setLoading(true);

    try {
      const data = new FormData();
      data.append("name", form.name);
      data.append("website", form.website);
      data.append("motivational_letter", form.motivational_letter);
      data.append("resume", form.resume);
      // data.append("job", jobId);

      await axiosAuth.post(`/applications/${id}/create/`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Application submitted successfully!");
      navigate("/successapplied");
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!email && !role) {
      navigate("/signin");
    }
  }, [email, role, navigate]);

  const back = () => navigate(-1);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="h-screen overflow-y-scroll scroll-container dark:bg-[#111d39]"
    >
      <div className="bg-white dark:bg-[#111d39] max-w-[1024px] mx-auto px-6 text-[#121927] dark:text-white font-urbanist w-full">
        {/* Header */}
        <div className="fixed top-0 left-0 right-0 bg-white dark:bg-[#111d39] z-10">
          <div className="flex items-center justify-between max-w-[1024px] mx-auto px-6 py-[16px]">
            <div className="p-[6px] border rounded-lg border-black dark:border-white cursor-pointer" onClick={back}>
              <FaAngleLeft className="text-gray-500 size-[14px] dark:text-white" />
            </div>
            <h2 className="text-[20px] font-bold leading-[24px]">Apply Job</h2>
            <div className="w-[28px]"></div>
          </div>
        </div>

        {/* Form */}
        <div className="mt-[74px]">
          <form onSubmit={handleSubmit}>
            {/* Full Name */}
            <label className="pl-[12px] text-[15px] leading-[18px] font-semibold">
              Full Name<span className="text-red-500">*</span>
            </label>
            <div className="relative mb-[20px]">
              <input
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                required
                className="focus:border-gray-400 focus:outline-none text-[14px] dark:focus-within:border-gray-300 dark:border-gray-600 border shadow-sm rounded-xl mt-[12px] pl-[16px] py-[14px] pr-[20px] w-full dark:bg-[#1f2a45] dark:border-gray-600 dark:text-white"
                placeholder="Type your full name"
              />
            </div>

            {/* Portfolio */}
            <label className="pl-[12px] text-[15px] leading-[18px] font-semibold">
              Website, Blog, or Portfolio
            </label>
            <div className="relative mb-[20px]">
              <input
                name="website"
                type="url"
                value={form.website}
                onChange={handleChange}
                className="focus:border-gray-400 focus:outline-none dark:focus-within:border-gray-300 dark:border-gray-600 text-[14px] border shadow-sm rounded-xl mt-[12px] pl-[16px] py-[14px] pr-[20px] w-full dark:bg-[#1f2a45] dark:border-gray-600 dark:text-white"
                placeholder="Type your portfolio address"
              />
            </div>

            {/* Upload CV */}
            <label className="pl-[12px] text-[15px] leading-[18px] font-semibold">
              Upload CV<span className="text-red-500">*</span>
            </label>
            <div className="mt-4 mb-4 flex border border-gray-200 dark:border-gray-600 dark:focus-within:border-gray-300 py-6 rounded-xl justify-center items-center flex-col cursor-pointer relative dark:bg-[#1f2a45]">
              <input
                type="file"
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                required
                onChange={handleFileChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
              <img src={images.gallery} alt="Upload icon" className="dark:invert" />
              <p className="text-gray-600 dark:text-gray-300 mt-[16px] text-[12px] font-medium">Format DOC, PDF, JPG</p>
              <p className="text-[#2869FE] font-semibold text-[14px] mt-[2px]">Browse Files</p>
              {form.resume && (
                <p className="text-green-600 text-[12px] mt-2 font-medium">
                  Selected: {form.resume.name}
                </p>
              )}
            </div>

            {/* Motivation Letter */}
            <label className="pl-[12px] text-[15px] leading-[18px] font-semibold">Motivational letter</label>
            <textarea
              name="motivational_letter"
              value={form.motivational_letter}
              onChange={handleChange}
              className="w-full h-[150px] focus:border-gray-400 rounded-[16px] mb-[100px] dark:focus-within:border-gray-300 dark:border-gray-600 outline-none mt-4 px-[20px] font-urbanist py-[14px] text-[14px] font-semibold text-gray-700 dark:text-white dark:bg-[#1f2a45] border border-gray-200 dark:border-gray-600"
              placeholder="Write something..."
            ></textarea>

            {/* Submit Button */}
            <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-[#111d39] py-4 z-10">
              <div className="max-w-[1024px] mx-auto px-6">
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#2869FE]"} p-[16px] text-white font-medium rounded-xl`}
                >
                  {loading ? "Submitting..." : "Continue"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default ApplyJob;