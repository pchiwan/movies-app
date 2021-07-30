import React from "react";
import { Link } from "react-router-dom";

import { useAuthData } from "../../../AuthProvider";
import Spinner from "../../Spinner";

import "./UserInfo.scss";

const UserInfo = () => {
  const { isLoading, name } = useAuthData();

  return !isLoading ? (
    <div className="user-info">
      {name && (
        <>
          <strong>Hello</strong> {name}
        </>
      )}
      {!name && <Link to="/login">Login</Link>}
    </div>
  ) : (
    <Spinner />
  );
};

export default UserInfo;
