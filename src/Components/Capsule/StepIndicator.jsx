import React from "react";
import "./style.css";
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineDescription, MdOutlineColorLens } from "react-icons/md";
import { FiCalendar } from "react-icons/fi";


const StepIndicator = ({ currentStep }) => { 
    const steps = [
        {
            id: 1,
            label: "Content",
            description: "Add your message and media",
            icon: <MdOutlineDescription />
        },

        {
            id: 2,
            label: "Customize",
            description: "Personalize your capsule",
            icon: <MdOutlineColorLens />
        },
        {
            id: 3,
            label: "Scheduele",
            description: "Set delivery date and privacy",
            icon: <FiCalendar />
        }
    ];

    return (
        <div className="step-indicator">
            {steps.map((step) => (
                <div key={step.id} className={`step-item ${step.id === currentStep 
                ? "active" : step.id < currentStep ? "completed" : "" }`} >
                 <div className="step-icon">
                    {step.id < currentStep ? <FaCheckCircle /> : step.icon}
                 </div>
                 <div className="step-info">
                        <span className="step-label">{step.label}</span>
                        <span className="step-desc">{step.description}</span>
                 </div>
                </div>
            ))}
        </div>
    );
};

export default StepIndicator;