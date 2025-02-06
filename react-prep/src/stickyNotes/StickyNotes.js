import React, { useState, useRef } from "react";
import "./styles.css";

// Generate random integer between a range
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

// Generate random styles for each note
const generateNoteStyle = () => {
  const top = getRandomInt(0, window.innerHeight - 150); // Adjust for note height
  const left = getRandomInt(0, window.innerWidth - 150); // Adjust for note width
  const backgroundColor = `hsl(${getRandomInt(0, 360)}, 100%, 75%)`; // Random pastel color

  return {
    position: "absolute",
    top: `${top}px`,
    left: `${left}px`,
    backgroundColor,
    padding: "10px",
    width: "150px",
    height: "150px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "8px",
    boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
    color: "#333",
    cursor: "move", // Indicate draggable
  };
};

const StickyNotes = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const noteRefs = useRef({}); // Store refs for each note

  const handleAddNewNote = () => {
    if (newNote.trim()) {
      const noteId = `note-${notes.length}`;
      const noteStyle = generateNoteStyle();

      setNotes([...notes, { id: noteId, text: newNote, style: noteStyle }]);
      setNewNote(""); // Clear input field
    }
  };

  const handleMouseDown = (noteId, e) => {
    const note = noteRefs.current[noteId].current;
    const offsetX = e.clientX - note.getBoundingClientRect().left;
    const offsetY = e.clientY - note.getBoundingClientRect().top;

    const handleMouseMove = (e) => {
      const newTop = e.clientY - offsetY;
      const newLeft = e.clientX - offsetX;

      // Update the note's position using style directly
      note.style.top = `${newTop}px`;
      note.style.left = `${newLeft}px`;
    };

    const handleMouseUp = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div
      className="notesBoard"
      style={{ position: "relative", width: "100%", height: "100vh" }}
    >
      <div>
        <input
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Write a new note"
        />
        <button onClick={handleAddNewNote}>Add note</button>
      </div>

      {notes.map((note, index) => {
        if (!noteRefs.current[note.id]) {
          noteRefs.current[note.id] = React.createRef(); // Create a ref for each note
        }

        return (
          <div
            key={index}
            ref={noteRefs.current[note.id]} // Assign ref to each note
            className="note"
            style={note.style}
            onMouseDown={(e) => handleMouseDown(note.id, e)}
          >
            {note.text}
          </div>
        );
      })}
    </div>
  );
};

export default StickyNotes;

