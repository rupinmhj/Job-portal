import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaAngleLeft, FaPlus } from "react-icons/fa6";
import { MdEdit, MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import useAxiosAuth from "../hooks/useAxiosAuth";
import Swal from 'sweetalert2';

// --- Header ---
const Header = ({ onBack, onAdd }) => (
  <div className="fixed top-0 left-0 right-0 bg-white z-10 dark:bg-[#111d39]">
    <div className="flex items-center justify-between max-w-[1024px] mx-auto px-[24px] pt-[16px] pb-[24px]">
      <div onClick={onBack} className="p-[6px] border rounded-lg border-black cursor-pointer dark:border-white">
        <FaAngleLeft className="text-gray-500 size-[14px] dark:text-white" />
      </div>
      <h2 className="text-[20px] font-bold leading-[24px] ml-6 dark:text-white">Social Accounts</h2>
      <button
        onClick={onAdd}
        className="bg-[#2869FE] text-white px-[12px] py-[8px] rounded-lg text-[14px] font-semibold flex items-center gap-[4px]"
      >
        <FaPlus className="size-[12px]" />
        <span className="hidden sm:block">Add</span>
      </button>
    </div>
  </div>
);

// --- Card for Each Social Account ---
const SocialCard = ({ account, onEdit, onRemove }) => (
  <div className="bg-white dark:bg-[#242f49] rounded-xl p-[18px] border border-gray-200 dark:border-gray-800 shadow-md">
    <div className="flex items-start justify-between mb-[16px]">
      <div className="flex-1 space-y-[6px]">
        <h3 className="text-[18px] font-bold leading-[22px] text-[#121927] dark:text-white">
          {account.app_name || "N/A"}
        </h3>
        <p className="text-[14px] text-gray-700 dark:text-gray-300 font-medium">
          {account.url || "No link provided"}
        </p>
      
      </div>
      <div className="flex gap-[8px] ml-[12px]">
        <button
          onClick={() => onEdit(account)}
          className="p-[8px] bg-[#E5FAF5] dark:bg-[#313b54] rounded-lg hover:bg-[#d1f5e8] dark:hover:bg-[#3a4a6a]"
        >
          <MdEdit className="size-[16px] text-[#00CC9A]" />
        </button>
        <button
          onClick={() => onRemove(account.id)}
          className="p-[8px] bg-[#FFEFF8] dark:bg-[#313b54] rounded-lg hover:bg-[#ffe0f0] dark:hover:bg-[#3a4a6a]"
        >
          <MdDelete className="size-[16px] text-[#FF5FBF]" />
        </button>
      </div>
    </div>
  </div>
);

// --- Empty State ---
const EmptyState = ({ onAdd }) => (
  <div className="text-center py-[48px]">
    <div className="text-[#121927]/60 dark:text-gray-300 text-[16px] mb-[16px]">
      No social accounts found. Add your first account!
    </div>
    <button
      onClick={onAdd}
      className="bg-[#2869FE] text-white px-[16px] py-[8px] rounded-xl text-[14px] font-semibold flex items-center gap-[8px] mx-auto"
    >
      <FaPlus className="size-[12px]" />
      Add Social Account
    </button>
  </div>
);

// --- Skeleton Loader ---
const SkeletonLoader = () => (
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

// --- Main Component ---
const SocialAccountProfile = () => {
  const navigate = useNavigate();
  const api = useAxiosAuth();
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchSocialAccounts = async () => {
    try {
      setLoading(true);
      const res = await api.get("/dashboards/jobseeker/social_accounts/");
      console.log("Fetched:", res.data);
      setAccounts(Array.isArray(res.data) ? res.data: []);
    } catch (error) {
      console.error("Failed to fetch social accounts:", error);
      setAccounts([]); // ensure it's always an array
    } finally {
      setLoading(false);
    }
  };

  fetchSocialAccounts();
}, [api]);


  const handleBack = () => navigate(-1);
  const handleAdd = () => navigate("/socialaccounts/add");
  const handleEdit = (account) => navigate(`/socialaccounts/edit/${account.id}`);

  const handleRemove = async (id) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You want to delete this social account?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    });

    if (result.isConfirmed) {
      try {
        await api.delete(`/dashboards/social_accounts/${id}/update/`);
        setAccounts(prev => prev.filter(acc => acc.id !== id));
        Swal.fire('Deleted!', 'Social account has been deleted.', 'success');
      } catch (err) {
        Swal.fire('Error!', 'Delete failed. Try again.', 'error');
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
    {Array.isArray(accounts) && accounts.length > 0 ? (
      <div className="space-y-[16px]">
        {accounts.map(account => (
          <SocialCard
            key={account.id}
            account={account}
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

export default SocialAccountProfile;
