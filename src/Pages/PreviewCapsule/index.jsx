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
  

  const [media, setMedia] = useState([]);
 

  const [capsuleId, setCapsuleId] = useState(state?.capsuleId);



 useEffect (() => {
  if (capsuleId) {
    const fetchMedia = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`/user/capsule/${capsuleId}/media`,{
           headers: { Authorization: `Bearer ${token}` },
        });
        console.log(" Response:", response.data);
        setMedia(response.data.payload);
      } catch (error) {
        console.error("Failed to fetch media:", error.response?.data || error.message);
      }
    };
    fetchMedia();
    
  } else {
    setMedia(rawMedia);
  }
 },[]);

 const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
 };

 const handleSubmit = async () => {
  const token =localStorage.getItem("token");
  console.log("token at start:", token);
  

  

  try {;
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
      location: capsuleData.location || null,
      notifyEmail: capsuleData.notifyEmail || false,

    }, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const newCapsuleId = response.data.payload.id;
    setCapsuleId(newCapsuleId);
  
    try {
      const ipRes = await fetch("https://api.ipify.org?format=json");
      const ipData = await ipRes.json();
      const ipAddress = ipData.ip;

      await axios.post("/user/locations", {
        capsule_id: newCapsuleId,
        ip_address: ipAddress,
      }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("Location saved using IP:", ipAddress);
      } catch(err) {
         console.error("Failed to save location:", err.response?.data || err.message);
      }
    const allMedia = [...rawMedia]
    if (capsuleData.customBackground && capsuleData.customBackground.file instanceof File) {
      allMedia.push({
        file: capsuleData.customBackground,
        type: "image",
        purpose:"background",
      });
    }
    for (const media of allMedia) {
      let base64 = null;

      if (media.file instanceof File) {
        base64 = await fileToBase64(media.file);
      } else if (media.data) {
        base64 = media.data;
      }
     

      const mediaPayload = {
        type: media.type,
        data: base64 || media.content,
        purpose: media.purpose || null,
      };
      console.log(" Sending media:", mediaPayload)

      await axios.post(`/user/capsules/${newCapsuleId}/media`, mediaPayload,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    }
    console.log("Capsule scheduled successfully");
    navigate("/landingpage");
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
      
      <CapsuleCard data={capsuleData} media={media} isPreview={true}>
      {!capsuleId && (
        <>
        <Button text = "Save Draft" variant= "secondary" icon={<i className="fas fa-save"></i>} onClick={() => console.log("Save Draft clicked")} />
        <Button text="Schedule Capsule" icon={<FiSend />} variant="primary" onClick={handleSubmit}/>
        <Button text="X" variant="tertiaryt" onClick={() => navigate("/landingpage")} />
       
        </>
      )}
      </CapsuleCard>
    </div>
  );
};


export default PreviewCapsule;
