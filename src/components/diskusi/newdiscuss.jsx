import React, {useState, useEffect} from "react";
import { useHistory } from 'react-router-dom';
import axios from "axios";

const NewDiscuss = ({ closeModal }) => {
    const history = useHistory();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        const localStorageKey = localStorage.getItem('UserKey');
        if (!localStorageKey) {
            history.push('/login');
        }
    })

    const localStorageKey = localStorage.getItem('UserKey');

    const BuatDiskusi = async (e) => {
        try {
            e.preventDefault();

            const response = await axios.post("http://195.35.8.190:4000/api/forum", {
                userId : parseInt(localStorageKey),
                title : title,
                text : content
            })

            if(response) {
                setSuccess(response.data.msg);
                closeModal();
            }
        } catch (error) {
            setError(error.response.data.msg);
        }
    }
    return (
        <div className="fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
            <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-xl shadow">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-900">
                        <h3 className="text-lg font-semibold text-black">
                            Create New Product
                        </h3>
                        <p className="text-red-500 text-center">{error}</p> 
                        <p className='text-green-500 text-center'>{success}</p>
                        <button onClick={closeModal} type="button" className="text-black bg-transparent hover:bg-gray-200 hover:text-black rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-violet-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>
                    <form className="p-4 md:p-5" onSubmit={BuatDiskusi}>
                        <div className="grid gap-4 mb-4 grid-cols-2">
                            <div className="col-span-2">
                                <label htmlFor="name" class="block mb-2 text-sm font-medium text-black">Judul Diskusi</label>
                                <input type="text" name="name" id="name" className="bg-[#F6F4EB] border border-gray-900 text-black text-sm rounded-3xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-black" placeholder="Type product name" required=""
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}/>
                            </div>
                            <div class="col-span-2">
                                <label for="description" className="block mb-2 text-sm font-medium text-black">Uraian Pertanyaan</label>
                                <textarea id="description" rows="4" className="bg-[#F6F4EB] border border-gray-900 text-black text-sm rounded-3xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-black" placeholder="Write product description here"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}>
                                </textarea>                    
                            </div>
                        </div>
                        <button type="submit" className="text-white inline-flex items-center bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-3xl text-sm px-5 py-2.5 text-center">
                            <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                            Tambah Diskusi
                        </button>
                    </form>
                </div>
            </div>
        </div> 
    );
};

export default NewDiscuss;