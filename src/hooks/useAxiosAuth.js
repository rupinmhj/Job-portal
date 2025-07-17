// src/hooks/useAxiosAuth.js
import { useContext, useMemo } from "react";
import axios from "axios";
import AuthContext from "../Context/authContext";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function useAxiosAuth() {
  const { authTokens, logout, login } = useContext(AuthContext);

  const api = useMemo(() => {
    const instance = axios.create({ baseURL: BASE_URL });

    // 1. Request: attach token
    instance.interceptors.request.use((config) => {
      if (authTokens?.access) {
        config.headers.Authorization = `Bearer ${authTokens.access}`;
         console.log("Authorization header set:", config.headers.Authorization);
      }else {
    console.log("No auth token found");}
      return config;
    });

    // 2. Response: refresh token on 401
    // instance.interceptors.response.use(
    //   (response) => response,
    //   async (error) => {
    //     const originalRequest = error.config;

    //     if (error.response?.status === 401 && !originalRequest._retry) {
    //       originalRequest._retry = true;

    //       try {
    //         const refresh = Cookies.get("refresh_token");
    //         const res = await axios.post(`${BASE_URL}/accounts/token/refresh/`, { refresh });

    //         const newAccess = res.data.access;
    //         login({ access: newAccess, refresh }); // Update context + storage

    //         originalRequest.headers.Authorization = `Bearer ${newAccess}`;
    //         return instance(originalRequest);
    //       } catch (err) {
    //         logout(); // auto logout
    //         window.location.href = "/signin";
    //         return Promise.reject(err);
    //       }
    //     }

    //     return Promise.reject(error);
    //   }
    // );

    return instance;
  }, [authTokens, login, logout]);

  return api;
}
