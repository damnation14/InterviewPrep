import React, { useState } from "react";
import "./style.css";
import { makeNewComment } from "./comments.helpers";

const Comment = ({
  comment,
  setIncreaseLikes,
  handleAddReply,
  handleDeleteComment,
}) => {
  const [expand, setExpand] = useState(false);
  const [inputReply, setInputReply] = useState("");
  const expandReplies = () => setExpand((prev) => !prev);

  const { replies, id } = comment;

  const handleReplyInput = (e) => {
    setInputReply(e.target.value);
  };

  const handleSubmitReply = () => {
    handleAddReply(id, inputReply);
    setInputReply("");
  };

  return (
    <div className="commentsList">
      <div>💬{comment.text}</div>
      <div>-{comment.author}</div>
      <button onClick={() => handleDeleteComment(comment.id)}>delete</button>
      <div onClick={setIncreaseLikes(comment.id)}>{comment.likes} ❤️</div>
      <div onClick={expandReplies}>Replies</div>
      {expand ? (
        <div>
          <input value={inputReply} onChange={handleReplyInput}></input>
          <button onClick={handleSubmitReply}>Add Reply</button>
        </div>
      ) : null}
      {expand && replies.length !== 0
        ? replies.map((comment) => (
            <Comment
              comment={comment}
              setIncreaseLikes={setIncreaseLikes}
              handleAddReply={handleAddReply}
              handleDeleteComment={handleDeleteComment}
            />
          ))
        : null}
    </div>
  );
};

export default Comment;
