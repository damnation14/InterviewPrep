import React, { useState } from "react";
import "./styles.css";

const ReorderList = () => {
  const [items, setItems] = useState([
    { id: "item-1", content: "Item 1" },
    { id: "item-2", content: "Item 2" },
    { id: "item-3", content: "Item 3" },
    { id: "item-4", content: "Item 4" },
  ]);

  const handleDragStart = (event, index) => {
    event.dataTransfer.setData("text/plain", index);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event, dropIndex) => {
    event.preventDefault();
    const dragIndex = Number(event.dataTransfer.getData("text/plain"));

    const reorderedItems = [...items];
    const [removed] = reorderedItems.splice(dragIndex, 1);
    reorderedItems.splice(dropIndex, 0, removed);

    setItems(reorderedItems);
  };

  return (
    <div className="container">
      {items.map((item, index) => (
        <div
          key={item.id}
          className="item"
          draggable
          onDragStart={(event) => handleDragStart(event, index)}
          onDragOver={handleDragOver}
          onDrop={(event) => handleDrop(event, index)}
        >
          {item.content}
        </div>
      ))}
      <div className="item" onDrop={(event) => handleDrop(event, 2)}>
        Items 4
      </div>
    </div>
  );
};

export default ReorderList;
