import React, { useState, useEffect } from "react";

const userData = [
    {
        id: 1,
        namadepan: "Rafi",
        namabelakang: "Ramadhan",
        tesdepresi: 120,
        tesstress: 50,
        tesbunuhdiri: 20,
        tescemas: 150,
        teskepribadian: "-",
        tesburnout: "-",
        updateAt: "3/12/2023",
    },
    {
        id: 2,
        namadepan: "Akhil",
        namabelakang: "Gautam",
        tesdepresi: 100,
        tesstress: 100,
        tesbunuhdiri: 80,
        tescemas: 120,
        teskepribadian: 2,
        tesburnout: "-",
        updateAt: "3/10/2023",
    },
    {
        id: 3,
        namadepan: "Sofia",
        namabelakang: "Faradina",
        tesdepresi: 120,
        tesstress: 50,
        tesbunuhdiri: 20,
        tescemas: 150,
        teskepribadian: "-",
        tesburnout: "-",
        updateAt: "30/11/2023",
    },
    {
        id: 4,
        namadepan: "Akhil",
        namabelakang: "Gautam",
        tesdepresi: 100,
        tesstress: 100,
        tesbunuhdiri: 80,
        tescemas: 120,
        teskepribadian: 2,
        tesburnout: "-",
        updateAt: "23/12/2022",
    },
    {
        id: 5,
        namadepan: "Rafi",
        namabelakang: "Ramadhan",
        tesdepresi: 120,
        tesstress: 50,
        tesbunuhdiri: 20,
        tescemas: 150,
        teskepribadian: "-",
        tesburnout: "-",
        updateAt: "17/10/2023",
    },
    {
        id: 6,
        namadepan: "Akhil",
        namabelakang: "Gautam",
        tesdepresi: 100,
        tesstress: 100,
        tesbunuhdiri: 80,
        tescemas: 120,
        teskepribadian: 2,
        tesburnout: "-",
        updateAt: "17/8/2023",
    },
    {
        id: 7,
        namadepan: "Rafi",
        namabelakang: "Ramadhan",
        tesdepresi: 120,
        tesstress: 50,
        tesbunuhdiri: 20,
        tescemas: 150,
        teskepribadian: "-",
        tesburnout: "-",
        updateAt: "17/12/2020",
    },
    {
        id: 8,
        namadepan: "Akhil",
        namabelakang: "Gautam",
        tesdepresi: 100,
        tesstress: 100,
        tesbunuhdiri: 80,
        tescemas: 120,
        teskepribadian: 2,
        tesburnout: "-",
    },
    {
        id: 9,
        namadepan: "Rafi",
        namabelakang: "Ramadhan",
        tesdepresi: 120,
        tesstress: 50,
        tesbunuhdiri: 20,
        tescemas: 150,
        teskepribadian: "-",
        tesburnout: "-",
    },
    {
        id: 10,
        namadepan: "Akhil",
        namabelakang: "Gautam",
        tesdepresi: 100,
        tesstress: 100,
        tesbunuhdiri: 80,
        tescemas: 120,
        teskepribadian: 2,
        tesburnout: "-",
    },
    {
        id: 11,
        namadepan: "Rafi",
        namabelakang: "Ramadhan",
        tesdepresi: 120,
        tesstress: 50,
        tesbunuhdiri: 20,
        tescemas: 150,
        teskepribadian: "-",
        tesburnout: "-",
    },
    {
        id: 12,
        namadepan: "Akhil",
        namabelakang: "Gautam",
        tesdepresi: 100,
        tesstress: 100,
        tesbunuhdiri: 80,
        tescemas: 120,
        teskepribadian: 2,
        tesburnout: "-",
    },
    {
        id: 13,
        namadepan: "Rafi",
        namabelakang: "Ramadhan",
        tesdepresi: 120,
        tesstress: 50,
        tesbunuhdiri: 20,
        tescemas: 150,
        teskepribadian: "-",
        tesburnout: "-",
    },
    {
        id: 14,
        namadepan: "Akhil",
        namabelakang: "Gautam",
        tesdepresi: 100,
        tesstress: 100,
        tesbunuhdiri: 80,
        tescemas: 120,
        teskepribadian: 2,
        tesburnout: "-",
    },
    {
        id: 15,
        namadepan: "Rafi",
        namabelakang: "Ramadhan",
        tesdepresi: 120,
        tesstress: 50,
        tesbunuhdiri: 20,
        tescemas: 150,
        teskepribadian: "-",
        tesburnout: "-",
    },
    {
        id: 16,
        namadepan: "Akhil",
        namabelakang: "Gautam",
        tesdepresi: 100,
        tesstress: 100,
        tesbunuhdiri: 80,
        tescemas: 120,
        teskepribadian: 2,
        tesburnout: "-",
    },
    {
        id: 17,
        namadepan: "Akhil",
        namabelakang: "Gautam",
        tesdepresi: 100,
        tesstress: 100,
        tesbunuhdiri: 80,
        tescemas: 120,
        teskepribadian: 2,
        tesburnout: "-",
    },
];

