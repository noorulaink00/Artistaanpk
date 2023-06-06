import React from "react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Firebase/AuthContext";
import { Navigate } from "react-router-dom";
const userRoleCheck = (currentUser) => {
  // Check if the user is logged in and has a role
  if (currentUser && currentUser.role) {
    // Redirect to the appropriate dashboard based on the user's role
    switch (currentUser.role) {
      case "admin":
        return <Navigate to="/adminDash" />;
      case "seller":
        return <Navigate to="/sellerDash" />;
      case "customer":
        return <Navigate to="/customerDash" />;
      default:
        return null;
    }
  } else {
    return null;
  }
};

const DashboardRedirect = () => {
  const { currentUser } = useContext(AuthContext);

  const [redirectComponent, setRedirectComponent] = useState(null);

  useEffect(() => {
    setRedirectComponent(userRoleCheck(currentUser));
  }, [currentUser]);

  // Return the redirect component
  return redirectComponent;
};

export default DashboardRedirect;
