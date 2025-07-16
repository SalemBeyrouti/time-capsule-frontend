import React from "react";
import "./styles.css";
import Button from "../Button";
import { FiSend } from "react-icons/fi";
import { FaRegSave } from "react-icons/fa";
import { useNavigate } from "react-router-dom";



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
        

    const navigate = useNavigate();
    
        return ( 
    <>
    
    <div className="capsule-card" style={backgroundColor ? {backgroundColor} : {}}>

        {isPreview && (
            <div className="capsule-preview-header">
                <h2 className="preview-title">Preview Time Capsule</h2>
                <div></div>
                <div className="preview-actions">
                    <Button icon={<FaRegSave />} text="Save Draft" variant="secondary" onClick={() => {
                    localStorage.setItem("draftCapsule", JSON.stringify(data));
                    console.log("Draft saved locally!");
                    }} />
                    <Button icon={<FiSend />} text="Schedule Capsule" variant="primary" />
                    <Button text="X" variant="tertiary" onClick={() => navigate("/createcapsule")} />
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
            {(images?.length > 0 || voiceRecording) && (
                <div className="capsule-attachments">
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
                </div>
            )}
            <div className="capsule-info">
                <h4 className="info-label">Delivery Information</h4>
                <div className="info-grid">
                    <span className="info-key">Reveal Date:  </span>
                    <span className="info-value">{deliveryDate}</span>
                    <span className="info-key">Privacy:  </span>
                    <span className="info-value">{privacy}</span>
                    <span className="info-key">Email Notification:  </span>
                    <span className="info-value">{notifyEmail ? "Enabled" : "Disabled"}</span>
                    <span className="info-key">Surprise Mode:  </span>
                    <span className="info-value">{surpriseMode ? "On" : "Off"}</span>    
                </div>

            </div>

        
        
    </div>
    </>
        
    );
    
};

export default CapsuleCard;