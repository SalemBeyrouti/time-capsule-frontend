import React from 'react'
import EmojiPickerComponent from '../../Shared/EmojiPicker';
import BackgroundColorPicker from '../../Shared/BackgroundColorPicker';
import BackgroundImageUpload from '../../Shared/BackgroundImage';
import TextInput from '../../Shared/TextInput/TextInput';
import Button from '../../Shared/Button';
import TagInput from '../../Shared/TagInput';
import "./styles.css"

const StepTwoContent= ({ capsuleData, setCapsuleData }) => {
  
  const handleSetEmoji = (emoji) => {
    setCapsuleData((prev) => ({
      ...prev,emoji,
    }));
    
  };

  const handleSetBackgroundColor = (color) =>{
    setCapsuleData((prev) => ({...prev, backgroundColor:color, customBackground: null

    }));
  };

  const setCustomBackground = (file) => {
    setCapsuleData((prev) => ({...prev, customBackground:file

    }));
  };

  return (
    <div className="step-two-content">
      <h3 className="section-title">Customize</h3>
      <p className="section-subtitle">Personalize your capsule</p>
      
      <TextInput label="Capsule Title" placeholder="Give your time capsule a title..." value={capsuleData.title} onChange={(e) => setCapsuleData((prev) => ({...prev, title: e.target.value}))} />
      
      
        <EmojiPickerComponent emoji={capsuleData.emoji} setEmoji={handleSetEmoji} />

        <BackgroundColorPicker backgroundColor={capsuleData.backgroundColor} setBackgroundColor={handleSetBackgroundColor} />

        <BackgroundImageUpload customBackground={capsuleData.customBackground} setCustomBackground={setCustomBackground}/>

        <TagInput tags={capsuleData.tags} setTags={(tags) => setCapsuleData((prev) => ({ ...prev, tags }))} />
      
    </div>
  );
};

export default StepTwoContent;