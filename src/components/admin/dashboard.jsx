import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from "axios";

const Dashboard = () => {
    const history = useHistory();

    const [tesDepresiCount, setTesDepresiCount] = useState('');
    const [tesStressCount, setTesStressCount] = useState('');
    const [tesBunuhDiriCount, setTesBunuhDiriCount] = useState('');
    const [tesCemasCount, setTesCemasCount] = useState('');
    const [tesKepribadianCount, setTesKepribadianCount] = useState('');
    const [tesBurnOutCount, setTesBurnOutCount] = useState('');

    const [tesDepresiAvg, setTesDepresiAvg ] = useState('');
    const [tesStressAvg, setTesStressAvg ] = useState('');
    const [tesBunuhDiriAvg, setTesBunuhDiriAvg ] = useState('');
    const [tesCemasAvg, setTesCemasAvg ] = useState('');
    const [tesKepribadianAvg, setTesKepribadianAvg ] = useState('');
    const [tesBurnOutAvg, setTesBurnOutAvg ] = useState('');

    const [newClientsCount, setNewClientsCount] = useState('');
    const [yesterdayNewClientsCount, setYesterdayNewClientsCount] = useState('');

    const [todayUsersCount, setTodayUsersCount] = useState('');
    const [lastMonthUsersCount, setLastMonthUsersCount] = useState('');

    const [totalCount, setTotalCount] = useState('');

    useEffect(() => {
        const localStorageKey = localStorage.getItem('AdminKey');
        if (!localStorageKey) {
            history.push('/admin/Login');
        }
    }, [history]);

    const fetchUserData = async () => {
        try {
            const usersResponse = await axios.get("http://195.35.8.190:4000/api/users");
            const users = usersResponse.data.data;

            setTodayUsersCount(users.length);

            const todayRegisteredUsers = users.filter(user => {
                const userCreatedAt = new Date(user.createdAt).toLocaleDateString();
                const todayDate = new Date().toLocaleDateString();
                return userCreatedAt === todayDate;
            });

            setNewClientsCount(todayRegisteredUsers.length);

            const lastMonthUsers = users.filter(user => {
                const lastMonth = new Date();
                lastMonth.setMonth(lastMonth.getMonth() - 1);
                const userCreatedAt = new Date(user.createdAt);
                return (
                    lastMonth.getMonth() === userCreatedAt.getMonth() &&
                    lastMonth.getFullYear() === userCreatedAt.getFullYear()
                );
            });

            setLastMonthUsersCount(lastMonthUsers.length);
        } catch (error) {
            alert(error);
        }
    };

    const fetchYesterdayUserData = async () => {
        try {
            // Fetch users from yesterday (modify the API endpoint accordingly)
            const yesterdayUsersResponse = await axios.get("http://195.35.8.190:4000/api/users"); // Modify the endpoint
            const yesterdayUsers = yesterdayUsersResponse.data.data;

            // Filter users who registered yesterday
            const yesterdayRegisteredUsers = yesterdayUsers.filter(user => {
                const userCreatedAt = new Date(user.createdAt).toLocaleDateString();
                const yesterdayDate = new Date(Date.now() - 86400000).toLocaleDateString(); // 86400000 milliseconds = 1 day
                return userCreatedAt === yesterdayDate;
            });

            setYesterdayNewClientsCount(yesterdayRegisteredUsers.length);
        } catch (error) {
            alert(error);
        }
    };

    const countData = async () => {
        try {
            const todayEndpoints = [
                "http://195.35.8.190:4000/api/test/depresi",
                "http://195.35.8.190:4000/api/test/stress",
                "http://195.35.8.190:4000/api/test/bunuhDiri",
                "http://195.35.8.190:4000/api/test/cemas",
                "http://195.35.8.190:4000/api/test/kepribadian",
                "http://195.35.8.190:4000/api/test/burnout",
            ];

            const todayResponses = await Promise.all(todayEndpoints.map(endpoint => axios.get(endpoint)));

            const todayTotalCount = todayResponses.reduce((sum, response) => sum + response.data.count, 0);

            const yesterdayEndpoints = [
                
            ];

            const yesterdayResponses = await Promise.all(yesterdayEndpoints.map(endpoint => axios.get(endpoint)));

            const yesterdayTotalCount = yesterdayResponses.reduce((sum, response) => sum + response.data.count, 0);

            setTotalCount(todayTotalCount);
        } catch (error) {
            alert(error);
        }
    };

    useEffect(() => {
        fetchUserData();
        fetchYesterdayUserData();
        countData();
    }, []);

    const calculatePercentageChange = () => {
        if (lastMonthUsersCount === 0) {
            return 0 + "%";
        }
    
        const percentageChange = ((todayUsersCount - lastMonthUsersCount) / lastMonthUsersCount) * 100;
        return percentageChange.toFixed(2) + "%";
    };

    const yesterdaycPrecentageChange = () => {
        if (yesterdayNewClientsCount === 0) {
            return 0; // Handle division by zero
        }

        const precentageChange = ((newClientsCount - yesterdayNewClientsCount) / yesterdayNewClientsCount) * 100;
        return precentageChange.toFixed(2) + "%";
    };

    const fetchData = async () => {
        try {
            const tesDepresiResponse = await axios.get("http://195.35.8.190:4000/api/test/depresi");
            setTesDepresiCount(tesDepresiResponse.data.count);

            const tesStressResponse = await axios.get("http://195.35.8.190:4000/api/test/stress");
            setTesStressCount(tesStressResponse.data.count);

            const tesBunuhDiriResponse = await axios.get("http://195.35.8.190:4000/api/test/bunuhDiri");
            setTesBunuhDiriCount(tesBunuhDiriResponse.data.count);

            const tesCemasResponse = await axios.get("http://195.35.8.190:4000/api/test/cemas");
            setTesCemasCount(tesCemasResponse.data.count);

            const tesKepribadianResponse = await axios.get("http://195.35.8.190:4000/api/test/kepribadian");
            setTesKepribadianCount(tesKepribadianResponse.data.count);

            const tesBurnOutResponse = await axios.get("http://195.35.8.190:4000/api/test/burnout");
            setTesBurnOutCount(tesBurnOutResponse.data.count);

            const tesDepresiRata = await axios.get("http://195.35.8.190:4000/api/rata/depresi");
            setTesDepresiAvg(tesDepresiRata.data._avg.tesdepresi);

            const tesStressRata = await axios.get("http://195.35.8.190:4000/api/rata/stress");
            setTesStressAvg(tesStressRata.data._avg.tesstress);

            const tesBunuhDiriRata = await axios.get("http://195.35.8.190:4000/api/rata/bunuhDiri");
            setTesBunuhDiriAvg(tesBunuhDiriRata.data._avg.tesbunuhdiri);

            const tesCemasRata = await axios.get("http://195.35.8.190:4000/api/rata/cemas");
            setTesCemasAvg(tesCemasRata.data._avg.tescemas);

            const tesKepribadianRata = await axios.get("http://195.35.8.190:4000/api/rata/kepribadian");
            setTesKepribadianAvg(tesKepribadianRata.data._avg.teskepribadian);

            const tesBurnOutRata = await axios.get("http://195.35.8.190:4000/api/rata/burnout");
            setTesBurnOutAvg(tesBurnOutRata.data._avg.tesburnout);
        } catch (error) {
            alert(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="mt-12">
            <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
                <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                    <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-pink-600 to-pink-400 text-white shadow-pink-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-6 h-6 text-white">
                            <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd"></path>
                        </svg>
                    </div>
                    <div className="p-4 text-right">
                        <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Pengguna Saat Ini</p>
                        <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">{todayUsersCount}</h4>
                    </div>
                    <div className="border-t border-blue-gray-50 p-4">
                        <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                            <strong class="text-green-500">{calculatePercentageChange()}</strong>&nbsp;dibandingkan bulan lalu
                        </p>
                    </div>
                </div>
                <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                    <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-green-600 to-green-400 text-white shadow-green-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-6 h-6 text-white">
                            <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z"></path>
                        </svg>
                    </div>
                    <div className="p-4 text-right">
                        <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Pengguna Baru</p>
                        <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">{newClientsCount}</h4>
                    </div>
                    <div className="border-t border-blue-gray-50 p-4">
                        <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                            <strong class="text-green-500">{yesterdaycPrecentageChange()}</strong>&nbsp;dibandingkan kemarin
                        </p>
                    </div>
                </div>
                <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                    <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-orange-600 to-orange-400 text-white shadow-orange-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-6 h-6 text-white">
                            <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z"></path>
                        </svg>
                    </div>
                    <div className="p-4 text-right">
                        <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Pengalaman</p>
                        <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">{totalCount}</h4>
                    </div>
                    <div className="border-t border-blue-gray-50 p-4">
                        <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                            <strong className="text-green-500">+100%</strong>&nbsp;dibandingkan kemarin
                        </p>
                    </div>
                </div>
            </div>
                        
            <div className="mb-4 grid grid-cols-1 gap-4 xl:grid-cols-3">
                <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden xl:col-span-2">
                    <div className="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 flex items-center justify-between p-6">
                        <div>
                            <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-1">Data Tes</h6>
                        </div>
                    </div>
                    <div className="p-6 overflow-x-scroll px-0 pt-0 pb-2">
                        <table className="w-full min-w-[640px] table-auto">
                            <thead>
                                <tr>
                                    <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                                        <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">jenis tes</p>
                                    </th>
                                    <th className="border-b border-blue-gray-50 py-3 px-6 text-center">
                                        <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">total</p>
                                    </th>
                                    <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                                        <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">rata-rata</p>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="py-3 px-5 border-b border-blue-gray-50">
                                        <div className="flex items-center gap-4">
                                            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">Tes Depresi</p>
                                        </div>
                                    </td>
                                    
                                    <td className="py-3 px-5 border-b border-blue-gray-50">
                                        <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">{tesDepresiCount}</p>
                                    </td>
                                    <td className="py-3 px-5 border-b border-blue-gray-50">
                                        <div className="w-10/12">
                                            <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">{tesDepresiAvg}%</p>
                                            <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                                                <div
                                                    className="flex justify-center items-center h-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white"
                                                    style={{ width: `${tesDepresiAvg}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="py-3 px-5 border-b border-blue-gray-50">
                                        <div className="flex items-center gap-4">
                                            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">Tes Cemas</p>
                                        </div>
                                    </td>
                                    <td className="py-3 px-5 border-b border-blue-gray-50">
                                        <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">{tesCemasCount}</p>
                                    </td>
                                    <td className="py-3 px-5 border-b border-blue-gray-50">
                                        <div className="w-10/12">
                                            <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">{tesCemasAvg}%</p>
                                            <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                                                <div
                                                    className="flex justify-center items-center h-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white"
                                                    style={{ width: `${tesCemasAvg}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="py-3 px-5 border-b border-blue-gray-50">
                                        <div className="flex items-center gap-4">
                                            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">Tes Bunuh Diri</p>
                                        </div>
                                    </td>
                                    <td className="py-3 px-5 border-b border-blue-gray-50">
                                        <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">{tesBunuhDiriCount}</p>
                                    </td>
                                    <td className="py-3 px-5 border-b border-blue-gray-50">
                                        <div className="w-10/12">
                                            <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">{tesBunuhDiriAvg}%</p>
                                            <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                                                <div
                                                    className="flex justify-center items-center h-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white"
                                                    style={{ width: `${tesBunuhDiriAvg}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="py-3 px-5 border-b border-blue-gray-50">
                                        <div className="flex items-center gap-4">
                                            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">Tes Stress</p>
                                        </div>
                                    </td>
                                    <td className="py-3 px-5 border-b border-blue-gray-50">
                                        <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">{tesStressCount}</p>
                                    </td>
                                    <td className="py-3 px-5 border-b border-blue-gray-50">
                                        <div className="w-10/12">
                                            <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">{tesStressAvg}%</p>
                                            <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                                                <div
                                                    className="flex justify-center items-center h-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white"
                                                    style={{ width: `${tesStressAvg}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="py-3 px-5 border-b border-blue-gray-50">
                                        <div className="flex items-center gap-4">
                                            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">Tes Kepribadian</p>
                                        </div>
                                    </td>
                                    <td className="py-3 px-5 border-b border-blue-gray-50">
                                        <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">{tesKepribadianCount}</p>
                                    </td>
                                    <td className="py-3 px-5 border-b border-blue-gray-50">
                                        <div className="w-10/12">
                                            <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">{tesKepribadianAvg}%</p>
                                            <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                                                <div
                                                    className="flex justify-center items-center h-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white"
                                                    style={{ width: `${tesKepribadianAvg}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="py-3 px-5 border-b border-blue-gray-50">
                                        <div className="flex items-center gap-4">
                                            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">Tes Burnout</p>
                                        </div>
                                    </td>
                                    <td className="py-3 px-5 border-b border-blue-gray-50">
                                        <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">{tesBurnOutCount}</p>
                                    </td>
                                    <td className="py-3 px-5 border-b border-blue-gray-50">
                                        <div className="w-10/12">
                                            <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">{tesBurnOutAvg}%</p>
                                            <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                                                <div
                                                    className="flex justify-center items-center h-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white"
                                                    style={{ width: `${tesBurnOutAvg}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;