// src/api.js
import { useContext } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import CryptoJS from "crypto-js";
import AuthContext from "../Context/authContext";
const api = axios.create({
  baseURL: "http://192.168.1.9:8000", // Your Django base URL
});

console.log('api', api);


// Request: Attach access token
// api.interceptors.request.use((config) => {
//   const token = authTokens.access;
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });


api.interceptors.request.use((config) => {
  const encryptedToken = localStorage.getItem("access_token");
  if (encryptedToken) {
    const decryptedToken = CryptoJS.AES.decrypt(encryptedToken, "my-strong-secret").toString(CryptoJS.enc.Utf8);
    config.headers.Authorization = `Bearer ${decryptedToken}`;
  }
  return config;
});

// Response: Handle expired token
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If token expired and retry hasn't been tried yet
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refresh = Cookies.get("refresh_token");

        // Call Django to get new access token
        const res = await api.post("accounts/token/refresh/", {
          refresh,
        });

       const encryptedToken = CryptoJS.AES.encrypt(newAccessToken, "my-strong-secret").toString();
localStorage.setItem("access_token", encryptedToken);

        // Retry original request with new token
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        console.error("Refresh token expired. Please login again.");
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        window.location.href = "/signin";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
