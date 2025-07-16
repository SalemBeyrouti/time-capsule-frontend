import React from "react";
import "./style.css";

const predefinedColors = ["#FDF7F2", "#FEEBCB", "#C7A64F", "#7c2d2d", "#FCEFE3"];

const BackgroundColorPicker = ({ backgroundColor, setBackgroundColor }) => {
  return (
    <div className="background-picker-wrapper">
      <label className="background-label">Background Color:</label>
      <div className="color-options">
        {predefinedColors.map((color, index) => (
          <button
            key={index}
            className={`color-swatch ${backgroundColor === color ? "selected" : ""}`}
            style={{ backgroundColor: color }}
            onClick={() => setBackgroundColor(color)}
          />
        ))}
        <input
          type="color"
          value={backgroundColor}
          onChange={(e) => setBackgroundColor(e.target.value)}
          className="color-picker-input"
        />
      </div>
    </div>
  );
};

export default BackgroundColorPicker;
