import React from "react";
import axios from "../../../api/axios";
import Button from "../Button";


const ExportCapsuleButton = ({ capsuleId }) => {
    const handleDownload = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await axios.get(`/user/capsules/${capsuleId}/export`, {
                headers: { Authorization: `Bearer ${token}` },
                responseType: "blob", 
                
            });
            const blob = new Blob([response.data], { type: "application/zip" });
            const url = window.URL.createObjectURL(blob);

            const link = document.createElement("a");
            link.href = url;
            link.download = `capsule-${capsuleId}.zip`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error("Export failed:", error.response?.data || error.message);
        }
    };
    
    return (
        <Button className="export-button" text="Export Capsule" variant= "primary" onClick={handleDownload} />
    );
};

export default ExportCapsuleButton;