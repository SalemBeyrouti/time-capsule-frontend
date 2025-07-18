import React from "react";
import "./styyles.css";
import CapsuleCard from "../CapsuleCard";
import { useLocation } from "react-router-dom";

const CapsuleContent = () => {
  const { state: capsuleData } = useLocation();

  if (!capsuleData) {
    return <p>No preview data.</p>;
  }

  return (
    <div>
      <CapsuleCard data={capsuleData} isPreview={true} />
    </div>
  );
};

export default CapsuleContent;
