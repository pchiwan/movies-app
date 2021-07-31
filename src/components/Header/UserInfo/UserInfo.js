import React from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../../../AuthProvider";

import "./UserInfo.scss";

const UserInfo = () => {
  const { name, logout } = useAuth();

  return (
    <div className="user-info">
      {name && (
        <>
          <strong>Hello</strong> {name}
        </>
      )}
      {!name && <Link to="/login">Login</Link>}
    </div>
  );
};

export default UserInfo;
