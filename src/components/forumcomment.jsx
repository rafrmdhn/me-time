import React from "react";
import Comment from "./comment"; // Make sure to import the Comment component

const userData = [
  {
    idForum: 1,
    id: 1,
    namadepan: "Rafi",
    namabelakang: "Ramadhan",
    judul: "Stress",
    createdAt: "22h ago",
    textforum:
      "Saya mengalami burnout yang tidak bisa dikendalikan, apakah ada yang mengalami hal yang sama?",
    comments: [
      {
        id: 1,
        namadepan: "John",
        namabelakang: "Doe",
        createdAt: "20h ago",
        textcomment: "Saya juga pernah mengalami hal yang serupa.",
      },
    ],
  },
  // Add more forum data as needed
];

const ForumComment = ({ match }) => {
  const idForum = match.params.id;

  // Find the forum based on idForum
  const forum = userData.find((forum) => forum.idForum === parseInt(idForum, 10));

  return (
    <div>
      {forum ? (
        <div>
          <div>
            {forum.comments.map((comment) => (
              <Comment key={comment.id} user={comment} isDiscussionPage={true}/>
            ))}
          </div>
        </div>
      ) : (
        <p>Tidak ada komentar dalam diskusi ini.</p>
      )}
    </div>
  );
};

export default ForumComment;
