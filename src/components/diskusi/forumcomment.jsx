import React, { useState, useEffect } from "react";
import axios from "axios";
import { formatDistanceToNow, parseISO } from 'date-fns';
import { id } from 'date-fns/locale';
import Comment from "./comment";
import { useParams } from "react-router-dom"; // Import useParams

const ForumComment = () => {
  const [comments, setComments] = useState(null);
  const { id: forumId } = useParams(); // Use useParams to directly get the id from the URL

  const fetchData = async () => {
    try {
      const commentResponse = await axios.get(`http://195.35.8.190:4000/api/forum/comments/${forumId}`);
      const comment = commentResponse.data.data;

      const userResponse = await axios.get(`http://195.35.8.190:4000/api/users/`);
      const users = userResponse.data.data;

      const commentData = comment.map((item) => {
        const user = users.find((u) => u.id === item.userId);
        return {
          id: item.id,
          firstName: user.firstName,
          lastName: user.lastName,
          image: user.image,
          comment: item.comment,
          createdAt: item.createdAt,
          timeAgo: formatDistanceToNow(parseISO(item.createdAt), { addSuffix: true, locale: id }),
        }
      });
      setComments(commentData);
    } catch (error) {
      alert(error.response?.data?.msg || "An error occurred");
    }
  };

  useEffect(() => {
    fetchData();
  }, [forumId]);

  return (
    <div>
      {comments ? (
        <div>
          <div>
            {comments.map((comment) => (
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
