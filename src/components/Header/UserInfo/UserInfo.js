import React from "react";
import { Link } from "react-router-dom";

import * as authService from "../../../services/authService";
import { useAuth } from "../../../AuthProvider";

import "./UserInfo.scss";

const UserInfo = () => {
  const { name, logout } = useAuth();

  const handleLogout = async () => {
    await authService.logout();
    logout();
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
