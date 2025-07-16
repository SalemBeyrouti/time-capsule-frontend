import React, { useState } from "react";
import "./style.css";
import StepIndicator from "../Capsule/StepIndicator";
import StepOneContent from "../Capsule/StepOneContent";
import StepTwoContent from "../Capsule/StepTwoContent";
import StepThreeContent from "../Capsule/StepThreeContent";
import Navbar from "../Layout/Navbar/Navbar";
import Button from "../Shared/Button";


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
        <>
        <Navbar />
        <div className="capsule-page-content">
            <div className= "capsule-page-top">

                <h1 className="capsule-page-title">Create a time Capsule</h1>
                <p className="capsule-page-subtitle">Create a meaningful message for the future with multimedia contentd and personalized settings</p>
            </div>

            <StepIndicator currentStep={currentStep} />

            <div className="create-capsule-container">
                <div className="capsule-step-content">
                    {steps[currentStep]}
                </div>

                <div className="capsule-step-buttons">
                    {currentStep > 1 && (<Button onClick={prevStep}text="Back" variant="secondary" className="cta-button" />
                )}
                {currentStep < 3 ? (<Button onClick={nextStep}text="Next" variant="primary" className="cta-button" />) 
                                : (<Button onClick={nextStep}text="Preview & Schedule" variant="primary" className="cta-button" />
                                 
                                )}
                </div>

            </div>
        </div>
        </>
    );


};

export default CreateCapsule;