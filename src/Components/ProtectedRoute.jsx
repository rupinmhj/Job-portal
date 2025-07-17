import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../Context/authContext";
import Loading from "./Loading";
const ProtectedRoute = ({ children, allowedRoles = [] }) => {
  const { authTokens, role } = useContext(AuthContext);
  const [isReady, setIsReady] = useState(false);

  // Wait until authTokens and role are loaded from localStorage
  useEffect(() => {
    if (authTokens !== undefined && role !== undefined) {
      setIsReady(true);
    }
  }, [authTokens, role]);

  if (!isReady) {
    // Show loading spinner or placeholder while state loads
    return <Loading />;
  }

  if (!authTokens?.access || !role) {
    return <Navigate to="/signin" replace />;
  }

  if (!allowedRoles.includes(role)) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
