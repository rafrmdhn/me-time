import React from "react";

const FormComment = () => {
    return (
        <div className="mx-20 border-t border-b p-4 border-gray-900">
            <form class="w-full">
                <label for="message" class="block mb-2 text-sm font-medium text-black text-left">Your message</label>
                <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Leave a comment..."></textarea>
                <button type="button" class="text-white bg-violet-600 hover:bg-violet-800 focus:outline-none focus:ring-4 focus:ring-violet-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mt-4">Balas</button>
            </form>
        </div>
    );
};

export default FormComment;