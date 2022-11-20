import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AdminEmail from "../AdminEmail/AdminEmail";
import { AuthContext } from "../AuthProvider/AuthProvider";

const AdminRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [adminEmail, adminLoader] = AdminEmail(user?.email);
  const location = useLocation();

  if (adminLoader) {
    return <progress className="progress w-56 text-center"></progress>;
  }
  if (user && adminEmail) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRoute;
