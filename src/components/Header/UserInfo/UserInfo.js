import React from "react";
import { Link } from "react-router-dom";

import * as authService from "../../../services/authService";
import { useLoadingStatus } from "../../../LoadingStatusProvider";
import { useAuth } from "../../../AuthProvider";

import "./UserInfo.scss";

const UserInfo = () => {
  const { name, logout } = useAuth();
  const { setIsLoading } = useLoadingStatus();

  const handleLogout = async () => {
    await authService.logout();
    logout();
    setIsLoading(true);
    window.location.reload();
  };

  return (
    <div className="user-info">
      {name && (
        <>
          <strong>Hello</strong> {name}.{" "}
          <span className="logout" onClick={handleLogout}>
            Logout
          </span>
        </>
      )}
      {!name && <Link to="/login">Login</Link>}
    </div>
  );
};

export default UserInfo;
