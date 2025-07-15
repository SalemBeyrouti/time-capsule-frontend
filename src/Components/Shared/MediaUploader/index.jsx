import React from "react";
import "./style.css";

const MediaUploader = ({ images =[], onImageUpload, onVoiceUpload, onLocationCapture }) => {
    const handleImageChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        onImageUpload && onImageUpload(selectedFiles);
    };

    const handleVoiceChange = (e) => {
        const voiceFile = e.target.files[0];
        onVoiceUpload && onVoiceUpload(voiceFile);
    };

    const handleLocationClick = () => {
    if (onLocationCapture) onLocationCapture();
    };

    return (
        <div className="media-uploader">
      {onImageUpload && (
        <div className="media-block">
          <span className="media-label">Images</span>
          <label className="upload-label">
                Upload Images
                <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageChange}
                    hidden
                />
                </label>
          <div className="image-preview">
            {images.map((img, index) => (
              <img
                key={index}
                src={URL.createObjectURL(img)}
                alt={`preview-${index}`}
                className="preview-img"
              />
            ))}
          </div>
        </div>
      )}

      {onVoiceUpload && (
        <div className="media-block">
          <span className="media-label">Voice Message</span>
          <label className="upload-label">
            Upload Voice Message
            <input
                type="file"
                accept="audio/*"
                onChange={handleVoiceChange}
                hidden
            />
            </label>
        </div>
      )}

      {onLocationCapture && (
        <div className="media-block">
          <label className="media-label">Location</label>
          <button className="btn btn-upload" onClick={handleLocationClick}>
            Capture Current Location
          </button>
          
        </div>
      )}
    </div>
  );
};
        


export default MediaUploader;