import React from "react";
import { Link } from "react-router-dom";

import { useAuthData } from "../../../AuthProvider";

import "./UserInfo.scss";

const UserInfo = () => {
  const { name } = useAuthData();

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
