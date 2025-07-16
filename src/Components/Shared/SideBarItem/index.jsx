import React from "react";
import "./style.css";
import Button from "../Button";

const SideBarItem = ({ id, icon, label, description, selected, onClick }) => {
    return (
        <Button onClick={()=> onClick(id)} variant={selected ? "secondary" : "tertiary"} className="sidebar-button" icon={icon} text={<div className="sidebar-button-text">
            {label} 
            <p>{description}</p>
        </div>
        } />
    );
};

export default SideBarItem;