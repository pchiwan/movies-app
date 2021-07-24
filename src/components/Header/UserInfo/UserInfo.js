import React from "react";
import { Link } from "react-router-dom";

import { useAuthData } from "../../../AuthProvider";

import "./UserInfo.scss";

const UserInfo = () => {
  const { name } = useAuthData();

  return (
    <div className="user-info">
      <strong>User:</strong> {name || <Link to="/login">Login</Link>}
    </div>
  );
};

export default UserInfo;
