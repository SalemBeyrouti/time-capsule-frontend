import React from "react";
import "./styles.css";

const CheckboxOption = ({ label, description, checked, onChange }) => {
  return (
    <label className="checkbox-option">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="checkbox-input"
      />
      <div className="checkbox-content">
        <span className="checkbox-label">{label}</span>
        <p className="checkbox-description">{description}</p>
      </div>
    </label>
  );
};

export default CheckboxOption;
