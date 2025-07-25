import React, { useState, useContext, useEffect } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosAuth from "../hooks/useAxiosAuth";
import images from "../assets/images";
import AuthContext from "../Context/authContext";
import { motion } from 'framer-motion'

const defaultAccount = {
  app_name: "",
  url: ""
};

const SocialAccounts = ({ mode = "onboarding" }) => {
  const api = useAxiosAuth();
  const { seekerDetails, email } = useContext(AuthContext);
  const navigate = useNavigate();
  const { id: accountId } = useParams();

  const [loading, setLoading] = useState(false);
  const [accounts, setAccounts] = useState([defaultAccount]);

  const back = () => navigate(-1);

  const handleChange = (index, field, value) => {
    const updated = [...accounts];
    updated[index][field] = value;
    setAccounts(updated);
  };

  const addAccount = () => {
    setAccounts([...accounts, { ...defaultAccount }]);
  };

  const removeAccount = (index) => {
    setAccounts(accounts.filter((_, i) => i !== index));
  };

  useEffect(() => {
    if (mode === "edit" && accountId) {
      const fetchAccounts = async () => {
        try {
          const res = await api.get(`/dashboards/social_accounts/${accountId}/update/`);
          const data = res.data.data;
          console.log(data);
          setAccounts([{ app_name: data.app_name, url: data.url }]);
        } catch (err) {
          console.error("Fetch error", err);
        }
      };
      fetchAccounts();
    }
  }, [accountId, api, mode]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (mode === "edit") {
        console.log(accounts[0])
        await api.put(`/dashboards/social_accounts/${accountId}/update/`, accounts[0]);
        navigate("/socialaccountsprofile");
      } else {
        console.log(accounts[0])
        await api.post("/dashboards/jobseeker/social_accounts/", { accounts });
        navigate("/awards");
      }
    } catch (err) {
      console.error("Submission error", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3, delay: 0.15 }} className="h-screen overflow-y-scroll scroll-container dark:bg-[#111d39] font-urbanist">
      <div className="text-custBlackBold dark:text-white">
        <div className="fixed left-0 right-0 top-0 z-30 bg-white dark:bg-[#111d39]">
          <div className="flex items-center justify-between p-[24px] pt-[16px] mx-auto max-w-[1024px]">
            <div onClick={back} className="flex gap-[18px] items-center">
              <div className="h-[30px] w-[30px] flex justify-center items-center border rounded-lg border-gray-500 dark:border-white cursor-pointer">
                <FaAngleLeft className="text-gray-500 h-[14px] w-[14px] dark:text-white" />
              </div>
            </div>
            <h2 className="text-[20px] font-bold leading-[24px]">Social Accounts</h2>
 {
            mode === 'onboarding' ? <h2 onClick={() => navigate("/workexperience")} className="w-[30px] cursor-pointer">
              Skip
            </h2> : <img src={images.home} onClick={() => navigate("/home")} className="h-6 w-6 cursor-pointer dark:invert" alt="home" />
          }          </div>
        </div>

        <div className="flex mt-[70px] items-center flex-col">
          <img src={seekerDetails?.profile_image || images.profileImage} className="size-[80.4px] border border-blue-600 rounded-2xl mb-[12px]" alt="Profile" />
          <h2 className="text-[18px] font-bold mb-2">{seekerDetails?.full_name}</h2>
          <h2 className="text-gray-400 text-[12px] font-medium">{email}</h2>
        </div>

        <form className="max-w-[1024px] mx-auto px-6 mt-[20px] mb-[120px]">
          {accounts.map((account, index) => (
            <div key={index} className="border-t border-gray-300 mt-6 pt-4 relative">
              {(mode !== "edit" && accounts.length > 1) && (
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

              <div className="mt-[20px]">
                <label className="pl-3 text-[15px] font-semibold">Social Platform</label>
                <div className="w-full dark:focus-within:border-gray-300 h-[46.6px] focus-within:border-gray-400 dark:border-gray-600 mt-2 mb-4 px-3 cursor-pointer border rounded-xl text-[14px] focus:border-gray-400 focus:outline-none dark:bg-[#1f2a45] dark:border-gray-600 dark:text-white">
                  <select
                    name="app_name"
                    value={account.app_name}
                    onChange={(e) => handleChange(index, "app_name", e.target.value)}
                    className="w-full dark:bg-[#1f2a45] py-3 focus:outline-none cursor-pointer"
                  >
                    <option value="" disabled>Select platform</option>
                    <option value="facebook">Facebook</option>
                    <option value="linkedin">LinkedIn</option>
                    <option value="github">GitHub</option>
                    <option value="instagram">Instagram</option>
                    <option value="twitter">Twitter</option>
                  </select>
                </div>
              </div>

              <div className="mt-[20px]">
                <label className="pl-[12px] mb-[12px] block text-4 leading-[19px] font-bold">URL</label>
                <input
                  type="url"
                  value={account.url}
                  onChange={(e) => handleChange(index, "url", e.target.value)}
                  placeholder="e.g. https://linkedin.com/in/yourprofile"
                  className="w-full text-[14px] font-medium rounded-xl border-[0.5px] py-[14px] px-[20px] focus:outline-none focus:border-gray-500 dark:focus:border-gray-200 dark:bg-[#1f2a45] dark:text-white dark:border-gray-700"
                />
              </div>
            </div>
          ))}

          {mode !== "edit" && (
            <button
              type="button"
              onClick={addAccount}
              className="mt-4 text-gray-200 text-[14px]"
            >
              + Add Another Social Account
            </button>
          )}

          <div className="p-6 fixed bottom-0 left-0 right-0 mx-auto max-w-[1024px] bg-white dark:bg-[#111d39]">
            <button
              type="button"
              onClick={handleSubmit}
              disabled={loading}
              className={`p-4 rounded-[16px] w-full text-white text-[16px] font-bold transition-colors ${loading ? "bg-[#2869FE] opacity-50 cursor-not-allowed" : "bg-[#2869FE] hover:bg-[#1752e4]"}`}
            >
              {loading ? "Saving..." : mode === "edit" ? "Save Changes" : "Save"}
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default SocialAccounts;