import React, { useState } from "react";
import "./style.css";
import StepIndicator from "../Capsule/StepIndicator";


const CreateCapsule = () => {
    const [currentStep, setCurrentStep] = useState(1);

    const [capsuleData, setCapsuleData] = useState({
        message: "",
        images: [],
        voiceRecording: null,
        location: null,
        title: "",
        emoji: "",
        backgroundColor: "",
        customBackground: null,
        tags: [],
        deliveryDate: "",
        privacy: "private",
        surpriseMode: false,
        notifyEmail: false,
    });

    const nextStep = () => setCurrentStep((prev) => Math.min(prev +1, 3));
    const prevStep = () => setCurrentStep((prev) => Math.max(prev -1, 1));

    const steps = {
        1: <StepOneContent capsuleData={capsuleData} setCapsuleData={setCapsuleData} />,
        2: <StepTwoContent capsuleData={capsuleData} setCapsuleData={setCapsuleData} />,
        3: <StepThreeContent capsuleData={capsuleData} setCapsuleData={setCapsuleData} />,
    };

    return (
        <div className="create-capsule-container">
            <StepIndicator currentStep={currentStep} />

            <div className="capsuel-step-content">
                {steps[currentStep]}
            </div>

            <div className="capsule-step-buttons">
                {currentStep > 1 && (<button onClick={prevStep} className="btn secondary">Back</button>
            )}
            {currentStep < 3 ? (<button onClick={nextStep} className="btn primary">Next</button>) 
                             : (<button onClick={() => console.log("Submit Capsule: ", capsuleData)} className="btn primary">
                                Submit
                             </button>
                            )}
            </div>

        </div>
    );


};

export default CreateCapsule;