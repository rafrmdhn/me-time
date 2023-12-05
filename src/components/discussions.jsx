import React from "react";
import ForumItem from "./forumItem";
import Comment from "./comment";

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
              textcomment: "Saya juga pernah mengalami hal yang serupa."
            },
        ]
    },
    {
        idForum: 2,
        id: 2,
        namadepan: "Si",
        namabelakang: "Ganteng",
        judul: "Burnout",
        createdAt: "22h ago",
        textforum:
        "Saya mengalami burnout yang tidak bisa dikendalikan, apakah ada yang mengalami hal yang sama?",
    },
];

const Discussions = ({ match, isDiscussionPage }) => {
    const forumId = match.params.id;
      
        // Filter the userData based on the forumId
        
    const filteredUserData = userData.filter(user => user.idForum === parseInt(forumId, 10));

    return (
        <div>
            {filteredUserData.map((user) => (
            <ForumItem key={user.idForum} user={user} isDiscussionPage={isDiscussionPage}/>
            ))}
        </div>
    );
};

export default Discussions;