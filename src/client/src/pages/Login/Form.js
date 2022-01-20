import React, { useState } from "react";

import Button from "../../components/Button";

import "./Form.scss";

const Form = ({ includeName = false, onSubmit, onSuccess }) => {
  const [error, setError] = useState("");
  const [user, setUser] = useState({
    email: "",
    name: "",
    password: "",
  });

  const isLoginDisabled = !user.email || !user.password;

  const handleInputChange = (event) => {
    setUser({
      ...user,
      [event.target.id]: event.target.value,
    });
    setError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isLoginDisabled) {
      return;
    }

    try {
      const data = await onSubmit({
        email: user.email,
        password: user.password,
        ...(includeName && !!user.name ? { name: user.name } : {}),
      });
      onSuccess(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="login">
        <div className="group">
          <label htmlFor="email">
            Email <sup>*</sup>
          </label>
          <input
            id="email"
            type="text"
            onChange={handleInputChange}
            value={user.email}
          />
        </div>
        {includeName && (
          <div className="group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              onChange={handleInputChange}
              value={user.name}
            />
          </div>
        )}
        <div className="group">
          <label htmlFor="password">
            Password <sup>*</sup>
          </label>
          <input
            id="password"
            type="password"
            onChange={handleInputChange}
            value={user.password}
          />
        </div>
        <Button type="submit">Login</Button>
        <p className="login-error">{error}</p>
      </div>
    </form>
  );
};

export default Form;
