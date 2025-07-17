import { createContext, useEffect, useState } from 'react';
import CryptoJS from "crypto-js";
import Cookies from "js-cookie";
const SECRET_KEY = import.meta.env.VITE_SECRET_KEY;
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(null);
  const [role, setRole] = useState(null);
  const [companyDetails, setCompanyDetails] = useState(() => {
    const stored=localStorage.getItem("companyDetails");
    return stored?JSON.parse(stored):null;
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const encryptedAccess = Cookies.get("access_token");

    const init = () => {
      if (encryptedAccess) {
        try {
          const decryptedAccess = CryptoJS.AES.decrypt(encryptedAccess, SECRET_KEY).toString(CryptoJS.enc.Utf8);
          setAuthTokens({ access: decryptedAccess });
          setRole(localStorage.getItem("role"));
        } catch (err) {
          console.error("Access token decryption failed", err);
          logout();
        }
      }
      setIsLoading(false);
    };

    init();
  }, []);

  const login = (tokens, role) => {
    const encryptedAccess = CryptoJS.AES.encrypt(tokens.access, SECRET_KEY).toString();
    Cookies.set("access_token", encryptedAccess, {
      expires: 7,
    });
    const acc=Cookies.get("access_token");
    console.log(acc);
    setAuthTokens({ access: tokens.access });
    setRole(role);
    localStorage.setItem("role", role);
  };

 const setupCompany = (companyDetails) => {
  localStorage.setItem("companyDetails", JSON.stringify(companyDetails));
  setCompanyDetails(companyDetails);
};

  const logout = () => {
    setAuthTokens(null);
    setRole(null);
    Cookies.remove("access_token");
    localStorage.removeItem("role");
  };

  return (
    <AuthContext.Provider
      value={{ role, login, logout, authTokens, setupCompany, companyDetails, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
