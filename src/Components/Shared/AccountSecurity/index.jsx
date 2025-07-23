import React, { useState } from "react";
import Button from "../Button";
import "./styles.css";

const AccountSecurity = () => {
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

    const handleSaveSecurity = () => { 
        const securityPayload = {
            currentPassword,
            newPassword,
            confirmPassword,
            twoFactorEnabled,
        };
        console.log("Saving account security settings:", securityPayload);
    };

    return (
         <div className="profile-form-card">
            <div className="profile-info-form">
                <div className="form-header">
                    <h2>Account Security</h2>
                    <p>Change password and manage account access</p>
                    <Button text="Save Security Settings" variant="primary" onClick={handleSaveSecurity} />
                </div>
              <div className="form-section">
                <label className="form-label">Current Password</label>
                <input type="password" className="input-field" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} placeholder="Enter current password" />
                </div>
                <div className="form-section">
                    <label className="form-label">New Password</label>
                    <input type="password" className="input-field" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="Enter new password" />
                </div>
                <div className="form-section">
                    <label className="form-label">Two-Factor Authentication</label>
                    <div className="checkbox-field">
                        <input type="checkbox" checked={twoFactorEnabled} onChange={() => setTwoFactorEnabled((prev) => !prev)} />
                        <label>Enable 2FA via email or authenticator app</label>
                    </div>
                </div>
 
            </div>
         </div>
    );
};

export default AccountSecurity;