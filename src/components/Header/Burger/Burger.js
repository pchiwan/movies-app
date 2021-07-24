import React, { useState } from "react";

import Navbar from "../Navbar";
import "./Burger.scss";

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="burger">
      <button className="burger-button" onClick={handleToggleMenu}>
        <span />
        <span />
        <span />
      </button>
      {isOpen && <Navbar className="burger-navbar" />}
    </div>
  );
};

export default Burger;
