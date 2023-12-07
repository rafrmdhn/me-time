import React, { useState } from "react";

const Review = ({ onClose }) => {
    const [hoveredRating, setHoveredRating] = useState(0);
    const [rating, setRating] = useState(0);
  
    const handleRatingHover = (value) => {
      setHoveredRating(value);
    };
  
    const handleRatingClick = (value) => {
      setRating(value);
    };

    return (
        <div className="fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
            <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-xl shadow">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-900">
                        <h3 className="text-lg font-semibold text-black">
                        Apakah Sangat Membantu?
                        </h3>
                    </div>
                    <div className="w-3/4 flex flex-col m-5 mx-auto w-full">
                        <div className="flex items-center justify-center space-x-2">
                            {[1, 2, 3, 4, 5].map((value) => (
                                <svg
                                key={value}
                                className={`w-4 h-4 cursor-pointer ${
                                    value <= (hoveredRating || rating)
                                    ? "text-yellow-500"
                                    : "text-gray-300"
                                }`}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                onMouseEnter={() => handleRatingHover(value)}
                                onMouseLeave={() => handleRatingHover(0)}
                                onClick={() => handleRatingClick(value)}
                                >
                                <path
                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                                />
                                </svg>
                            ))}
                        </div>
                        <textarea rows="3" className=" m-6 p-4 text-gray-500 rounded-xl resize-none border-gray-900" placeholder="Berikan Review"/>
                        <button className="py-2 mx-20 text-lg bg-violet-600 focus:ring-4 focus:outline-none focus:ring-violet-300 rounded-xl text-white ">
                        Rate now
                        </button>
                        <button onClick={onClose} className="text-gray-400 mb-10 text-sm">
                            Maybe later
                        </button>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default Review;
