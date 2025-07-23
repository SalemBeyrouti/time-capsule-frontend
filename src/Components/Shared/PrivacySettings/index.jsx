import React, { useState } from "react";
import Button from "../Button";
import "./styles.css";

const PrivacySettings = () => {
    const [publicProfile, setPublicProfile] = useState(true);
    const [showCapsulesOnWall, setShowCapsulesOnWall] = useState(true);
    const [shareData, setShareData] = useState(false);
    const handleSavePrivacy = () => {
        const privacyPayload = {
            publicProfile, showCapsulesOnWall, shareData,
        };
        console.log("Saving privacy settings:", privacyPayload);
    };
    return (
        <div className="profile-form-card">
            <div className="profile-info-form">
                <div className="form-header">
                    <h2>Privacy Settings</h2>
                    <p>Manage visibility and data usage preferences</p>
                    <Button text="Save Privacy Preferences" variant="primary" onClick={handleSavePrivacy} />
                </div>
                <div className="form-section">
                    <label className="form-label">Public Profile</label>
                    <div className="checkbox-field">
                        <input type="checkbox" checked={publicProfile} onChange={() => setPublicProfile((prev) => !prev)}/>
                        <label>Allow others to view my profile and username</label>
                    </div>
                </div>
                <div className="form-section">
                    <label className="form-label">Capsule Visibility</label>
                    <div className="checkbox-field">
                        <input type="checkbox" checked={showCapsulesOnWall} onChange={() => setShowCapsulesOnWall((prev) => !prev)} />
                        <label>Allow revealed capsules to appear on the public wall</label>
                    </div>
                </div>
                <div className="form-section">
                    <label className="form-label">Data Sharing</label>
                    <div className="checkbox-field">
                        <input type="checkbox" checked={shareData} onChange={() => setShareData((prev) => !prev)} />
                        <label>Allow anonymous usage data for research and insights</label>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default PrivacySettings;