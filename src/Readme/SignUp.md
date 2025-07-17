import React, { useState, useContext } from "react";
import { FaAngleLeft, FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import images from "../assets/images";
import { motion } from "framer-motion";
import ThemeContext from "./ThemeContext";
import axios from "axios";

const SignUp = () => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const back = () => navigate("/");
  const signin = () => navigate("/signin");

  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("job_seeker");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [roleError, setRoleError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  // Validation
  const validate = () => {
    let valid = true;

    setNameError("");
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");
    setRoleError("");

    if (!name) {
      setNameError("Name is required");
      valid = false;
    } else if (!/^[A-Za-z\s'-]+$/.test(name)) {
      setNameError("Enter a valid name.");
      valid = false;
    }

    if (!email) {
      setEmailError("Email is required");
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError("Enter a valid email");
      valid = false;
    }

    if (!role) {
      setRoleError("Please select a role.");
      valid = false;
    }

    if (!password) {
      setPasswordError("Password is required.");
      valid = false;
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)
    ) {
      setPasswordError(
        "Password must be at least 8 characters and include uppercase, lowercase, number, and special character."
      );
      valid = false;
    }

    if (!confirmPassword) {
      setConfirmPasswordError("Confirm Password is required");
      valid = false;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match!");
      valid = false;
    }

    return valid;
  };

  // Handle Submit
  const validateSignUp = async () => {
    if (validate()) {
      try {
        setLoading(true);

        const signupData = {
          name,
          email,
          password,
          role,
        };

        const res = await axios.post("/api/signup", signupData);

        localStorage.setItem("temp_token", res.data.temp_token);
        navigate("/verificationSignup", { state: { email: res.data.email } });
      } catch (err) {
        console.error("Signup error:", err);
        alert("Signup failed. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, delay: 0.15 }}
    >
      <div className="h-screen dark:bg-[#111d39]">
        <div className="bg-white max-w-[430px] px-[24px] pb-[24px] mb-[35.6px] pt-[16px] font-urbanist text-[#121927] dark:text-white w-full">
          <div className="fixed top-0 left-0 right-0 bg-white dark:bg-[#111d39] z-10">
            <div className="flex items-center justify-between px-[24px] max-w-[430px] mx-auto py-[16px]">
              <div
                onClick={back}
                className="p-[6px] border rounded-lg border-black dark:border-white cursor-pointer"
              >
                <FaAngleLeft className="text-gray-500 dark:text-gray-300 size-[14px]" />
              </div>
              <h2 className="text-[20px] font-bold leading-[24px]">Sign Up</h2>
              <h2 className="w-[14px]"></h2>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-[#111d39] max-w-[430px] mx-auto px-[24px] font-urbanist text-[#121927] dark:text-white">
          {/* Logo + Header */}
          <img
            src={theme === "light" ? images.logolight : images.logoDark}
            className="w-[117px] h-[32px]"
            alt="Logo"
          />
          <h2 className="mt-[16px] text-[#71757D] dark:text-gray-400 text-[14px] leading-[24px] font-medium">
            Give credential to sign in your account
          </h2>

          {/* Name */}
          <div className="mt-[32px] w-full flex flex-col">
            <p className="pl-[12px] text-[16px] font-bold">Full Name</p>
            <div className="relative mb-[20px]">
              <img
                src={images.profile}
                className="dark:invert absolute inset-y-7 size-[20px] left-4"
                alt="Name"
              />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="dark:bg-[#1f2937] dark:focus-within:border-gray-200 dark:text-white dark:border-gray-600 focus:outline-none border text-[14px] shadow-sm rounded-xl mt-[12px] pl-[52px] py-[14px] pr-[20px] w-full"
                placeholder="Type your full name"
              />
              {nameError && (
                <p className="text-red-500 text-[13px] pl-[12px]">{nameError}</p>
              )}
            </div>
          </div>

          {/* Email */}
          <div className="mt-[2px] w-full flex flex-col">
            <p className="pl-[12px] text-[16px] font-bold">Email</p>
            <div className="relative mb-[20px]">
              <img
                src={images.email}
                className="dark:invert absolute inset-y-7 size-[20px] left-4"
                alt="Email"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="dark:bg-[#1f2937] dark:text-white dark:focus-within:border-gray-200 dark:border-gray-600 focus:outline-none border text-[14px] shadow-sm rounded-xl mt-[12px] pl-[52px] py-[14px] pr-[20px] w-full"
                placeholder="Type your email"
              />
              {emailError && (
                <p className="text-red-500 text-[13px] pl-[12px]">{emailError}</p>
              )}
            </div>
          </div>

          {/* Role */}
          <div className="mt-[2px] w-full flex flex-col mb-6">
            <p className="pl-[12px] text-[16px] font-bold">Register As:</p>
            <div className="flex gap-4 mt-[20px] px-4">
              {["job_seeker", "employer"].map((roleOption) => (
                <label key={roleOption} className="inline-flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="role"
                    value={roleOption}
                    checked={role === roleOption}
                    onChange={(e) => setRole(e.target.value)}
                    className="peer hidden"
                  />
                  <span className="w-3 h-3 inline-block rounded-full border-2 border-indigo-600 
                   dark:border-green-500
                   peer-checked:bg-indigo-600 dark:peer-checked:bg-green-500"></span>
                  <span className="ml-2 capitalize">{roleOption.replace("_", " ")}</span>
                </label>
              ))}
            </div>
            {roleError && (
              <p className="text-red-500 text-[13px] pl-[12px]">{roleError}</p>
            )}
          </div>

          {/* Password */}
          <div className="mt-[2px] w-full flex flex-col">
            <p className="pl-[12px] text-[16px] font-bold">Password</p>
            <div className="relative mb-[20px]">
              <img
                src={images.password}
                className="dark:invert absolute inset-y-7 size-[20px] left-4"
                alt="Password"
              />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="dark:bg-[#1f2937] dark:focus-within:border-gray-200 dark:text-white dark:border-gray-600 focus:outline-none border text-[14px] shadow-sm rounded-xl mt-[12px] pl-[52px] py-[14px] pr-[45px] w-full"
                placeholder="Type your password"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-[42%] cursor-pointer text-gray-500"
              >
                {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
              </span>
              {passwordError && (
                <p className="text-red-500 text-[13px] pl-[12px]">{passwordError}</p>
              )}
            </div>
          </div>

          {/* Confirm Password */}
          <div className="mt-[2px] w-full flex flex-col">
            <p className="pl-[12px] text-[16px] font-bold">Confirm Password</p>
            <div className="relative mb-[20px]">
              <img
                src={images.password}
                className="dark:invert absolute inset-y-7 size-[20px] left-4"
                alt="Confirm Password"
              />
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="dark:bg-[#1f2937] dark:focus-within:border-gray-200 dark:text-white dark:border-gray-600 focus:outline-none border text-[14px] shadow-sm rounded-xl mt-[12px] pl-[52px] py-[14px] pr-[45px] w-full"
                placeholder="Confirm your password"
              />
              <span
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-[42%] cursor-pointer text-gray-500"
              >
                {showConfirmPassword ? <FaRegEye /> : <FaRegEyeSlash />}
              </span>
              {confirmPasswordError && (
                <p className="text-red-500 text-[13px] pl-[12px]">{confirmPasswordError}</p>
              )}
            </div>
          </div>

          <button
            onClick={validateSignUp}
            disabled={loading}
            className={`w-full cursor-pointer bg-[#2869FE] p-[16px] text-[16px] font-bold text-white rounded-xl mt-[40px] ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>

          <div className="flex text-[#71757D] dark:text-gray-400 w-full my-[35px] justify-center">
            or continue with
          </div>

          <div className="flex justify-center gap-[16px]">
            {[images.facebook, images.googlelogo, images.apple].map((img, idx) => (
              <div
                key={idx}
                className="items-center rounded-lg cursor-pointer border border-gray-200 dark:border-gray-700 shadow-sm h-[52px] w-[80px] flex justify-center dark:bg-[#1f2937]"
              >
                <img src={img} className="w-[24px] h-[24px]" alt="Social" />
              </div>
            ))}
          </div>

          <div onClick={signin} className="flex mt-[35px] justify-center">
            <p className="text-[#71757D] dark:text-gray-400 text-[14px] font-medium">
              Already have an account?
              <span className="text-[#2869FE] cursor-pointer"> Sign In</span>
            </p>
          </div>

          <div className="h-6"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default SignUp;
