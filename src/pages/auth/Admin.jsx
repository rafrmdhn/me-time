import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

const AdminAuth = () => {
    const history = useHistory();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        if(localStorage.getItem('AdminKey')) {
            history.push('/admin/Login');
        }
    },[history]);

    const adminLogin = async (e) => {
        try {
            e.preventDefault();
            
            const response = await axios.post("http://195.35.8.190:4000/api/admin/login", {
                username: username,
                password: password
            })

            if(response) setSuccess(response.data.msg);
            
            const { data } = response.data;
            
            const localStorageKey = 'AdminKey';
            
            localStorage.setItem(localStorageKey, data.id);

            setTimeout(() => { history.push("/admin/Dashboard"); }, 1000);

        } catch (error) {
            alert(error.response.data.msg);
        }
    }

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    return (
        <section class="bg-[#F6F4EB] min-h-screen flex items-center justify-center">
            <div class="flex flex-col items-center justify-center w-full max-w-md p-6 sm:p-8">
                <Link to="/Home" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 text-black">
                    <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>
                    MeTime    
                </Link>
                <div class="w-full bg-white rounded-3xl shadow border md:mt-0 sm:max-w-md xl:p-0 ">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-black">
                            Sign in Admin
                        </h1>
                        <p className='text-green-500 text-center'>{success}</p>
                        <form class="space-y-4 md:space-y-6 text-left" action="#" onSubmit={adminLogin}>
                            <div>
                                <label htmlFor="text" class="block mb-2 text-sm font-medium text-black">Username</label>
                                <input type="text" name="text" id="text" value={username}
                                onChange={handleUsernameChange} class="bg-gray-50 border-gray-300 text-black sm:text-sm rounded-3xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Username" required=""/>
                            </div>
                            <div>
                                <label for="password" class="block mb-2 text-sm font-medium text-black">Password</label>
                                <input type="password" name="password" id="password" value={password}
                                onChange={handlePasswordChange} placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-3xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required=""/>
                            </div>
                            <button type="submit" class="w-full text-white bg-violet-600 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-3xl text-sm px-5 py-2.5 text-center">Sign in</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default AdminAuth;