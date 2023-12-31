// ForumItem.jsx
import React from "react";
import { Link } from "react-router-dom";

const ForumItem = ({ user, isDiscussionPage }) => {
  return (
    <div className={`flex items-start px-4 py-6 mb-4 bg-white shadow-lg rounded-3xl ${isDiscussionPage && 'discussion-page-style mt-20 mx-20'}`}>
      <img
        className="w-12 h-12 rounded-full object-cover mr-4 shadow"
        src={user.image}
        alt={user.firstName}
      />
      <div>
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900 -mt-1">
            <Link to={`/Diskusi/${user.id}`}>{user.title}</Link>
          </h2>
        </div>
        <p className="text-gray-700 text-left">{user.firstName} {user.lastName} • {user.timeAgo}</p>
        <p className="mt-3 text-gray-700 text-sm text-left">{user.text}</p>
        <div className="mt-4 flex items-center">
          <div className="flex mr-2 text-gray-700 text-sm mr-8">
            <Link to={`/Diskusi/${user.id}`}className="flex">
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
              <span>Komentar</span>
            </Link>
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

export default ForumItem;
