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
            label: "Schedule",
            description: "Set delivery date and privacy",
            icon: <FiCalendar />
        }
    ];

    return (
        <div className="step-indicator">
  {steps.map((step, index) => {
    let itemClass = "step-item";

    if (step.id === currentStep) {
      itemClass += " active";
    } else if (step.id < currentStep) {
      itemClass += " completed";
    }

    return (
      <div key={step.id} className="step-wrapper">
        <div className={itemClass}>
          <div className="step-circle">
            {step.id < currentStep ? <FaCheckCircle /> : step.icon}
          </div>
          <div className="step-info">
            <span className="step-label">{step.label}</span>
            <br />
            <span className="step-desc">{step.description}</span>
          </div>
        </div>

        {index < steps.length - 1 && (
          <div className="step-line"></div>
        )}
      </div>
    );
  })}
</div>
        
    );
};

export default StepIndicator;