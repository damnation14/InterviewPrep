import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const initialData = {
  tasks: {
    "task-1": { id: "task-1", content: "Task 1" },
    "task-2": { id: "task-2", content: "Task 2" },
    "task-3": { id: "task-3", content: "Task 3" },
    "task-4": { id: "task-4", content: "Task 4" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To Do",
      taskIds: ["task-1", "task-2"],
    },
    "column-2": {
      id: "column-2",
      title: "In Progress",
      taskIds: ["task-3", "task-4"],
    },
  },
  columnOrder: ["column-1", "column-2"],
};

const DragAndDropBoard = () => {
  const [state, setState] = useState(initialData);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    // If dropped outside the droppable area, return
    if (!destination) return;

    // If dropped in the same position, do nothing
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // Move task within the source column or between columns
    const startColumn = state.columns[source.droppableId];
    const endColumn = state.columns[destination.droppableId];

    if (startColumn === endColumn) {
      // Moving within the same column
      const newTaskIds = Array.from(startColumn.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...startColumn,
        taskIds: newTaskIds,
      };

      setState((prev) => ({
        ...prev,
        columns: {
          ...prev.columns,
          [newColumn.id]: newColumn,
        },
      }));
    } else {
      // Moving between different columns
      const startTaskIds = Array.from(startColumn.taskIds);
      startTaskIds.splice(source.index, 1);
      const newStartColumn = {
        ...startColumn,
        taskIds: startTaskIds,
      };

      const endTaskIds = Array.from(endColumn.taskIds);
      endTaskIds.splice(destination.index, 0, draggableId);
      const newEndColumn = {
        ...endColumn,
        taskIds: endTaskIds,
      };

      setState((prev) => ({
        ...prev,
        columns: {
          ...prev.columns,
          [newStartColumn.id]: newStartColumn,
          [newEndColumn.id]: newEndColumn,
        },
      }));
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {state.columnOrder.map((columnId) => {
          const column = state.columns[columnId];
          const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);

          return (
            <Droppable key={column.id} droppableId={column.id}>
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  style={{
                    margin: "8px",
                    border: "1px solid lightgrey",
                    borderRadius: "4px",
                    width: "220px",
                    minHeight: "300px",
                  }}
                >
                  <h3 style={{ textAlign: "center" }}>{column.title}</h3>
                  {tasks.map((task, index) => (
                    <Draggable
                      key={task.id}
                      draggableId={task.id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={{
                            userSelect: "none",
                            padding: "16px",
                            margin: "0 0 8px 0",
                            backgroundColor: "#fff",
                            border: "1px solid lightgrey",
                            borderRadius: "4px",
                            ...provided.draggableProps.style,
                          }}
                        >
                          {task.content}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          );
        })}
      </div>
    </DragDropContext>
  );
};

export default DragAndDropBoard;
