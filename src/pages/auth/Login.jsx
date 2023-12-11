import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [success, setSuccess] = useState('');
    const history = useHistory();

    const userLogin = async (e) => {
        try {
            e.preventDefault();
            
            const response = await axios.post("http://195.35.8.190:4000/api/login", {
                email: email,
                password: password
            })

            if(response) setSuccess(response.data.msg);
            
            const { data } = response.data;
            
            const localStorageKey = 'UserKey';
            
            localStorage.setItem(localStorageKey, data.id);

            setTimeout(() => { history.push("/Home"); }, 1000);

        } catch (error) {
            alert(error.response.data.msg);
        }
    }

    useEffect(() => {
        if(localStorage.getItem('UserKey')) {
            history.push('/home');
        }
    })

    useEffect(() => {
        const storedEmail = localStorage.getItem('rememberedEmail');
        if (storedEmail) {
            setEmail(storedEmail);
            setRememberMe(true);
        }
    }, []);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleRememberMeChange = (e) => {
        const checked = e.target.checked;
        setRememberMe(checked);
    
        // Store or remove email in localStorage based on the "Remember Me" checkbox
        try {
            if (checked) {
                localStorage.setItem('rememberedEmail', email);
            } else {
                localStorage.removeItem('rememberedEmail');
            }
        } catch (error) {
            console.error('LocalStorage Error:', error);
        }
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
                            Sign in to your account
                        </h1>
                        <p className='text-green-500 text-center'>{success}</p>
                        <form class="space-y-4 md:space-y-6 text-left" action="#" onSubmit={userLogin}>
                            <div>
                                <label htmlFor="email" class="block mb-2 text-sm font-medium text-black">Your email</label>
                                <input type="email" name="email" id="email" value={email}
                                onChange={handleEmailChange} class="bg-gray-50 border-gray-300 text-black sm:text-sm rounded-3xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@company.com" required=""/>
                            </div>
                            <div>
                                <label for="password" class="block mb-2 text-sm font-medium text-black">Password</label>
                                <input type="password" name="password" id="password" value={password}
                                onChange={handlePasswordChange} placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-3xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required=""/>
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex items-start">
                                    <div class="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-violet-300 rounded bg-gray-50 focus:ring-3 focus:ring-violet-300" required=""
                                        onChange={handleRememberMeChange}/>
                                    </div>
                                    <div class="ml-3 text-sm">
                                        <label for="remember" class="text-gray-500">Remember me</label>
                                    </div>
                                </div>
                                <a href="#" class="text-sm font-medium text-violet-600 hover:underline">Forgot password?</a>
                            </div>
                            <button type="submit" class="w-full text-white bg-violet-600 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-3xl text-sm px-5 py-2.5 text-center">Sign in</button>
                            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet? <Link to="/Register" class="font-medium text-violet-600 hover:underline">Sign up</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
            </section>
      )
}

export default Login;