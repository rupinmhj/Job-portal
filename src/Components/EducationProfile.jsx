import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaAngleLeft, FaPlus } from "react-icons/fa6";
import { MdEdit, MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import useAxiosAuth from "../hooks/useAxiosAuth";
import Swal from "sweetalert2";
// --- Header Component ---
const Header = ({ onBack, onAdd }) => (
  <div className="fixed top-0 left-0 right-0 bg-white z-10 dark:bg-[#111d39]">
    <div className="flex items-center justify-between max-w-[1024px] mx-auto px-[24px] pt-[16px] pb-[24px]">
      <div onClick={onBack} className="p-[6px] border rounded-lg border-black cursor-pointer dark:border-white">
        <FaAngleLeft className="text-gray-500 size-[14px] dark:text-white" />
      </div>
      <h2 className="text-[20px] font-bold leading-[24px] ml-6 dark:text-white">Education</h2>
      <button onClick={onAdd} className="bg-[#2869FE] text-white px-[12px] py-[8px] rounded-lg text-[14px] font-semibold flex items-center gap-[4px]">
        <FaPlus className="size-[12px]" />
        <span className="hidden sm:block">Add</span>
      </button>
    </div>
  </div>
);

// --- EducationCard Component ---
const EducationCard = ({ education, onEdit, onRemove }) => {
  return (
    <div className="bg-white dark:bg-[#242f49] rounded-xl p-[18px] border border-gray-200 dark:border-gray-800 shadow-md">
      <div className="flex items-start justify-between mb-[16px]">
        <div className="flex-1 space-y-[6px]">
          <h3 className="text-[18px] font-bold leading-[22px] text-[#121927] dark:text-white">
            {education.degree_title || "N/A"}
          </h3>
          <p className="text-[14px] text-gray-700 dark:text-gray-300 font-medium">
            {education.major_subject}
          </p>
          <p className="text-[13px] text-gray-500 dark:text-gray-400">
            {education.institution_name}, {education.university_name}
          </p>
          <p className="text-[13px] text-gray-600 dark:text-gray-300">
            {education.start_year} - {education.currently_studying ? "Present" : education.graduation_year}
          </p>
          {education.result && (
            <p className="text-[13px] font-medium text-[#121927]/80 dark:text-gray-300">
              Result: {education.result}
            </p>
          )}
        </div>

        <div className="flex gap-[8px] ml-[12px]">
          <button
            onClick={() => onEdit(education)}
            className="p-[8px] bg-[#E5FAF5] dark:bg-[#313b54] rounded-lg hover:bg-[#d1f5e8] dark:hover:bg-[#3a4a6a]"
          >
            <MdEdit className="size-[16px] text-[#00CC9A]" />
          </button>
          <button
            onClick={() => onRemove(education.id)}
            className="p-[8px] bg-[#FFEFF8] dark:bg-[#313b54] rounded-lg hover:bg-[#ffe0f0] dark:hover:bg-[#3a4a6a]"
          >
            <MdDelete className="size-[16px] text-[#FF5FBF]" />
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Empty State ---
const EmptyState = ({ onAdd }) => (
  <div className="text-center py-[48px]">
    <div className="text-[#121927]/60 dark:text-gray-300 text-[16px] mb-[16px]">
      No education records found. Add your first education entry!
    </div>
    <button
      onClick={onAdd}
      className="bg-[#2869FE] text-white px-[16px] py-[8px] rounded-xl text-[14px] font-semibold flex items-center gap-[8px] mx-auto"
    >
      <FaPlus className="size-[12px]" />
      Add Education
    </button>
  </div>
);

// --- Skeleton Loader ---
const SkeletonLoader = () => {
  return (
    <div className="max-w-[1024px] mx-auto px-[24px] pt-[80px]">
      <div className="space-y-[16px]">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="bg-white dark:bg-[#242f49] rounded-xl p-[18px] border border-gray-200 dark:border-gray-800 shadow-md animate-pulse"
          >
            <div className="flex items-start justify-between mb-[16px]">
              <div className="flex-1 space-y-[10px]">
                <div className="h-[20px] w-[70%] bg-gray-300 dark:bg-gray-600 rounded-md" />
                <div className="h-[16px] w-[60%] bg-gray-200 dark:bg-gray-700 rounded-md" />
                <div className="h-[14px] w-[80%] bg-gray-200 dark:bg-gray-700 rounded-md" />
                <div className="h-[14px] w-[40%] bg-gray-200 dark:bg-gray-700 rounded-md" />
                <div className="h-[14px] w-[30%] bg-gray-200 dark:bg-gray-700 rounded-md" />
              </div>

              <div className="flex gap-[8px] ml-[12px]">
                <div className="h-[32px] w-[32px] bg-gray-200 dark:bg-gray-700 rounded-lg" />
                <div className="h-[32px] w-[32px] bg-gray-200 dark:bg-gray-700 rounded-lg" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


// --- Main Education Preview Component ---
const EducationProfile = () => {
  const navigate = useNavigate();
  const api = useAxiosAuth();
  const [educations, setEducations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEducationData = async () => {
      try {
        setLoading(true);
        const res = await api.get("/dashboards/jobseeker/educations/");
        setEducations(res.data); // Make sure your backend returns an array
      } catch (error) {
        console.error("Failed to fetch education data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEducationData();
  }, [api]);

  const handleBack = () => navigate(-1);
  const handleAdd = () => navigate("/education/add");
  const handleEdit = (education) => {
   navigate(`/education/edit/${education.id}`);
    console.log("Edit:", education);
  };
const handleRemove = async (id) => {
  const result = await Swal.fire({
    title: 'Are you sure?',
    text: "You want to delete this education?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'Cancel',
  });

  if (result.isConfirmed) {
    try {
      await api.delete(`/dashboards/educations/${id}/update/`);
      setEducations(prev => prev.filter(edu => edu.id !== id));

      // Optional success toast
      Swal.fire('Deleted!', 'Your education entry has been deleted.', 'success');
    } catch (err) {
      Swal.fire('Error!', 'Failed to delete. Please try again.', 'error');
      console.error("Delete failed", err);
    }
  }
};


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, delay: 0.15 }}
      className="min-h-screen overflow-y-scroll scroll-container dark:bg-[#111d39] text-[#121927] font-urbanist"
    >
      <Header onBack={handleBack} onAdd={handleAdd} />

      {loading ? (
        <SkeletonLoader />
      ) : (
        <div className="max-w-[1024px] mx-auto px-[24px] pt-[80px] pb-[100px]">
          {educations.length > 0 ? (
            <div className="space-y-[16px]">
              {educations.map(education => (
                <EducationCard
                  key={education.id}
                  education={education}
                  onEdit={handleEdit}
                  onRemove={handleRemove}
                />
              ))}
            </div>
          ) : (
            <EmptyState onAdd={handleAdd} />
          )}
        </div>
      )}
    </motion.div>
  );
};

export default EducationProfile;
