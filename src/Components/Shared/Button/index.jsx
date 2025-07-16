import React from "react";
import "./styles.css";



const Button = ({ text, onClick, variant = "primary", type="button", className=""}) => {

    return (
        <button className={`btn ${variant} ${className}`} onClick={onClick} type={type}>
            {text}
        </button>
    );
};

export default Button;
