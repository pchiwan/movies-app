import React from "react";

const Dropdown = ({ onChange, options = [], ...rest }) => {
  const handleChange = (event) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <select onChange={handleChange} {...rest}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
