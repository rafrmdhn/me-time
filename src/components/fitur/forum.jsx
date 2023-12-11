import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import ForumItem from "../diskusi/forumItem";
import NewDiscuss from "../diskusi/newdiscuss";
import axios from "axios";
import { formatDistanceToNow, parseISO } from 'date-fns';
import { id } from 'date-fns/locale';

const Forum = () => {
    const [userData, setUserData] = useState([]);
    const [isModalOpen, setModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const history = useHistory();

    useEffect(() => {
        const localStorageKey = localStorage.getItem('UserKey');
        if (!localStorageKey) {
            history.push('/Login');
        }
    })

    const fetchData = async () => {
        try {
            const forumResponse = await axios.get("http://195.35.8.190:4000/api/forum");
            const forum = forumResponse.data.data;

            const userResponse = await axios.get("http://195.35.8.190:4000/api/users");
            const users = userResponse.data.data;

            const forumData = forum.map((item) => {
                const user = users.find((u) => u.id === item.userId);
                return {
                    id: item.id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    image: user.image,
                    title: item.title,
                    text: item.text,
                    createdAt: item.createdAt,
                    timeAgo: formatDistanceToNow(parseISO(item.createdAt), { addSuffix: true, locale: id }),
                }
            });
            setUserData(forumData);
        } catch (error) {
            alert(error.response.data.msg);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredUserData = userData.filter((user) =>
        user.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    return (
        
      <div className="flex flex-col mx-4 md:mx-auto my-8 max-w-md md:max-w-2xl">
        <form className="mb-5">
            <div class="flex">
                <button disabled={isModalOpen} onClick={openModal} data-modal-target="crud-discuss" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-black border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 shadow-md" type="button">
                    Buat Diskusi Baru
                </button>
                <div class="relative w-full">
                    <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-black bg-transparent shadow-md rounded-e-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Cari Forum Diskusi..."
                    value={searchTerm}
                    onChange={handleSearchChange}/>
                </div>
            </div>
        </form>
        {filteredUserData.map((user) => (
          <ForumItem key={user.id} user={user} />
        ))}
        {isModalOpen && <NewDiscuss closeModal={closeModal} />}
      </div>
    );
};

export default Forum;