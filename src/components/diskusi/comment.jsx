import React from "react";

const Comment = ({ user, isDiscussionPage }) => {
    
    return (
        <div className={`flex items-start px-4 py-6 mb-4 bg-white shadow-lg rounded-3xl ${isDiscussionPage ? 'discussion-page-style mx-20' : ''}`}>
            <img
                className="w-12 h-12 rounded-full object-cover mr-4 shadow"
                src={user.image}
                alt={user.firstName} 
            />
            <div>                
                <p className="text-gray-700 text-left">{user.firstName} {user.firstName} • {user.timeAgo}</p>
                <p className="mt-3 text-gray-700 text-sm text-left">{user.comment}</p>
                <div className="mt-4 flex items-center">
                </div>
            </div>
       </div> 
    );
};

export default Comment;