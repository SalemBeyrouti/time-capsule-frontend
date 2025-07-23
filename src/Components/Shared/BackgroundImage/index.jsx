import React, { useRef } from "react";
import "./style.css";
import Button from "../Button";

const BackgroundImageUpload = ({ customBackground, setCustomBackground }) => {
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setCustomBackground(file);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const clearImage = () => {
    setCustomBackground(null);
  };

  return (
    <div className="background-upload-wrapper">
      <label className="background-label">Custom Background Image:</label>
      <div className="background-upload-actions">
        <Button text="Upload Image" onClick={handleUploadClick}  variant="primary" />
        {customBackground && (
          <Button text="Remove" onClick={clearImage}  variant="primary" />
            
          
        )}
      </div>

      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        ref={fileInputRef}
        style={{ display: "none" }}
      />

      {customBackground instanceof File && (
        <div className="background-preview">
          <img
            src={URL.createObjectURL(customBackground)}
            alt="Custom Background"
            className="background-preview-image"
          />
        </div>
      )}
    </div>
  );
};

export default BackgroundImageUpload;
