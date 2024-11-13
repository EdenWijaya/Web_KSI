import { Navigate } from "react-router-dom";

import { isTokenValid } from "../../services/adminAuth/tokenValidation.service";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token || !isTokenValid()) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
