import React from "react";

const Comment = ({ user, isDiscussionPage }) => {
    
    return (
        <div className={`flex items-start px-4 py-6 mb-4 bg-white shadow-lg rounded-3xl ${isDiscussionPage ? 'discussion-page-style mx-20' : ''}`}>
            <img
                className="w-12 h-12 rounded-full object-cover mr-4 shadow"
                src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt="avatar"
            />
            <div>                
                <p className="text-gray-700 text-left">{user.namadepan} {user.namabelakang} • {user.createdAt}</p>
                <p className="mt-3 text-gray-700 text-sm text-left">{user.textcomment}</p>
                <div className="mt-4 flex items-center">
                <div className="flex mr-2 text-gray-700 text-sm mr-8">
                    <button className="flex">
                    <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                        />
                    </svg>
                    <span>{user.comments?.length || 0}</span>
                    </button>
                </div>
                <div className="flex mr-2 text-gray-700 text-sm mr-4">
                    <button className="flex">
                    <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                        />
                    </svg>
                    <span>share</span>
                    </button>
                </div>
                </div>
            </div>
       </div> 
    );
};

export default Comment;