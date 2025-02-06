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
