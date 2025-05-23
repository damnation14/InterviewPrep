import { useState } from "react";

import { CommentsSection } from "./CommentsSection";

export const TestReact = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      comment: "hello",
      replies: [{ id: 1, comment: "hello", replies: [] }],
    },
    { id: 2, comment: "world", replies: [] },
    { id: 3, comment: "hello world", replies: [] },
  ]);
  const [comment, setComment] = useState("");

  const handleAddComment = () => {
    setComments((prevComments) => [...prevComments, comment]);
    setComment("");
  };

  return (
    <div>
      <div>
        <input value={comment}></input>
        <button onClick={handleAddComment}>Add comment</button>
      </div>
      <div>
        <CommentsSection comments={comments} />
      </div>
    </div>
  );
};
