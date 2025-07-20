import React, { useState } from "react";
import "./style.css";
import StepIndicator from "../Capsule/StepIndicator";
import StepOneContent from "../Capsule/StepOneContent";
import StepTwoContent from "../Capsule/StepTwoContent";
import StepThreeContent from "../Capsule/StepThreeContent";
import Navbar from "../Layout/Navbar/Navbar";
import Button from "../Shared/Button";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios"

const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
};

const CreateCapsule = () => {
    const [currentStep, setCurrentStep] = useState(1);

    const navigate = useNavigate();



    const [capsuleData, setCapsuleData] = useState({
        message: "",
        images: [],
        voiceRecording: null,
        location: null,
        title: "",
        emoji: "",
        backgroundColor: "#000000",
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

   const handlePreview = () => {
    const media = [];
    if (capsuleData.images?.length > 0) {
        for (const image of capsuleData.images) {
            media.push({ type: "image", file: image });
        }
    }

    if (capsuleData.voiceRecording) {
        media.push({ type: "audio", file: capsuleData.voiceRecording });
    }
    if (capsuleData.customBackground) {
         media.push({ type: "image", file: capsuleData.customBackground, purpose: "background" });
    }
    if (capsuleData.message) {
        media.push({ type: "text", content: capsuleData.message });
    }
    navigate("/previewcapsule", {
        state: {
            capsuleData, media,
        },
    });

   };

    return ( 
        <>
        <Navbar />
        <div className="capsule-page-content">
            <div className= "capsule-page-top">

                <h1 className="capsule-page-title">Create a time Capsule</h1>
                <p className="capsule-page-subtitle">Create a meaningful message for the future with multimedia contentd and personalized settings</p>
                <StepIndicator currentStep={currentStep} />
            </div>

            

            <div className="create-capsule-container">
                <div className="capsule-step-content">
                    {steps[currentStep]}
                </div>

                <div className="capsule-step-buttons">
                    {currentStep > 1 && (<Button onClick={prevStep}text="Back" variant="secondary" className="cta-button" />
                )}
                {currentStep < 3 ? (<Button onClick={nextStep}text="Next" variant="primary" className="cta-button" />) 
                                : (<Button onClick={handlePreview}text="Preview & Schedule" variant="cta-button"  />
                                 
                                )}
                </div>

            </div>
        </div>
        </>
    );


};

export default CreateCapsule;