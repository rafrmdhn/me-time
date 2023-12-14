import React, { useEffect, useState } from "react";
import axios from "axios";

const User = () => {
    const [todayUsersCount, setTodayUsersCount] = useState('');
    const [totalCount, setTotalCount] = useState('');

    const countData = async () => {
        try {
            const apiEndpoints = [
                "http://195.35.8.190:4000/api/test/depresi",
                "http://195.35.8.190:4000/api/test/stress",
                "http://195.35.8.190:4000/api/test/bunuhDiri",
                "http://195.35.8.190:4000/api/test/cemas",
                "http://195.35.8.190:4000/api/test/kepribadian",
                "http://195.35.8.190:4000/api/test/burnout",
            ];

            const responses = await Promise.all(apiEndpoints.map(endpoint => axios.get(endpoint)));

            const totalCount = responses.reduce((sum, response) => sum + response.data.count, 0);

            setTotalCount(totalCount);
        } catch (error) {
            alert(error);
        }
    };

    const fetchUserData = async () => {
        try {
            const usersResponse = await axios.get("http://195.35.8.190:4000/api/users");
            const users = usersResponse.data.data;

            setTodayUsersCount(users.length);
        } catch (error) {
            alert(error);
        }
    };

    useEffect(() => {
        countData();
        fetchUserData();
    }, []);

    return (
        <div className="bg-gradient-to-r from-[#91C8E4] to-[#4682A9] py-5">
            <div className="container mx-auto flex md:flex-row justify-evenly">
                <div className="text-center">
                    <h1 className="text-xs md:text-sm mb-2 text-white">Experienced</h1>
                    <h1 className="text-3xl md:text-5xl font-medium text-white">{totalCount}+</h1>
                </div>
                <div className="text-center">
                    <h1 className="text-xs md:text-sm mb-2 text-white">Teams</h1>
                    <h1 className="text-3xl md:text-5xl font-medium text-white">5</h1>
                </div>
                <div className="text-center">
                    <h1 className="text-xs md:text-sm mb-2 text-white">Client</h1>
                    <h1 className="text-3xl md:text-5xl font-medium text-white">{todayUsersCount}+</h1>
                </div>
            </div>
        </div>
    );
};

export default User;