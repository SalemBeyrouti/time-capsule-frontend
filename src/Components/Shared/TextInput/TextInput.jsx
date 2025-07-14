
import React from "react";
import "./styles.css";

const TextInput = ({ label, type = "text", placeholder, value, onChange, name, className="" }) => {
    return (
        <div className={`form-group ${className}`}>
            {label && <label htmlFor={name}>{label}</label>}
            <input 
                id ={name}
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="text-input"
                required
            />

        </div>
    );
};

export default TextInput;