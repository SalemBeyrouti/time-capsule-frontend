import React from "react";
import "./styles.css";
import Button from "../Button";
import { FiSend } from "react-icons/fi";
import { FaRegSave } from "react-icons/fa";
import { useNavigate } from "react-router-dom";



const CapsuleCard = ({ data, media = [], isPreview = false, children  }) => {
    
    const capsule = data || {};
    const customImage = media.find((m) => m.type === "image" && m.purpose === "background")?.url;
        

    const navigate = useNavigate();

    const getObjectUrl = (item) => {
        if (!item) return "";
        if (typeof item === "string") return item;
        if (item instanceof File) return URL.createObjectURL(item);
        if (item.url) return item.url;
        if (item.data) return item.data;
        if (item.file && item.file instanceof File) return URL.createObjectURL(item.file);
        return "";
    };

    const backgroundImage = getObjectUrl(
        media.find((m) => m.type === "image" && m.purpose === "background")
    );

        return ( 
    <>
    
    <div className="capsule-card" style = {{backgroundColor: capsule.backgroundColor || "#ffffff",
    }} >

        {isPreview && (
            <div className="capsule-preview-header">
                <h2 className="preview-title">Preview Time Capsule</h2>
                <div className="preview-actions">
                    {children}
                </div>
                
            </div>
        )}

        <div className="capsule-header"> 
            <div style= {{backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
                backgroundSize: "contain", backgroundPosition: "center",  backgroundRepeat: "no-repeat", height: "150px", width:"100%"}} >

            </div>

            <div className="header-content">
                {capsule.emoji && <div className="capsule-emoji">{capsule.emoji}</div>}
                {capsule.title && <h3 className="capsule-title">{capsule.title}</h3>}
                <div className="capsule-tags">
                    <span className ={`privacy-tag ${capsule.privacy}`}>{capsule.privacy}</span>
                    {capsule.tags && capsule.tags.map((tag, index) => (<span key={index} className="capsule-tag">#{tag}</span>))}
                </div>
            </div>
        </div>
            <div className="capsule-message-section">
                <h4 className="message-label">Message</h4>
                {media.find((m) => m.type === "text" || m.type === "markdown") ? (
                    media.filter((m) => m.type === "text" || m.type === "markdown").map((m, index) => (
                        <p key={index} className="capsule-message">{m.content}</p>
                    ))
                ) : (
                    <p className="capsule-message">{capsule.message || "no message"}</p>
                )}
            </div>
            {media.length > 0  && (
                <div className="capsule-attachments">
                    {media.filter((item) => item.type === "image").length >0 && (
                        <div className = "capsule-images">
                            <h4 className="images-content">Attached images</h4>
                            <div className = "image-thumbnails">
                                {media.filter((item) => item.type === "image").map((img, index) => (
                                    <img key={index} src={getObjectUrl(img)} alt={`capsule-img-${index}`} className="capsule-image-thumb" />
                                ))}
                            </div>
                        </div>
                    )}
                    {media.some((item) => item.type === "audio") && (
                        <div className="capsule-voice-recording">
                            <h4 className="capsule-voice">Voice Message</h4>
                            {media.filter((item) => item.type === "audio").map((audio, index) => (
                                <audio key={index} controls src={getObjectUrl(audio)} className="voice-thumb"/>
                            ))}
                        </div>
                    )}
                </div>
            )}
            <div className="capsule-info">
                <h4 className="info-label">Delivery Information</h4>
                <div className="info-grid">
                    <span className="info-key">Reveal Date:  </span>
                    <span className="info-value">{capsule.deliveryDate || capsule.revealed_at}</span>
                    <span className="info-key">Privacy:  </span>
                    <span className="info-value">{capsule.privacy}</span>
                    <span className="info-key">Email Notification:  </span>
                    <span className="info-value">{capsule.notifyEmail ? "Enabled" : "Disabled"}</span>
                    <span className="info-key">Surprise Mode:  </span>
                    <span className="info-value">{capsule.surpriseMode ? "On" : "Off"}</span>    
                </div>

            </div>

        
        
    </div>
    </>
        
    );
    
};

export default CapsuleCard;