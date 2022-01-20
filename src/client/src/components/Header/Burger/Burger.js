import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

import * as authService from "../../../services/authService";
import { useLoadingStatus } from "../../../LoadingStatusProvider";
import { useAuth } from "../../../AuthProvider";

import "./Burger.scss";

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, name, logout } = useAuth();
  const { setIsLoading } = useLoadingStatus();
  const menuRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleClickMenuOption = () => {
    setIsOpen(false);
  };

  const handleLogout = async () => {
    await authService.logout();
    logout();
    setIsLoading(true);
    window.location.reload();
  };

  return (
    <div className="burger">
      <button className="burger-button" onClick={handleToggleMenu}>
        <span />
        <span />
        <span />
      </button>
      {isOpen && (
        <ul className="burger-navbar" ref={menuRef}>
          {isAuthenticated && (
            <li>
              <span>
                <strong>Hello</strong> {name}.
              </span>
            </li>
          )}
          <li className="clickable">
            <NavLink exact to="/" onClick={handleClickMenuOption}>
              Home
            </NavLink>
          </li>
          {!isAuthenticated && (
            <li className="clickable">
              <NavLink exact to="/login" onClick={handleClickMenuOption}>
                Login
              </NavLink>
            </li>
          )}
          {isAuthenticated && (
            <li className="clickable" onClick={handleLogout}>
              <span>Logout</span>
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Burger;
