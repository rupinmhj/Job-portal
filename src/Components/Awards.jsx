import React, { useState, useContext } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import images from "../assets/images";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAxiosAuth from "../hooks/useAxiosAuth";
import AuthContext from "../Context/authContext";
const Awards = () => {
  const api = useAxiosAuth();
  const { seekerDetails, email } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [awards, setAwards] = useState([
    {
      award_title: "",
      start_date: null,
      end_date: null,
      has_title: false,
      description: "",
    },
  ]);

  const navigate = useNavigate();
  const back = () => navigate(-1);

  const handleChange = (index, field, value) => {
    const updated = [...awards];
    updated[index][field] = value;
    setAwards(updated);
  };

  const handleDateChange = (index, field, date) => {
    const formattedDate = date ? date.toISOString().split("T")[0] : null;
    handleChange(index, field, formattedDate);
  }

  const addAward = () => {
    setAwards([
      ...awards,
      {
        award_title: "",
        start_date: null,
        end_date: null,
        has_title: false,
        description: "",
      },
    ]);
  };

  const removeAward = (index) => {
    const updated = awards.filter((_, i) => i !== index);
    setAwards(updated);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(false);
      await api.post("/dashboards/jobseeker/awards/",
        awards

      );
      navigate("/home");
    } catch (err) {
      console.error("Submission error", err);
    } finally {
      setLoading(true);
    }
  };

  return (
    <div className="h-screen overflow-y-scroll scroll-container dark:bg-[#111d39] font-urbanist">
      <div className="text-custBlackBold font-urbanist dark:text-white">
        {/* Header */}
        <div className="fixed left-0 right-0 top-0 z-30 bg-white dark:bg-[#111d39]">
          <div className="flex items-center justify-between p-[24px] pt-[16px] mx-auto max-w-[1024px]">
            <div onClick={back} className="flex gap-[18px] items-center justify-between">
              <div className="h-[30px] w-[30px] flex justify-center items-center border rounded-lg border-gray-500 dark:border-white cursor-pointer">
                <FaAngleLeft className="text-gray-500 h-[14px] w-[14px] dark:text-white" />
              </div>
            </div>
            <h2 className="text-[20px] font-bold leading-[24px]">Awards</h2>
            <h2 onClick={() => navigate('/setup/success')} className="w-[30px] cursor-pointer">Skip</h2>

          </div>
        </div>

        {/* Profile */}
        <div className="flex mt-[70px] items-center flex-col">
          <img src={seekerDetails?.profile_image || images.profileImage} className="size-[80.4px] border border-blue-600 rounded-2xl mb-[12px]" alt="Profile" />
          <h2 className="text-[18px] leading-[22px] font-bold mb-2">{seekerDetails?.full_name}</h2>
          <h2 className="text-gray-400 text-[12px] leading-[20px] font-medium">{email}</h2>
        </div>

        {/* Form */}
        <form className="max-w-[1024px] mx-auto px-6 mt-[20px] mb-[120px]">
          {awards.map((award, index) => (
            <div key={index} className="border-t border-gray-300 mt-6 pt-4 relative text-[15px]">
              {awards.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeAward(index)}
                  className="text-gray-200 text-[14px] absolute top-3 right-0 flex items-center gap-1"
                >
                  <span className="text-[18px]">
                    <IoIosCloseCircleOutline />
                  </span>
                  <span>Clear</span>
                </button>
              )}

              {/* Title */}
              <div className="mt-[20px]">
                <label className="pl-[12px] mb-[12px] block text-4 leading-[19px] font-bold">Title</label>
                <input
                  type="text"
                  value={award.award_title}
                  onChange={(e) => handleChange(index, "award_title", e.target.value)}
                  className="w-full leading-6 text-[14px] font-medium rounded-xl border-[0.5px] py-[14px] px-[20px] focus:outline-none focus:border-gray-500 dark:focus:border-gray-200 dark:bg-[#1f2a45] dark:text-white dark:border-gray-700"
                  placeholder="Title"
                />
              </div>

              {/* Date Range */}
              <div className="mt-[20px]">
                <div className="flex gap-2 leading-6 text-[14px] font-medium justify-between">
                  <div className="relative w-full">
                    <DatePicker
                      selected={award.start_date}
                      showYearPicker
                      dateFormat="yyyy"
                      calendarClassName="calendar-deadline"
                      onChange={(date) => handleDateChange(index, "start_date", date)}
                      placeholderText="Start"
                      className="w-full py-[14px] pl-[52px] pr-[20px] leading-6 text-[14px] font-medium rounded-xl border-[0.5px] px-[20px] focus:outline-none dark:focus:border-gray-200 focus:border-gray-500 dark:bg-[#1f2a45] dark:text-white dark:border-gray-700"
                    />
                    <img src={images.calender} alt="Start" className="absolute top-4 left-[14px] dark:invert" />
                  </div>

                  <div className="relative w-full flex">
                    <DatePicker
                      selected={award.end_date}
                      onChange={(date) => handleDateChange(index, "end_date", date)}
                      placeholderText="End"
                      calendarClassName="calendar-deadline"
                      showYearPicker
                      dateFormat="yyyy"
                      disabled={award.has_title}
                      className={`${award.has_title ? "bg-gray-200 cursor-not-allowed" : ""} w-full justify-end py-[14px] pl-[52px] pr-[20px] leading-6 text-[14px] dark:focus:border-gray-200 font-medium rounded-xl border-[0.5px] px-[20px] focus:outline-none focus:border-gray-500 dark:bg-[#1f2a45] dark:text-white dark:border-gray-700`}
                    />
                    <img src={images.calender} alt="End" className="absolute top-4 left-[14px] dark:invert" />
                  </div>
                </div>
              </div>

              {/* Checkbox */}
              <div className="flex mt-[12px] gap-2">
                <input
                  type="checkbox"
                  className="accent-[#2869FE] cursor-pointer"
                  checked={award.has_title}
                  onChange={(e) => {
                    handleChange(index, "has_title", e.target.checked);
                    if (e.target.checked) {
                      handleChange(index, "end_date", null);
                    }
                  }}
                />
                <p className="leading-6 text-[14px] font-medium text-gray-500 dark:text-gray-300">Holding the title currently</p>
              </div>

              {/* Description */}
              <div className="mt-[20px]">
                <label className="pl-[12px] mb-[12px] block text-4 leading-[19px] font-bold">Description</label>
                <textarea
                  value={award.description}
                  onChange={(e) => handleChange(index, "description", e.target.value)}
                  className="w-full h-[150px] leading-6 dark:focus:border-gray-200 text-[14px] font-medium rounded-xl border-[0.5px] py-[14px] px-[20px] min-h-[35px] focus:outline-none focus:border-gray-500 dark:bg-[#1f2a45] dark:text-white dark:border-gray-700"
                  placeholder="About your details"
                ></textarea>
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={addAward}
            className="mt-4 text-gray-200 text-[14px]"
          >
            + Add Another Award
          </button>

          {/* Save Button */}
          <div className="p-6 fixed bottom-0 left-0 right-0 mx-auto max-w-[1024px] bg-white dark:bg-[#111d39]">
            <button
              type="button"
              onClick={handleSubmit}
              disabled={loading}
              className={`p-4 rounded-[16px] w-full text-white text-[16px] leading-[26px] font-bold transition-colors
    ${loading ? "bg-[#2869FE] opacity-50 cursor-not-allowed" : "bg-[#2869FE] hover:bg-[#1752e4]"}`}
            >
              {loading ? "Saving..." : "Save"}
            </button>

          </div>
        </form>
      </div>
    </div>
  );
};

export default Awards;
