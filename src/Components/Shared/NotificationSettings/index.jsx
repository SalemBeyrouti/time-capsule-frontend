import React, { useState } from "react";
import Button from "../Button";
import "./styles.css";

const NotificationSettings = () => {
    const [emailAlerts, setEmailAlerts] = useState(true);
    const [pushAlerts, setPushAlerts] = useState(false);
    const [newsletter, setNewsletter] = useState(true);

    const handleSaveNotifications = () =>  {
        const notificationPrefs = {
            emailAlerts,
            pushAlerts,
            newsletter,
    };
    console.log("Saving notification settings:", notificationPrefs);
};

return (
    <div className="profile-form-card">
        <div className="profile-info-form">
            <div className="form-header">
                <h2>Notifications Settings</h2>
                <p>Update how and when you receive alerts</p>
                <Button
                text="Save Notification Preferences" variant="primary" onClick={handleSaveNotifications}/>
            </div>

            <div className="form-section">
                <label className="form-label">Email Alerts</label>
                <div className="checkbox-field">
                    <input type="checkbox" checked={emailAlerts} onChange={() => setEmailAlerts((prev) => !prev)}/>
                </div>
            </div>

            <div className="form-section">
                <label className="form-label">Push Notifications</label>
                <div className="checkbox-field">
                    <input type="checkbox" checked={pushAlerts} onChange={() => setPushAlerts((prev) => !prev)} />
                    <label>Allow push notifications on supported devices</label>
                </div>
            </div>
            <div className="form-section">
                <label className="form-label">Newsletter</label>
                <div className="checkbox-field">
                    <input type="checkbox" checked={newsletter} onChange={() => setNewsletter((prev) => !prev)} />
                    <label> Subscribe to our monthly capsule stories and product updates</label>
                </div>
            </div>
        </div>
    </div>
);
};

export default NotificationSettings;