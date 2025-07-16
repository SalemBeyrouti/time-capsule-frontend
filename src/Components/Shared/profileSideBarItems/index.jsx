import React from "react";
import { FaUser, FaBell, FaLock, FaShieldAlt } from "react-icons/fa";


const profileSideBarItems = [
    {
        id: "profile",
        label: "Profile Information",
        description: "Manage your public profile details",
        icon: <FaUser />,
    },
    {
        id: "notifications",
        label: "Notifications",
        description: "Update how and when you receive alerts",
        icon: <FaBell  />,
    },
    {
        id: "account",
        label: "Account Security",
        description: "Change password and manage account access",
        icon: <FaLock  />,
    },
    {
        id: "privacy",
        label: "Privacy",
        description: "Control what others can see",
        icon: <FaShieldAlt  />,
    },

];

export default profileSideBarItems;