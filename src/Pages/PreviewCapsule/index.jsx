import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CapsuleCard from "../../Components/Shared/CapsuleCard";
import "./styles.css"; // optional custom styling

const PreviewCapsule = () => {
  const { state } = useLocation(); // from navigate()
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="preview-fallback">
        <p>No capsule data found. Please return to the form.</p>
        <button onClick={() => navigate("/createcapsule")}>Go Back</button>
      </div>
    );
  }

  return (
    <div
      className="preview-wrapper"
      style={{
        "--capsule-bg-color": state.backgroundColor || "#fefefc",
        "--capsule-bg-image": state.customBackground
          ? `url(${URL.createObjectURL(state.customBackground)})`
          : "none",
      }}
    >
      <CapsuleCard data={state} isPreview={true} />
    </div>
  );
};

export default PreviewCapsule;
