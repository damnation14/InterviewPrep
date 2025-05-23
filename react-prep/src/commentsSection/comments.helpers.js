export const increaseLikes = (comments, id) => {
  const increaseLikeForComment = (comment) => {
    if (comment.id === id) {
      return {
        ...comment,
        likes: comment.likes + 1,
      };
    } else if (comment.replies.length !== 0) {
      return {
        ...comment,
        replies: comment.replies.map(increaseLikeForComment),
      };
    }
    return comment;
  };
  const updatedComments = comments.map(increaseLikeForComment);
  return updatedComments;
};

export const iincreaseLikes = (comments, id) => {
  const increaseLikeForComment = (comments) => {
    return comments.map((comment) => {
      if (comment.id === id) {
        return {
          ...comment,
          likes: comment.likes + 1,
        };
      } else if (comment.replies) {
        return {
          ...comment,
          replies: increaseLikeForComment(comment.replies),
        };
      }
      return comment;
    });
  };
  const updatedComments = increaseLikeForComment(comments);
  return updatedComments;
};

export const addReply = (comments, id, replyText) => {
  const addReplyToComment = (newReply) => (comment) => {
    if (comment.id === id) {
      return {
        ...comment,
        replies: [newReply, ...comment.replies],
      };
    } else if (comment.replies.length !== 0) {
      return {
        ...comment,
        replies: comment.replies.map(addReplyToComment(newReply)),
      };
    }
    return comment;
  };
  const newReply = makeNewComment(replyText);
  const updatedComments = comments.map(addReplyToComment(newReply));
  return updatedComments;
};

export const makeNewComment = (commentText) => ({
  id: Date.now(),
  text: commentText,
  author: "Alice",
  timestamp: "2024-10-11 10:00",
  replies: [],
  likes: 0,
});

export const handleDeleteComments = (comments, id) => {
  const deleteComment = (comments) => {
    return comments
      .filter((comment) => comment.id !== id)
      .map((comment) => {
        if (comment.replies) {
          return { ...comment, replies: deleteComment(comment.replies) };
        }
        return comment;
      });
  };

  const updatedComments = deleteComment(comments, id);
  return updatedComments;
};
