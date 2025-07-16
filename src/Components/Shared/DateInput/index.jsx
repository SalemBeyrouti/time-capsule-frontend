import React from "react";
import "./styles.css";

const DateInput = ({ value, onChange }) => {
  return (
    <div className="date-input-container">
      <label htmlFor="delivery-date" className="date-label">
        Delivery Date
      </label>
      <input
        id="delivery-date"
        type="date"
        value={value}
        onChange={onChange}
        className="date-picker"
      />
    </div>
  );
};

export default DateInput;
