import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const FormComment = () => {
    const { id } = useParams();
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    // console.log(`forum id: ${id}`);
    const localStorageKey = localStorage.getItem('UserKey');

    const KirimKomentar = async (e) => {
        try {
            e.preventDefault();
            const response = await axios.post(`http://195.35.8.190:4000/api/forum/comments`, {
                userId: parseInt(localStorageKey),
                forumDiskusiId: parseInt(id),
                comment: message
            })

            if (response) setSuccess(response.data.msg);
            setTimeout(() => { window.location.reload(); }, 1000);
        } catch (error) {
            setError(error.response.data.msg);
        }
    }
    return (
        <div className="mx-20 border-t border-b p-4 border-gray-900">
            <p className="text-red-500 text-center">{error}</p> 
            <p className='text-green-500 text-center'>{success}</p>

            <form class="w-full" onSubmit={KirimKomentar}>
                <label for="message" class="block mb-2 text-sm font-medium text-black text-left">Your message</label>
                <textarea 
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" 
                    placeholder="Leave a comment..."
                    id="message" 
                    rows="4" 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <button type="submit" class="text-white w-full bg-violet-600 hover:bg-violet-800 focus:outline-none focus:ring-4 focus:ring-violet-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mt-4">Balas</button>
            </form>
        </div>
    );
};

export default FormComment;