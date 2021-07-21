import React from "react";

import Navbar from "../Navbar";
import UserInfo from "../UserInfo";

import "./Header.scss";

const Header = () => {
  return (
    <header>
      <h1 className="title">
        <span>Movies</span> <span>App</span>{" "}
        <span role="img" aria-label="Popcorn">
          🍿
        </span>
      </h1>
      <Navbar />
      <UserInfo />
    </header>
  );
};

export default Header;
