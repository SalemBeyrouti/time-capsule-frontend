import React from "react";
import { useState } from "react";
import "./styles.css";
import Navbar from "../../Components/Layout/Navbar/Navbar";
import SideBarItem from "../../Components/Shared/SideBarItem";
import AccountSecurity from "../../Components/Shared/AccountSecurity";
import PrivacySettings from "../../Components/Shared/PrivacySettings";
import NotificationSettings from "../../Components/Shared/NotificationSettings";
import profileSideBarItems from "../../Components/Shared/profileSideBarItems";
import ProfileInfoForm from "../../Components/Shared/ProfileInfoForm";

const Profile = () => {
    const [selectedTab, setSelectedTab] = useState("profile");
    
    
    return (

        <>

        <Navbar />
        <div className="profile-page-layout">
            
            <div className="profile-sidebar">
                <h2 className="sidebar-title">Profile Settings</h2>
                {profileSideBarItems.map((item) => (
                    <SideBarItem key={item.id} {...item} selected={selectedTab === item.id} onClick={setSelectedTab} />
                ))}
            </div>
            <div className="profile-tab-content">

                {selectedTab === "profile" && <ProfileInfoForm/>}
                {selectedTab === "notifications" && <NotificationSettings/>}
                {selectedTab === "account" && <AccountSecurity />}
                {selectedTab === "privacy" && <PrivacySettings />}
            </div>
        </div>

    </>
    );

};

export default Profile;