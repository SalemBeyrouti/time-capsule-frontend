import React from "react";
import { useState } from "react";
import "./styles.css";
import Navbar from "../../Components/Layout/Navbar/Navbar";
import SideBarItem from "../../Components/Shared/SideBarItem";
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
                {selectedTab === "notifications" && <h2>Notifications Settings</h2>}
                {selectedTab === "account" && <h2>Account Security</h2>}
                {selectedTab === "privacy" && <h2>Privacy Settings</h2>}
            </div>
        </div>

    </>
    );

};

export default Profile;