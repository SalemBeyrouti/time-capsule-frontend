import React from "react";
import "./styles.css";
import Button from "../Button";

const CapsuleCard = ({ data, isPreview = false  }) => {
    const { message,
        images,
        voiceRecording,
        location,
        title,
        emoji,
        backgroundColor,
        customBackground,
        tags,
        deliveryDate,
        privacy,
        surpriseMode,
        notifyEmail } = data;

    return ( 
    <>
    <div className="capsule-card" style={backgroundColor ? {backgroundColor} : {}}>

        {isPreview && (
            <div className="capsule-preview-header">
                <h2 className="preview-title">Preview Time Capsule</h2>
                <div className="preview-actions">
                    <Button text="Save Draft" variant="secondary" />
                    <Button text="Schedule Capsule" variant="primary" />
                </div>
            </div>
        )}

        <div className={`capsule-header ${customBackground ? "with-img" : ""}`} style ={{ backgroundImage: customBackground ? `url(${URL.createObjectURL(customBackground)})` : "none"}} >
            <div className="header-content">
                {emoji && <div className="capsule-emoji">{emoji}</div>}
                {title && <h3 className="capsule-title">{title}</h3>}
                <div className="capsule-tags">
                    <span className ={`privacy-tag ${privacy}`}>{privacy}</span>
                    {tags && tags.map((tag, index) => (<span key={index} className="capsule-tag">#{tag}</span>))}
                </div>
            </div>
        </div>
            <div className="capsule-message-section">
                <h4 className="message-label">Message</h4>
                <p className="capsule-message">{message || "No message"}</p>
            </div>
            {images && images.length > 0 && (
                <div className = "capsule-images">
                    <h4 className="images-content">Attached images</h4>
                    <div className = "image-thumbnails">
                        {images.map((img, index) => ( <img key={index} src={typeof img === "string" ? img : URL.createObjectURL(img)} alt={`capsule-img-${index}`} className="capsule-image-thumb"/>))}
                    </div>
                </div>
            )}
            {voiceRecording && (
                <div className="capsule-voice-recording">
                    <h4 className="capsule-voice">Voice Message</h4>
                    <audio controls src={URL.createObjectURL(voiceRecording)} className="voice-thumb" />
                </div>
            )}
            <div className="capsule-info">
                <h4 className="info-label">Delivery Information</h4>
                <div className="info-item">Reveal Date: {deliveryDate} </div>
                <div className="info-item">Privacy: {privacy}</div>
                <div className="info-item">Email Notification: {notifyEmail ? "Enabled" : "Disabled"}</div>
                <div className="info-item">Surprise Mode: {surpriseMode ? "On" : "Off"}</div>

            </div>

        
        
    </div>
    </>
        
    );
    
};

export default CapsuleCard;