import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = ({ element: Element }) => {
  const isAuthenticated = Cookies.get("authToken");
  return isAuthenticated ? <Element /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
