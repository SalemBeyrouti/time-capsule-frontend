import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CapsuleCard from "../../Components/Shared/CapsuleCard";
import axios from "../../api/axios";
import "./styles.css";
import Button from "../../Components/Shared/Button";
import { FiSend } from "react-icons/fi";

const PreviewCapsule = () => {
  const { state } = useLocation(); 
  const navigate = useNavigate();
  const capsuleData = state?.capsuleData;
  const rawMedia = state?.media || [];
  const capsuleId = state?.capsuleId;

  const [media, setMedia] = useState([]);





 useEffect (() => {
  if (capsuleId) {
    const fetchMedia = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`/user/capsule/${capsuleId}/media`,{
           headers: { Authorization: `Bearer ${token}` },
        });
        setMedia(response.data.payload);
      } catch (error) {
        console.error("Failed to fetch media:", error.response?.data || error.message);
      }
    };
    fetchMedia();
  } else {
    setMedia(rawMedia);
  }
 },[capsuleId, rawMedia]);

 const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
 };

 const handleSubmit = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post("/user/add_update_capsule", {
      title: capsuleData.title,
      emoji: capsuleData.emoji,
      color: capsuleData.backgroundColor,
      cover_image_url: null,
      message: capsuleData.message,
      revealed_at: capsuleData.deliveryDate,
      tags: capsuleData.tags,
      visibility: capsuleData.privacy,
      is_surprise: capsuleData.surpriseMode,
    }, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const capsuleId = response.data.payload.id;
    for (const media of rawMedia) {
      let base64 = null;

      if (media.file instanceof File) {
        base64 = await fileToBase64(media.file);
      } else if (media.data) {
        base64 = media.data;
      }

      await axios.post(`/user/capsules/${capsuleId}/media`, 
        {
          type: media.type,
          data: base64 || media.content,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    }
    console.log("Capsule scheduled successfully");
    navigate("/wall");
  } catch (error) {
    console.error("Failed to schedule capsule:", error.response?.data || error.message);
  }
  };
 

 if(!capsuleData) {
  return (
    <div className="preview-error">
      <p>No capsule data found</p>
      <Button onClick={()=> navigate("/createcapsule")} text="Go back" variant="primary" />
    </div>
  );
 }


  return (
    <div className="preview-wrapper">
      <CapsuleCard data={capsuleData} media={media} isPreview={true} />
      {!capsuleId && (
        <div className="preview-actions">
          <Button text ="Schedule  capsule" icon={<FiSend/>} variant="primary" onClick={handleSubmit} />
        </div>
      )}
    </div>
  );
};

export default PreviewCapsule;
