import React, { useState } from "react";

import Comment from "./Comment";
import { commentsData } from "./commentsData";

import { increaseLikes, makeNewComment, addReply } from "./comments.helpers";

const CommentSection = () => {
  const [inputComment, setInputComment] = useState("");
  const [comments, setComments] = useState(commentsData);

  const handleCommentInput = (e) => {
    setInputComment(e.target.value);
  };
  const handleAddComment = () => {
    const newComment = makeNewComment(inputComment);
    setComments([newComment, ...comments]);
    setInputComment("");
  };

  const setIncreaseLikes = (id) => () => {
    const updatedComments = increaseLikes(comments, id);
    setComments(updatedComments);
  };

  const handleAddReply = (id, replyText) => {
    const updatedComments = addReply(comments, id, replyText);
    setComments(updatedComments);
  };

  return (
    <div>
      <div>
        <input value={inputComment} onChange={handleCommentInput}></input>
        <button onClick={handleAddComment}>Comment</button>
      </div>
      {comments.map((comment) => (
        <Comment
          comment={comment}
          setIncreaseLikes={setIncreaseLikes}
          handleAddReply={handleAddReply}
        />
      ))}
    </div>
  );
};

export default CommentSection;
