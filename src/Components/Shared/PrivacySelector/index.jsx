import { FaLock, FaGlobe, FaLink, FaCheck } from "react-icons/fa";
import React from "react";
import "./styles.css";


const options = [
    {
        value:"private",
        icon: <FaLock/>,
        label: "Private",
        description: "Only you can see this capsule",
    },
    {
        value:"public",
        icon: <FaGlobe/>,
        label: "Public",
        description: "Anyone can discover and view this capsule",
    },
    {
        value:"unlisted",
        icon: <FaLink/>,
        label: "Unlisted",
        description: "Only people with link can view this capsule",

    },
];

const PrivacySelector = ({ value, onChange }) => {
    return (
        <div className="privacy-selector">
            {options.map((opt) => (
                <div key={opt.value} className={`privacy-option ${value === opt.value ? "selected" : ""}`} onClick={() => onChange(opt.value)}>
                 <span className="privacy-icon">{opt.icon}</span>
                 <div>{opt.label} {value === opt.value && <FaCheck />}
                 <p>{opt.description}</p>
                </div>
            </div>
            ))}
        </div>
    );
};

export default PrivacySelector;