const TableList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredUser, setFilteredMessages] = useState(userData);
    const itemsPerPage = 16;

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

    useEffect(() => {
        const filtered = userData.filter((data) =>
            data.namadepan.toLowerCase().includes(searchQuery.toLowerCase()) ||
            data.namabelakang.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredMessages(filtered);
    }, [searchQuery]);

    return (
        <div className="relative overflow-x-auto">
            <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
            <label htmlFor="table-search" className="sr-only">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
                </div>
                <input type="text" id="table-search" className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search for items" 
                onChange={(e) => setSearchQuery(e.target.value)}/>
            </div>
            </div>
            <table className="w-full text-sm text-center rtl:text-right text-gray-500">
                <thead className="text-xs text-white uppercase bg-gradient-to-r from-[#91C8E4] to-[#4682A9]">
                    <tr>
                    <th scope="col" className="p-4">
                        <div className="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" />
                        <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                        </div>
                    </th>
                    <th scope="col" className="px-6 py-3">
                        User
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Tes Depresi
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Tes Stress
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Tes Bunuh Diri
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Tes Cemas
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Tes Kepribadian
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Tes Burnout
                    </th>
                    </tr>
                </thead>
                <tbody>
                {filteredUser.map((user) => (
                    <tr key={user.id} className="bg-white border-b hover:bg-gray-50">
                    <td className="w-4 p-4">
                        <div className="flex items-center">
                        <input
                            id={`checkbox-table-${user.id}`}
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                        />
                        <label htmlFor={`checkbox-table-${user.id}`} className="sr-only">
                            checkbox
                        </label>
                        </div>
                    </td>
                    <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                        {`${user.namadepan} ${user.namabelakang}`}
                    </th>
                    <td className="px-6 py-4">{user.tesdepresi}</td>
                    <td className="px-6 py-4">{user.tesstress}</td>
                    <td className="px-6 py-4">{user.tesbunuhdiri}</td>
                    <td className="px-6 py-4">{user.tescemas}</td>
                    <td className="px-6 py-4">{user.teskepribadian}</td>
                    <td className="px-6 py-4">{user.tesburnout}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div class="flex flex-col items-center border-t bg-white px-5 py-2 sm:flex-row sm:justify-between">
                <span class="text-xs text-gray-600 sm:text-sm">
                    Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredUser.length)} of {userData.length} Entries
                </span>
                <div class="inline-flex sm:mt-0">
                    <button
                        onClick={handlePrevPage}
                        class="mr-2 h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-violet-500 hover:text-white"
                    >
                        Prev
                    </button>
                    <button
                        onClick={handleNextPage}
                        class="h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-violet-500 hover:text-white"
                    >
                        Next
                    </button>
                </div>
            </div>
      </div>
    );
};

export default TableList;