import React from "react";
import "./styles.css";



const Button = ({ text, onClick, variant = "primary", type="button",icon, className=""}) => {

    return (
        <button className={`btn ${variant} ${className}`} onClick={onClick} type={type} > {icon && <span className="btn-icon">{icon}</span>}
            {text} 
        </button>
    );
};

export default Button;
