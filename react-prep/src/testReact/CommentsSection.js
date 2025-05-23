import React, { useState } from "react";

const makeCommentsList = (comments, showReply, setShowReply) => {
  return comments.map((comment, index) => {
    const { id, replies, comment: text } = comment;
    return (
      <div key={id}>
        <p>{text}</p>
        <button onClick={() => setShowReply(!showReply)}>Reply</button>
        {showReply && <CommentsSection comments={replies} />}
      </div>
    );
  });
};

export const CommentsSection = ({ comments }) => {
  const [showReply, setShowReply] = useState(false);
  return (
    <div style={{ marginLeft: "1rem" }}>
      <div>{makeCommentsList(comments, showReply, setShowReply)}</div>
    </div>
  );
};
