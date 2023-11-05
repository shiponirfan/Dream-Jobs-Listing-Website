import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  // Check Loading
  if (loading) {
    return (
      <div className=" w-full bg-white dark:bg-gray-900 z-50  flex justify-center items-center">
        <span className="loading loading-ring w-20 text-job-primary dark:text-white"></span>
      </div>
    );
  }

  // Check User
  if (user?.email) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

PrivateRoutes.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoutes;
