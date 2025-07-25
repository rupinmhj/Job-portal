import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosAuth from "../hooks/useAxiosAuth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaAngleLeft } from "react-icons/fa6";
import images from "../assets/images";
import AuthContext from "../Context/authContext";



const defaultEdu = {
  degree_title: "",
  major_subject: "",
  university_name: "",
  institution_name: "",
  result: "",
  start_year: null,
  graduation_year: null,
  currently_studying: false,
};

const Education = ({ mode = "onboarding" }) => {
  const api = useAxiosAuth();
  const navigate = useNavigate();
  const { id: educationId } = useParams();
  const [educationList, setEducationList] = useState([defaultEdu]);
  const [loading, setLoading] = useState(false);
  const { seekerDetails, email } = useContext(AuthContext);
  const [formErrors, setFormErrors] = useState([]);
  const validateEducationList = () => {
    const newErrors = [];

    educationList.forEach((edu, index) => {
      const errors = {};

      if (!edu.degree_title.trim()) errors.degree_title = "Degree title is required.";
      if (!edu.major_subject.trim()) errors.major_subject = "Major subject is required.";
      if (!edu.institution_name.trim()) errors.institution_name = "Institution name is required.";
      if (!edu.university_name.trim()) errors.university_name = "University name is required.";
      if (!edu.result.trim()&&!edu.currently_studying) errors.result = "Result is required.";
      if (!edu.start_year) errors.start_year = "Start year is required.";

      if (!edu.currently_studying && !edu.graduation_year)
        errors.graduation_year = "Graduation year is required if not currently studying.";

      if (
        edu.start_year &&
        edu.graduation_year &&
        !edu.currently_studying &&
        edu.start_year > edu.graduation_year
      ) {
        errors.graduation_year = "Graduation year cannot be before start year.";
      }

      newErrors[index] = errors;
    });

    setFormErrors(newErrors);

    // Return true if all are valid (no errors in any object)
    return newErrors.every((err) => Object.keys(err).length === 0);
  };


  useEffect(() => {
    if (mode === "edit" && educationId) {
      const fetchEducation = async () => {
        try {
          const res = await api.get(`/dashboards/educations/${educationId}/update/`);

          // Ensure the data structure matches what the form expects
          const educationData = {
            degree_title: res.data.data.degree_title || "",
            major_subject: res.data.data.major_subject || "",
            university_name: res.data.data.university_name || "",
            institution_name: res.data.data.institution_name || "",
            result: res.data.data.result || "",
            start_year: res.data.data.start_year || null,
            graduation_year: res.data.data.graduation_year || null,
            currently_studying: Boolean(res.data.data.currently_studying),
          };

          setEducationList([educationData]);
        } catch (err) {
          console.error("Error fetching education:", err);
        }
      };
      fetchEducation();
    }
  }, [mode, educationId, api]);



  const handleChange = (index, field, value) => {
    const updated = [...educationList];
    updated[index][field] = value;
    setEducationList(updated);
  };

  const handleDateChange = (index, field, date) => {
    handleChange(index, field, date ? date.getFullYear() : null);
  };

  const addEducation = () => {
    setEducationList([...educationList, defaultEdu]);
  };

  const removeEducation = (index) => {
    setEducationList(educationList.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    const isValid = validateEducationList();
    if (!isValid) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    setLoading(true);
    try {
      if (mode === "edit") {
        console.log(educationList[0])
        await api.put(`/dashboards/educations/${educationId}/update/`, educationList[0]);
      } else {
        await api.post("/dashboards/jobseeker/educations/", educationList);
      }
      navigate(mode === "onboarding" ? "/workexperience" : "/educationprofile");
    } catch (err) {
      console.error("Submission Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen dark:bg-[#111d39] pt-[80px] pb-[120px] font-urbanist text-[#121927] dark:text-white">
      {/* Navbar */}
      <div className="fixed left-0 right-0 top-0 z-30 bg-white dark:bg-[#111d39]">
        <div className="flex justify-between p-[24px] pt-[16px] mx-auto max-w-[1024px] items-center">
          <div onClick={() => navigate(-1)} className="flex gap-[18px] items-center">
            <div className="h-[30px] w-[30px] flex justify-center items-center border rounded-lg border-gray-500 dark:border-white cursor-pointer">
              <FaAngleLeft className="text-gray-500 h-[14px] w-[14px] dark:text-white" />
            </div>
          </div>
          <h2 className="text-[20px] font-bold leading-[24px]">Education</h2>
          {
            mode === 'onboarding' ? <h2 onClick={() => navigate("/workexperience")} className="w-[30px] cursor-pointer">
              Skip
            </h2> : <img src={images.home} onClick={() => navigate("/home")} className="h-6 w-6 cursor-pointer dark:invert" alt="home" />
          }

        </div>
      </div>

      <div className="flex  items-center flex-col">
        <img src={seekerDetails?.profile_pic || images.profileImage} className="size-[80.4px] border border-blue-600 rounded-2xl mb-[12px]" alt="profile" />
        <h2 className="text-[18px] font-bold mb-2">{seekerDetails?.full_name}</h2>
        <h2 className="text-gray-400 text-[12px] font-medium">{email}</h2>
      </div>

      <div className="max-w-[1024px] mx-auto px-6">
        <form onSubmit={handleSubmit} className="mt-[20px]">
          {/* {console.log('Rendering form with educationList:', educationList)} */}
          {educationList.map((edu, index) => {
            // console.log(`Rendering education item ${index}:`, edu);
            return (
              <div key={index} className="border-t border-gray-300 mt-6 pt-6 relative">
                {(mode === "onboarding" || mode === "add") && educationList.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeEducation(index)}
                    className="text-gray-500 text-sm absolute right-0 top-3"
                  >
                    Remove
                  </button>
                )}

                {[{ key: "degree_title", label: "Degree Title" },
                { key: "major_subject", label: "Major Subject" },
                { key: "institution_name", label: "Institution Name" },
                { key: "university_name", label: "University Name" },
                { key: "result", label: "Result" }
                ].map((field) => {
                  // console.log(`Field ${field.key} value:`, edu[field.key]);
                  return (
                    <div className="mt-[20px]" key={field.key}>
                      <label className="pl-[12px] mb-[8px] block font-bold">{field.label}</label>
                      <input
                        type="text"
                        placeholder={`Enter ${field.label.toLowerCase()}`}
                        value={edu[field.key] || ""} // Add fallback for undefined values
                        onChange={(e) => handleChange(index, field.key, e.target.value)}
                        className="w-full text-[14px] font-medium rounded-xl border-[0.5px] py-[14px] px-[20px] focus:outline-none focus:border-gray-500 dark:bg-[#1f2a45] dark:text-white dark:border-gray-700"
                      />
                      {formErrors[index]?.[field.key] && (
                        <p className="text-red-500 text-sm mt-1 pl-2">
                          {formErrors[index][field.key]}
                        </p>
                      )}
                    </div>
                  )
                })}

                {/* Date Pickers */}
                <div className="flex gap-2 mt-[20px]">
                  {[{ key: "start_year", label: "Start Year" }, { key: "graduation_year", label: "Graduation Year" }].map((dateField) => (
                    <div className="w-full relative" key={dateField.key}>
                      <label className="pl-[12px] mb-[8px] block font-bold">{dateField.label}</label>
                      <DatePicker
                        selected={edu[dateField.key] && !isNaN(edu[dateField.key]) ? new Date(Number(edu[dateField.key]), 0) : null}
                        onChange={(date) => handleDateChange(index, dateField.key, date)}
                        showYearPicker
                        dateFormat="yyyy"
                        disabled={dateField.key === "graduation_year" && edu.currently_studying}
                        className={`w-full py-[14px] pl-[52px] pr-[20px] text-[14px] font-medium rounded-xl border-[0.5px] focus:outline-none focus:border-gray-500 ${edu.currently_studying && dateField.key === "graduation_year" ? "bg-gray-700 cursor-not-allowed" : "dark:bg-[#1f2a45]"
                          } dark:text-white dark:border-gray-700`}
                      />
                      {formErrors[index]?.[dateField.key] && (
                        <p className="text-red-500 text-sm mt-1 pl-2">
                          {formErrors[index][dateField.key]}
                        </p>
                      )}

                      <img src={images.calender} alt="cal" className="absolute top-[46px] left-[14px] dark:invert" />
                    </div>
                  ))}
                </div>

                {/* Checkbox */}
                <div className="mt-[20px]">
                  <label className="leading-[24px] font-medium text-[14px] text-gray-400 flex items-center">
                    <input
                      type="checkbox"
                      checked={edu.currently_studying || false} // Add fallback for undefined
                      onChange={(e) => {
                        handleChange(index, "currently_studying", e.target.checked);
                        if (e.target.checked) handleChange(index, "graduation_year", null);
                      }}
                      className="mr-4 cursor-pointer size-[17.4px] rounded-[20px]"
                    />
                    I currently study here
                  </label>
                </div>
              </div>
            )
          })}

          {mode !== "edit" && (
            <button type="button" onClick={addEducation} className="mt-6 text-blue-500 font-medium text-sm">
              + Add Another Education
            </button>
          )}

          <div className="mt-8">
            <button
              type="submit"
              disabled={loading}
              className={`p-4 w-full rounded-[16px] text-white font-bold text-[16px] ${loading ? "bg-blue-300 cursor-not-allowed" : "bg-[#2869FE] hover:bg-[#1752e4]"
                }`}
            >
              {loading ? "Saving..." : mode === "edit" ? "Save Changes" : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Education;