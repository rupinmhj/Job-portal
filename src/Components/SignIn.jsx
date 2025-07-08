import React, { useEffect, useState, useContext } from "react";
import { FaAngleLeft, FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import images from "../assets/images";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion"
import ThemeContext from "./ThemeContext";

const SignIn = () => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const back = () => navigate("/");
  const home = () => navigate("/home");
  const signup = () => navigate("/signup");

  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [signInError, setSignInError] = useState("");

  // Validation function
  const validate = () => {
    let valid = true;
    setEmailError("");
    setPasswordError("");

    if (!email) {
      setEmailError("Email is required");
      valid = false;
    }

    if (!password) {
      setPasswordError("Password is required.");
      valid = false;
    }
    return valid;
  };



  const handleSignIn = () => {
    if (validate()) {
      home();
    }
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, delay: 0.15 }}
        className="h-screen overflow-y-scroll scroll-container bg-white dark:bg-[#111d39] transition-colors duration-300"
      >
        <div className="dark:bg-[#111d39] bg-white max-w-[430px] px-[24px] pb-[24px] mb-[35.6px] pt-[16px] font-urbanist text-[#121927] dark:text-white w-full">
          <div className="fixed top-0 left-0 right-0 bg-white dark:bg-[#111d39] z-10">
            <div className="flex items-center justify-between px-6 max-w-[430px] mx-auto py-[16px]">
              <div onClick={back} className="p-[6px] border rounded-lg border-black dark:border-white cursor-pointer">
                <FaAngleLeft className="text-gray-500 dark:text-gray-300 size-[14px]" />
              </div>
              <h2 className="text-[20px] font-bold leading-[24px]">Sign In</h2>
              <h2 className="w-[14px]"></h2>
            </div>
          </div>
        </div>

        <div className="dark:bg-[#111d39] bg-white max-w-[430px] mx-auto px-[24px] font-urbanist text-[#121927] dark:text-white">
          <div className="w-full">
            <img src={theme === 'light' ? images.logolight : images.logoDark} className="w-[117px] h-[32px]" alt="Logo" />
            <div className="w-full mt-[16px]">
              <h2 className="text-[#71757D] dark:text-gray-400 text-[14px] leading-[24px] font-medium">
                Give credential to sign in your account
              </h2>
            </div>
          </div>

          {/* Email Field */}
          <div className="mt-[32px] w-full flex flex-col">
            <p className="pl-[12px] text-[16px] font-bold leading-[19px]">
              Email <span className="text-red-500">*</span>
            </p>

            <div className="relative mb-[20px]">
              <img src={images.email} className="dark:invert  absolute inset-y-7 size-[20px] left-4" alt="Email" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="focus:outline-none border dark:focus-within:border-gray-200 focus:border-gray-400 text-[14px] shadow-sm rounded-xl mt-[12px] pl-[52px] py-[14px] pr-[20px] w-full dark:bg-[#1f2937] dark:text-white dark:border-gray-600"
                placeholder="Type your email"
              />
              {emailError && <p className="text-red-600 text-[12px] pl-4">{emailError}</p>}
            </div>
          </div>

          {/* Password Field */}
          <div className="mt-[10px] w-full flex flex-col">
            <p className="pl-[12px] text-[16px] font-bold leading-[19px]">
              Password <span className="text-red-500">*</span>
            </p>
            <div className="relative mb-[20px]">
              <img src={images.password} className="dark:invert absolute z-20 inset-y-7 size-[20px] left-4" alt="Password" />
              <div className="relative w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full focus:border-gray-400 dark:focus-within:border-gray-200 focus:outline-none border text-[14px] shadow-sm rounded-xl mt-[12px] pl-[52px] py-[14px] pr-[45px] dark:bg-[#1f2937] dark:text-white dark:border-gray-600"
                  placeholder="Type your password"
                />
                <span
                  className="absolute right-4 top-[42%] transform -translate-y-1/2 cursor-pointer text-gray-500 dark:text-gray-300"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaRegEye size={20} className="mt-4" /> : <FaRegEyeSlash size={20} className="mt-4" />}
                </span>
              </div>
              {passwordError && <p className="text-red-600 text-[12px] pl-4">{passwordError}</p>}
            </div>

            {/* Remember Me */}
            <div className="flex items-center gap-2 mb-[20px]">
              <input
                type="checkbox"
                id="checkRemember"
                checked={remember}
                onChange={() => setRemember(!remember)}
                className="w-4 h-4 text-[#2869FE] rounded border-gray-300 focus:ring-blue-500 cursor-pointer"
              />
              <label htmlFor="checkRemember" className="text-sm text-[#71757D] dark:text-gray-400">
                Remember me
              </label>
            </div>

            <p
              className="text-blue-600 font-semibold text-[14px] leading-[24px] cursor-pointer"
              onClick={() => navigate("/forgetpassword")}
            >
              Forgot Password?
            </p>
          </div>

          {/* Sign In Button */}
          <button
            onClick={handleSignIn}
            disabled={loading}
            className={`w-full cursor-pointer ${loading ? "bg-gray-400" : "bg-[#2869FE]"
              } p-[16px] text-[16px] font-bold text-white rounded-xl mt-[40px]`}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>

          <div className="flex text-[#71757D] dark:text-gray-400 w-full my-[35px] justify-center">
            or continue with
          </div>

          {/* Social Logins */}
          <div className="flex justify-center gap-[16px]">
            <div className="items-center rounded-lg cursor-pointer border border-gray-200 dark:border-gray-700 shadow-sm h-[52px] w-[80px] flex justify-center dark:bg-[#1f2937]">
              <img src={images.facebook} className="w-[24px] h-[24px]" alt="Facebook" />
            </div>
            <div className="items-center rounded-lg cursor-pointer border border-gray-200 dark:border-gray-700 shadow-sm h-[52px] w-[80px] flex justify-center dark:bg-[#1f2937]">
              <img src={images.googlelogo} className="w-[24px] h-[24px]" alt="Google" />
            </div>
            <div className="items-center rounded-lg cursor-pointer border border-gray-200 dark:border-gray-700 shadow-sm h-[52px] w-[80px] flex justify-center dark:bg-[#1f2937]">
              <img src={images.apple} className="w-[24px] h-[24px]" alt="Apple" />
            </div>
          </div>

          <div onClick={signup} className="flex mt-[35px] justify-center mb-4">
            <p className="text-[#71757D] text-[14px] font-medium leading-[24px] dark:text-gray-400">
              Don't have an account?
              <span className="text-[#2869FE] cursor-pointer"> Sign Up</span>
            </p>
          </div>
          <ToastContainer autoClose={1500} />
        </div>
      </motion.div>
    </>
  );

};

export default SignIn;