import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <span className="loading loading-bars loading-lg text-white text-center"></span>
    );
  }
  if (user) {
    return children;
  }
  return (
    <>
      <Navigate state={location.pathname} to="/login"></Navigate>
    </>
  );
};

export default PrivateRoute;
