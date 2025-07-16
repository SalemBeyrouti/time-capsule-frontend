import React from 'react';
import "./styles.css";
import PrivacySelector from '../../Shared/PrivacySelector';
import DateInput from '../../Shared/DateInput';
import CheckboxOption from '../../Shared/CheckBox';

const StepThreeContent = ({ capsuleData, setCapsuleData }) => {
  return (
    <>
    <div className="step-three-container">
      <h3 className="step-title">Schedule</h3>
      <p className="step-subtitle">Set delivery date and privacy</p>
    
      <DateInput
        value={capsuleData.deliveryDate}
        onChange={(e) =>
        setCapsuleData((prev) => ({...prev, deliveryDate: e.target.value,
      }))
        }/>
      <PrivacySelector value={capsuleData.privacy} onChange={(newPrivacy) => setCapsuleData((prev) => ({...prev, privacy: newPrivacy}))} />

      <CheckboxOption
        label="Surprise Mode"
        description="Hide the capsule content until the reveal date"
        checked={capsuleData.surpriseMode}
        onChange={() =>
          setCapsuleData((prev) => ({
            ...prev,
            surpriseMode: !prev.surpriseMode,
          }))
        }
      />

      <CheckboxOption
        label="Email Notification"
        description="Send me an email when the capsule is revealed"
        checked={capsuleData.notifyEmail}
        onChange={() =>
          setCapsuleData((prev) => ({
            ...prev,
            notifyEmail: !prev.notifyEmail,
          }))
        }
      />
    </div>
    </>
  );
};

export default StepThreeContent;
