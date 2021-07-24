import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { useAuthData } from "../../AuthProvider";
import Button from "../../components/Button";

import "./Login.scss";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const { login } = useAuthData();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const isLoginDisabled = !username || !password;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isLoginDisabled) {
      return;
    }

    login(username);

    history.push("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="login">
        <div className="group">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={handleUsernameChange}
            value={username}
          />
        </div>
        <div className="group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            onChange={handlePasswordChange}
            value={password}
          />
        </div>
        <Button disabled={isLoginDisabled} type="submit">
          Login
        </Button>
      </div>
    </form>
  );
};

export default Login;
