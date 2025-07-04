import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import images from "../assets/images";
import { motion } from 'framer-motion';

const ApplyJob = () => {
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="h-screen overflow-y-scroll scroll-container dark:bg-[#111d39] "
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
        <div className=" mt-[74px]">
          <form>
            {/* Full Name */}
            <label className="pl-[12px] text-[15px] leading-[18px] font-semibold">Full Name<span className="text-red-500">*</span></label>
            <div className="relative mb-[20px]">
              <input
                type="text"
                required
                className="focus:border-gray-400 focus:outline-none text-[14px] dark:focus-within:border-gray-300 dark:border-gray-600 border shadow-sm rounded-xl mt-[12px] pl-[16px] py-[14px] pr-[20px] w-full dark:bg-[#1f2a45] dark:border-gray-600 dark:text-white"
                placeholder="Type your full name"
              />
            </div>

            {/* Portfolio */}
            <label className="pl-[12px] text-[15px] leading-[18px] font-semibold">Website, Blog, or Portfolio<span className="text-red-500">*</span></label>
            <div className="relative mb-[20px]">
              <input
                type="text"
                required
                className="focus:border-gray-400 focus:outline-none dark:focus-within:border-gray-300 dark:border-gray-600 text-[14px] border shadow-sm rounded-xl mt-[12px] pl-[16px] py-[14px] pr-[20px] w-full dark:bg-[#1f2a45] dark:border-gray-600 dark:text-white"
                placeholder="Type your portfolio address"
              />
            </div>

            {/* Upload CV */}
            <label className="pl-[12px] text-[15px] leading-[18px] font-semibold">Upload CV<span className="text-red-500">*</span></label>
            <div className="mt-4 mb-4 flex border border-gray-200 dark:border-gray-600 dark:focus-within:border-gray-300 dark:border-gray-600 py-6 rounded-xl justify-center items-center flex-col cursor-pointer relative dark:bg-[#1f2a45]">
              <input
                type="file"
                className="absolute inset-0 opacity-0 cursor-pointer"
                onChange={(e) => console.log(e.target.files)}
              />
              <img src={images.gallery} alt="Upload icon " className="dark:invert"/>
              <p className="text-gray-600 dark:text-gray-300 mt-[16px] text-[12px] font-medium">Format DOC, PDF, JPG</p>
              <p className="text-[#2869FE] font-semibold text-[14px] mt-[2px]">Browse Files</p>
            </div>

            {/* Motivation Letter */}
            <label className="pl-[12px] text-[15px] leading-[18px] font-semibold">Motivational letter</label>
            <textarea
              className="w-full h-[150px] focus:border-gray-400 rounded-[16px] mb-[100px] dark:focus-within:border-gray-300 dark:border-gray-600 outline-none mt-4 px-[20px] font-urbanist py-[14px] text-[14px] font-semibold text-gray-700 dark:text-white dark:bg-[#1f2a45] border border-gray-200 dark:border-gray-600"
              placeholder="Write something..."
            ></textarea>

            {/* Continue Button */}
            <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-[#111d39] py-4 z-10">
              <div className="max-w-[1024px] mx-auto px-6">
                <button
                  className="w-full bg-[#2869FE] p-[16px] text-white font-medium rounded-xl"
                  onClick={() => navigate('/successapplied')}
                >
                  Continue
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
