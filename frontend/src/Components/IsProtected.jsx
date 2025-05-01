import { Navigate, Outlet } from "react-router-dom";
``
export const ProtectedRoute = ({ isAuthenticated, redirectPath = "/login" }) => {
  if (isAuthenticated === null) return null; 

  return isAuthenticated ? <Outlet /> : <Navigate to={redirectPath} replace />;
};


