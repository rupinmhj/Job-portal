import React, { useState, useContext } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import useAxiosAuth from "../hooks/useAxiosAuth";
import images from "../assets/images";
import AuthContext from "../Context/authContext";

const SocialAccounts = () => {
  const api = useAxiosAuth();
  const { seekerDetails, email } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [accounts, setAccounts] = useState([
    { accountName: "",
      url: "" },
  ]);

  const navigate = useNavigate();
  const back = () => navigate(-1);

  const handleChange = (index, field, value) => {
    const updated = [...accounts];
    updated[index][field] = value;
    setAccounts(updated);
  };

  const addAccount = () => {
    setAccounts([...accounts, { accountName: "", url: "" }]);
  };

  const removeAccount = (index) => {
    const updated = accounts.filter((_, i) => i !== index);
    setAccounts(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await api.post("/social-accounts/", { accounts }); // Update endpoint
      navigate("/profile");
    } catch (err) {
      console.error("Submission error", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, delay: 0.15 }}
       className="h-screen overflow-y-scroll scroll-container dark:bg-[#111d39] font-urbanist">
      <div className="text-custBlackBold dark:text-white">
        {/* Header */}
        <div className="fixed left-0 right-0 top-0 z-30 bg-white dark:bg-[#111d39]">
          <div className="flex items-center justify-between p-[24px] pt-[16px] mx-auto max-w-[1024px]">
            <div onClick={back} className="flex gap-[18px] items-center">
              <div className="h-[30px] w-[30px] flex justify-center items-center border rounded-lg border-gray-500 dark:border-white cursor-pointer">
                <FaAngleLeft className="text-gray-500 h-[14px] w-[14px] dark:text-white" />
              </div>
            </div>
            <h2 className="text-[20px] font-bold leading-[24px]">Social Accounts</h2>
            <img src={images.home} onClick={() => navigate('/home')} className="h-6 w-6 cursor-pointer dark:invert" alt="home" />
          </div>
        </div>

        {/* Profile Info */}
        <div className="flex mt-[70px] items-center flex-col">
          <img src={seekerDetails?.profile_image||images.profileImage} className="size-[80.4px] border border-blue-600 rounded-2xl mb-[12px]" alt="Profile" />
          <h2 className="text-[18px] font-bold mb-2">{seekerDetails?.full_name}</h2>
          <h2 className="text-gray-400 text-[12px] font-medium">{email}</h2>
        </div>

        {/* Form */}
        <form className="max-w-[1024px] mx-auto px-6 mt-[20px] mb-[120px]">
          {accounts.map((account, index) => (
            <div key={index} className="border-t border-gray-300 mt-6 pt-4 relative">
              {accounts.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeAccount(index)}
                  className="text-gray-200 text-[14px] absolute top-3 right-0 flex items-center gap-1"
                >
                  <span className="text-[18px]">
                    <IoIosCloseCircleOutline />
                  </span>
                  <span>Clear</span>
                </button>
              )}

              {/* Account Name */}
              <div className="mt-[20px]">
                <label className="pl-[12px] mb-[12px] block text-4 leading-[19px] font-bold">Account Name</label>
                <input
                  type="text"
                  value={account.accountName}
                  onChange={(e) => handleChange(index, "accountName", e.target.value)}
                  placeholder="e.g. LinkedIn, Twitter"
                  className="w-full text-[14px] font-medium rounded-xl border-[0.5px] py-[14px] px-[20px] focus:outline-none focus:border-gray-500 dark:focus:border-gray-200 dark:bg-[#111d39] dark:text-white dark:border-gray-700"
                />
              </div>

              {/* URL */}
              <div className="mt-[20px]">
                <label className="pl-[12px] mb-[12px] block text-4 leading-[19px] font-bold">URL</label>
                <input
                  type="url"
                  value={account.url}
                  onChange={(e) => handleChange(index, "url", e.target.value)}
                  placeholder="e.g. https://linkedin.com/in/yourprofile"
                  className="w-full text-[14px] font-medium rounded-xl border-[0.5px] py-[14px] px-[20px] focus:outline-none focus:border-gray-500 dark:focus:border-gray-200 dark:bg-[#111d39] dark:text-white dark:border-gray-700"
                />
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={addAccount}
            className="mt-4 text-gray-200 text-[14px]"
          >
            + Add Another Social Account
          </button>

          {/* Save Button */}
          <div className="p-6 fixed bottom-0 left-0 right-0 mx-auto max-w-[1024px] bg-white dark:bg-[#111d39]">
            <button
              type="button"
              onClick={handleSubmit}
              disabled={loading}
              className={`p-4 rounded-[16px] w-full text-white text-[16px] font-bold transition-colors
              ${loading ? "bg-[#2869FE] opacity-50 cursor-not-allowed" : "bg-[#2869FE] hover:bg-[#1752e4]"}`}
            >
              {loading ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default SocialAccounts;
