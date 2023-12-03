import React, { useState } from "react";

const userData = [
    {
        id: 1,
        namadepan: "Rafi",
        namabelakang: "Ramadhan",
        email: "ramadhanrafi871@gmail.com",
        pesan: "Saya merasa sehatwalafiat.",
        timeAgo: "23m ago",
        image: "",
        status: 1,
    },
    {
        id: 2,
        namadepan: "Akhil",
        namabelakang: "Gautam",
        email: "akhil.gautam123@gmail.com",
        pesan: "Saya merasa diri selalu mengalami depresi jika menerima masalah.",
        timeAgo: "23m ago",
        image: "https://bit.ly/2KfKgdy",
        status: 2,
    },
];

const getStatusLabel = (status) => {
    switch (status) {
        case 1:
            return 'Active';
        case 2:
            return 'Inactive';
        case 3:
            return 'Suspended';
        default:
            return 'Unknown';
    }
};

const getStatusColor = (status) => {
    switch (status) {
        case 1:
            return 'bg-green-200';
        case 2:
            return 'bg-red-200';
        case 3:
            return 'bg-yellow-200';
        default:
            return 'bg-gray-200';
    }
};

const getStatusText = (status) => {
    switch (status) {
        case 1:
            return 'green';
        case 2:
            return 'red';
        case 3:
            return 'yellow';
        default:
            return 'gray';
    }
};


const UserList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = userData.slice(indexOfFirstItem, indexOfLastItem);

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
                                <th class="text-center py-3">Full Name</th>
                                <th class="text-center py-3">User Role</th>
                                <th class="text-center py-3">Created at</th>
                                <th class="text-center py-3">Status</th>
                            </tr>
                        </thead>
                        <tbody class="text-gray-500">
                            {currentItems.map((user) => (
                                <tr key={user.id}>
                                    <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                        <p class="whitespace-no-wrap">{user.id}</p>
                                    </td>
                                    <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                        <div class="flex items-center">
                                            <div class="h-10 w-10 flex-shrink-0">
                                                <img class="h-full w-full rounded-full" src={user.image} alt="" />
                                            </div>
                                            <div class="ml-3">
                                                <p class="whitespace-no-wrap">{user.namadepan} {user.namabelakang}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                        <p class="whitespace-no-wrap">{user.email}</p>
                                    </td>
                                    <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                        <p class="whitespace-no-wrap">{user.createdAt}</p>
                                    </td>
                                    <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                    <span className={`rounded-full ${getStatusColor(user.status)} px-3 py-1 text-xs font-semibold text-${getStatusText(user.status)}-900`}>
                                        {getStatusLabel(user.status)}
                                    </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div class="flex flex-col items-center border-t bg-white px-5 py-2 sm:flex-row sm:justify-between">
                    <span class="text-xs text-gray-600 sm:text-sm">
                        Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, userData.length)} of {userData.length} Entries
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