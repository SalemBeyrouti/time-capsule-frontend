import React from "react";
import "./style.css";

const MessageInput = ({ label, value, onChange, placeholder }) => {
    return (
        <div className="message-input">
            {label && <label className="message-label">{label}</label>}
            <textarea className="message-textarea" value={value} onChange={(e) => onChange(e.target.value)} placeholder ={placeholder} rows={6} />
        </div>
    );
};

export default MessageInput;