import React, { useState } from "react";
import TextInput from "../TextInput/TextInput";
import Button from "../Button";
import "./style.css";

const TagInput = ({ tags, setTags }) => {
  const [tagInput, setTagInput] = useState("");

  const handleAddTag = () => {
    const trimmed = tagInput.trim();
    if (trimmed && !tags.includes(trimmed)) {
      setTags([...tags, trimmed]);
      setTagInput("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddTag();
    }
  };

  const handleRemoveTag = (index) => {
    const newTags = [...tags];
    newTags.splice(index, 1);
    setTags(newTags);
  };

  return (
    <div className="tag-input-wrapper">
        <h3>Tags</h3>
      <div className="tag-input-row">

         <TextInput
          placeholder="Add a tag..."
          value={tagInput}
          onChange={(e) => setTagInput(e.target.value)}
          onKeyDown={handleKeyDown}/>

         <Button text="+ Add" onClick={handleAddTag} variant="primary" />
      </div>

      <div className="tag-list">
        {tags.map((tag, index) => (
          <span key={index} className="tag-chip">
            #{tag}
            <button className="remove-tag" onClick={() => handleRemoveTag(index)}>×</button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default TagInput;
