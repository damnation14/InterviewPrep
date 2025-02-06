export const data = {
  id: 1,
  name: "root",
  type: "folder",
  children: [
    {
      id: 2,
      name: "Documents",
      type: "folder",
      children: [
        {
          id: 3,
          name: "Resume.pdf",
          type: "file",
          size: "45 KB",
        },
        {
          id: 4,
          name: "CoverLetter.docx",
          type: "file",
          size: "25 KB",
        },
        {
          id: 5,
          name: "Invoices",
          type: "folder",
          children: [
            {
              id: 6,
              name: "Invoice_January.pdf",
              type: "file",
              size: "30 KB",
            },
            {
              id: 7,
              name: "Invoice_February.pdf",
              type: "file",
              size: "32 KB",
            },
          ],
        },
      ],
    },
    {
      id: 8,
      name: "Pictures",
      type: "folder",
      children: [
        {
          id: 9,
          name: "Vacation",
          type: "folder",
          children: [
            {
              id: 10,
              name: "Beach.png",
              type: "file",
              size: "1.2 MB",
            },
            {
              id: 11,
              name: "Mountain.jpg",
              type: "file",
              size: "2.1 MB",
            },
          ],
        },
        {
          id: 12,
          name: "ProfilePic.jpg",
          type: "file",
          size: "150 KB",
        },
      ],
    },
    {
      id: 13,
      name: "Music",
      type: "folder",
      children: [
        {
          id: 14,
          name: "Song1.mp3",
          type: "file",
          size: "3.5 MB",
        },
        {
          id: 15,
          name: "Song2.mp3",
          type: "file",
          size: "5.0 MB",
        },
      ],
    },
    {
      id: 16,
      name: "readme.txt",
      type: "file",
      size: "5 KB",
    },
  ],
};
