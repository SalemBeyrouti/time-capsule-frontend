import React, { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import "./style.css"; 
import Button from "../Button";

const EmojiPickerComponent = ({ emoji, setEmoji }) => {
  const [showPicker, setShowPicker] = useState(false);

  const handleEmojiClick = (emojiData) => {
    setEmoji(emojiData.emoji); 
    setShowPicker(false);
  };

  return (
    <div className="emoji-picker-wrapper">
      <label className="emoji-label">Emoji:</label>
      <Button onClick={() => setShowPicker((prev)=>!prev)} text={emoji ? `${emoji} Change` : "Pick Emoji"} variant="primary" />
      {showPicker && (
        <div className="emoji-picker-popup">
          <EmojiPicker onEmojiClick={handleEmojiClick} height={350} />
        </div>
      )}
    </div>
  );
};

export default EmojiPickerComponent;
