import React, { useState } from "react";
import Button from "../Button";
import "./styles.css";
import { FaUpload, FaTrashAlt } from "react-icons/fa";

const ProfileInfoForm = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [name, setName] = useState("Salem Beyrouti");
  const [bio, setBio] = useState(
    "Digital storyteller and time capsule enthusiast. I believe in preserving moments that matter and sharing stories that inspire."
  );
  const [timezone, setTimezone] = useState("Easter Time (ET)");
  const [autoDetect, setAutoDetect] = useState(true);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setProfilePic(file);
  };

  return (
    <div className="profile-form-card">
        <div className="profile-info-form">
        <div className="form-header">
            <h2>Profile Information</h2>
            <p>Manage your public profile details</p>
            <Button text="Save All Changes" variant="primary" />
        </div>

        
        <div className="form-section">
            <label className="form-label">Profile Picture</label>
            <div className="profile-pic-box">
            {profilePic ? (
                <img
                src={URL.createObjectURL(profilePic)}
                alt="profile"
                className="profile-image"
                />
            ) : (
                <div className="image-placeholder" />
            )}
            <div className="pic-actions">
                <label className="upload-btn">
                <FaUpload /> Upload new
                <input
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={handleImageChange}
                />
                </label>
                {profilePic && ( <Button variant="secondary" onClick={() => setProfilePic(null)} />
                
                )}
            </div>
            </div>
        </div>

        
        <div className="form-section">
            <label className="form-label">Display Name</label>
            <input
            type="text"
            className="input-field"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
        </div>

        
        <div className="form-section">
            <label className="form-label">Bio</label>
            <textarea
            className="input-field"
            rows={3}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            />
        </div>

        
        <div className="form-section">
            <label className="form-label">Timezone</label>
            <select
            className="input-field"
            value={timezone}
            onChange={(e) => setTimezone(e.target.value)}
            >
            <option>Easter Time (ET)</option>
            <option>Central Time (CT)</option>
            <option>Pacific Time (PT)</option>
            </select>
            <small className="field-hint">Used for scheduling capsule reveals</small>

            <div className="checkbox-field">
            <input
                type="checkbox"
                checked={autoDetect}
                onChange={() => setAutoDetect((prev) => !prev)}
            />
            <label>Auto-detect timezone</label>
            </div>
        </div>

        
        <div className="form-section">
            <h4>Account Information</h4>
            <p>
            <strong>Email:</strong>{" "}
            <span className="highlighted">salem_beyrouti@hotmail.com</span>
            </p>
            <p>
            <strong>Member Since:</strong> March 2025
            </p>
        </div>
        </div>
    </div>
  );
};

export default ProfileInfoForm;
