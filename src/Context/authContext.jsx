import { createContext, useEffect, useState } from 'react';
import CryptoJS from "crypto-js";
import Cookies from "js-cookie";
const SECRET_KEY = import.meta.env.VITE_SECRET_KEY;
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(null);
  const [authReady, setAuthReady] = useState(false);
  const [role, setRole] = useState(null);
  const [email, setEmail] = useState();
  const [companyDetails, setCompanyDetails] = useState(() => {
    const stored = localStorage.getItem("companyDetails");
    return stored ? JSON.parse(stored) : null;
  });
  const [seekerDetails, setSeekerDetails] = useState(() => {
    const stored = localStorage.getItem("jobseeker_profile_data");
    return stored ? JSON.parse(stored) : null;
  })
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const encryptedAccess = Cookies.get("access_token");

    const init = () => {
      if (encryptedAccess) {
        try {
          const decryptedAccess = CryptoJS.AES.decrypt(encryptedAccess, SECRET_KEY).toString(CryptoJS.enc.Utf8);
          setAuthTokens({ access: decryptedAccess });
          setRole(localStorage.getItem("role"));
          setEmail(localStorage.getItem("email"));
        } catch (err) {
          console.error("Access token decryption failed", err);
          logout();
        }
      }
      setAuthReady(true);
      setIsLoading(false);
    };

    init();
  }, []);

  const login = (tokens, role, email) => {

    const encryptedAccess = CryptoJS.AES.encrypt(tokens.access, SECRET_KEY).toString();
    Cookies.set("access_token", encryptedAccess, {
      expires: 7,
    });
    const acc = Cookies.get("access_token");
    console.log(acc);
    setAuthTokens({ access: tokens.access });
    setRole(role);
    setEmail(email);
    localStorage.setItem("role", role);
    localStorage.setItem("email", email);
  };

  const setupCompany = (companyDetails) => {
    if (
      companyDetails &&
      typeof companyDetails === "object" &&
      Object.keys(companyDetails).length > 0
    ) {
      localStorage.setItem("companyDetails", JSON.stringify(companyDetails));
      setCompanyDetails(companyDetails);
    } else {
      console.warn("Invalid companyDetails, not saving to localStorage.");
    }
  };

  const setupSeeker = (jobseeker_profile_data) => {
    localStorage.setItem("jobseeker_profile_data", JSON.stringify(jobseeker_profile_data));
    setSeekerDetails(jobseeker_profile_data);
  }

  const logout = () => {
    setAuthTokens(null);
    setRole(null);
    setEmail(null);
    Cookies.remove("access_token");
    localStorage.removeItem("role");
    localStorage.removeItem("companyDetails");
    localStorage.removeItem("jobseeker_profile_data");
  };

  return (
    <AuthContext.Provider
      value={{ role, login, logout, authTokens, setupCompany, companyDetails, isLoading, seekerDetails, setupSeeker, email, authReady }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
