import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { formatDistanceToNow, parseISO } from 'date-fns';
import idLocale from 'date-fns/locale/id'; 

const Discussions = () => {
    const { id } = useParams();
    const [forum, setForum] = useState(null);
    const [user, setUser] = useState(null);
    const history = useHistory();

    useEffect(() => {
        const localStorageKey = localStorage.getItem('UserKey');
        if (!localStorageKey) {
            history.push('/Login');
        }
    })

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Ambil data diskusi berdasarkan ID dari API
                const response = await axios.get(`http://195.35.8.190:4000/api/forum/${id}`);
                const { data } = response.data;
                setForum(data);

                // Ambil data user berdasarkan Id
                const userResponse = await axios.get(`http://195.35.8.190:4000/api/users/${data.userId}`);
                const { data: userData } = userResponse.data;

                // Pastikan userData memiliki nilai sebelum memanggil setUser
                if (userData) {
                    setUser(userData);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [id]);

    return (
        <div className="mt-20 mx-20">
            {forum && user && (
                <div className="flex items-start px-4 py-6 mb-4 bg-white shadow-lg rounded-3xl">
                    <img className="w-12 h-12 rounded-full object-cover mr-4 shadow" src={user.image} alt="User Profile"/>
                    <div className="w-full">
                        <div className="flex items-center">
                            <h2 className="text-lg font-semibold text-gray-900 -mt-1">{forum.title}</h2>
                        </div>
                        <p className="text-gray-700 text-left">{user.firstName} {user.lastName} • {formatDistanceToNow(parseISO(forum.createdAt), { addSuffix: true, locale: idLocale })}</p>
                        <p className="mt-3 text-gray-700 text-sm text-left">{forum.text}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Discussions;

