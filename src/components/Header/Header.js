import React from "react";

import Burger from "./Burger";
import UserInfo from "./UserInfo";
import { useWidth } from "../../ResponsiveProvider";

import "./Header.scss";

const MIN_WIDTH = 740;

const Header = () => {
  const width = useWidth();
  const showBurgerMenu = width <= MIN_WIDTH;

  return (
    <header>
      <h1 className="title">
        <span>Movies</span> <span>App</span>{" "}
        <span role="img" aria-label="Popcorn">
          🍿
        </span>
      </h1>
      {showBurgerMenu && <Burger />}
      {!showBurgerMenu && <UserInfo />}
    </header>
  );
};

export default Header;
