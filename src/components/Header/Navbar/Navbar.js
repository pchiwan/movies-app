import React from "react";
import { NavLink } from "react-router-dom";

import { useAuthData } from "../../../AuthProvider";

import "./Navbar.scss";

const Navbar = ({ className = "navbar" }) => {
  const { isAuthenticated } = useAuthData();

  return (
    <ul className={className}>
      <li>
        <NavLink activeClassName="active" exact to="/">
          Home
        </NavLink>
      </li>
      {isAuthenticated && (
        <li>
          <NavLink activeClassName="active" exact to="/user">
            User Movies
          </NavLink>
        </li>
      )}
    </ul>
  );
};

export default Navbar;
