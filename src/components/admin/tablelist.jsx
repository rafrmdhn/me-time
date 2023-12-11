import React, { useState, useEffect } from "react";
import axios from "axios";

const TableList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredUser, setFilteredUser] = useState([]);
    const [selectAll, setSelectAll] = useState(false);
    const [selectedRows, setSelectedRows] = useState([]);
    const [userData, setUserData] = useState([]);
    const itemsPerPage = 16;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const fetchData = async () => {
        try {
            const userResponse = await axios.get("http://195.35.8.190:4000/api/users");
            const users = userResponse.data.data;

            const formattedData = users.map((item) => ({
                id: item.id,
                firstName: item.firstName,
                lastName: item.lastName,
                tesdepresi: item.tesdepresi,
                tesstress: item.tesstress,
                tesbunuhdiri: item.tesbunuhdiri,
                tescemas: item.tescemas,
                teskepribadian: item.teskepribadian,
                tesburnout: item.tesburnout,
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

    const handleSelectAll = (event) => {
        const isChecked = event.target.checked;
        setSelectAll(isChecked);
        setSelectedRows(isChecked ? filteredUser.map(user => user.id) : []);
    };
    
    const handleRowCheckboxChange = (event, userId) => {
        const isChecked = event.target.checked;
        setSelectedRows(prevSelectedRows => {
          if (isChecked) {
            return [...prevSelectedRows, userId];
          } else {
            return prevSelectedRows.filter(id => id !== userId);
          }
        });
    };

    const handleDelete = () => {
        const updatedData = userData.filter(
            (user) => !selectedRows.includes(user.id)
        );
        setFilteredUser(updatedData);
        setSelectedRows([]);
    };

    useEffect(() => {
        const filtered = userData.filter((data) =>
            data.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            data.lastName.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredUser(filtered);
    }, [searchQuery]);

    return (
        <div className="relative overflow-x-auto">
            <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
            <label htmlFor="table-search" className="sr-only">Search</label>
            <div className="flex justify-between items-center w-full relative">
                <div className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
                </div>
                <input type="text" id="table-search" className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search for items" 
                onChange={(e) => setSearchQuery(e.target.value)}/>
                <div>
                    <button className="w-6 h-6 "
                    onClick={handleDelete}
                    disabled={selectedRows.length === 0}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>
                </div>
            </div>
            </div>
            <table className="w-full text-sm text-center rtl:text-right text-gray-500">
                <thead className="text-xs text-white uppercase bg-gradient-to-r from-[#91C8E4] to-[#4682A9]">
                    <tr>
                    <th scope="col" className="p-4">
                        <div className="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" 
                        checked={selectAll}
                        onChange={handleSelectAll}
                        />
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
                {filteredUser.slice(indexOfFirstItem, indexOfLastItem).map((user) => (
                    <tr key={user.id} className="bg-white border-b hover:bg-gray-50">
                    <td className="w-4 p-4">
                        <div className="flex items-center">
                        <input
                            id={`checkbox-table-${user.id}`}
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                            checked={selectedRows.includes(user.id)}
                            onChange={(e) => handleRowCheckboxChange(e, user.id)}
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
                        {`${user.firstName} ${user.lastName}`}
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