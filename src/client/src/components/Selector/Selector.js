import React from "react";

import Dropdown from "../Dropdown";
import "./Selector.scss";

const Selector = ({ label, options = [], onChange, selected }) => {
  return (
    <div className="selector">
      <label>{label}</label>
      <Dropdown
        className="selector-dropdown"
        onChange={onChange}
        options={options}
        value={selected}
      />
    </div>
  );
};

export default Selector;
