import React from "react";

const StickyNote = React.memo(({ obj }) => {
  console.log("PracticeReact1");
  return (
    <div>
      <h1>{obj.count}</h1>
    </div>
  );
});

const PracticeReact = () => {
  const [stickyNotes, setStickyNotes] = React.useState([
    { id: 1, text: "Sticky Note 1" },
    { id: 2, text: "Sticky Note 2" },
    { id: 3, text: "Sticky Note 3" },
  ]);

  return (
    <div>
      {stickyNotes.map((note) => (
        <div
          key={note.id}
          style={{ margin: "10px", padding: "10px", border: "1px solid black" }}
          onDrag
        >
          <h2>{note.text}</h2>
          <StickyNote obj={{ count: note.id }} />
        </div>
      ))}
    </div>
  );
};

export default PracticeReact;
