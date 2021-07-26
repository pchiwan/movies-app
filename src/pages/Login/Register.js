import React from "react";
import { Link, useHistory } from "react-router-dom";

import * as authService from "../../services/authService";
import { useAuthData } from "../../AuthProvider";
import Form from "./Form";

const Register = () => {
  const history = useHistory();
  const { login } = useAuthData();

  const handleSuccessfulRegister = async (user) => {
    login(user);
    history.push("/");
  };

  return (
    <>
      <Form
        includeName
        onSubmit={authService.register}
        onSuccess={handleSuccessfulRegister}
      />
      <p style={{ textAlign: "center" }}>
        Already have an account?{" "}
        <strong>
          <Link to="/login">Login</Link>
        </strong>
      </p>
    </>
  );
};

export default Register;
