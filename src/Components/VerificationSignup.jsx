import React, { useState, useEffect, useRef } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate, useLocation } from "react-router-dom";
// import api from "../api/api"; // import your axios instance
import useAxiosAuth from "../hooks/useAxiosAuth";
import { toast, ToastContainer } from "react-toastify";
const VerificationSignup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const api = useAxiosAuth();
  // Email passed from signup page (fallback empty)
  const [email, setEmail] = useState(location.state?.email || "");

  const back = () => navigate(-1);

  // OTP input refs and state
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const [otpValues, setOtpValues] = useState(["", "", "", ""]);

  useEffect(() => {
    inputRefs[0].current?.focus();
  }, []);

  // Timer for resend OTP
  const [seconds, setSeconds] = useState(59);
  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [seconds]);

  // Handle OTP input change
  const handleInput = (index, e) => {
    const val = e.target.value.replace(/[^\d]/g, "");
    setOtpValues((prev) => {
      const newOtp = [...prev];
      newOtp[index] = val;
      return newOtp;
    });

    if (val && index < 3) {
      inputRefs[index + 1].current?.focus();
    }
  };

  // Handle backspace key behavior
  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otpValues[index] && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  // Combine OTP digits
  const otpCode = otpValues.join("");

  // Verify OTP by calling backend
  const verifyOtp = async () => {
    if (otpCode.length !== 4) {
      toast.warning("Please enter a 4-digit code");
      return;
    }

    try {
      setLoading(true);
      const response = await api.post("/accounts/verify-email/", {
        email,
        user_input_otp: otpCode,
      });
      if (response.status === 200) {
        // OTP verified successfully
        toast.success("Verification successful! Please sign in.");
        navigate("/signin");
      }
    } catch (error) {
      console.error("OTP verification failed:", error);
      toast.error("Invalid or expired OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Resend OTP handler
  const resendOtp = async () => {
    try {
      await api.post("/accounts/resend-otp/", { email });
      toast.info("Verification code resent to your email.");
      setSeconds(59);
      // Clear OTP inputs
      setOtpValues(["", "", "", ""]);
      inputRefs[0].current?.focus();
    } catch (error) {
      console.error("Failed to resend OTP:", error);
      toast.error("Failed to resend code. Please try later.");
    }
  };

  return (
    <>
      <div className="bg-white dark:bg-[#111d39] lg:px-[232px] xl:px-[274px] px-[24px] pb-[24px] mb-[35.6px] pt-[16px] font-urbanist text-[#121927] dark:text-white w-full">
        <div className="fixed top-0 left-0 right-0 bg-white dark:bg-[#111d39] z-10">
          <div className="flex items-center justify-between px-[24px] lg:px-[252px] py-[16px]">
            <div
              onClick={back}
              className="p-[6px] border rounded-lg border-black dark:border-white cursor-pointer"
            >
              <FaAngleLeft className="text-gray-500 size-[14px]" />
            </div>
            <h2 className="text-[20px] font-bold leading-[24px]">Verification</h2>
            <h2 className="w-[14px]"></h2>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-[#111d39] lg:px-[232px] xl:px-[274px] px-[24px] font-urbanist text-[#121927] dark:text-white">
        <div className="w-full mt-[16px]">
          <h2 className="text-[#71757D] dark:text-gray-400 text-[14px] leading-[24px] font-medium">
            We’ve sent you the verification code on
          </h2>
          <h2 className="text-[14px] leading-[24px] font-medium break-words">
            {email || "your email"}
          </h2>
        </div>

        <div className="flex justify-center space-x-4 p-4 mt-4">
          {[0, 1, 2, 3].map((index) => (
            <input
              key={index}
              ref={inputRefs[index]}
              type="text"
              maxLength={1}
              inputMode="numeric"
              value={otpValues[index]}
              className="h-[55px] w-[55px] text-center text-[24px] font-bold border border-gray-300 dark:border-gray-600 dark:bg-[#1f2a45] dark:text-white rounded-[12px] focus:outline-custBlackBold"
              onChange={(e) => handleInput(index, e)}
              onKeyDown={(e) => handleKeyDown(index, e)}
            />
          ))}
        </div>

        <button
          onClick={verifyOtp}
          disabled={loading}
          className={`w-full cursor-pointer bg-[#2869FE] p-[16px] text-[16px] font-bold text-white rounded-xl mt-[20px] ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          Verify
        </button>

        <div className="text-[14px] mt-[48px] leading-[24px] font-medium text-google dark:text-gray-400 flex gap-2 justify-center">
          <h1>Code expires in 00:{seconds < 10 ? `0${seconds}` : seconds}</h1>
          {seconds === 0 && (
            <p
              className="text-[#2869FE] cursor-pointer"
              onClick={resendOtp}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => e.key === "Enter" && resendOtp()}
            >
              Resend code
            </p>
          )}
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default VerificationSignup;
