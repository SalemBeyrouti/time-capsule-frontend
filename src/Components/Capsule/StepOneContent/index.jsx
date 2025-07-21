import React from "react";
import MessageInput from "../../Shared/MessageInput";
import MediaUploader from "../../Shared/MediaUploader";
import "./style.css";

const StepOneContent = ({ capsuleData, setCapsuleData }) => {
    const handleMessageChange = (newMessage) => {
        setCapsuleData ({ ...capsuleData, message:newMessage });
    };

    const handleImageUpload = (files) => {
        setCapsuleData({ ...capsuleData, images: files});
    };

    const handleVoiceUpload = (file) => {
        setCapsuleData({ ...capsuleData, voiceRecording: file});
    };

    const handleLocationCapture = () => {
        navigator.geolocation.getCurrentPosition((pos) => {
            const  { latitude, longitude} = pos.coords;
            setCapsuleData({...capsuleData, location: {lat: latitude, lng: longitude},
                
            });
            console.log("Location Captured:", capsuleData.location)
        });
    };

    return (
       <div className="step-one-card">
            <div className="step-one">
                <div className="step-header"> 
                    <h3 className="step-title">Content</h3>
                    <p className="step-subtitle">Add your message and media</p>
                </div>

                <div className="message-area">
                    <label className="field-label">Your Message</label>
                </div>
                <div className="input-message-field">   
                    <MessageInput value={capsuleData.message} onChange={handleMessageChange} placeholder ="Write your message to the future..."/>
                </div>

                <MediaUploader
                onImageUpload={handleImageUpload}
                onVoiceUpload={handleVoiceUpload}
                onLocationCapture={handleLocationCapture}
                images={capsuleData.images}
                voiceFile={capsuleData.voiceRecording}
                location={capsuleData.location} />

                
                    
                
            </div>
        </div>
    );
};

export default StepOneContent;