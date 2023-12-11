import React, { useState, useEffect } from "react";
import { formatDistanceToNow, parseISO } from 'date-fns';
import { useHistory } from 'react-router-dom';
import { id } from 'date-fns/locale';
import axios from "axios";

const UserList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [filteredUser, setFilteredUser] = useState([]);
    const [userData, setUserData] = useState([]);
    const history = useHistory();
    const itemsPerPage = 10;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    useEffect(() => {
        const localStorageKey = localStorage.getItem('AdminKey');
        if (!localStorageKey) {
            history.push('/admin/Login');
        }
    });

    const fetchData = async () => {
        try {
            const userResponse = await axios.get("http://195.35.8.190:4000/api/users");
            const users = userResponse.data.data;

            const formattedData = users.map((user) => ({
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                image: user.image,
                email: user.email,
                createdAt: user.createdAt,
                timeAgo: formatDistanceToNow(parseISO(user.createdAt), { addSuffix: true, locale: id }),
            }));
            setUserData(formattedData);
            setFilteredUser(formattedData);
          } catch (error) {
            console.log(error);
          }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        const totalPages = Math.ceil(userData.length / itemsPerPage);
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div class="mx-auto py-8">
            <div class="overflow-y-hidden rounded-lg border">
                <div class="overflow-x-auto">
                    <table class="w-full">
                        <thead>
                            <tr class="bg-gradient-to-r from-[#91C8E4] to-[#4682A9] text-left text-xs font-semibold uppercase tracking-widest text-white">
                                <th class="text-center py-3">ID</th>
                                <th class="text-center py-3 ">Full Name</th>
                                <th class="text-center py-3">Email</th>
                                <th class="text-center py-3">Created at</th>
                            </tr>
                        </thead>
                        <tbody class="text-gray-500">
                            {filteredUser.slice(indexOfFirstItem, indexOfLastItem).map((user) => (
                                <tr key={user.id}>
                                    <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                        <p class="whitespace-no-wrap">{user.id}</p>
                                    </td>
                                    <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                        <div class="flex items-center">
                                            <div class="h-10 w-10 flex-shrink-0">
                                                <img class="h-full w-full rounded-full" src={user.image} alt={user.firstName} />
                                            </div>
                                            <div class="ml-3">
                                                <p class="whitespace-no-wrap">{user.firstName} {user.lastName}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                        <p class="whitespace-no-wrap">{user.email}</p>
                                    </td>
                                    <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                        <p class="whitespace-no-wrap">{user.timeAgo}</p>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div class="flex flex-col items-center border-t bg-white px-5 py-2 sm:flex-row sm:justify-between">
                    <span class="text-xs text-gray-600 sm:text-sm">
                        Showing {" "}
                        {filteredUser.length !== 0
                            ? indexOfFirstItem + 1
                            : indexOfFirstItem}{" "}
                        to {Math.min(indexOfLastItem, filteredUser.length)} of{" "}
                        {filteredUser.length} Entries
                    </span>
                    <div class="inline-flex sm:mt-0">
                        <button
                            onClick={handlePrevPage}
                            className="mr-2 h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-violet-500 hover:text-white"
                        >
                            Prev
                        </button>
                        <button
                            onClick={handleNextPage}
                            className="h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-violet-500 hover:text-white"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserList;