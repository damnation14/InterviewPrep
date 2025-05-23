import React, { useState } from "react";

import "./chipsInput.css";

const handleDeleteTag = (setTags, index) => (e) => {
  setTags((prevTags) => prevTags.filter((_, i) => i !== index));
};

const makeTags = (tags, setTags) => {
  const tagDivs = tags.map((tag, index) => (
    <div className="tag">
      <div> {tag}</div>
      <div className="deleteTag" onClick={handleDeleteTag(setTags, index)}>
        X
      </div>
    </div>
  ));
  return tagDivs;
};

function ChipsInput() {
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setTags((prev) => [...prev, tagInput]);
      setTagInput("");
    }
  };

  const handleChange = (e) => {
    setTagInput(e.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "40px 0",
      }}
    >
      <h2>Chips Input</h2>
      <input
        type="text"
        placeholder="Type a chip and press tag"
        style={{ padding: "8px", width: "200px" }}
        onKeyDown={handleKeyDown}
        value={tagInput}
        onChange={handleChange}
      />
      <div className="tags">{makeTags(tags, setTags)}</div>
    </div>
  );
}

export default ChipsInput;
