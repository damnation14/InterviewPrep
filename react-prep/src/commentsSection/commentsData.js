export const commentsData = [
  {
    id: 1,
    text: "This is the first comment",
    author: "Alice",
    timestamp: "2024-10-11 10:00",
    likes: 1,
    replies: [
      {
        id: 2,
        text: "This is a reply to the first comment",
        author: "Bob",
        timestamp: "2024-10-11 10:05",
        likes: 1,
        replies: [
          {
            id: 3,
            text: "This is a nested reply",
            author: "Charlie",
            timestamp: "2024-10-11 10:10",
            likes: 1,
            replies: [],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    text: "This is another root comment",
    author: "Dave",
    timestamp: "2024-10-11 11:00",
    likes: 1,
    replies: [
      {
        id: 5,
        text: "This is a reply to another root comment",
        author: "Eve",
        timestamp: "2024-10-11 11:05",
        replies: [],
        likes: 1,
      },
    ],
  },
];
