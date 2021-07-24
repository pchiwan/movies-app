import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.scss";

const Navbar = ({ className = "navbar" }) => {
  return (
    <ul className={className}>
      <li>
        <NavLink activeClassName="active" exact to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" exact to="/user">
          User Movies
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" exact to="/about">
          About
        </NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
